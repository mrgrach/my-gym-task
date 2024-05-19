const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://gymdesk.com/login",
    "viewportWidth": 1440,
    "viewportHeight": 900,
  },
});
