// 将types.js里的内容存为types对象
import * as types from './types.js';

// 根据actions提交的信息对state进行处理
const mutations = {
    [types.SHOW_NAV]: (state) => {
        state.navbar = true;
    },
    [types.HIDE_NAV]: (state) => {
        state.navbar = false;
    },
    [types.USER]: (state,data) => {
        state.user = data;
    },
    [types.INDEX]: (state,data) => {
        state.index = data;
    },
    [types.NAVBAR]: (state,data) => {
        state.navMessage = data;
    },
    [types.SPEAK]: (state,data) => {
        state.speak = data;
    },
    [types.WE]: (state,data) => {
        state.we = data;
    },
    [types.LOCATION]: (state,data) => {
        state.location = data;
    },
    [types.ORDER]: (state,data) => {
        state.order = data;
    },
    [types.DETAIL]: (state,data) => {
        state.detail = data;
    },
    [types.BANNER]: (state,data) => {
        state.banner = data;
    },
    [types.FOODS]: (state,data) => {
        state.foods = data;
    },
    [types.WRITE]: (state) => {
        state.write = !state.write;
    }
};

export default mutations;