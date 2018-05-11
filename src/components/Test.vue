<template>
    <div>
        <button @click="getJson">GetJson</button>
        <div class="content" v-html="content">
            
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
	name: 'Test',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			content: '',
		};
	},
	methods: {
		getJson() {
			const that = this;
			axios
				.get('http://localhost:3333')
				.then(function(response) {
					console.log(response.data.body);
					that.content = response.data.body;
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
