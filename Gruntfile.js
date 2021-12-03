module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			build: {
				files: {
					'js/timber.min.js': 'js/timber.js',
					'js/jquery.tm.swipe.min.js': 'js/jquery.tm.swipe.js',
					'js/jquery.tm.avalanche.min.js': 'js/jquery.tm.avalanche.js',
					'js/jquery.tm.summit.min.js': 'js/jquery.tm.summit.js',
					'js/jquery.tm.snowbridge.min.js': 'js/jquery.tm.snowbridge.js',
					'js/jquery.tm.horizon.min.js': 'js/jquery.tm.horizon.js',
					'js/jquery.tm.retinize.min.js': 'js/jquery.tm.retinize.js',
					'js/jquery.tm.equalize.min.js': 'js/jquery.tm.equalize.js',
					'js/jquery.tm.counter.min.js': 'js/jquery.tm.counter.js',
					'js/jquery.tm.freeze.min.js': 'js/jquery.tm.freeze.js',
					'js/jquery.tm.socialize.min.js': 'js/jquery.tm.socialize.js',
					'js/jquery.tm.preloadpage.min.js': 'js/jquery.tm.preloadpage.js',
					'js/template-functions.min.js': 'js/template-functions.js'
				}
			}
		},
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'css/core.min.css': ['css/timber.css', 'css/avalanche.css', 'css/summit.css',' css/snowbridge.css', 'css/horizon.css', 'css/templates.css']
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/'
				}]
			}
		},
		jshint: {
			options: {
      			reporterOutput: ""
  			},
			files: {
		        src: ['js/timber.js', 'js/jquery.tm.swipe.js', 'js/jquery.tm.avalanche.js', 'js/jquery.tm.summit.js', 'js/jquery.tm.snowbridge.js', 'js/jquery.tm.horizon.js', 'js/jquery.tm.retinize.js', 'js/jquery.tm.eqalize.js', 'js/jquery.tm.counter.js', 'js/jquery.tm.freeze.js', 'js/jquery.tm.socialize.js', 'js/jquery.tm.preloadpage.js', 'js/template-functions.js']
			}
		}
	});

  // Uglify
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // CSS min
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // Imgs  min
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // jsHint
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin', 'jshint']);

};