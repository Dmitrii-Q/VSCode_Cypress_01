const { defineConfig } = require("cypress");

module.exports = {
  e2e: {
    baseUrl: "http://localhost:3000/",
    retries: 0,
    viewportWidth: 1366, // наиболее популярный размер экрана на ноутбуках
    viewportHeight: 768,
    browser: "chrome", 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  mobile: {
    baseUrl: "http://localhost:3000/",
    retries: 0,
    viewportWidth: 375, // наиболее популярный размер экрана на мобильных устройствах
    viewportHeight: 667,
    browser: "electron", 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
};

