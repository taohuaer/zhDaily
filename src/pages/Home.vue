<template>
	<div class="home mt40 bgc-eee">
		<mt-header class="nav-bar">
			<div slot="left">
				<HamburgerMenu></HamburgerMenu>
				<h2>首页</h2>
			</div>
			<div slot="right">
				<i class="iconfont icon-custom-news"></i>
				<i class="iconfont icon-more1"></i>
			</div>
		</mt-header>
		<mt-swipe :auto="4000" class="home-swipe">
			<mt-swipe-item v-for="(item, index) in topStories" :key="'home-swipe-'+index" class="home-swipe-item">
				<router-link :to="'/home-details/'+item.id" class="home-swipe-item-link">
					<img :src="item.image" :alt="item.title" class="home-swipe-item-img" />
					<h3 class="home-swipe-item-title">{{item.title}}</h3>
				</router-link>
			</mt-swipe-item>
		</mt-swipe>
		<div class="article-list">
			<h4>今日热文</h4>
			<ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="30">
				<li v-for="(item, index) in stories" :key="'home-article-item'+index">
					<router-link :to="'/home-details/'+item.id" class="article-list-item">
						<h3>{{item.title}}</h3>
						<img :src="item.images?item.images[0]:''" :alt="item.title" />
					</router-link>
				</li>
			</ul>
		</div>
		<div class="loading-more"  v-if="loading">
			<mt-spinner type="fading-circle"></mt-spinner>
			<span class="loading-text">正在加载</span>
		</div>
	</div>
</template>

<script>
import HamburgerMenu from './../components/HamburgerMenu';
import { unlockScroll } from './../utils/scrollControl';
import { getYesterday } from './../utils/date';

export default {
	name: 'Home',
	data() {
		return {
			date: '',
			stories: [],
			topStories: [],
			currentDate: (new Date()).getTime(),
			getYesterday: getYesterday,
			loading: false,
		};
	},
	components: {
		HamburgerMenu,
	},
	mounted() {
		//解除scroll限制
		unlockScroll();

		const that = this;
		this.$http
			.get('/latest')
			.then(function(response) {
				that.date = response.data.date;
				that.stories = response.data.stories;
				that.topStories = response.data.top_stories;
			})
			.catch(function(error) {
				console.log(error);
			});
	},
	methods: {
		loadMore() {
			this.loading = true;
			const yesterday = this.getYesterday(this.currentDate);
			this.currentDate = yesterday.currentDate;
			this.getBefore(yesterday.date);
			setTimeout(() => {
				this.loading = false;
			}, 2000);
		},
		getBefore(date) {
			const that = this;
			this.$http
				.post('/before', {
					date,
				})
				.then(function(response) {
					const beforeStories = response.data.stories;
					that.stories.push(...response.data.stories);
				})
				.catch(function(error) {
					console.log(error);
				});
		},
	},
};
</script>

<style scoped lang="less">

h2 {
	display: inline;
	font-weight: normal;
	font-size: 14px;
	margin-left: 10px;
}

.icon-custom-news {
	margin-right: 10px;
}

i,
h2 {
	line-height: 40px;
}

.home-swipe {
	max-width: 100%;
	height: 250px;
}

.home-swipe-item {
	width: 100%;
	height: 100%;
}

.home-swipe-item-link {
	position: relative;
	display: block;
	width: 100%;
	height: 100%;
}

.home-swipe-item-img {
	position: absolute;
	max-width: 100%;
}

.home-swipe-item-title {
	box-sizing: border-box;
	position: absolute;
	bottom: 0;
	width: 100%;
	max-width: 100%;
	padding: 10px 16px;
	color: #fff;
	font-weight: normal;
	line-height: 1.5;
	background-color: rgba(0, 0, 0, 0.5);
	overflow: hidden;
}

.article-list {
	padding: 10px;
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
			margin-right: 12px;
			font-weight: normal;
		}

		img {
			max-width: 100%;
			height: 80px;
		}
	}
}

.prohibit-scroll {
	height: 100vh;
	overflow: hidden;
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
