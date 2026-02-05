import { useState } from 'react'

/**
 * Union type representing all possible states of the subscription form.
 */
export type MailStatus =
  | { state: 'pristine' }
  | { state: 'submitting' }
  | { state: 'submitted' }
  | { state: 'failed' }

/**
 * Custom hook that manages the subscription form state.
 */
export const useMailStatus = () => {
  const [status, setStatus] = useState<MailStatus>({ state: 'pristine' })

  const setSubmitting = () => setStatus({ state: 'submitting' })
  const setSubmitted = () => setStatus({ state: 'submitted' })
  const setFailed = () => setStatus({ state: 'failed' })
  const reset = () => setStatus({ state: 'pristine' })

  return {
    status,
    setSubmitting,
    setSubmitted,
    setFailed,
    reset,
  }
}
