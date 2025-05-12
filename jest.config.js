// // jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },  
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);






// // jest.config.js
// const nextJest = require('next/jest');

// const createJestConfig = nextJest({
//   dir: './',
// });

// const customJestConfig = {
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   testEnvironment: 'jsdom',
//   moduleNameMapper: {
//     '^@/(.*)$': '<rootDir>/$1',
//   },
// };

// module.exports = createJestConfig(customJestConfig);