const buildConfig = {
  input: {
    html: './index.html',
    css: './css/style.css',
    js: ['./js/*.js'],
    assets: './assets/**/*'
  },
  output: {
    dir: './dist',
    css: './dist/css',
    js: './dist/js',
    assets: './dist/assets'
  },
  minify: {
    html: true,
    css: true,
    js: true
  }
};

module.exports = buildConfig; 