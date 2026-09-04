'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react'
import { useAgent, AgentMessage } from '@/app/hooks/useAgent'

interface AgentContextValue {
  // conversation state (from useAgent)
  messages: AgentMessage[]
  input: string
  setInput: (value: string) => void
  isLoading: boolean
  sendMessage: () => Promise<{ type: string; topic: string } | null>
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void
  addMessage: (role: 'user' | 'agent' | 'assistant', content: string) => void
  clearMessages: () => void

  // chat widget open/unread state — shared so any component (header,
  // mobile menu, floating widget) can read and control the same source
  // of truth instead of each keeping its own out-of-sync copy
  isOpen: boolean
  openChat: () => void
  closeChat: () => void
  unreadCount: number
  addUnread: (count?: number) => void
}

const AgentContext = createContext<AgentContextValue | null>(null)

export function AgentProvider({ children }: { children: ReactNode }) {
  const agent = useAgent()

  const [isOpen, setIsOpen] = useState(false)
  const [unreadCount, setUnreadCount] = useState(0)

  // opening the chat always clears the unread badge, wherever it's
  // triggered from (floating widget, mobile header button, etc.)
  const openChat = useCallback(() => {
    setIsOpen(true)
    setUnreadCount(0)
  }, [])

  const closeChat = useCallback(() => {
    setIsOpen(false)
  }, [])

  const addUnread = useCallback((count = 1) => {
    setUnreadCount((prev) => prev + count)
  }, [])

  return (
    <AgentContext.Provider
      value={{
        ...agent,
        isOpen,
        openChat,
        closeChat,
        unreadCount,
        addUnread,
      }}
    >
      {children}
    </AgentContext.Provider>
  )
}

// Access the shared agent state. Must be used within <AgentProvider>.
export function useAgentContext() {
  const ctx = useContext(AgentContext)
  if (!ctx) {
    throw new Error('useAgentContext must be used within an AgentProvider')
  }
  return ctx
}
