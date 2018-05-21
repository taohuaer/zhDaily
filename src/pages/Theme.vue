<template>
	<div class="theme">
		<mt-header class="nav-bar">
			<div slot="left">
				<HamburgerMenu></HamburgerMenu>
				<h2 class="theme-name">{{name}}</h2>
			</div>
			<div slot="right">
				（订阅）
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
			<ul>
				<li v-for="(item, index) in stories" :key="'article-item'+index">
					<router-link :to="'/theme-details/'+item.id" class="article-list-item">
						<h3>{{item.title}}</h3>
						<img :src="(item.images)?item.images[0]:''" :alt="item.title" v-if="!!(item.images)"/>
					</router-link>
				</li>
			</ul>
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
		};
	},
	props: [],
	components: {
		HamburgerMenu,
	},
	mounted() {
		this.test();
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
			})
			.catch(function(error) {
				console.log(error);
			});
		},
	},
	methods: {
		test() {
			console.log('test router')
		}
	},
};
</script>

<style scoped lang="less">
.theme {
	background-color: #f3f3f3;
	overflow: hidden;
}

.nav-bar {
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
</style>
