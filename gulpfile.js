let gulp = require('gulp')
let less = require('gulp-less')
let sourcemaps = require('gulp-sourcemaps')
let postcss = require('gulp-postcss') // css后处理文件
let precss = require('precss')
let pug = require('gulp-pug')
let cssmin = require('gulp-minify-css')
let uglify = require('gulp-uglify')
let imagemin = require('gulp-imagemin')
let watch = require('gulp-watch')
let autoprefixer = require('autoprefixer')
let browserSync = require('browser-sync')
let base64 = require('gulp-base64')
let rename = require('gulp-rename')
let plumber = require('gulp-plumber')
let del = require('del')
let rollup = require('gulp-better-rollup')
let babel = require('rollup-plugin-babel')
let commonjs = require('rollup-plugin-commonjs')
let nodeResolve = require('rollup-plugin-node-resolve')
gulp.task('css', function () {
    return gulp.src('src/*/css/*.less')
        .pipe(watch('src/*/css/*.less'))
        .pipe(plumber())
        .pipe(less())
        .pipe(postcss([precss, autoprefixer(['iOS >= 7', 'Android >= 4.1'])]))
        .pipe(gulp.dest('dist'))
})

gulp.task('css:min', function () {
    return gulp.src('src/*/css/*.less')
        .pipe(sourcemaps.init())
        .pipe(cssmin())
        .pipe(rename({extname: '.min.css'}))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('dist'))
})

gulp.task('pug', function () {
    return gulp.src('src/*/*.pug')
        .pipe(plumber())
        .pipe(watch('src/*/*.pug'))
        .pipe(pug({
            pretty: true,
            cache: true
        }))
        .pipe(gulp.dest('dist'))
})

gulp.task('js', function () {
    return gulp.src('src/*/js/*.js')
        .pipe(watch('src/*/js/*.js'))
        .pipe(plumber())
        .pipe(rollup({
            plugins: [
                nodeResolve(),
                commonjs(),
                babel({
                    runtimeHelpers: true,
                    exclude: 'node_modules/**'
                })
            ]
        }, 'umd'))
        .pipe(gulp.dest('dist'))
})

gulp.task('js:min', function () {
    return gulp.src('src/*/js/*.js')
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(sourcemaps.init())
        .pipe(gulp.dest('dist'))
})

gulp.task('images', function () {
    return gulp.src('src/*/images/*')
        .pipe(watch('src/*/images/*'))
        .pipe(imagemin())
        .pipe(gulp.dest('dist'))
})

gulp.task('serve', function () {
    browserSync.init({
        files:['**'],
        server:{
            baseDir: 'dist'
        }
    })
})

gulp.task('publish', function () {
    return gulp.src('src/*/css/*.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(base64({
            extensions: ['png', 'jpg', '.jpeg'],
            maxImageSize: 5 * 1024,
            debug: false
        }))
        .pipe(postcss([precss, autoprefixer(['ios >= 7', 'Android >= 4.1'])]))
        .pipe(cssmin())
        .pipe(gulp.dest('dist'))
})

gulp.task('clean', function () {
    return del([
        'dist/*'
    ])
})


gulp.task('build', ['css:min', 'js:min'])
gulp.task('default', ['css', 'pug', 'js', 'images', 'serve'])
