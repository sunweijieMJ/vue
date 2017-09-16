<template>
    <div>
        <div class="member">
            <div class="member-pic">
                <img :src="showUser[0]?showUser[0].photo:''" />
            </div>
            <div class="member-infor">{{showUser[0]?showUser[0].username:''}}</div>
        </div>
        <ul class="member-nav">
            <li>
                <router-link to="/location">
                    <i class="am-icon-map-marker"></i>
                    <span>收货地址</span>
                </router-link>
            </li>
            <li>
                <router-link to="/order">
                    <i class="am-icon-newspaper-o"></i>
                    <span>我的订单</span>
                </router-link>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="am-icon-cart-arrow-down"></i>
                    <span>购物车</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="am-icon-bell-o"></i>
                    <span>系统通知</span>
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="am-icon-credit-card"></i>
                    <span>会员卡</span>
                </a>
            </li>
            <li>
                <router-link to="yhq">
                    <i class="am-icon-cc-mastercard"></i>
                    <span>优惠券</span>
                </router-link>
            </li>
            <li>
                <a href="javascript:;">
                    <i class="am-icon-dollar"></i>
                    <span>积分</span>
                </a>
            </li>
        </ul>
        <ul class="member-nav mt">
            <li>
                <a href="javascript:;">
                    <i class="am-icon-phone"></i>
                    联系我们
                </a>
            </li>
        </ul>
        <div class="h50"></div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        // 在模板编译前执行
        beforeMount(){
            // 向后台发送请求,以判断用户是否登录
            this.$http.get('http://localhost:3000/users').then((res) => {
                // 后台返回用户未登录信息
                if(res.body.error){
                    // 直接跳转到登录页面
                    this.$router.replace('/login');
                } else {
                    // 将后台返回的数据发往状态管理中心,以便渲染页面
                    this.$store.dispatch('getUser',res.body);
                }
            },(error) => {
                console.log(error);
            })
        },
        computed: mapGetters([
            'showUser'
        ])
    }
</script>