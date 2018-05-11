<template>
    <div class="article-list">
        <span class="list-title">今日热闻</span>
        <article-list-item></article-list-item>
        <article-list-item></article-list-item>
        <article-list-item></article-list-item>
    </div>
</template>

<script>
import ArticleCard from './ArticleListItem.vue'
export default {
	name: 'ArticleList',
	data() {
		return {
			
		};
    },
    components: {
        ArticleListItem: ArticleCard
    },
	methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .article-list {
        background-color: #f3f3f3;
        padding: 10px;
    }

    .list-title {
        display: block;
        margin-bottom: 16px;
        color: #8C8C8C;
    }
</style>
