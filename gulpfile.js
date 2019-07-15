const gulp = require('gulp');
const rimraf = require('gulp-rimraf');
const less = require('gulp-less');
const rename = require('gulp-rename');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const header = require('gulp-header');

const srcPath = 'src';
const distPath = 'dist';

gulp.task('watch', function() {
    gulp.watch(`${srcPath}/**`, ['less', 'copy']);
});

/**
 * 清理编译目录
 */
gulp.task('clean', () => {
    return gulp.src(distPath, {
        read: false
    }).pipe(rimraf());
});

/*
 * 复制文件到dist目录
 */
gulp.task('copy', () => {
    return gulp.src([
        `${srcPath}/**/*.*`,
        `!${srcPath}/**/*.{less,wxss}`,
    ]).pipe(gulp.dest(distPath));
});


/**
 * 编译样式文件
 */
gulp.task('less', () => {
    return gulp.src([`${srcPath}/**/*.wxss`, `${srcPath}/**/*.less`])
        .pipe(less())
        .pipe(postcss([
            // 自动补全
            autoprefixer(['iOS >= 8', 'Android >= 4.1']),
            // 优化压缩 CSS
            cssnano({
                zindex: false,
                autoprefixer: false,
                discardComments: { removeAll: true }
            })
        ]))
        .pipe(
            rename(function(path) {
                path.extname = '.wxss';
            })
        )
        .pipe(gulp.dest(distPath));
});


gulp.task('default', ['watch', 'less', 'copy']);

gulp.task('build', ['clean', 'less', 'copy']);
