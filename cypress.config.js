const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    // To display small circular charts regarding test results
    charts: true,
    // Generate JSON file to create custom reports
    json: true,
    // Customize the directory in which reports are saved
    reportsDir: 'cypress/results/json',
    // Customize the report file name
    reportFilename: 'Report Test Run',
    // Generate new report file or overwrite the a single file
    overwrite: true,
  },
});
