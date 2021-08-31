---
title: Nuxt Folder Structure
isDeploy: true
order: 4
---

# Nuxt의 폴더 구조

넉스트의 프로젝트 생성 명령어를 실행하고 난 뒤 생성된 넉스트의 기본 폴더 구조를 살펴보겠습니다.

## Nuxt의 폴더 구조

넉스트의 기본 폴더 구조입니다.

![nuxt-folder-structure](./images/folder.png)

- `.nuxt` : 넉스트 빌드 결과물 폴더
- `assets` : 스타일 시트, 이미지, 폰트 등 웹 리소스 폴더입니다.
- `components` : 뷰 컴포넌트 폴더입니다.
- `layouts` : 레이아웃 컴포넌트 폴더입니다. 레이아웃 패턴에 대해서는 [레이아웃 챕터](./layouts.md)에서 알아보겠습니다.
- `middleware` : 미들웨어(페이지를 화면에 표시하기 전에 실행할 수 있는 함수) 파일 폴더입니다. 미들웨어에 대해서는 [미들웨어 챕터](./middleware.md)에서 알아보겠습니다.
- `pages` : 특정 URL에 접근했을 때 표시될 페이지 컴포넌트 폴더입니다. 넉스트의 라우팅 방식은 [자동 라우팅 챕터](./automatic-routing.md)를 참고하세요.
- `plugins` : 뷰 플러그인 폴더입니다. 뷰의 플러그인이 궁금하신 분들은 [뷰 플러그인 챕터](../reuse/plugins.md)를 참고하세요.
- `static` : 빌드 했을 때 서버의 루트에 존재해야 하는 파일들의 폴더입니다. 파비콘이나 `robots.txt` 등의 파일이 위치합니다.
- `store` : 뷰엑스 폴더입니다. 뷰엑스가 낯선 분들은 [상태 관리 챕터](../vuex/concept.md)를 참고하세요.