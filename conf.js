exports.config = {

  specs: [
    'features/*.feature'
  ],

  capabilities: {
    'browserName': 'phantomjs'
  },

  framework: 'cucumber',
  restartBrowserBetweenTests: 'true'

};