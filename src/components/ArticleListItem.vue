<template>
  <router-link to="/details" class="article-list-item">
    <h3>上海、北京、深圳、香港……到底哪里才是中国的金融中心？</h3>
    <img src="http://iph.href.lu/90x80" alt="">
  </router-link>
</template>

<script>
import { Toast } from 'mint-ui';
export default {
	name: 'ArticleListItem',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
		};
	},
	methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-list-item {
	display: flex;
	padding: 12px;
	margin-bottom: 10px;
	background-color: #fff;
	box-shadow: 2px 2px 1px #ddd;
}

.article-list-item:visited,
.article-list-item:hover,
.article-list-item:active {
	color: #8C8C8C;
}

.article-list-item h3 {
  margin-right: 12px;
  font-weight: normal;
}
</style>
