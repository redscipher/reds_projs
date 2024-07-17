// inicia grunt
module.exports = function(grunt)
{
    // importando 
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-replace');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // configuracoes
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            dev: {
                files: {
                    './build/dev/css/index.css': './src/less/index.less'
                }
            },
            dist: {
                options: {
                    // comprime less
                    compress: true,
                    sourceMap: true
                },
                files: {
                    './build/dist/css/index.min.css': ['./src/less/index.less']
                }
            }
        },
        watch: {
            dev:{
                files: ['./src/less/**/*.less', './index.html'],
                tasks: ['concurrent:dev']
            }
        },
        concurrent: {
            dev: {
                target: ['less:dev', 'replace:dev']
            },
            dist: {
                target: ['less:dist', 'replace:dist', 'uglify']
            }
        },
        htmlmin:{
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    './build/dist/index.html': './index.html'
                }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [{
                        match: 'arquivo-css',
                        replacement: './css/index.css'
                    },
                    {
                        match: 'arquivo-js',
                        replacement: '../../src/js/index.js'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./index.html'],
                    dest: './build/dev'
                }]
            },
            dist: {
                options: {
                    patterns: [{
                        match: 'arquivo-css',
                        replacement: './css/index.min.css'
                    },
                    {
                        match: 'arquivo-js',
                        replacement: './js/index.min.js'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./build/dist/index.html'],
                    dest: './build/dist'
                }]
            }
        },
        uglify: {
            target: {
                options: {
                    sourceMap: true
                },
                files: {
                    './build/dist/js/index.min.js': ['./src/js/index.js']
                }
            }
        }
    });

    // funcoes
    let compilaDistribuicao = function(){
        try {
            // roda as tarefas
            grunt.task.run('htmlmin:dist');
            grunt.task.run('concurrent:dist');
        } catch (error) {
            console.log(error.message);
        }
    }

    // tarefa padrao
    grunt.registerTask('default', ['concurrent:dev']);
    // demais
    grunt.registerTask('observar', ['watch:dev']);
    grunt.registerTask('compila-dist', compilaDistribuicao);
};