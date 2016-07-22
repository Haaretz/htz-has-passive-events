SystemJS.config({
  transpiler: "plugin-babel",
  packages: {
    "htz-has-passive-events": {
      "main": "index.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.12"
  },
  packages: {}
});
