<template>
  <div id="app">
    <router-view />
		<backTop></backTop>
  </div>
</template>

<script>
import BackTop from './components/BackTop'
export default {
	name: 'App',
	components: {
		BackTop
	}
};
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
