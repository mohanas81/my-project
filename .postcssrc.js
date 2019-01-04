// https://github.com/michael-ciniawsky/postcss-load-config

// module.exports = {
//   "plugins": {
//     "postcss-import": {},
//     "postcss-url": {},
//     "tailwindcss":{"tailwind-config.js"},
//     // to edit target browsers: use "browserslist" field in package.json
//     "autoprefixer": {}
//   }
// }
module.exports = {
  "plugins": [
    require('postcss-import')(),
    require('postcss-url')(),
    require('tailwindcss')('./tailwind-config.js'),
    require('autoprefixer')(),
  ]
}
