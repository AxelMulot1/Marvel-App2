module.exports = {
    testEnvironment: "jsdom",
    transform: {
      "^.+\\.jsx?$": "babel-jest",
    },
    collectCoverageFrom: [
      "src/**/*.{js,jsx}", // Collect coverage from all js or jsx files in src folder
      "!src/**/*.test.{js,jsx}", // Exclude test files from coverage
    ],
    testResultsProcessor: 'jest-sonar-reporter',
  };