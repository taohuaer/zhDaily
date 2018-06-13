<template>
	<div class="wrap">
		此时的testId是：{{testId}}
		<br/>
		<router-link to="/test/bb">跳转到bb</router-link>
	</div>
</template>

<script>
import test1 from './test1';

export default {
	name: 'Test',
	data() {
		return {
			testId: '',
		};
	},
	mounted() {
		this.testId = this.$route.params.testId;
	},
	watch: {
		$route(to, from) {
			this.testId = this.$route.params.testId;
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
	margin: 1em 1em 1em 9em;
}
</style>
