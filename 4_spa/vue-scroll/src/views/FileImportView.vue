<template>
  <div>
    file
  </div>
</template>

<script>
import axios from 'axios';

export default {
  created() {
    // NOTE: public 폴더 밑에 json 파일을 놓고 axios를 이용해 상대 경로로 가져오는 코드
    axios.get('../db.json')
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
</script>

<style>

</style>
