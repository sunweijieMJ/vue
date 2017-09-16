// 根据组件发送的请求返回数据
const getters = {
    getNav: (state) => {
        return state.navbar;
    },
    showUser: (state) => {
        return state.user;
    },
    showIndex: (state) => {
        return state.index;
    },
    showNavbar: (state) => {
        return state.navMessage;
    },
    showSpeak: (state) => {
        return state.speak;
    },
    showWe: (state) => {
        return state.we;
    },
    showLocation: (state) => {
        return state.location;
    },
    showOrder: (state) => {
        return state.order;
    },
    showDetail: (state) => {
        return state.detail;
    },
    showBanner: (state) => {
        return state.banner;
    },
    showFoods: (state) => {
        return state.foods;
    },
    showWrite: (state) => {
        return state.write;
    }
};

export default getters;