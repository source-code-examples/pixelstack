import { NextResponse } from 'next/server'

interface ContactRequestBody {
  name: string
  email: string
  message: string
}

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Sanitization helper (basic HTML escaping)
function sanitizeString(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .trim()
}

export async function POST(request: Request) {
  try {
    // Parse the incoming JSON body and cast it to the expected interface
    const body = (await request.json()) as ContactRequestBody

    // Comprehensive validation to ensure all required fields are present
    if (!body.message || !body.name || !body.email) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 },
      )
    }

    // Validate email format
    if (!EMAIL_REGEX.test(body.email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 },
      )
    }

    // Validate field lengths
    if (body.name.length < 2 || body.name.length > 50) {
      return NextResponse.json(
        { message: 'Name must be between 2 and 50 characters' },
        { status: 400 },
      )
    }

    if (body.message.length < 20 || body.message.length > 300) {
      return NextResponse.json(
        { message: 'Message must be between 20 and 300 characters' },
        { status: 400 },
      )
    }

    // Sanitize inputs to prevent XSS
    const sanitizedData = {
      name: sanitizeString(body.name),
      email: sanitizeString(body.email),
      message: sanitizeString(body.message),
    }

    //  Only log in development: received contact message (for debugging or server logs)
    if (process.env.NODE_ENV === 'development') {
      console.log('Contact message received:', sanitizedData)
    }

    // Respond with a success message
    return NextResponse.json({ message: 'Message sent successfully' })
  } catch (error) {
    // Error logging
    if (process.env.NODE_ENV === 'development') {
      console.error('Contact form error:', error)
    }

    // Extract a readable error message
    const errorMessage =
      error instanceof Error ? error.message : 'An error occurred'

    // Return a server error response
    return NextResponse.json({ message: errorMessage }, { status: 500 })
  }
}
