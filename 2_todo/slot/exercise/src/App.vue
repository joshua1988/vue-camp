<template>
  <div class="min-h-screen bg-grey-lighter p-8">
    <div class="max-w-xs mx-auto mb-8">
      <photo-card>
        <img slot="image"
          v-bind:src="imageLinks[0]"
          alt="">
        <template slot="title">
          Card 1
        </template>
        <p slot="contents">
          Card Content 1
        </p>
      </photo-card>

      <PhotoCard></PhotoCard>
      <photo-card></photo-card>
      <!-- <photo-card 
        v-bind:image="imageLinks[0]" 
        title="Card 1"
        contents="Card Content 1"></photo-card> -->
        <!-- v-bind:title="Card 1"  -->
      <!-- 일반 문자열을 ID에 대입 -->
      <!-- <p id="100"></p> -->
      <!-- 데이터의 속성 값을 엮음 (데이터 바인딩) -->
      <!-- <p v-bind:id="num"></p> -->
    </div>

    <div class="max-w-xs mx-auto mb-8">
      <photo-card>
        <img slot="image" 
          v-bind:src="imageLinks[1]" alt="">
        <template slot="title">
          Card 2
        </template>
        <a href="#" slot="contents">go to sth</a>
        <!-- <p slot="contents">Card Content 2</p> -->
      </photo-card>
      <!-- <photo-card 
        :image="imageLinks[1]" 
        title="Card 2" 
        contents="Card Content 2"></photo-card> -->
    </div>
  </div>
</template>

<script>
import PhotoCard from './components/PhotoCard.vue';

export default {
  components: {
    // 'PhotoCard': PhotoCard,
    PhotoCard,
  },
  data() {
    return {
      imageLinks: [
        'https://images.unsplash.com/photo-1495835788122-ca48931258be?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=acc48b0187b28f7a221362b843f15755&auto=format&fit=crop&w=3450&q=80',
        'https://images.unsplash.com/photo-1490855137152-82177ecaf6e4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=2929d63d861df6513b9e1e34196f71a2&auto=format&fit=crop&w=700&q=60'
      ],
      num: 100,
    }
  },
  methods: {
    sum() {
      const sum = () => 10;
    }
  }
}
</script>

<style src="./assets/css/app.css"/>