module.exports = function (config) {
  'use strict';
  config.set({
    preprocessors: {
    '**/*.ls': 'live'
    },
    livePreprocessor: {
      // options passed to the live compiler
      options: {
        bare: true
      },
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.js$/, '.ls');
      }
    },
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [
        'src/*.js',
        'test/*.spec.js',
        'src/*.ls',
        'test/*.spec.ls'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    autoWatch: true,
    singleRun: false,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS']
  });
};
