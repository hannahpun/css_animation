<script>
export default {
  name: 'question',
  data() {
    return {
      show: false
    }
  },
  props: {
    detail: {
      type: Object,
      default: null
    },
    options: {
      type: Array,
      default: null
    }
  },
  mounted(){
    this.show = true;
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
