<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
body{
  background-color: $blue;
  font-family: 'Roboto';
  color: $w;
  font-size: 20px;
  font-weight: normal;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
}
button:focus{
  outline: none;
}

h1{
  font-size: 64px;
  font-weight: bold;
}
h2{
  font-size: 24px;
  font-weight: normal;
}
h3{
  font-size: 36px;
}

.page{  
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: space-between;
    overflow: hidden;
}

//fade
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
