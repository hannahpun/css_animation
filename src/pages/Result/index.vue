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
        note: ''
        // note: "The triangle type people are natural-born leaders, full of passion and motivation,  trying to fix their mistakes as they go."
      },
      options: ["Try Again"]
    }
  },
  mounted(){
    var timeline = new TimelineMax();
    timeline.staggerTo('.triangle', 1, {
      cycle:{
        top: function(index){
          return Math.random()*50 + '%';
        }
      }
      
    }, 0.1)
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
