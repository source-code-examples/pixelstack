/**
 * API tests for /api/connect
 *
 * Tests the following cases: success, empty fields, invalid email
 */

// Mock NextResponse.json so Jest doesn't crash
jest.mock('next/server', () => ({
  NextResponse: {
    json: (data: unknown, init?: Record<string, unknown>) => ({
      status: typeof init?.status === 'number' ? init.status : 200,
      json: async () => data,
    }),
  },
}))

import { POST } from '@/app/api/connect/route'
import { NextRequest } from 'next/server'

type ContactBody = {
  name: string
  email: string
  message: string
}

// Helper: creates a mock request
const createRequest = (body: ContactBody): NextRequest => {
  return {
    json: async () => body,
    headers: new Headers(),
  } as unknown as NextRequest
}

describe('Contact API', () => {
  // TEST 1: API accepts valid data
  test('accepts valid data', async () => {
    const validData = {
      name: 'Max Mustermann',
      email: 'max.mustermann@test-example.com',
      message: 'Hey hey! This is a test message.',
    }

    const request = createRequest(validData)
    const response = await POST(request)

    // Check: status 200 (= OK)
    expect(response.status).toBe(200)
  })

  // TEST 2: API rejects empty fields
  test('rejects empty fields', async () => {
    const emptyData = {
      name: '',
      email: '',
      message: '',
    }

    const request = createRequest(emptyData)
    const response = await POST(request)

    // Check: status 400 (= error)
    expect(response.status).toBe(400)
  })

  // TEST 3: API rejects invalid email
  test('rejects invalid email', async () => {
    const invalidEmail = {
      name: 'Max Mustermann',
      email: 'no-email',
      message: 'test-message',
    }

    const request = createRequest(invalidEmail)
    const response = await POST(request)

    // Check: status 400 (= error)
    expect(response.status).toBe(400)
  })
})
