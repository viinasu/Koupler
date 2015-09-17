module.exports = function(config){

  config.set({

    basePath: '',

    frameworks: ['jasmine'],

    files: [
    'node_modules/angular/angular.min.js',
    'node_modules/angular-mocks/angular-mocks.js',

    //our app code
    'client/app/**/*.js',

    //our templates
    'client/app/**/*.html',

    //our spec files
    'specs/client/**/*.js',
    ],

    exclude: [
      'karma.conf.js'
    ],

    preprocessors: {
      // 'client/app/**/*.html': ['ng-html12js'],
      'client/app/**/*.js': ['coverage']
    },

    // ngHtml2JsPreprocessor: {
    //   stripPrefix: 'client/app/',
    //   moduleName: 'templates'
    // },

    reporters: ['progress', 'coverage', 'nyan', 'unicorn'],

    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
    },

    port: 8080,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false


  });
};
