var gulp = require('gulp'),
delfile = require('del'),//删除文件夹
fileinclude = require('gulp-file-include');
htmlmin=require('gulp-htmlmin');
	

  gulp.task('clean', function() {
  	delfile([
		    'dist/**/*'
		  ]);
  });
	gulp.task('default', ['clean'],function() {
    	return gulp.src('app/**/*.html')
    	.pipe( fileinclude({
					prefix:'@@',
					basePath:'@file',
					context: {
			  	}
				}) )
      .pipe(htmlmin({
      removeEmptyAttributes: true,
      removeAttributeQuotes: true,
      collapseBooleanAttributes: true,
      collapseWhitespace: true,
      customAttrSurround: [
        [/@/, /(?:)/]
      ]
    }))
			.pipe( gulp.dest('dist'))
		});





