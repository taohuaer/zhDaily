<template>
	<div class="menu">
		<i class="iconfont icon-category hamburger-menu" @click="showMenu"></i>
		<div class="nav-menu" v-show="isShow">
			<div class="mask" @click="hideMenu"></div>
			<div class="menu-content">
				<header class="menu-header">
					<div class="user-info">
						<img src="http://iph.href.lu/50x50" alt="" class="avatar">
						<span>请登陆</span>
					</div>
					<div class="user-action">
						<div class="collection">
							<i class="iconfont icon-favorite"></i>
							<span>我的收藏</span>
						</div>

					</div>
				</header>
				<ul class="menu-list">
					<li>
						<router-link to="/">
							<h3>首页</h3>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/13">
							<h3>日常心理学</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/12">
							<h3>用户推荐日报</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/4">
							<h3>设计日报</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/3">
							<h3>电影日报</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/11">
							<h3>不许无聊</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/5">
							<h3>大公司报</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/6">
							<h3>财经日报</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/10">
							<h3>互联网安全</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/2">
							<h3>开始游戏</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/7">
							<h3>音乐日报</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/9">
							<h3>动漫日报</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
					<li>
						<router-link to="/theme/8">
							<h3>体育日报</h3>
							<i class="iconfont icon-more"></i>
						</router-link>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { lockScroll, unlockScroll } from './../utils/scrollControl';

export default {
	name: 'HamburgerMenu',
	data() {
		return {
			isShow: false,
		};
	},
	methods: {
		showMenu() {
			//显示menu
			this.isShow = true;
			//解除scroll限制
			lockScroll();
		},
		hideMenu() {
			//隐藏menu
			this.isShow = false;
			//解除scroll限制
			unlockScroll();
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.menu {
	display: inline-block;
}

.hamburger-menu {
	margin-right: 10px;
}

.nav-menu {
	position: fixed;
	top: 0;
	left: 0;
	box-sizing: border-box;
	height: 100vh;
	overflow: auto;
	width: 100%;
	background-color: rgba(0, 0, 0, 0.3);
	z-index: 999;

	.menu-content {
		width: 70%;
		background-color: #fff;

		.menu-header {
			padding: 16px;
			color: #fff;
			background-color: #26a2ff;
			.user-info {
				display: flex;
				align-items: center;

				.avatar {
					border-radius: 50%;
					margin-right: 20px;
				}
			}

			.user-action {
				display: flex;
				justify-content: space-between;
				margin-top: 20px;
			}
		}

		.menu-list {
			padding: 18px;
			li {
				height: 50px;
				list-style: none;
				a {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 100%;
					height: 100%;
					line-height: 40px;
					text-decoration: none;
					color: #000;
				}

				h3 {
					font-weight: normal;
				}
			}
		}

		.active {
			background-color: #ccc;
		}
	}

	.mask {
		position: fixed;
		width: 100%;
		height: 100vh;
		top: 0;
		background-color: rgba(0, 0, 0, 0.65);
		z-index: -1;
	}
}
</style>
