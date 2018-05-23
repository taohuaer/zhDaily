<template>
	<div class="theme mt40 bgc-eee">
		<mt-header class="nav-bar">
			<div slot="left">
				<HamburgerMenu></HamburgerMenu>
				<h2 class="theme-name">{{name}}</h2>
			</div>
		</mt-header>
		<div class="theme-header">
			<img :src="background" :alt="description" class="theme-header-img" onerror="this.src='http://iph.href.lu/375x250'" />
			<span class="theme-header-description">{{description}}</span>
		</div>
		<div class="editors">
			<h4>主编</h4>
			<!-- 待完善 -->
			<img v-for="(item, index) in editors" :key="'editors-item'+index" :src="item.avatar" class="editor-avatar" />
		</div>
		<div class="article-list">
			<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="disabledLoading" infinite-scroll-distance="30">
				<li v-for="(item, index) in stories" :key="'article-item'+index">
					<router-link :to="'/theme-details/'+item.id" class="article-list-item">
						<h3>{{item.title}}</h3>
						<img :src="(item.images)?item.images[0]:''" :alt="item.title" v-if="!!(item.images)" />
					</router-link>
				</li>
			</ul>
			<div class="loading-more" v-if="loading">
				<mt-spinner type="fading-circle"></mt-spinner>
				<span class="loading-text">正在加载</span>
			</div>
		</div>
	</div>
</template>

<script>
import HamburgerMenu from './../components/HamburgerMenu';

export default {
	name: 'Home',
	data() {
		return {
			stories: '',
			description: '',
			background: '',
			name: '',
			image: '',
			editors: '',
			image_source: '',
			currentStoryId: '',
			loading: false,
			disabledLoading: false
		};
	},
	props: [],
	components: {
		HamburgerMenu,
	},
	mounted() {
		const theme_id = this.$route.params.theme_id;
		const that = this;

		this.$http
			.post('/theme', {
				theme_id,
			})
			.then(function(response) {
				const storiesLength = response.data.stories.length;
				that.stories = response.data.stories;
				that.description = response.data.description;
				that.background = response.data.background;
				that.name = response.data.name;
				that.image = response.data.image;
				that.editors = response.data.editors;
				that.image_source = response.data.image_source;
				that.currentStoryId = response.data.stories[storiesLength - 1].id;
				console.log(that.currentStoryId);
			})
			.catch(function(error) {
				console.log(error);
			});
	},
	watch: {
		$route(to, from) {
			//数据操作
			const theme_id = this.$route.params.theme_id;
			const that = this;

			this.$http
				.post('/theme', {
					theme_id,
				})
				.then(function(response) {
					that.stories = response.data.stories;
					that.description = response.data.description;
					that.background = response.data.background;
					that.name = response.data.name;
					that.image = response.data.image;
					that.editors = response.data.editors;
					that.image_source = response.data.image_source;
					that.currentStoryId = response.data.stories[0].id;
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
	methods: {
		loadMore() {
			this.loading = true;
			this.getBefore(this.currentStoryId);
			setTimeout(() => {
				this.loading = false;
			}, 2500);
		},
		getBefore(currentStoryId) {
			const that = this;
			const theme_id = this.$route.params.theme_id;
			const story_id = this.currentStoryId;

			this.$http
				.post('/themeBefore', {
					theme_id,
					story_id,
				})
				.then(function(response) {
					const beforeStories = response.data.stories;
					const storiesLength = response.data.stories.length;
					that.stories.push(...response.data.stories);
					if (response.data.stories.length > 0) {
						that.currentStoryId = response.data.stories[storiesLength - 1].id;
					} else {
						that.disabledLoading = true;
					}
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
};
</script>

<style scoped lang="less">
.theme {
	overflow: hidden;
}

.nav-bar {
	position: fixed;
	top: 0;
	z-index: 999;
	width: 100%;

	.theme-name {
		display: inline-block;
		font-weight: normal;
	}
}

.theme-header {
	position: relative;
	height: 250px;
	overflow: hidden;
	background-color: #ccc;
	.theme-header-img {
		position: absolute;
		top: 50%;
		left: 50%;
		width: 100%;
		transform: translate(-50%, -50%);
	}
	.theme-header-description {
		position: absolute;
		bottom: 0;
		box-sizing: border-box;
		width: 100%;
		padding: 10px;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.65);
	}
}

.editors {
	display: flex;
	align-items: center;
	height: 40px;
	padding: 10px;
	h4 {
		margin-right: 10px;
		font-weight: normal;
	}
	.editor-avatar {
		width: 30px;
		margin-right: 10px;
		border-radius: 50%;
	}
}

.article-list {
	padding: 0 10px 10px;
	h4 {
		display: block;
		margin-bottom: 14px;
		color: #8c8c8c;
	}
	.article-list-item {
		display: flex;
		justify-content: space-between;
		padding: 12px;
		margin-bottom: 10px;
		background-color: #fff;
		box-shadow: 2px 2px 1px #ddd;

		&:link {
			color: #333;
		}

		&:visited,
		&:hover,
		&:active {
			color: #8c8c8c;
		}

		h3 {
			font-weight: normal;
		}

		img {
			max-width: 100%;
			height: 80px;
			margin-left: 12px;
		}
	}
}

.loading-more {
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 20px;
}

.loading-text {
	margin-left: 10px;
}
</style>
