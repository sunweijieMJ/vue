// 导入所有组件用于配置路由
import contents from './components/contents.vue';
import detail from './components/detail.vue';
import index from './components/index.vue';
import klist from './components/klist.vue';
import location from './components/location.vue';
import map from './components/map.vue';
import member from './components/member.vue';
import order from './components/order.vue';
import search from './components/search.vue';
import speak from './components/speak.vue';
import we from './components/we.vue';
import yhq from './components/yhq.vue';
import login from './components/login.vue';
import reg from './components/reg.vue';

// 路由配置
const routes = [
    {path:'/',redirect:'/index'},
    {path:'/contents',component:contents},
    {path:'/detail',component:detail},
    {path:'/index',component:index},
    {path:'/klist',component:klist},
    {path:'/location',component:location},
    {path:'/map',component:map},
    {path:'/member',component:member},
    {path:'/order',component:order},
    {path:'/search',component:search},
    {path:'/speak',component:speak},
    {path:'/we',component:we},
    {path:'/yhq',component:yhq},
    {path:'/login',component:login},
    {path:'/reg',component:reg}
];

export default routes;