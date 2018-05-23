<template>
	<div>
		<mt-header class="fixed-header">
			<div slot="left">
				<GoBack></GoBack>
			</div>
			<div slot="right" class="right">
				<span class="header-item">
					<i class="iconfont icon-favorite"></i>
					<span>{{popularity}}</span>
				</span>
				<span class="header-item">
					<i class="iconfont icon-comments"></i>
					<span>{{comments}}</span>
				</span>
			</div>
		</mt-header>
		<div class="details article-container">
			<div class="article-content" v-html="body"></div>
		</div>
	</div>
</template>

<script>
import GoBack from './../components/GoBack';
export default {
	name: 'Details',
	data() {
		return {
			body: '',
			title: '',
			share_url: '',
			theme: '',
			long_comments: '',
			popularity: '',
			short_comments: '',
			comments: '',

		};
	},
	mounted() {
		this.getDetails();
		this.getExtra();
	},
	components: {
		GoBack,
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
		getExtra() {
			const post_id = this.$route.params.post_id;
			const that = this;
			this.$http
				.post('/extra', {
					post_id,
				})
				.then(function(response) {
					that.long_comments = response.data.long_comments;
					that.popularity = response.data.popularity;
					that.short_comments = response.data.short_comments;
					that.comments = response.data.comments;
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.right {
	display: flex;
	align-items: center;
	justify-content: flex-end;
}

.header-item:not(:first-child) {
	margin-left: 10px;
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
