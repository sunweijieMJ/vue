import Vue from 'vue'; // 引入vue
import Vuex from 'vuex';
Vue.use(Vuex);

// 导入四个对象,并一并导出
import actions from './actions.js';
import mutations from './mutations.js';
import state from './state.js';
import getters from './getters.js';

export default new Vuex.Store({
    actions,mutations,state,getters
});