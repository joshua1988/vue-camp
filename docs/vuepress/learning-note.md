---
title: Tutorials
isDeploy: true
order: 1
---

# VuePress 사이트 배포하기 절차

VuePress로 그날 그날 배운 내용을 정리하기 위해 **학습 노트** 사이트를 제작합니다.

## 사이트 배포 하기 절차

1. [깃헙](https://github.com/) 계정 생성
2. 깃헙 리포지토리 생성
3. 생성한 리포지토리를 클론
   
```bash
# 학습 노트를 관리할 폴더의 위치에서 아래 명령어 입력
git clone '생성한 리포지토리 클론 주소'
```

4. 클론된 프로젝트 위치로 이동

```bash
cd '클론해서 생성된 폴더 이름'
```

5. 프로젝트에서 `docs` 폴더 생성
6. 프로젝트에서 아래와 같은 명령어를 순서대로 입력

```bash
npm init -y
npm install -D vuepress
```

::: tip
만약 permission 관련된 오류가 날 경우에는 `npm install -D vuepress` 대신에 `sudo npm install -D vuepress` 입력하세요.
:::

7. `package.json` 파일의 내용을 아래와 같이 수정

```json
{
  ...
  "scripts": {
    "doc": "vuepress dev docs",
    "build": "vuepress build docs"
  },
  ...
}
```

8. `docs` 폴더 밑에 `README.md` 파일을 생성하고 아래의 내용을 추가

```md
# Vue.js 정복 캠프 학습 노트!!
```

9. **클론된 프로젝트 폴더** 밑에 `deploy.sh` 파일을 추가하고 아래 내용 삽입

```sh
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd docs/.vuepress/dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy with vuepress'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f <뷰 프레스를 위해 생성한 깃헙 리포지토리의 클론 주소> master:gh-pages

cd -
```

::: danger
위에서 `<뷰 프레스를 위해 생성한 깃헙 리포지토리의 클론 주소>`는 꼭 리포지토리의 주소로 변경해주셔야 합니다. 
:::

10. 프로젝트 폴더의 위치에서 `sh deploy.sh`를 실행하여 사이트 배포

::: tip
`sh`라는 명령어는 윈도우 기본 명령어 프롬프트 창에서 먹지 않습니다. 따라서 [cmder](https://cmder.net/)이라는 콘솔 프로그램을 설치해서 실행하거나 git bash와 같은 별도의 콘솔창을 사용하시면 됩니다 :)
:::

11. 브라우저에 `https://<USERNAME>.github.io/<REPO>` 입력 후 사이트 확인 (보통 5~10분 소요)