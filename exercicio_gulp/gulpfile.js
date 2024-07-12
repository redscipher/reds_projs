// requerimentos: gulp, sass, sourcemaps, uglify, imagemin
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const optipng = require('imagemin-optipng');

// funcoes
function execComprimeImagens(){
    try {
        // executa comprime imagens
        return gulp.src(['./imagens/*.jpg', './imagens/*.png'])
                    .pipe(imagemin([
                        mozjpeg()
                        ,optipng()
                    ]))
                    .pipe(gulp.dest('./build/imagens'))
        // def retorno
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
        gulp.watch(['./imagens/*.jpg', './imagens/*.png', './src/scss/*.scss', './src/scss/configs/*.scss', './src/js/*.js'],
            {ignoreInitial: false}, gulp.parallel(execComprimeImagens, execCompilacaoSASS, execComprimeJS))
    } catch (error) {
        console.log(error.message);
    }
}

// exportacoes
exports.default = gulp.parallel(execComprimeImagens, execCompilacaoSASS, execComprimeJS);
exports.watch = execVigilancia;