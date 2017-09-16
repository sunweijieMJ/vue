// 将types.js里的内容存为types对象
import * as types from './types.js';

// 接受请求,进行逻辑判断,并发送请求给mutations
const actions = {
    showNav: ({commit}) => {
        commit(types.SHOW_NAV);
    },
    hideNav: ({commit}) => {
        commit(types.HIDE_NAV);
    },
    getUser: ({commit},data) => {
        commit(types.USER,data);
    },
    getIndex: ({commit},data) => {
        commit(types.INDEX,data);
    },
    getNavbar: ({commit},data) => {
        commit(types.NAVBAR,data);
    },
    getSpeak: ({commit},data) => {
        commit(types.SPEAK,data);
    },
    getWe: ({commit},data) => {
        commit(types.WE,data);
    },
    getLocation: ({commit},data) => {
        commit(types.LOCATION,data);
    },
    getOrder: ({commit},data) => {
        commit(types.ORDER,data);
    },
    getDetail: ({commit},data) => {
        commit(types.DETAIL,data);
    },
    getBanner: ({commit},data) => {
        commit(types.BANNER,data);
    },
    getFoods: ({commit},data) => {
        commit(types.FOODS,data);
    },
    getWrite: ({commit}) => {
        commit(types.WRITE);
    }
};

export default actions;