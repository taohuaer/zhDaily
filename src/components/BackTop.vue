<template>
    <i class="iconfont icon-less back-top" @click.stop="backTop" v-show="show"></i>
</template>

<script>
export default {
	name: 'GoBack',
	data() {
		return {
			show: true,
		};
	},
	mounted() {
		this.show = false;
		this.listenScroll();
	},
	methods: {
		listenScroll() {
			document.addEventListener('scroll', () => {
				if (document.documentElement.scrollTop > 100) {
					this.show = true;
				} else {
					this.show = false;
				}
			});
		},
		backTop() {
			 const timer = setInterval(function() {
				let top = document.body.scrollTop || document.documentElement.scrollTop;
				let speed = top / 4;
				if (document.documentElement.scrollTop > 0) {
                    document.documentElement.scrollTop -= speed;
				} else if(document.body.scrollTop > 0) {
					document.body.scrollTop -= speed;
                } else {
					clearInterval(timer);
                }
			}, 30);
		},
	},
};
</script>

<style scoped lang="less">
.back-top {
	position: fixed;
	right: 10px;
	bottom: 10px;
	width: 30px;
	height: 30px;
	color: #fff;
	text-align: center;
	line-height: 30px;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
}
</style>
