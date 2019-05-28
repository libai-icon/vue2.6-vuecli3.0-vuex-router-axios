import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    'state': {
        'name': 'loins'
    },
    'mutations': {
        update_name(state, msg) {
            state.name = msg;
        }
    },
    'actions': {
        update_name(state, msg) {
            state.name = msg;
        }
    }
});
