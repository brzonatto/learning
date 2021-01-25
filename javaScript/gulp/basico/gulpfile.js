const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copiar(callback) {
    // gulp.src('pastaA/**/*.txt')
    gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
    return callback()
}

function fim(callback) {
    console.log('Tarefa fim!')
    return callback()
}

module.exports.default = series(parallel(antes1, antes2), copiar, fim)