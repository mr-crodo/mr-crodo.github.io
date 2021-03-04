var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var rigger = require('gulp-rigger');
var rimraf = require('rimraf');
var fileinclude = require('gulp-file-include');


sass.compiler = require('node-sass');




/* ------------ Styles compile ------------- */
gulp.task('sass', function () {
    return gulp.src('source/order-details/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('build/css'))
});

/* ------------ Templates compile ------------- */
gulp.task('riger', function () {
    return gulp.src('source/order-details/*.html')
        .pipe(rigger())
        .pipe(fileinclude())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream())
});

/* ------------ Copy fonts ------------- */
gulp.task('copy:fonts', function () {
    return gulp.src('source/order-details/fonts/**/*.*')
        .pipe(gulp.dest('build/fonts'));
});

/* ------------ Copy img ------------- */
gulp.task('copy:img', function () {
    return gulp.src('source/order-details/img/**/*.*')
        .pipe(gulp.dest('build/img'));
});

/* ------------ Copy js ------------- */
gulp.task('copy:js', function () {
    return gulp.src('source/order-details/js/**/*.*')
        .pipe(gulp.dest('build/js'));
});

/* ------------ Copy ------------- */
gulp.task('copy', gulp.parallel('copy:fonts', 'copy:img', 'copy:js'));

/* ------------ Delete ------------- */
gulp.task('clean', function del(cb) {
    return rimraf('build', cb);
});




/* ------------ Watchers ------------- */
gulp.task('watch', function () {
    gulp.watch('source/order-details/**/*.html', gulp.series('riger'));
    gulp.watch('source/order-details/sass/**/*.scss', gulp.series('sass'));
    gulp.watch('source/order-details/js/**/*.js', gulp.series('copy:js'));
    gulp.watch('source/order-details/img/**/*.js', gulp.series('copy:img'));
});

/* -------- Server  -------- */
gulp.task('server', function () {
    browserSync.init({
        server: {
            port: 9000,
            baseDir: "build"
        }
    });

    gulp.watch('build/**/*').on('change', browserSync.reload);
});

gulp.task('default', gulp.series(
    'clean',
    gulp.parallel('riger', 'sass', 'copy'),
    gulp.parallel('watch', 'server')
));