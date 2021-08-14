'use strict';

var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

sass.compiler = require('node-sass');

gulp.task('sass:compile', () => {
    return gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('sass:watch', () => {
    gulp.watch('sass/**/*.scss', (done) => {
        gulp.series('sass:compile')(done);
    })
})