<template>
    <div>
        <slot name="top"></slot>
        {{content}}
        <slot name="bottom"></slot>
        <p class="test-data">{{this.$data.global}}</p>
    </div>
</template>

<script>

export default {
	name: 'Test',
	data() {
		return {
			content: '',
		};
	},
    props: ['text'],
    mounted() {
        this.content = this.text;
        
    },
	methods: {
		
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
