const { defineConfig } = require('cypress');

module.exports = defineConfig({
  env: {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
  },
  
});
