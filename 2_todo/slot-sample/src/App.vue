<template>
  <div>
    <h1>Slot Sample</h1>
    <ul>
      <!-- <list-item></list-item> -->
      <!-- TODO: list-item 컴포넌트를 이용하여 아래와 같이 나타내어보세요. -->
      <!-- NOTE: list-item 컴포넌트의 내용을 바꿔도 상관 없습니다. -->
      <!-- <list-item v-bind:프롭스 이름="상위 컴포넌트의 데이터 이름"></list-item>
      <list-item 프롭스 이름="문자열..."></list-item>
      <list-item v-bind:item="listItems[0]"></list-item>
      <list-item v-bind:item="'아이템 1'"></list-item>
      <list-item item="아이템 1"></list-item> -->

      <!-- <list-item 
        v-for="listItem in listItems"
        v-bind:item="listItem"
      ></list-item> -->


      <!-- <list-item item="아이템 1" listStyle="color: blue;"></list-item>
      <list-item item="아이템 2" listStyle=""></list-item>
      <list-item item="아이템 3"></list-item> -->
      <!-- <li>아이템 1</li>
      <li>아이템 2</li>
      <li>아이템 3</li> -->

      npm i
      npm run dev
      9시 13분까지 2번 -> slot 
        -> exercise 폴더 실습 
        -> props 대신 slot으로 동일하게 화면 표시

      <list-item>
        <p slot="title">아이템 1</p>
      </list-item>
      <list-item>
        <strong>아이템 2</strong>
      </list-item>
      <list-item>
        <p slot="title">아이템 3</p>
        <img slot="img" src="data:image/png;base64,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" alt="마블 로고">
      </list-item>
    </ul>
  </div>
</template>

<script>
// 'vim'으로 자동 완성
import ListItem from '@/components/ListItem.vue';

export default {
	components: {
		'list-item': ListItem,
	},
	data() {
		return {
			listItems: ['아이템 1'],
		};
	},
};
</script>

<style>
</style>