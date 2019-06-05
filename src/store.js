import Vue from 'vue';
import Vuex from 'vuex';
import actions from './store/actions'
import mutations from './store/mutations'
Vue.use(Vuex);

export default new Vuex.Store({
    'state': {
        'name': 'loins',//用户名
        city:{},//所在城市名称
        city_state:false//选择城市弹框显影状态
    },
    'mutations': actions,
    'actions': mutations
});
