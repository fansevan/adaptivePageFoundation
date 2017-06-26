var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync'),
	autoprefixer = require('gulp-autoprefixer');

function swallowError(error) {
  console.log(error.toString());
  this.emit('end');
}

gulp.task('sass', function() {
	return gulp.src('sass/**/*.scss')
		   .pipe(sass())
		   .on('error', swallowError)
		   .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8'], { cascade: true }))
		   .pipe(gulp.dest('css'))
		   .pipe(browserSync.reload({ stream: true }));
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: ''
		},
		notify: false
	});
});

gulp.task('watch', ['browser-sync'],  function() {
	gulp.watch('sass/**/*.scss', ['sass']);
	gulp.watch('*.html', browserSync.reload);
	gulp.watch('js/**/*.js', browserSync.reload);
});