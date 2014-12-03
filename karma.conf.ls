module.exports =
  (config) !->
    'use strict';
    config.set do
      preprocessors: do
        '**/*.ls': 'live'
      livePreprocessor: do
        # transforming the filenames
        transformPath: (path) ->
          path.replace /\.js$/ '.ls'
      basePath: ''
      frameworks: <[ mocha chai ]>
      files: <[ src/*.ls test/*.spec.ls ]>
      reporters: ['progress']
      port: 9876
      colors: true
      autoWatch: true
      singleRun: false
      # level of logging
      # possible values:
      # config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
      logLevel: config.LOG_INFO
      browsers: ['PhantomJS']
