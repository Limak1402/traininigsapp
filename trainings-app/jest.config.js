const module = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.ts?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
  };

  export default module;