module.exports = {
  // Setup the test environment to be jsdom
  testEnvironment: "jsdom",
  // Transform js and jsx files using babel-jest
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },

  // ignore e2e tests
  testPathIgnorePatterns: [
    "/e2e-tests/",
  ],
  
  // Configure the coverage report
  collectCoverageFrom: [
    // Collect coverage from all js or jsx files in src folder
    "src/**/*.{js,jsx}", 
    // Exclude test files from coverage
    "!src/**/*.test.{js,jsx}", 
    // Exclude main.jsx from coverage
    "!src/main.jsx",
    // Exclude App.jsx from coverage
    "!src/App.jsx", 
    // Exclude routes.jsx from coverage
    "!src/routes.jsx",
  ],
  
  // Setup the coverage report for SonarQube
  testResultsProcessor: 'jest-sonar-reporter',

  // use moduleNameMapper to mock d3
  moduleNameMapper: {
    "d3": "<rootDir>/node_modules/d3/dist/d3.min.js",
  }
};