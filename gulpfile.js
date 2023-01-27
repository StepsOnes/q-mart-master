import gulp from 'gulp';
import sass from 'sass';
import browserSync from 'browser-sync';
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';

const sassCompiler = gulpSass(sass);
const bs = browserSync.create();
const __dirname = process.cwd();

function serve() {
    bs.init({
        proxy    : undefined,
        browser  : ['chrome'],
        server   : {
            baseDir  : './',
            directory: false,
        },
        startPath: '/index.html',
    });
}

function watch() {
    gulp.watch(['./assets/scss/**'], build_styles);
}

function build_styles() {
    return gulp.src([
        './assets/scss/main.scss',
    ])
        .pipe(sourcemaps.init({}))
        .pipe(sassCompiler({
            outputStyle: 'expanded', // compressed
        }, false).on('error', sassCompiler.logError))
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('.', {}))
        .pipe(gulp.dest('./assets/css'))
        .pipe(bs.stream());
}

export default function (done) {
    gulp.series(
        build_styles,
        gulp.parallel(
            watch,
            serve,
        ),
    )(done);
}