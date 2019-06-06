//gulp用来编译node
const gulp = require("gulp");
const babel = require("gulp-babel");
const watch = require('gulp-watch');
const rollup = require("gulp-rollup");
const replace = require('rollup-plugin-replace');
const eslint = require('gulp-eslint');
const entry = './src/service/**/*.js';

//开发环境
function buildDev() {
    //使用gulp.watch
    return gulp.watch(entry, {
        //忽略初始化
        ignoreInitial: false,
    }, function () {
        return gulp.src(entry)
            .pipe(babel({
                //让这个babelrc生效，外面的.babelrc不生效
                babelrc: false,
                plugins: [
                    '@babel/plugin-transform-modules-commonjs'
                ]
            }))
            .pipe(gulp.dest('dist'));
    })
}

//生产环境
function buildProd() {
    return gulp.src(entry)
        .pipe(babel({
            //让这个babelrc生效，外面的.babelrc不生效
            babelrc: false,
            plugins: [
                '@babel/plugin-transform-modules-commonjs'
            ],
            // 忽略文件
            ignore: ['./src/service/config/index.js']
        }))
        .pipe(gulp.dest('dist'));
}

// 清洗环境
function buildClean() {
    return gulp.src(entry)
        .pipe(rollup({
            input: './src/service/config/index.js',
            output: {
                format: 'cjs',
            },
            plugins: [
                replace({
                    'process.env.NODE_ENV': JSON.stringify('production'),
                })
            ]
        }))
        .pipe(gulp.dest('dist'));
}

//代码检测
function buildLint() {
    //检查  var s  = 1 等;
    return gulp.src(entry)
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());     //报错信息
}

let build = gulp.series(buildDev);
if (process.env.NODE_ENV == 'production') {
    build = gulp.series(buildProd, buildClean);
}
//代码检查
if (process.env.NODE_ENV == 'lint') {
    build = gulp.series(buildLint);
}

gulp.task('default', build);