/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.(t|j)sx?$": "ts-jest"
  },
  testRegex: "(/tests/.*|(\\.|/)(test|spec))\\.[jt]sx?$",
  moduleFileExtensions: [ "ts", "tsx", "js", "jsx", "json", "node" ],
  collectCoverage: true
};