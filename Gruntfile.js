

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch: {
			app: {
				files: ['client/*.*','client/app/*', 'client/app/**/*.*','**/bower_components/*'],
				tasks: ['build']
			}
		},
		bower_concat: {
		  all: {
		    dest: 'client/compiled/bower.js',
		    cssDest: 'client/compiled/bower.css',
		    exclude: [
		    ],
		    dependencies: {
		    	'bootstrap': 'jquery',
		    },
		    bowerOptions: {
		      relative: false
		    }
		  }
		},
		sass: {
			dist: {
				files: {
					//'client/compiled/all.css' : ['**/*.scss']
					'client/compiled/all.css' : ['client/compiled/all.scss']
				}
			}
		},
		concat:{
			sass: {
				//client/theme.scss holds the color variables so it must come first
				src: [
					'client/theme.scss', 
					'client/app/**/*.scss',
					'bower_components/bootstrap/dist/css/bootstrap.css' /*bootstraps css*/
					],
				dest: 'client/compiled/all.scss',
			},
		},
		clean: {
			oldSet: ["client/compiled/**"],
			uglify:["client/compiled/*.js", "!client/compiled/*.min.js","client/compiled/*.scss", "client/compiled/*.css.map"]
		},
		uglify: {
			options: {
		    	mangle: false,
		    	compress: {
		    		drop_console: true
		    	}
		    },
		    bower: {

		    	files: [{
					'client/compiled/bower.min.js': ['client/compiled/bower.js']
		    	}]
			},
			js:{
				files:[{
					'client/compiled/app.min.js' : ['client/app/*.js','client/app/**/*.js']
				}]
			}
		},
		copy: {
			main: {
				expand: true,
				cwd: 'client/',
				src: 'app/**/*.html',
				dest: 'client/compiled/',
			},
		}
	});

	grunt.registerTask('default',['run']);
	grunt.registerTask('run',['watch']);
	grunt.registerTask('cleanBuild', ['clean:oldSet', 'build'])
	grunt.registerTask('build',['debug','uglify','clean:uglify']);
	grunt.registerTask('debug',['copy','concat','sass']);
	grunt.registerTask('all',['clean:oldSet','bower_concat','build','watch']);

	require('load-grunt-tasks')(grunt);
}
