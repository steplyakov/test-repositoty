exports.config = {

  specs: [
    'features/*.feature'
  ],

  capabilities: {
    'browserName': 'phantomjs'
  },

  baseUrl: 'http://localhost:8081/',

  framework: 'cucumber',

};