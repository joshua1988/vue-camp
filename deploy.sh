#!/usr/bin/env sh

# abort on errors
set -e

# build commands
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy with vuepress script'
git push -f https://github.com/joshua1988/vue-camp.git master:gh-pages

cd -