module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.initConfig({
        clean: ['dist'],
        
        copy: {
            development: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**', '!**/less/**'],
                    dest: 'dist/'
                }]
            }
        },
        
        less: {
            development: {
                options: {
                    sourcemap: 'none',
                    style: 'compact'
                },
                files: [{
                    expand: true,
                    cwd: 'src/client/assets/less',
                    src: ['*.less'],
                    dest: 'dist/client/assets/css',
                    ext: '.css'
                }]
            },
            
            production: {
                options: {
                    sourcemap: 'none',
                    style: 'compact'
                },
                files: [{
                    expand: true,
                    cwd: 'src/client/assets/less',
                    src: ['*.less'],
                    dest: 'dist/client/assets/css',
                    ext: '.css'
                }]
            }
        },
        
        wiredep: {
            development: {
                src: 'dist/client/index.html',
                ignorePath: '../../'
            }
        },
        
        watch: {
            files: ['src/**'],
            tasks: ['copy', 'wiredep:development', 'ngtemplates', 'less:development']
        },
        
        ngtemplates: {
            fda: {
                cwd: 'src/client/assets/js/',
                src: ['components/**/*.html'],
                dest: 'dist/client/assets/js/templates.js'
            }
        },
        
        nodemon: {
            development: {
                script: 'dist/server/server.js',
                options: {
                    ignore: ['dist/client'],
                    env: {
                        'NODE_ENV': 'development'
                    }
                }
            }
        },
        
        concurrent: {
            tasks: ['watch', 'nodemon:development'],
            options: {
                logConcurrentOutput: true
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-angular-templates');
    
    grunt.registerTask('serve', ['clean', 'copy', 'less:development', 'ngtemplates', 'wiredep:development', 'concurrent']);
    grunt.registerTask('build', ['clean', 'copy', 'less:production']);
};