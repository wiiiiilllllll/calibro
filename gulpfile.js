// gulpfile
// Config for 'gulp' task runner - gulpjs.com





// Load plugins
// Here we list all the plugins we'll be using, alphabetically please :)
// All plugins should be installed via npm on user's system
require('es6-promise').polyfill();

var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    cleancss = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    livereload = require('gulp-livereload'),
    notify = require('gulp-notify'),
    pump = require('pump'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify');





// Styles task
gulp.task('styles', function() {
    return gulp.src('sass/calibro.scss')
    .pipe(sass({
        style: 'expanded',
        'sourcemap=none': true
    }))
    .on('error', function (err) {
        console.log(err.message)
        this.emit('end')
    })
    .pipe(autoprefixer({browsers: ['> 5%', 'last 2 versions'] }))
    .pipe(gulp.dest('public/css'))
    .pipe(rename({suffix: '.min'}))
    .pipe(cleancss())
    .pipe(gulp.dest('public/css'))
    .pipe(notify({ message: 'Styles complete' }))
    .pipe(livereload());
})





// Scripts task
// Combine all js files to a single file, output as minified & non-minified
gulp.task('scripts', function() {
    return gulp.src([
        'scripts/*.js'
    ])
    .pipe(concat('calibro.js'))
    .pipe(gulp.dest('public/js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
    .pipe(notify({ message: 'Scripts complete' }))
});





// Default task
// What happens when user runs 'gulp'
gulp.task('default', function() {
    gulp.start('styles','scripts');
});





// Watch task
// What happens when user runs 'gulp watch'
gulp.task('watch', function() {

    // LiveReload
    livereload.listen();

    // Watch .scss files
    gulp.watch('sass/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('scripts/**/*.js', ['scripts']);
});