/**
 * Created by tntdi_000 on 8/5/2016.
 */

module.exports = function(config) {
  config.set({
    basePath: '',
	frameworks: ['jasmine'],
	files: [
	  'angular.min.js',
	  'angular-mocks.js',
	  '*.js'
	],
	exclude: [],
	port: 8080,
	logLevel: config.LOG_INFO,
	autoWatch: true,
	browsers: ['Chrome'],
	singleRun: false
  });
};
