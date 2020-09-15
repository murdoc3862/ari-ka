module.exports = function(options) {
    return function(callback) {

        var netlify = require('gulp-netlify');
        gulp.task('deploy', function () {
          gulp.src('./build/**/*')
            .pipe(netlify({
              site_id: NETLIFY_SITE_ID,
              access_token: NETLIFY_ACCESS_TOKEN
            }));
        });
        
    };
};