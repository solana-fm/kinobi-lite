/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    //   verbose: true,
    preset: "ts-jest/presets/default-esm",
    extensionsToTreatAsEsm: [".ts"],
    moduleNameMapper: {
      "^(\\.{1,2}/.*)\\.js$": "$1",
    },
    testEnvironment: "node",
    transform: {
      "^.+\\.ts?$": ["ts-jest", { useESM: true }],
    },
  };
  