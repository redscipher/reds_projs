// inicia grunt
module.exports = function(grunt){
    // configuracao
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // plugin less
        less: {
            desenvolvimento: {
                files: {
                    './build/dev/css/index.css': './src/less/index.less'
                }
            },
            producao: {
                // minifica os arquivos
                options: {
                    compress: true
                },
                files: {
                    './build/prod/css/index.min.css': './src/less/index.less'
                }
            }
        },        // plugin sass
        sass: {
            // desenvolvimento
            desenvolvimento: {
                files: {
                    // './build/dev/css/sass/index.css': './src/sass/index.scss'
                }
            },
            // producao
            dist: {
                options: {
                    // minifica arquivos
                    style: 'compressed'
                },
                files: {
                    // './build/prod/css/sass/index.min.css': './src/sass/index.scss'
                }
            }
        },
        // plugin observador
        concurrent: {
            desenvolvimento: {
                target: ['less:desenvolvimento', 'sass:desenvolvimento', 'replace:desenvolvimento']
            },
            producao: {
                target: ['less:producao', 'sass:dist', 'htmlmin:dist', 'replace:dist', 'clean']
            }
        },
        watch: {
            desenvolvimento: {
                // ** => todas as pastas
                // *.extensao / *  => todos os arquivos / da extensao
                files: ['./src/less/**/*.less', './index.html'],
                tasks: ['concurrent:desenvolvimento']
            },
            producao: {
                // ** => todas as pastas
                // *.extensao / *  => todos os arquivos / da extensao
                files: ['./src/less/**/*.less', './index.html'],
                tasks: ['concurrent:producao']
            }
        },
        replace: {
            desenvolvimento: {
                options: {
                    patterns: [{
                        match: 'ARQUIVO-CSS',
                        replacement: './css/index.css'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./index.html'],
                    dest: './build/dev/'
                }]
            },
            dist: {
                options: {
                    patterns: [{
                        match: 'ARQUIVO-CSS',
                        replacement: './css/index.min.css'
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ['./prebuild/min/index.html'],
                    dest: './build/prod/'
                }]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    './prebuild/min/index.html': './index.html'
                }
            }
        },
        clean: ['prebuild']
    });

    // importa plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-sass');
    // tarefas paralelas
    grunt.loadNpmTasks('grunt-concurrent');
    // observacao
    grunt.loadNpmTasks('grunt-contrib-watch');
    // plugin p/ execucao condicionais css
    grunt.loadNpmTasks('grunt-replace');
    // minificacao html
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // exclui arquivos temps
    grunt.loadNpmTasks('grunt-contrib-clean')

    // tarefa padrao
    grunt.registerTask('default', ['concurrent:desenvolvimento']);
    // demais tarefas
    grunt.registerTask('compila-prod', ['concurrent:producao']);
    grunt.registerTask('observa', ['watch:desenvolvimento']);
    grunt.registerTask('observa-prod', ['watch:producao']);
};