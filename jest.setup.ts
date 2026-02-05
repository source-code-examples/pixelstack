/**
 * Jest Setup
 *
 * Runs before all tests.
 * Mocks browser APIs that do not exist in Node.js.
 */

import '@testing-library/jest-dom'
// Polyfill Web Fetch API for Next.js API route tests
import 'whatwg-fetch'

// Mock: window.matchMedia (for theme tests)
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})
