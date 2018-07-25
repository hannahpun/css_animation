<script>
export default {
  name: 'homepage',
  mounted(){
    var timeline = new TimelineMax({
    onComplete: myComplete
});
var time = 4;


//Detail Animation
var shape1 = TweenMax.to('.star', time, {
    rotation: 360,
    ease: Power2.easeOut
})


var shape2 = TweenMax.to('.circle', time/2, {
    scale: 1.15
})

var shape2_1 = TweenMax.to('.circle', time/2, {
    scale: 1
})

var shape3 = TweenMax.to('.square', time, {
    rotation: -360
})

// bigger
var bigger1 = TweenMax.to('.square', 0.5, {
    scale: 4
})

var bigger2 = TweenMax.to('.circle', 0.5, {
    scale: 4
})

var bigger3 = TweenMax.to('.star', 0.5, {
    scale: 5
})


// hide txt
var hideTxt = TweenMax.to('.text', 0.5, {
    opacity: 0
})

var changeBg = TweenMax.to('.star', 0.5, {
    opacity: 0
})
//home page
timeline.add(shape1,0)
.add(shape2, 0)
.add(shape2_1, time/2)
.add(shape3, 0)
.add(bigger1)  // continue 
.add(bigger2, "-=0.3")
.add(bigger3, "-=0.3")
.to('.circle', 0, {
    backgroundColor: '#1469FF'
})
.add(hideTxt)
.add(changeBg, "-=0.5")


function myComplete(){
    console.log('finish')
}
  }
}
</script>

<template src="./template.html"></template>
<style lang="scss" src="./style.scss" scoped></style>
