<template>
    <i class="iconfont icon-back" @click="goBack"></i>
</template>

<script>
export default {
	name: 'GoBack',
	data() {
		return {};
	},
	methods: {
		goBack() {
			history.go(-1);
		},
	},
};
</script>

<style scoped lang="less">
</style>
