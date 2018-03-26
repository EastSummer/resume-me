var gulp = require("gulp");			//引入gulp组建
var less = require("gulp-less");
var webserver = require("gulp-webserver");

gulp.task("less",function(){
	return gulp.src("src/less/*.less").
		   pipe(less()).
		   pipe(gulp.dest("src/css"));
});

gulp.task("webserver",function(){
	gulp.src('./')
		.pipe(webserver({
			livereload: true,
			directoryListing: true,
			open: true
		}));
});

gulp.task("watch",function(){
	gulp.watch("src/less/*.less",["less"]);		
});

gulp.task("default",["watch","webserver"]);

