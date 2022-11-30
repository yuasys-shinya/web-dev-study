#!/usr/bin/env sh

# エラー時は停止
set -e

# ビルド
npm run build

# ビルド出力ディレクトリに移動
cd dist

# Jekyll の処理をバイパスするために .nojekyll を配置
echo > .nojekyll

# カスタムドメインにデプロイする場合
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

# https://<USERNAME>.github.io にデプロイする場合
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# https://<USERNAME>.github.io/<REPO> にデプロイする場合
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages
git push -f git@github.com:yuasys-shinya/web-dev-study/lesson3/reactProject/vite-react-tailwind/my-project/.git main:gh-pages

cd -
