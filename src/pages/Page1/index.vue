<script>
export default {
  name: 'page1',
  data() {
    return {
      show: false
    }
    
  },
  mounted(){
    this.show = true;
    // shape
    var timeSquire = new TimelineMax({
        onComplete: this.myComplete
    });

    //Detail Animation
    timeSquire.from('.square', 1.2, {
        top: '150%',
        delay: 0.5
    })
    .to('.square', 5, {
      rotation: 360,
      ease: Power3.easeOut
    })

  },
  methods: {
    myComplete(){
      console.log('finish2')
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
