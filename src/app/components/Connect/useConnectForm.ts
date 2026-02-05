import { useEffect, useState } from 'react'

export type FormStatus =
  | { state: 'pristine' }
  | { state: 'submitting' }
  | { state: 'submitted'; message: string }
  | { state: 'failed'; error: string }

export interface FormData {
  name: string
  email: string
  message: string
}

export const useConnectForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<FormStatus>({ state: 'pristine' })

  // Cleanup setTimeout to prevent memory leaks
  useEffect(() => {
    if (status.state === 'submitted' || status.state === 'failed') {
      const timer = setTimeout(() => {
        setStatus({ state: 'pristine' })
      }, 3000)

      // Cleanup: clear timeout if component unmounts or status changes
      return () => clearTimeout(timer)
    }
  }, [status.state])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus({ state: 'submitting' })

    try {
      const response = await fetch('/api/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error('Server error')

      setStatus({
        state: 'submitted',
        message: 'Message sent successfully.',
      })

      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({
        state: 'failed',
        error: 'Something went wrong. Please try again.',
      })
    }
  }

  return {
    formData,
    status,
    handleChange,
    handleSubmit,
  }
}
