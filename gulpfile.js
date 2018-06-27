const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

gulp.task('serve', function() {
    gulp.watch('./src/**/*.scss', ['sass']);
});

gulp.task('sass', function() {
    return gulp.src('src/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }).on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: [
            'Last 2 Chrome versions',
            'Last 2 Edge versions',
            'Last 2 Firefox versions',
            'Last 2 Safari versions',
            'Last 3 iOS versions',
            'IE 11'
        ],
        cascade: false
    }))
    .pipe(rename({
        suffix:'.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/css/'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve', 'sass']);
