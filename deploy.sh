#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
pnpm run build

# 进入生成的文件夹
cd /build

# deploy to github pages
echo 'note.hare-success.cn' > CNAME

if [ -z "$HareBlog" ]; then
  msg='deploy'
  githubUrl=git@github.com:Hare-Success/HareBlog.git
else
  msg='来自github actions的自动部署-------'
  githubUrl=https://Hare-Success:${HareBlog}@github.com/Hare-Success/HareBlog.git
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages #推送到github gh-pages分支

cd -
rm -rf /build
