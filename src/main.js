import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import api from './api/install';
import axios from './api/axios';
import './plugins/element.js';
import './less/index.less';
import Vant from 'vant';
import 'vant/lib/index.css';
import { Lazyload } from 'vant';
Vue.use(Lazyload, {
    loading:'',
    error:'',
    preload:'',
    attempt:''
});
Vue.use(Vant);
Vue.use(api);
Vue.use(axios);
import VueAwesomeSwiper from 'vue-awesome-swiper'
 
// require styles
import 'swiper/dist/css/swiper.css'
 
Vue.use(VueAwesomeSwiper, /* { default global options } */)

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    'render': h => h(App)
}).$mount('#app');
