var gulp = require("gulp"),
  watch = require("gulp-watch"),
  browserSync = require("browser-sync").create();

gulp.task("watch", function() {
  browserSync.init({
    notify: false,
    server: {
      baseDir: "app"
    }
  });
  watch("./app/index.html", function() {
    browserSync.reload();
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("cssInject");
  });
});
//added dependency to do styles task first and then cssIject task
//browser-sync stream enables to update css without refresh
gulp.task("cssInject", ["styles"], function() {
  gulp.src("./app/temp/styles/styles.css").pipe(browserSync.stream());
});
