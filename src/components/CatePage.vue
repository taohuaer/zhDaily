<template>
    <div>
        <mt-swipe :auto="4000" class="swipe">
            <mt-swipe-item>11111111111111111</mt-swipe-item>
            <mt-swipe-item>22222222222222222</mt-swipe-item>
            <mt-swipe-item>33333333333333333</mt-swipe-item>
        </mt-swipe>
        <ArticleList/>
    </div>
</template>

<script>
import ArticleList from './ArticleList'
export default {
	name: 'CatePage',
	data() {
		return {
			
		};
    },
    components: {
        ArticleList,
    },
	methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swipe {
	height: 280px;
	background-color: #ff5566;
}
</style>
