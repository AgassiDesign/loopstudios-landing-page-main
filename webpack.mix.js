let mix = require('laravel-mix');
/*var LiveReloadPlugin = require('webpack-livereload-plugin');

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
});
*/
mix.js('src/js/app.js', 'js')
   .sass('src/scss/app.scss', 'css')
   .copy('src/images', 'dist/images')
   .setPublicPath('dist');