<script>

export default {
  name: 'done',
  mounted(){
    var that = this;
    let currentY = 0
    var timeline = new TimelineMax({
        onComplete: this.myComplete
    });


    var bigTriangle = TweenMax.to('.triangle11', 3, {
      x: -550,
      y: 250
    })
    

    timeline.staggerTo('.triangle', 1, {
      cycle:{
        //an array of values
        // backgroundColor:["red", "white", "#00f"],
        //function that returns a value
        x: function(index){
          return 2000;
        },
        y: function(index){
          return -500 - index*150;
        }
      }   
    }, 0.1)
    .to('.result', 0.1, {
      // backgroundColor: '#0027C8'
    }, 2)
    .to('.text', 0.1, {
      opacity: 0
    }, 2)
    .add(bigTriangle, 1)
    
    timeline.pause()

    
    
    // var htmlH = document.documentElement.scrollHeight - 1000;
    let progress = 0
    window.addEventListener("scroll", function(){
      let pageHeight = document.querySelector('html').scrollHeight - window.innerHeight;
      currentY = window.scrollY;

      
      // debugger;
      // console.log(
      //   currentY,
      //   pageHeight,
      //   document.querySelector('html').scrollHeight,
      //   document.querySelector('html').clientHeight,
      // )
      progress = currentY/pageHeight
     
      
      timeline.progress(progress)
      timeline.pause()
    })
  },
  methods: {
    myComplete(){
      this.$router.push('result')
    }
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
