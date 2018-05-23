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
	data() {
		return {

		};
	},
	components: {
		BackTop
	},

	methods: {},
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
