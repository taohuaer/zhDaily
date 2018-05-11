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
        <div class="content" v-html="content"></div>
        
    </div>
</template>

<script>
import axios from 'axios';
import './../style/details.css';
export default {
	name: 'Details',
	data() {
		return {
			msg: 'Welcome to Your Vue.js App',
			content: '',
		};
	},
	mounted() {
		const that = this;
		axios
			.get('http://localhost:3333')
			.then(function(response) {
				
				that.content = response.data.body;
			})
			.catch(function(error) {
				console.log(error);
			});
	},
	methods: {
        goBack() {
            history.go(-1)
        }
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.right {
	display: flex;
	align-items: center;
}
.header-item {
	margin-right: 12px;
}

.content {
    box-sizing: border-box;
    padding: 10px;
    overflow: hidden;
}
</style>
