<script>
import Question from '@/components/Question'
export default {
  name: 'result',
  components: {Question},
  data() {
    return {
      details: {
        q: "",
        title: "",
        nextPage: '/',
        note: "The triangle type people are natural-born leaders, full of passion and motivation,  trying to fix their mistakes as they go."
      },
      options: ["Try Again"]
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
