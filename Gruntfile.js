"use strict";

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            files: ['Gruntfile.js', 'assets/js/*.js', 'app/**/*.js']
        },
        concat: {
            dist: {
                src: ['app/**/*.js'],
                dest: 'assets/js/scripts.js'
            }
        },
        less: {
            dev: {
                files: {
                    'assets/css/css/main.css': [
                        'assets/css/less/main.less'
                    ]
                }
            },
            build: {
                files: {
                    'assets/css/css/main.min.css': [
                        'assets/css/less/main.less'
                    ]
                },
                options: {
                    compress: true
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'assets/js/scripts.js': ['<%= concat.dist.dest %>']
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
            },
            dev: {
                options: {
                    map: {
                        prev: 'assets/css/'
                    }
                },
                src: 'assets/css/css/main.css'
            },
            build: {
                src: 'assets/css/css/main.min.css'
            }
        },

        open: {
            server: {
                url: "http://localhost:<%= connect.options.port %>"
            }
        },
        watch: {
            all: {
                options: { livereload: 1337 },
                less: {
                    files: [
                        'assets/css/less/main.less',
                        'assets/css/less/**/*.less'
                    ],
                    tasks: ['less:dev', 'autoprefixer:dev']
                },
                files: [
                    'assets/css/css/main.min.css',
                    'assets/js/scripts.js',
                    '*.html'
                ]
            }

        },
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'www-root'
                }
            }
        }
    });


    // Register tasks
    grunt.registerTask('default', [
        'dev',
        'jshint',
        'build'
    ]);
    grunt.registerTask('dev', [
        'less:dev',
        'autoprefixer:dev',
        'concat'
    ]);
    grunt.registerTask('build', [
        'less:build',
        'autoprefixer:build',
        'uglify'
    ]);

    grunt.task.run([
            'watch',
            'connect'
    ]);

};
