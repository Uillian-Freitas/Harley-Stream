const gulp =require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');

function styles(){
    return gulp.src('./src/styles/main.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(gulp.dest('./dist/css'))
    .pipe(cleanCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist/css'))
}

function watchFiles(){
    gulp.watch('./src/styles/**/*.scss', styles);
}

exports.styles = styles;
exports.watch = watchFiles;