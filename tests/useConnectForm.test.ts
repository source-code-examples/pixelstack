/**
 * Unit tests for the useConnectForm hook
 *
 * Tests the following functions: initialization, input changes, submission
 */

import { renderHook, act } from '@testing-library/react'
import { useConnectForm } from '@/app/components/Connect/useConnectForm'

// Mock fetch (so no real API calls are made)
global.fetch = jest.fn()

describe('useConnectForm Hook', () => {
  beforeEach(() => {
    // Before each test: reset mocks
    jest.clearAllMocks()
  })

  // TEST 1: Hook starts with empty fields
  test('starts with an empty form', () => {
    const { result } = renderHook(() => useConnectForm())

    // Check: all fields are empty
    expect(result.current.formData.name).toBe('')
    expect(result.current.formData.email).toBe('')
    expect(result.current.formData.message).toBe('')
  })

  // TEST 2: Name field can be changed
  test('can change name', () => {
    const { result } = renderHook(() => useConnectForm())

    // Simulate: user types "Max" into the name field
    act(() => {
      result.current.handleChange({
        target: { name: 'name', value: 'Max' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    // Check: name is now "Max"
    expect(result.current.formData.name).toBe('Max')
  })

  // TEST 3: Email field can be changed
  test('can change email', () => {
    const { result } = renderHook(() => useConnectForm())

    // Simulate: user types an email
    act(() => {
      result.current.handleChange({
        target: { name: 'email', value: 'max@test.de' },
      } as React.ChangeEvent<HTMLInputElement>)
    })

    // Check: email was stored
    expect(result.current.formData.email).toBe('max@test.de')
  })

  // TEST 4: Form can be submitted
  test('can submit the form', async () => {
    const { result } = renderHook(() => useConnectForm())

    // Mock: API responds with "OK"
    const mockFetch = global.fetch as jest.Mock
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ message: 'Success' }),
    })

    // Submit form
    await act(async () => {
      await result.current.handleSubmit({
        preventDefault: jest.fn(),
      } as unknown as React.FormEvent<HTMLFormElement>)
    })

    // Check: fetch was called
    expect(mockFetch).toHaveBeenCalled()
  })
})
