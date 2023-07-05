'use strict'

const { src, dest, series, parallel } = require('gulp')
const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')
const fileinclude = require('gulp-file-include')
const cssbeautify = require('gulp-cssbeautify')
const removeComments = require('gulp-strip-css-comments')
const rename = require('gulp-rename')
const rigger = require('gulp-rigger')
const sass = require('gulp-sass')(require('sass'))
const uncss = require('gulp-uncss')
const concat = require('gulp-concat')
const cssnano = require('gulp-cssnano')
const uglify = require('gulp-uglify')
const plumber = require('gulp-plumber')
const imagemin = require('gulp-imagemin')
const del = require('del')
const notify = require('gulp-notify')
const imagewebp = require('gulp-webp')
const browserSync = require('browser-sync').create()

/* Paths */
const srcPath = 'src/'
const distPath = 'dist/'

const path = {
  build: {
    html: distPath,
    css: distPath + 'assets/css/',
    vendors: distPath + 'assets/vendors',
    js: distPath + 'assets/js/',
    images: distPath + 'assets/img/',
    fonts: distPath + 'assets/fonts/',
    pages: distPath + 'assets/pages/',
  },
  src: {
    html: srcPath + '*.html',
    css: srcPath + 'assets/scss/*.scss',
    vendors: srcPath + 'assets/vendors/**/*',
    js: srcPath + 'assets/js/**/*.js',
    images:
      srcPath +
      'assets/img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
    fonts: srcPath + 'assets/fonts/**/*.{eot,woff,woff2,ttf}',
    pages: srcPath + 'assets/pages/**/*.html',
  },
  watch: {
    html: srcPath + '**/*.html',
    js: srcPath + 'assets/js/**/*.js',
    css: srcPath + 'assets/**/*.scss',
    vendors: srcPath + 'assets/vendors/**/*',
    images:
      srcPath +
      'assets/img/**/*.{jpg,png,svg,gif,ico,webp,webmanifest,xml,json}',
    fonts: srcPath + 'assets/fonts/**/*.{eot,woff,woff2,ttf,svg}',
    pages: srcPath + 'assets/pages/**/*.html',
  },
  clean: './' + distPath,
}

function serve() {
  browserSync.init({
    server: {
      baseDir: './' + distPath,
    },
  })
}

function html() {
  return src(path.src.html, { base: srcPath })
    .pipe(plumber())
    .pipe(fileinclude({ prefix: '@', basepath: './src/assets/layout' }))
    .pipe(dest(path.build.html))
    .pipe(browserSync.reload({ stream: true }))
}

function css() {
  return src(path.src.css, { base: srcPath + 'assets/scss/' })
    .pipe(
      plumber({
        errorHandler: function (err) {
          notify.onError({
            title: 'SCSS Error',
            message: 'Error: <%= error.message %>',
          })(err)
          this.emit('end')
        },
      })
    )
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssbeautify())
    .pipe(dest(path.build.css))
    .pipe(
      cssnano({
        zindex: false,
        discardComments: {
          removeAll: true,
        },
      })
    )
    .pipe(removeComments())
    .pipe(
      rename({
        suffix: '.min',
        extname: '.css',
      })
    )

    .pipe(dest(path.build.css))
    .pipe(browserSync.reload({ stream: true }))
}

function vendors() {
  return src(path.src.vendors)
    .pipe(plumber())
    .pipe(dest(path.build.vendors))
    .pipe(browserSync.reload({ stream: true }))
}

function js() {
  return src(path.src.js, { base: srcPath + 'assets/js/' })
    .pipe(
      plumber({
        errorHandler: function (err) {
          notify.onError({
            title: 'JS Error',
            message: 'Error: <%= error.message %>',
          })(err)
          this.emit('end')
        },
      })
    )
    .pipe(concat('main.js'))
    .pipe(dest(path.build.js))
    .pipe(uglify())
    .pipe(
      rename({
        suffix: '.min',
        extname: '.js',
      })
    )
    .pipe(dest(path.build.js))
    .pipe(browserSync.reload({ stream: true }))
}

function pages() {
  return src(path.src.pages, { base: srcPath + 'assets/pages' })
    .pipe(plumber())
    .pipe(fileinclude({ prefix: '@', basepath: './src/assets/layout' }))
    .pipe(dest(path.build.pages))
    .pipe(browserSync.reload({ stream: true }))
}

function images() {
  return src(path.src.images, { base: srcPath + 'assets/img/' })
    .pipe(
      imagemin([
        imagemin.gifsicle({ interlaced: true }),
        imagemin.mozjpeg({ quality: 80, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo({
          plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
        }),
      ])
    )
    .pipe(dest(path.build.images))
}

function webpImages() {
  return src(path.src.images, { base: srcPath + 'assets/img/' })
    .pipe(imagewebp())
    .pipe(dest(path.build.images))
}

function fonts() {
  return src(path.src.fonts, { base: srcPath + 'assets/fonts/' })
    .pipe(dest(path.build.fonts))
    .pipe(browserSync.reload({ stream: true }))
}

function clean() {
  return del(path.clean)
}

function watchFiles() {
  gulp.watch([path.watch.html], html)
  gulp.watch([path.watch.css], css)
  gulp.watch([path.watch.js], js)
  gulp.watch([path.watch.images], images)
  gulp.watch([path.watch.images], webpImages)
  gulp.watch([path.watch.pages], pages)
  gulp.watch([path.watch.fonts], fonts)
  gulp.watch([path.watch.vendors], vendors)
}

const build = series(
  clean,
  parallel(html, css, js, images, webpImages, fonts, pages, vendors)
)
const watch = parallel(build, watchFiles, serve)

exports.html = html
exports.css = css
exports.js = js
exports.images = images
exports.webpImages = webpImages
exports.fonts = fonts
exports.pages = pages
exports.vendors = vendors
exports.clean = clean
exports.build = build
exports.watch = watch
exports.default = watch
