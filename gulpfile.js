var gulp = require('gulp');
var pug = require('gulp-pug');
var watch = require('gulp-watch');

// task para pug  
gulp.task('pug', function () {
  gulp.src('src/*.pug')
  .pipe(pug({
      pretty: true,
      compileDebug: true,
  }))
  .pipe(gulp.dest(''))

});

// task para watch 
gulp.task('watch', function(){
    gulp.watch('src/*.pug', ['pug']);
});

// task default gulp
gulp.task('default', ['pug', 'watch']);