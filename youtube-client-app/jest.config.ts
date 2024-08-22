import type { Config } from 'jest';

const config: Config = {
  rootDir: './',
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(ts|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.html$',
      },
    ],
  },
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/src/$1',
    '^app/(.*)$': '<rootDir>/src/app/$1',
    '^environments/(.*)$': '<rootDir>/src/environments/$1',
  },
  testMatch: ['**/+(*.)+(spec).+(ts|js)?(x)'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: '<rootDir>/coverage/',
};

export default config;
