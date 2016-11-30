var gulp = require('gulp'),
    gulpLoadPlugins = require('gulp-load-plugins'),
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create();

const $ = gulpLoadPlugins();

var source = './src',
    dest = './',

    js = {
      in: [
        source + 'js/libs/primary/*.js',
        source + 'js/libs/*.js',
      ],
      out: dest + 'js/',
      filename: 'agency.js'
    };

    // CSS SASS TASK
gulp.task('sass', function () {
  var s = $.size();
  return gulp.src('./src/scss/*.scss')
  .pipe($.sass().on('error', $.sass.logError))
  .pipe($.sourcemaps.init())
  .pipe($.postcss([autoprefixer({
      browsers: ['last 2 versions']
  })]))
  .pipe($.cssnano())
  .pipe($.rename('agency.css'))
  .pipe($.sourcemaps.write('.'))
  .pipe(s)
  .pipe(gulp.dest('./css'))
  .pipe($.notify({
    onLast: true,
    message: function () {
            return 'Done! ' + 'Total size '+ s.prettySize;
    }
  }))
  .pipe(browserSync.stream());
});

// js task
gulp.task('js', function () {
    return gulp.src(js.in)
        .pipe($.concat(js.filename))
        .pipe($.size({title: 'JS in '}))
        // .pipe(jsmin())
        // .pipe($.rename({suffix: '.min'}))
        .pipe($.size({title: 'JS out '}))
        .pipe(gulp.dest(js.out))
        .pipe(browserSync.stream());
});

 // static server + watching scss/html files
 gulp.task('watch', ['sass', 'js'], function () {
      browserSync.init({
        server: "./"
      });
      gulp.watch(js.in, ['js']);
      gulp.watch("./src/scss/**/*.scss", ['sass']);
      gulp.watch("*.html").on('change', browserSync.reload);
     });

    //  default task
    gulp.task('default', ['watch']);
