<script>
export default {
  name: 'done',
  mounted(){
    var timeline = new TimelineMax({
        onComplete: this.myComplete
    });
    timeline.staggerTo('.triangle', 1, {
      left: '120%',
      bottom: '120%'
    },0.3)
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
