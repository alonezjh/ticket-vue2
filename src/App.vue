<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" class="app-view"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  created () {
    if (this.$route.name === null) {
      this.$router.push('movie')
    }
    //console.log(this.$route.name)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: auto;
  overflow: hidden;
  position: absolute;
}
.app-view {
  z-index: 1;
  width: 100vw;
  height: auto;
  overflow: hidden;
  position: absolute;
  transition: transform 0.3s ease;
  -webkit-overflow-scrolling: touch;
}

@media screen and (min-width: 500px) {
  #app {
    width: 500px;
    left: 50%;
    transform: translate(-50%,0);
  }
  .app-view {
    width: 500px;
    left: 50%;
    transform: translate(-50%,0);
  }
}


</style>
