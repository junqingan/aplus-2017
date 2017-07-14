var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    webserver = require('gulp-webserver'),
    clean = require('gulp-clean');


//清除 dist
gulp.task('clean',function () {
    gulp.src(['./static/dist/'])
        .pipe(clean())
})


//编译less
gulp.task('testLess', function() {
    gulp.src('./static/src/less/*.min.less')
        .pipe(less())
        .pipe(cssmin())
        .pipe(gulp.dest("./static/dist/style/"))
});

//js 压缩
gulp.task("js", function() {
    gulp.src(['./static/src/js/**/*.js'])
        // .pipe(uglify({
        //     mangle: true, //类型：Boolean 默认：true 是否修改变量名
        // }))
        .pipe(gulp.dest("./static/dist/js/"))
})

//图片压缩
gulp.task('images', function() {
    return gulp.src('./static/src/assets/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./static/dist/assets/'));
});


gulp.task('default', ['clean','testLess', 'images', 'js','testWatch']);
//自动监控less
gulp.task('testWatch', function() {
    gulp.watch('./static/src/css/modules/**/*.less',['testLess']);
});
