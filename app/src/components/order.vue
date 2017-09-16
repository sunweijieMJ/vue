<template>
    <div class="order">
        <header data-am-widget="header" class="am-header am-header-default header">
            <div class="am-header-left am-header-nav">
                <a href="#left-link" class="" @click="goBack">
                    <i class="am-header-icon am-icon-angle-left"></i>
                </a>
            </div>
            <h1 class="am-header-title">
                <a href="#title-link" class="" style="color: #333;">全部订单</a>
            </h1>
            <div class="am-header-right am-header-nav">
                <a href="#right-link" class=""> </a>
            </div>
        </header>
        <div class="cate-search" style="position: relative; top: 0; border-bottom: 0;">
            <input type="text" class="cate-input" placeholder="搜索全部订单">
            <input type="button" class="cate-btn">
        </div>
        <ul class="order-style">
            <li class="current">
                <a href="allorder.html">全部</a>
            </li>
            <li><a href="">待付款</a></li>
            <li><a href="">待收货</a></li>
            <li><a href="">待评价</a></li>
            <li><a href="">退换货</a></li>
        </ul>
        <div v-for="(item,index) in (showOrder[0]?showOrder[0].data:'')">
            <div class="c-comment">
                <span class="c-comment-num">{{item.num}}</span>
                <span class="c-comment-suc">{{item.pay}}</span>
            </div>
            <div class="c-comment-list" style="border: 0;">
                <a class="o-con" href="">
                    <div class="o-con-img">
                        <img :src="item.src">
                    </div>
                    <div class="o-con-txt">
                        <p>{{item.name}}</p>
                        <p class="price">{{item.price}}</p>
                        <p>合计：<span>{{item.total}}</span></p>
                    </div>
                    <div class="o-con-much"> <h4>x{{item.count}}</h4></div>
                </a>
                <div class="c-com-money">{{item.describe}}<span>{{item.total}}</span></div>
            </div>
            <div class="c-com-btn">
                <a href="tureorder.html">立即支付</a>
                <a href="">取消订单</a>
            </div>
            <div class="clear"></div>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        name: 'a',
        methods: {
            goBack(){
                this.$router.go(-1);
            }
        },
        computed: mapGetters([
            'showOrder'
        ]),
        mounted(){
            this.$http.get('http://localhost:3000/order').then((res) => {
                this.$store.dispatch('getOrder',res.body);
            },(error) => {
                console.log(error);
            });
        }
    }
</script>