import Vue from 'vue';
import App from './App.vue';

// amazeui依赖
import 'jquery';
// 页面布局依赖
import './assets/js/amazeui.js';
import './assets/css/amazeui.css';
import './assets/css/style.css';
// 动画包
import 'animate.css';


// 导入路由并配置
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import routes from './router.config.js';
const router = new VueRouter({
    routes,
    mode: 'history' // history模式
});

// 导入状态管理
import store from './store';

// 导入数据交互插件
import resource from 'vue-resource';
Vue.use(resource);
// 统一配置:
Vue.http.interceptors.push(function (req,next){
    req.credentials = true;
    next();
});

new Vue({
    el: '#app',
    render: h => h(App),
    router, // 挂载路由
    store
})
