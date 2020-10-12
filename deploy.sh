rm -rf dist
npm run build
cd dist
git init
git add .
git commit -m "update"
git branch -M master
git remote add origin git@gitee.com:xuyuan875/vu-ui-docs.git
git push -f -u origin master
cd -