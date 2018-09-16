export default function CreateList(component, dataUrl) {
  return {
    name: 'list-hoc',
    data() {
      return {
        items: []
      }
    },
    created() {
      fetch(dataUrl)
        .then(response => response.json())
        .then(items => this.items = items);
    },
    render(h) {
      return h(component, {
        props: {
          items: this.items,
          // 추가 포인트 #1 - HTML 속성을 추가하고 싶은 경우
          // attrs: this.$attrs
        }
      // 추가 포인트 #2 - 슬롯을 추가하고 싶은 경우
      // }, this.$slots.default);
      });
    }
  }
}