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
    }, 0.3)
    .to('.triangle11', 4, {
      left: '120%',
      bottom: '120%',
      scale: 5
    })
    
    timeline.pause()

    
    
    

    window.addEventListener("scroll", function(){
      let currentY = window.scrollY;

      let pageHeight = window.screen.availHeight - window.innerHeight;
      // debugger;
     
      let progress = currentY/pageHeight

      console.log('html: ', window.screen.availHeight )
      console.log('body: ', window.innerHeight)
      // console.log("currentY: ", currentY)
      // console.log("pageHeight: ", pageHeight)
      console.log('progress: ', progress)
      // console.log('<hr/>')
      
      timeline.progress(progress)
      timeline.pause()
    })
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
