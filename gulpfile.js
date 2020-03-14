const gulp = require('gulp');
const scss = require('gulp-sass');
const minify = require('gulp-minify-css');
const rename = require('gulp-rename');
const connect = require('gulp-connect');

gulp.task('copy-html',function(){
    return gulp.src('*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload());
})

gulp.task('images',function(){
    return gulp.src('img/*.{jpg,png}')
    .pipe(gulp.dest('dist/images'))
    .pipe(connect.reload());
})

gulp.task('data',function(){
    return gulp.src(['*.json','!package.json'])
    .pipe(gulp.dest('dist/data'))
    .pipe(connect.reload());
})

gulp.task('scripts',function(){
    return gulp.src(['js/*.js','!gulpfile.js'])
    .pipe(gulp.dest('dist/js'))
    .pipe(connect.reload());
})



gulp.task('scss1',function(){
    return gulp.src('scss/home.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist/css'))
    .pipe(minify())
    .pipe(rename('home.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('scss2',function(){
    return gulp.src('scss/reset.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist/css'))
    .pipe(minify())
    .pipe(rename('reset.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('scss3',function(){
    return gulp.src('scss/common.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist/css'))
    .pipe(minify())
    .pipe(rename('common.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('scss4',function(){
    return gulp.src('scss/list.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist/css'))
    .pipe(minify())
    .pipe(rename('list.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task('scss5',function(){
    return gulp.src('scss/content.scss')
    .pipe(scss())
    .pipe(gulp.dest('dist/css'))
    .pipe(minify())
    .pipe(rename('content.min.css'))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload());
})

gulp.task("build", ["copy-html", "images", "data", "scripts", "scss1", "scss2","scss3","scss4","scss5"], function(){
    console.log("项目建立成功");
});
// gulp.task('build',['copy-html','images','data','scripts','scss1','scss2'],function(){
//     console.log('项目建立成功');
// })

gulp.task('watch',function(){
    gulp.watch('*.html',['copy-html']);
    gulp.watch('img/*.{jpg,png}',['images']);
    gulp.watch(['*.json','!package.json'],['data']);
    gulp.watch(['js/*.js','!gulpfile.js'],['scripts']);
    gulp.watch('scss/home.scss',['scss1']);
    gulp.watch('scss/reset.scss',['scss2']);
    gulp.watch('scss/common.scss',['scss3']);
    gulp.watch('scss/list.scss',['scss4']);
    gulp.watch('scss/content.scss',['scss5']);
})

gulp.task('server',function(){
    connect.server({
        root:'dist',
        port:3000,
        livereload:true
    })
})

gulp.task('default',['server','watch']);