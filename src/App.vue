<template>
  <div id="app" @closeMenu="closeMenu">
    <router-view @showMenu="showMenu"/>
    <NavMenu v-show="isShow" @closeMenu="closeMenu"></NavMenu>
  </div>
</template>

<script>
  import NavMenu from './components/NavMenu'
  
  export default {
    name: 'App',
    data() {
      return {
        isShow: false
      }
    },
    components: {
      NavMenu,
    },
    methods: {
      showMenu(data) {
        this.isShow = data;
      },
      closeMenu(data) {

        this.isShow = data;
        console.log('???')
      },
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }
  
  #app {
    height: 100vh;
  }
</style>
