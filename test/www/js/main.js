require.config({
  baseUrl: 'js/lib',
  paths: {
    'test': '../../..',
    'mocha': 'mocha/mocha',
    'chai': 'chai/chai'
  },
  packages: [
    { name: 'selector', location: '../../../..', main: 'selector' }
  ],
  shim: {
    'mocha': {
      exports: 'mocha'
    }
  }
});

require(['../suite']);
