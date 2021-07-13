import { compilerOptions } from './tsconfig.json';
import { pathsToModuleNameMapper } from 'ts-jest/utils';

export default {
  clearMocks: true,
  collectCoverageFrom: [
    "src/services/*.ts"
  ],
  coverageDirectory: "__tests__/coverage",
  coverageReporters: [
    "json",
    "lcov"
  ],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>' }),
  preset: 'ts-jest',
  testMatch: [
    "<rootDir>/src/__tests__/**/*.spec.ts"
  ],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  }
};