/** @type {import('jest').Config} */
const config = {
  roots: ["../src"],
  transform: {
    "\\.[jt]sx?$": "babel-jest",
  },
};

export default config;
