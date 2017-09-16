<template>
    <div id="app">
        <keep-alive>
            <transition
                enter-active-class="animated zoomInDown"
                leave-active-clas="animated slideOutRight"
            >
                <router-view></router-view>
            </transition>
        </keep-alive>
        <keep-alive>
            <navbar v-show="getNav"></navbar>
        </keep-alive>
    </div>
</template>

<script>
    import navbar from './components/childCom/navbar.vue';

    import {mapGetters} from 'vuex';
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    components: {
        navbar
    },
    methods: {
        routerChange(path){
          // 去除路径前面的/
          path = path.substring(1);
          console.log(path);
          // 对路由跳转的方向进行判断,决定是否显示和隐藏头尾,用$store的dispatch方法向actions传递信息
          if(path == 'index' || path == 'speak' || path == 'we' || path == "member"){
              this.$store.dispatch('showNav');
          } else {
              this.$store.dispatch('hideNav');
          }
        }
    },
    // 计算属性被mapGetters接管,向state获取数据
    computed: mapGetters([
        'getNav'
    ]),
    // 监听路由跳转
    watch: {
        $route(){
            // 将监听到的路由地址传过去,调用方法
            this.routerChange(this.$route.path);
        }
    },
    // 监听用户自己输入地址所产生的路由跳转
    mounted(){
        // 将监听到的路由地址传过去,调用方法
        this.routerChange(this.$route.path);
    }
}
</script>

<style lang="scss">

</style>
