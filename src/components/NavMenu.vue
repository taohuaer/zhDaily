<template>
  <div class="nav-menu">
    <div class="mask" @click="hideMenu"></div>
    <div class="content">
      <header>
        <div class="user-info">
          <img src="http://iph.href.lu/50x50" alt="" class="avatar">
          <span>请登陆</span>
        </div>
        <div class="user-action">
          <div class="collection">
            <i class="iconfont icon-favorite"></i>
            <span>我的收藏</span>
          </div>
          <div class="download">
            <i class="iconfont icon-icondownload"></i>
            <span>离线下载</span>
          </div>
        </div>
      </header>
      <ul class="menu-list">
        <li>
          <a href="">
            <h3>首页</h3>
          </a>
        </li>
        <li>
          <a href="">
            <h3>日常心理学</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>用户推荐日报</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>设计日报</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>电影日报</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>不许无聊</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>大公司报</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>财经日报</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>互联网安全</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>开始游戏</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>音乐日报</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>动漫日报</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
        <li>
          <a href="">
            <h3>体育日报</h3>
            <i class="iconfont icon-more"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NavMenu',

	data() {
		return {
      msg: 'Welcome to Your Vue.js App'
		};
	},
	methods: {
    hideMenu() {
      console.log('closemenu');
      
      this.$emit('closeMenu', false);
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.nav-menu {
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
}

.mask {
	position: absolute;
	top: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
}

.content {
	position: absolute;
	top: 0;
	width: 70%;
	height: 100%;
	background-color: #fff;
	z-index: 999;
}

header {
    padding: 16px;
  color: #fff;
  background-color: #26a2ff;

}

.user-info {
  display: flex;
  align-items: center;
}

.avatar {
  border-radius: 50%;
  margin-right: 20px;
}

.user-action {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.menu-list {
  padding: 18px;
}

.menu-list li {
  height: 42px;
  list-style: none;
}

.menu-list li a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  line-height: 42px;
  text-decoration: none;
  color: #000;
}

.menu-list li h3 {
  font-weight: normal;
}

.active {
  background-color: #ccc;
}


</style>
