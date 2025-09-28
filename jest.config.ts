import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleFileExtensions: ["ts", "js", "json"],
  roots: ["<rootDir>/src"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
};

export default config;
