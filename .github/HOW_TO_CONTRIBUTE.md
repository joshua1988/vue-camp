# 프로젝트에 기여하는 방법

- 주제 선정부터 Pull Request 보내는 방법에 대해 설명합니다.

## 주제의 선정
[프로젝트에 어떻게 기여할 것인가?](./WHAT_TO_CONTRIBUTE.md)를 참고하여, 
기여하고자 하는 주제를 선정합니다.

## ISSUE 선정 또는 신규이슈의 등록
이미 등록된 이슈가 있다면, 레이블을 잘 살펴보세요. 'Help Wanted' 와 같은 종류의 이슈들은, 바로 여러분의 도움을 기다리고 있는 이슈일 수 있습니다. 

혹은, 기여하기로한 내용이 Issue 목록에는 없지만, 내가 발견한 버그, 사이트 툴링등의 주제가 있다면 Issue를 새로 등록합니다.
이때, 레이블을 달아두면 어떤 내용인지를, 목록에서 한눈에 알아볼 수 있겠죠?

이슈의 내용은 이 이슈에 대한 간략한 내용 배경설명, 
이슈해결을 위해 참고할만한 자료등의 링크를 달아 놓으면 좋습니다.

## Issue의 할당.
자 이제 등록한 이슈중 내가 해결하고자 하는 이슈를 할당합니다. 
해당 Repo에는 여러분이 많은 내용들을 참여해 주시고 계신것을 알게 됩니다. 또한 다른 참여자분들도 어떤 주제들을 올리고 있는지도 알아보기 쉽겠죠? 

<img width="572" alt="스크린샷 2021-08-11 오후 10 45 52" src="https://user-images.githubusercontent.com/33050650/129040427-e899ebf5-59b5-45d9-8dfa-37f0adc35fd1.png">

> 회사 실무에서도 해결하고자 하는 사항에 대한 요약의 문서를 이곳에 정리하고 담당자를 할당합니다.

## 코드의 작성
자 이제 등록한 이슈에 대한 실제 코드를 작성합니다.
코드라고 표현했지만 Cracking Vue.js 에서는 markdown 형식의 문서일 가능성이 높습니다.

보통 Open Source Repository는 자유롭게 clone 하여 내려받을수는 있지만, 브랜치를 push할 수 있는 권한은 제한되어 있는 경우가 많습니다. 이럴 경우 어떻게 브랜치를 생성하고 Push를 하게될까요? 

### Fork Repository
바로 참여하고자 하는 Repository 를  Fork 하여 나의 Github 계정으로 가져올 수 있습니다.
<img width="991" alt="스크린샷 2021-08-11 오후 10 57 58" src="https://user-images.githubusercontent.com/33050650/129042360-ba6c6f15-90b6-4144-9f78-483fdc82119d.png">

Fork 버튼을 누르면.. `joshua1988/vue-camp` 를
나의 Repository 로 복사 할 수 있습니다.
<img width="978" alt="스크린샷 2021-08-11 오후 10 59 46" src="https://user-images.githubusercontent.com/33050650/129042763-d0f01162-1825-41d2-a967-ec60425eec0a.png">

Fork가 완료되면 내 계정 하위에 똑같은 코드들이 복사되어 있는것을 보실 수 있습니다.
<img width="437" alt="스크린샷 2021-08-11 오후 11 01 10" src="https://user-images.githubusercontent.com/33050650/129042946-6ea22be3-752d-4d7e-bdfb-1315e7a4e6d7.png">

이제 내 계정안의 Repository이기 때문에, 자유롭게 branch를 생성할 수 있습니다.
git clone을 통해 repo를 local에 내려받고, 수정, 추가하고자 하는 부분을 작성합니다.

### Fork 된 후에 원본 Repository 최신화.
<img width="481" alt="스크린샷 2021-08-11 오후 11 09 14" src="https://user-images.githubusercontent.com/33050650/129044306-8446cec0-a3e7-43fd-a5f5-af9e2c1c2ecf.png">

```
git remote -v show
```
를 실행하면, Fork된 Repository이므로, origin 이외에 'upstream'이라는 또 하나의 remote path 가 보입니다.
Fork된 이후에도 원본 Repository에는 많은 변경사항들이 발생할텐데요, 업데이트를 위해서는
```
git fetch upstream
```
을 실행해 주면 됩니다!

## Branch 생성 및 소스 수정
자 이제 코드를 작성할 모든 준비는 끝났습니다.
다른 작업과 마찬가지로 [PR & Commit 작성 가이드](./DOC_CONTRIBUTION_GUIDE.md)를 참고하여
새로운 Branch를 만들어 내용을 수정하고, commit 합니다.

하나의 commit은 가능하면 commit메시지가 의미하는 하나의 내용을 담는것이 좋습니다. [(커밋의 원자성)](https://palindrom615.dev/git-know-how/#git_add_-p%EB%A1%9C_%EC%9B%90%EC%9E%90%EC%A0%81_%EC%BB%A4%EB%B0%8B%ED%95%98%EA%B8%B0)

이는 Pull Request를 리뷰할때나 이후 History 를 파악할때 큰 도움이 됩니다.

## Create Pull Request
내용을 수정하고 commit까지 마치게 되면 code 를 remote 에 push합니다.

이때 push하는 remote 대상은 'origin' 입니다. (fork 받은 내 계정의 repo)

```
git push origin {브랜치명}
git push origin docs/how-to-pull-request
```

remote에 push된 이후, 나의 repo에서 `New Pull Request`를 누르면
<img width="1202" alt="스크린샷 2021-08-11 오후 11 26 59" src="https://user-images.githubusercontent.com/33050650/129047419-80002366-daf7-422f-b9c3-81ad64da97d7.png">

아래와 같이 나의 Repo: branch --> vue-camp:master 로 경로가 설정됩니다.
<img width="1204" alt="스크린샷 2021-08-11 오후 11 39 09" src="https://user-images.githubusercontent.com/33050650/129049577-ff6c9f9f-a569-41ac-b03e-320add369653.png">

또한 PR을 작성하였으나, Review준비가 덜 되었다면, 
`Draft Pull request` 로 임시로 올려두고 수정을 더 할 수 있습니다. 

이후 리뷰준비가 완료되면 `Ready for review` 버튼을 눌러 상태를 변경할 수 있습니다.

## Review & Merge & Done!
Maintainer가 PR에 대한 리뷰와 수정이 필요한 부분에 대해 피드백을 줄 수도 있습니다.
이 부분에 대한 추가 수정과 commit 을 진행하고 PR이 머지되면, 처음에 생성한 issue를 close 해주시면 됩니다.

자 이제 Open Source Contributor가 되셨습니다! 축하합니다.

