<template>
  <div class="min-h-screen bg-grey-darker p-8">
    <div class="max-w-sm mx-auto">
      <div class="card">
        <label class="block">
          <span class="form-label mb-2">Select a date</span>
          <input class="form-input" id="datepicker" type="text" placeholder="YYYY-MM-DD">
        </label>
      </div>
    </div>
  </div>
</template>

<script>
import Pikaday from 'Pikaday';

export default {
  data() {
    return {
      // TODO #1 : 인풋 태그의 값을 뷰의 data에서 관리할 수 있게 속성을 추가하세요.

    }
  },
  // TODO #3 : 날짜 선택기 영역을 별도의 컴포넌트로 분리해보세요. 컴포넌트 명은 DatePicker 사용
  mounted() {
    const picker = new Pikaday({
      field: document.querySelector('#datepicker'),
      format: 'YYYY-MM-DD',
      // TODO #2 : 인풋 태그에서 선택한 날짜를 뷰 data 속성에서 관리할 수 있게 구현하세요.
      onSelect: function() {
        
      }
    });
  }
}
</script>

<style src="./assets/css/app.css"/>