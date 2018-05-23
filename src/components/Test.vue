<template>
	
	<div>
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis laborum sapiente libero saepe, ipsa in repellendus dignissimos rerum ipsam possimus, minus itaque harum reiciendis repudiandae numquam eveniet aut cumque!
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis laborum sapiente libero saepe, ipsa in repellendus dignissimos rerum ipsam possimus, minus itaque harum reiciendis repudiandae numquam eveniet aut cumque!
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis laborum sapiente libero saepe, ipsa in repellendus dignissimos rerum ipsam possimus, minus itaque harum reiciendis repudiandae numquam eveniet aut cumque!
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis laborum sapiente libero saepe, ipsa in repellendus dignissimos rerum ipsam possimus, minus itaque harum reiciendis repudiandae numquam eveniet aut cumque!
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis laborum sapiente libero saepe, ipsa in repellendus dignissimos rerum ipsam possimus, minus itaque harum reiciendis repudiandae numquam eveniet aut cumque!
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident nobis laborum sapiente libero saepe, ipsa in repellendus dignissimos rerum ipsam possimus, minus itaque harum reiciendis repudiandae numquam eveniet aut cumque!
		<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="500">
			<li v-for="(item, index) in list" :key="index">{{ item }}</li>
		</ul>
		<mt-spinner type="fading-circle" v-if="loading"></mt-spinner>
	</div>
</template>

<script>
import test1 from './test1';

export default {
	name: 'Test',
	data() {
		return {
			loading: false,
			list: [1, 2]
		};
	},
	components: {
		test1,
	},
	mounted() {},
	methods: {
		loadMore() {
			this.loading = true;
			setTimeout(() => {
				this.list.push(1);
				
				this.loading = false;
			}, 2000);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
