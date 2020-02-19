module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"],
  snapshotSerializers: ["enzyme-to-json/serializer"]
};
