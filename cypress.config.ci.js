const { defineConfig } = require('cypress');

module.exports = defineConfig({
    baseUrl: "http://165.227.93.41",
  env: {
    
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    
  }
});

console.log("USERNAME:", process.env.USERNAME);
console.log("PASSWORD:", process.env.PASSWORD);
