const path = require('path')

function resolveSrc(_path) {
  return path.join(__dirname, _path)
}

const aliases = {
  '@store': '.vuepress/store.js',
}

module.exports = {
  webpack: {},
}

for (const alias in aliases) {
  module.exports.webpack[alias] = resolveSrc(aliases[alias])
}