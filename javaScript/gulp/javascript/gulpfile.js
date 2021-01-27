const { series, parallel } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS() {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))    
}

function fim(cb) {
    console.log('FIM')
    return cb()
}

module.exports.default = series(transformacaoJS, fim)