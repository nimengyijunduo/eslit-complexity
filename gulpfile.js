const gulp = require('gulp');
const del = require('del');
const eslint = require('gulp-eslint');
const cc = require('./index.js');

const srcPath = './src/**';
const buildPath = './dist/';

const scancomplexity = async () => {
  const result = await cc({
      rootPath: `${srcPath}`,
      extensions: '/*.js',
      defalutIgnore: false,
      ignoreRules: ['node_modules', 'dist'],
      ignoreFileName: '.ignore'
  }, 2);
  console.log(result);
};
const jsFiles = [`${srcPath}/*.js`];
const js = async () => {
  scancomplexity();
  return gulp.src(jsFiles, { since: gulp.lastRun(js) })
    // .pipe(eslint())
    // .pipe(eslint.format())
    .pipe(gulp.dest(buildPath));
};
gulp.task(js);

gulp.task('clean', (done) => {
  del.sync(['dist/**/*']);
  done();
});

gulp.task('test',
  gulp.series(
    'clean',
    gulp.parallel('js')
  )
)