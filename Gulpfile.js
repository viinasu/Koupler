var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  karma = require('gulp-karma'),
  bs = require('browser-sync'),
  reload = bs.reload,
  when = require('gulp-if'),
  shell = require('gulp-shell'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  clean = require('gulp-clean'),
  gutil = require('gulp-util'),
  jshint = require('gulp-jshint'),
  filesize = require('gulp-filesize');

var jsScripts = [
  'client/app/bower_components/angular/angular.min.js',
  'client/app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
  'client/app/bower_components/angular-bootstrap/ui-bootstrap-tpls.min.js',
  'client/app/bower_components/ng-file-upload/ng-file-upload.min.js',
  'client/app/auth/auth.js',
  'client/index.js',
  'client/app/activityPickerCtrl/activityPickerCtrl.js',
  'client/app/match/match.js',
  'client/app/profile/profile.js',
  'client/app/factories/factories.js',
  'client/app/navbar/navbar.js',
  'client/app/app.js'
];

// the paths to our app files
var paths = {
  // all our client app js files, not including 3rd party js files
  scripts: ['client/app/**/*.js', 'client/index.js'],
  html: ['client/app/**/*.html', 'client/index.html'],
  styles: ['client/app/bower_components/bootstrap/dist/css/bootstrap.min.css','client/styles/style.css'],
  test: ['specs/**/*.js']
};

gulp.task('clean', function() {
  return gulp.src('build', {
      read: false
    })
    .pipe(clean());
});

gulp.task('karma', shell.task([
  'karma start'
]));

gulp.task('build', function() {
  //specifc order
  return gulp.src(jsScripts)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('koupler.js', {newLine: ';'}))
    .pipe(gulp.dest('build/script'))
    .pipe(rename({ suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('build/script'))
    .pipe(filesize())
    .on('error', gutil.log);
});

gulp.task('copy-html', function(){
    gulp.src(styles)
     .pipe(gulp.dest('./build/styles'));
});

gulp.task('copy-css', function(){
    gulp.src('client/app/**/*.html')
     .pipe(gulp.dest('./build/html'));
});

gulp.task('start', function() {
  bs({
    notify: true,
    // address for server,
    injectChanges: true,
    files: paths.scripts.concat(paths.html, paths.styles),
    proxy: 'localhost:3000'
  });
});

gulp.task('serve', function() {
  nodemon({script: 'index.js', ignore: 'node_modules/**/*.js'});
});


gulp.task('default', ['clean', 'karma', 'build', 'copy-html', 'copy-css']);
