// jest.config.js
module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/jest/fileMock.js",
    "\\.(css|sass)$": "<rootDir>/jest/styleMock.js",
    "^@ui(.*)$": "<rootDir>/ui$1"
  },
  globals: {
    'ts-jest': {
      isolatedModules: true,
    }
  },
  setupFilesAfterEnv: [
    './enzyme.setup.js',
    './ui/testing/mock/windowElements.js'
  ],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
