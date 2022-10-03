module.exports = {
  source: ["src/data/token/tokens.json"],
  platforms: {
    cjs: {
      transformGroup: "js",
      buildPath: "src/data/token/build/cjs/",
      files: [
        {
          destination: "index.js",
          format: "javascript/es6",
        },
        {
          destination: "index.d.ts",
          format: "typescript/es6-declarations",
        },
      ],
    },
    esm: {
      transformGroup: "js",
      buildPath: "src/data/token/build/esm/",
      files: [
        {
          destination: "index.js",
          format: "javascript/module",
        },
        {
          destination: "index.d.ts",
          format: "typescript/module-declarations",
        },
      ],
    },
    // ts: {
    //   transformGroup: "js",
    //   buildPath: "src/data/token/build/js/",
    //   files: [
    //     {
    //       destination: "index.d.ts",
    //       // format: "typescript/es6-declarations",
    //       format: "typescript/module-declarations",
    //     },
    //   ],
    // },
    scss: {
      transformGroup: "scss",
      buildPath: "src/data/token/build/scss/",
      files: [
        {
          destination: "index.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "src/data/token/build/css/",
      files: [
        {
          destination: "index.css",
          format: "css/variables",
        },
      ],
    },
    android: {
      transformGroup: "android",
      buildPath: "src/data/token/build/android/",
      files: [],
    },
    ios: {
      transformGroup: "ios",
      buildPath: "src/data/token/build/ios/",
      files: [],
    },
    "ios-swift": {
      transformGroup: "ios-swift",
      buildPath: "src/data/token/build/ios-swift/",
      files: [],
    },
    "ios-swift-separate-enums": {
      transformGroup: "ios-swift-separate",
      buildPath: "src/data/token/build/ios-swift/",
      files: [],
    },
  },
};
