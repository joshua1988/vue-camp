---
title: NPM vs Yarn
---

# npm과 yarn

npm과 yarn은 자바스크립트 런타임 환경인 노드(Node.js)의 패키지 관리자입니다. 전 세계의 개발자들이 자바스크립트로 만든 다양한 패키지를 [npm 온라인 데이터베이스](https://www.npmjs.com/)에 올리면 npm, yarn과 같은 패키지 관리자를 통해 설치 및 삭제가 가능합니다. 그리고 명령 줄 인터페이스(Command-line interface, CLI)를 통해 패키지 설치 및 삭제뿐 아니라 패키지 버전 관리, 의존성 관리도 편리하게 할 수 있습니다. npm과 yarn의 정확한 차이는 무엇일까요? 우리는 어떤 툴을 사용해서 패키지 관리를 해야 할까요? 

## npm

npm은 노드 패키지 매니저(Node Package Manager)의 줄임말로 노드를 설치할 때 자동으로 설치되는 기본 패키지 관리자입니다. 크게 두 가지 역할을 수행합니다.

1. 첫 번째 역할은 [온라인 플랫폼](https://www.npmjs.com/)입니다. 사람들이 노드 패키지를 만들고, 업로드하고, 공유할 수 있는 공간으로 누구나 온라인 플랫폼(npm 레지스트리)에 게시된 패키지를 사용할 수 있습니다.
2. 두 번째 역할은 명령 줄 인터페이스입니다. 온라인 플랫폼과 상호 작용하기 위해 명령 줄 인터페이스를 사용하며 패키지 설치 및 제거가 가능합니다. 

### 설치 

노드를 다운로드하면 npm이 시스템에 자동으로 설치됩니다. 노드 설치 후 다음과 같은 명령을 통해 npm이 설치되었는지 확인할 수 있습니다.

```bash
node -v
npm -v
```

## yarn

yarn은 2016년 페이스북에서 개발한 패키지 관리자입니다. 리액트(React)와 같은 프로젝트를 진행하며 겪었던 어려움을 해결하기 위해 개발되었고, npm 레지스트리와 호환하면서 속도나 안정성 측면에서 npm보다 향상되었습니다. [2016년 페이스북이 공개한 아티클](https://engineering.fb.com/2016/10/11/web/yarn-a-new-package-manager-for-javascript/)을 읽어보시면 좋을 것 같습니다.

### 설치

yarn은 npm을 통해 설치합니다.

```bash
npm install yarn --global
```

맥 사용자라면 brew를 통해 설치할 수도 있습니다.

```bash
brew update
brew install yarn
```

## npm과 yarn의 차이점

### 속도

npm과 yarn의 주요 차이점 중 하나는 패키지 설치 프로세스를 처리하는 방법입니다. npm은 패키지를 한 번에 하나씩 순차적으로 설치합니다. 그에 비해 yarn은 여러 패키지를 동시에 가져오고 설치하도록 최적화되어 있어 패키지 설치 속도 측면에서 yarn이 npm보다 빠릅니다.

### 보안

yarn은 보안 측면에서 npm보다 더 안전한 것으로 알려져 있습니다. npm은 자동으로 패키지에 포함된 다른 패키지 코드를 실행합니다. 이로 인해 보안 시스템에 몇 가지 취약성이 발생하며 나중에 심각한 문제가 발생할 수 있습니다. 반면에 yarn은 yarn.lock 또는 package.json파일에 있는 파일만을 설치합니다. 보안은 yarn의 핵심 기능 중 하나이지만 최근 npm의 업데이트에서 npm의 보안 업데이트도 크게 향상되었습니다.


### 명령어

|       명령어       |                 npm                 |             yarn              |
| :----------------: | :---------------------------------: | :---------------------------: |
| dependencies 설치  |             npm install             |             yarn              |
|    패키지 설치     |       npm install [패키지명]        |      yarn add [패키지명]      |
|  dev 패키지 설치   |  npm install --save-dev [패키지명]  |   yarn add --dev [패키지명]   |
| 글로벌 패키지 설치 |   npm install --global [패키지명]   |  yarn global add [패키지명]   |
|    패키지 제거     |      npm uninstall [패키지명]       |    yarn remove [패키지명]     |
|  dev 패키지 제거   | npm uninstall --save-dev [패키지명] |    yarn remove [패키지명]     |
| 글로벌 패키지 제거 |  npm uninstall --global [패키지명]  | yarn global remove [패키지명] |
|      업데이트      |             npm update              |         yarn upgrade          |
|  패키지 업데이트   |        npm update [패키지명]        |    yarn upgrade [패키지명]    |


## 결론

npm과 yarn은 모두 종속성을 관리하고 패키지를 관리하기 좋은 툴입니다. 둘 다 지속적으로 관리되고 있으며 폭넓은 사용자 커뮤니티를 가지고 있고, 업데이트를 통해 추가된 기능 덕분에 거의 차이 나지 않게 되었습니다. 결론적으로 둘 중에 무엇을 선택해야 할지는 개인의 취향, 성능(패키지 설치 속도), 커뮤니티에 따라 달라질 수 있을 것 같습니다.
