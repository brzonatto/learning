const gulp = require('gulp')
const { series, parallel } = require('gulp')
// const series = gulp.series

function copiar(callback) {
    console.log('COPIANDO')
    gulp.src('pastaA/**/*.txt') // Qualquer arquivo dentro da pastaA com formato .txt
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        .pipe(gulp.dest('pastaB'))
        // .pipe(imagePelaMetade())
        // .pipe(ImagemEmPretoEBranco())
        // .pipe(transformacaoA())
        // .pipe(transformacaoB())        
    return callback()
}

const antes1 = callback => {
    console.log('ANTES 1')
    return callback()
}

const antes2 = callback => {
    console.log('ANTES 2')
    return callback()
}

const fim = callback => {
    console.log('FIM')
    return callback()
}

// module.exports.default = series(antes1, antes2, copiar, fim)
module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)