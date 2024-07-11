// importacoes: gulp, sass, sourcemaps, uglify, imagemin
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// funcoes
function execComprimeImagens(){
    try {
        // executa comprime imagens
        let obj = gulp.src(['./imagens/*'])
                    .pipe(imagemin())
                    .pipe(gulp.dest('./build/imagens'))
        // def retorno
        return obj;
    } catch (error) {
        console.log(error.message);
    }
}

function execCompilacaoSASS(){
    try {
        // executa compilacoes SASS
        let obj = gulp.src(['./src/scss/*.scss', './src/scss/configs/*.scss'])
                    .pipe(sourcemaps.init())
                    .pipe(sass({
                        outputStyle: 'compressed'
                    }))
                    .pipe(sourcemaps.write('./mapas'))
                    .pipe(gulp.dest('./build/css'));
        // def retorno
        return obj;
    } catch (error) {
        console.log(error.message)
    }
}

function execComprimeJS(){
    try {
        // executa compressoes js
        let obj = gulp.src(['./src/js/*.js'])
                    .pipe(uglify())
                    .pipe(gulp.dest('./build/js'))
        // def retorno
        return obj;
    } catch (error) {
        console.log(error.message);
    }
}

function execVigilancia(){
    try {
        // vigia todos arquivos por mudanca paralelamente
        gulp.watch(['./imagens/*', './src/scss/*.scss', './src/scss/configs/*.scss', './src/js/*.js'],
            {ignoreInitial: false}, gulp.parallel(execComprimeImagens, execCompilacaoSASS, execComprimeJS))
    } catch (error) {
        console.log(error.message);
    }
}

// exportacoes
exports.default = gulp.parallel(execComprimeImagens, execCompilacaoSASS, execComprimeJS);
exports.watch = execVigilancia;