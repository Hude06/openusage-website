const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

module.exports = createJestConfig({
  testEnvironment: 'jsdom',
  setupFilesAfterFramework: [],
  setupFilesAfterFramework: [],
  setupFiles: [],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    'framer-motion': '<rootDir>/__mocks__/framer-motion.js',
  },
  testPathPattern: '/__tests__/',
})
