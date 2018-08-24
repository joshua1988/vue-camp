#!/usr/bin/env sh

# abort on errors
set -e

# navigate into the build output directory
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy with vuepress script'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/joshua1988/vue-camp.git master:gh-pages

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME
# git checkout gh-pages
# git add -A
# git commit -m 'deploy'
# git push -f origin gh-pages
# git checkout master

cd -