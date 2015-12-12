var gulp = require('gulp');
var exec = require('child_process').exec;
var runSeq = require('run-sequence');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default',[])



gulp.task('jekyll', function(){
	exec('jekyll serve', function(er, output, stderr){
			console.log(err);
			console.log(output);
			console.log(stderr);
		});
});


gulp.task('cssprefix', function(){
	gulp.src('_site/css/main.css').
	pipe(autoprefixer()).
	pipe(gulp.dest('_site/css/'))
});

gulp.task('postprocess:')