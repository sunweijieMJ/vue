<template>
    <div data-am-widget="slider" class="am-slider am-slider-default" data-am-slider='{}' >
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" style="background: #399" v-for="(item,index) in (showBanner[0]?showBanner[0].banner:'')" :key="index">
                    <img :src="item">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from '../../assets/js/swiper-3.4.2.min';

    import {mapGetters} from "vuex";
    export default {
        mounted(){
            this.$http.get('http://localhost:3000/banner').then((res) => {
                this.$store.dispatch('getBanner',res.body);

                // 实例化
                var swiper = new Swiper ('.swiper-container',{
                    autoplay:2000,
                    autoplayDisableOnInteraction : false,
                    loop:true,
                    paginationClickable: true,
                    longSwipesRatio: 0.3,
                    touchRatio:1,
                    observer:true,
                    //修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true
                    //修改swiper的父元素时，自动初始化swiper
                });
            },(error) => {
                console.log(error);
            });
        },
        computed: mapGetters([
            'showBanner'
        ])
    }
</script>
<style>
    @import '../../assets/css/swiper-3.4.2.min.css';
</style>