module.exports = {
  source: ["src/data/tokens.json"],
  platforms: {
    cjs: {
      transformGroup: "js",
      buildPath: "build/cjs/",
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
      buildPath: "build/esm/",
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
    //   buildPath: "build/js/",
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
      buildPath: "build/scss/",
      files: [
        {
          destination: "index.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "build/css/",
      files: [
        {
          destination: "index.css",
          format: "css/variables",
        },
      ],
    },
    android: {
      transformGroup: "android",
      buildPath: "build/android/",
      files: [],
    },
    ios: {
      transformGroup: "ios",
      buildPath: "build/ios/",
      files: [],
    },
    "ios-swift": {
      transformGroup: "ios-swift",
      buildPath: "build/ios-swift/",
      files: [],
    },
    "ios-swift-separate-enums": {
      transformGroup: "ios-swift-separate",
      buildPath: "build/ios-swift/",
      files: [],
    },
  },
};
