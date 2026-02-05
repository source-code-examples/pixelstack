import type { Config } from 'jest'
import nextJest from 'next/jest.js'

// Next.js setup for Jest
const createJestConfig = nextJest({
  dir: './',
})

// Jest configuration
const config: Config = {
  // Use jsdom (simulates a browser environment)
  testEnvironment: 'jsdom',

  // Setup file
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  // Path aliases (same as in tsconfig.json)
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },

  // Where are the tests? (only inside the tests/ folder)
  testMatch: ['<rootDir>/tests/**/*.test.ts', '<rootDir>/tests/**/*.test.tsx'],

  // Coverage: what should be measured?
  collectCoverageFrom: [
    'src/**/*.{ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/__tests__/**',
  ],
}

export default createJestConfig(config)
