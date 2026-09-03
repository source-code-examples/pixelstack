'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from '../../context/ThemeContext'
import Image from 'next/image'
import ThemeSwitchButton from './ThemeSwitchButton'
import MobileMenu from './MobileMenu'
import { FaRobot } from 'react-icons/fa6'
import { useState, useEffect } from 'react'
import { useAgent } from '@/app/hooks/useAgent'

const HeaderNav = () => {
  // Access the current theme from the custom ThemeContext
  const { theme } = useTheme()

  // State for mobile detection (iPhone screens)
  const [isMobile, setIsMobile] = useState(false)

  // Access agent messages for unread count
  const { messages } = useAgent()

  // Count unread assistant messages for badge
  const unreadCount = messages.filter((m) => m.role === 'assistant').length

  // Check if we're on a mobile device (iPhone screens < 640px)
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Handle opening the AI chat
  const handleOpenChat = () => {
    const chatEvent = new CustomEvent('openChat')
    window.dispatchEvent(chatEvent)
  }

  // Navigation items for both desktop and mobile menus
  const menuItems = [
    { label: 'Welcome', href: '/' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Posts', href: '/posts' },
    { label: 'Connect', href: '/connect' },
    { label: 'Profile', href: '/profile' },
  ]

  // Get the current route to highlight the active menu item
  const pathname = usePathname()

  return (
    // Sticky navigation bar with dynamic blur based on theme
    <nav
      className="dark:bg-primary/10 fixed z-50 w-full border-b border-gray-200 bg-white/80 shadow-sm transition-colors dark:border-cyan-900"
      style={{
        backdropFilter: theme === 'dark' ? 'blur(40px)' : 'blur(10px)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4">
        {/* Desktop navigation layout */}
        <div className="flex items-center justify-between">
          {/* Logo linking back to the homepage */}
          <Link href="/" className="text-xl font-bold text-cyan-500">
            <div className="relative h-24 w-32">
              <Image
                src="/logos/logo-4.png"
                alt="logo"
                fill
                sizes="auto"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop menu items (hidden on mobile) */}
          <ul className="hidden items-center space-x-8 md:flex">
            {menuItems.map((item) => {
              const isActive = item.href === pathname

              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-lg transition-colors hover:text-cyan-500 ${
                      isActive ? 'font-bold text-cyan-500' : 'font-semibold'
                    }`}
                    style={{
                      // Add subtle text shadow in dark mode for readability
                      textShadow: theme === 'dark' ? '1px 1px 0 black' : 'none',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}

            {/* Theme toggle button (light/dark mode) */}
            <ThemeSwitchButton />
          </ul>

          {/* Mobile right side icons (AI Chat + Theme toggle) */}
          <div className="flex items-center gap-2 md:hidden">
            {/* AI Chat Button - only on iPhone screens */}
            {isMobile && (
              <button
                onClick={handleOpenChat}
                className="relative flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium text-cyan-400 transition-colors hover:bg-cyan-500/10"
                aria-label="Open AI Chat"
              >
                <FaRobot className="text-xl" />
                {unreadCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white">
                    {unreadCount > 9 ? '9+' : unreadCount}
                  </span>
                )}
              </button>
            )}

            {/* Mobile Menu (Hamburger) */}
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default HeaderNav
