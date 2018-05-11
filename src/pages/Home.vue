<template>
  <div>
    <mt-header>
      <div slot="left">
        <i class="iconfont icon-category" @click="showMenu"></i>
        <h2>首页</h2>
      </div>
      <div slot="right">
        <i class="iconfont icon-custom-news"></i>
        <i class="iconfont icon-more1"></i>
      </div>
    </mt-header>
    <CatePage>
    </CatePage>
  </div>
</template>

<script>
  import CatePage from './../components/CatePage.vue';
  import axios from 'axios';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        date: '',
        stories: [],
        topStories: []
      }
    },
    components: {
      CatePage: CatePage
    },
    mounted() {
      axios
        .get('http://localhost:3333/latest')
        .then(function(response) {
          console.log(response.data.body);
          that.content = response.data.body;
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    methods: {
      pop() {
        Toast('提示信息');
      },
      showMenu() {
        this.$emit('showMenu', true);
        console.log('1234k;djfa');
  
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
