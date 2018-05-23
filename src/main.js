// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.60.43:3333/';

Vue.prototype.$http = axios;






import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import './iconfont/iconfont.css';
import './style/normal.css';
import './style/details.css';
import './style/base.css';

Vue.use(MintUI);
Vue.use(MintUI.InfiniteScroll);


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { 
    App
  },
  template: '<App/>'
});
