module.exports = {
  name: "sui-explorer-local",
  script: "serve",
  env: {
    PM2_SERVE_PATH: "node_modules/sui-explorer/apps/explorer/build/",
    PM2_SERVE_PORT: 9001,
    PM2_SERVE_SPA: "true",
  },
};
