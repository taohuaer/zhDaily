<template>
    <div>
        <mt-header>
            <div slot="left">
                <i class="iconfont icon-back" @click="goBack"></i>
            </div>
            <div slot="right" class="right">
                <i class="iconfont icon-share header-item"></i>
                <span class="header-item">
                    <i class="iconfont icon-favorite"></i>
                    <span>123</span>
                </span>
                <span class="header-item">
                    <i class="iconfont icon-comments"></i>
                    <span>567</span>
                </span>
                <i class="iconfont icon-good header-item"></i>
            </div>
        </mt-header>
        <div class="details article-container">
            <div class="article-content" v-html="body"></div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Details',
	data() {
		return {
			body: '',
			title: '',
			share_url: '',
			theme: '',
		};
	},
	mounted() {
        this.getDetails();
    },
	methods: {
		getDetails() {
			const post_id = this.$route.params.post_id;
			const that = this;
			this.$http
				.post('/details', {
					post_id,
				})
				.then(function(response) {
					that.body = response.data.body;
					that.title = response.data.title;
					that.theme = response.data.theme;
				})
				.catch(function(error) {
					console.log(error);
				});
		},
		goBack() {
			history.go(-1);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.right {
	display: flex;
	align-items: center;
}

.header-item {
	margin-right: 12px;
}

.article-container header {
	position: relative;
	height: 250px;
	overflow: hidden;
}

.article-header-img {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 100%;
	min-height: 100%;
}

.article-header-title {
	position: absolute;
	bottom: 0;
	box-sizing: border-box;
	width: 100%;
	padding: 10px 16px 20px;
	color: #fff;
	font-weight: normal;
	line-height: 1.5;
	background-color: rgba(0, 0, 0, 0.5);
}

.article-header-img-source {
	position: absolute;
	bottom: 6px;
	right: 6px;
	font-size: 10px;
	color: #fff;
}

.article-content {
	box-sizing: border-box;
	padding: 10px;
	overflow: hidden;
}
</style>
