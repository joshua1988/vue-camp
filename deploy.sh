#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
git checkout gh-pages
git add -A
git commit -m 'deploy'
git push -f origin gh-pages
git checkout master

cd -