<template>
    <div class="detail">
        <div data-am-widget="slider" class="am-slider am-slider-default" data-am-slider='{}' >
            <ul class="am-slides">
                <li><img src="/src/assets/images/detail.png"> </li>
                <li><img src="/src/assets/images/detail.png"> </li>
            </ul>
        </div>
        <div class="detail">
            <h2>{{showDetail[0]?showDetail[0].goods.name:''}}</h2>
            <div class="price">
                <b>{{showDetail[0]?showDetail[0].goods.price.num:''}}</b><span>{{showDetail[0]?showDetail[0].goods.price.str:''}}</span>
            </div>
            <div class="kucun">
                <p>{{showDetail[0]?showDetail[0].goods.repertory:''}}</p>
                <p>{{showDetail[0]?showDetail[0].goods.shipping:''}}</p>
            </div>
        </div>
        <div class="comment">
            <h2>{{showDetail[0]?showDetail[0].goods.comment.total:''}}</h2>
            <ul v-for="(item,index) in (showDetail[0]?showDetail[0].goods.comment.detail:'')">
                <li><a hhref="">{{item}}</a></li>
            </ul>
        </div>
        <div class="detail-con">
            <p>  {{showDetail[1]?showDetail[1].content[0][0]:''}}</p>
            <p>  {{showDetail[1]?showDetail[1].content[0][1]:''}}</p>
            <br />
            <br />
            <p>  {{showDetail[1]?showDetail[1].content[1][0]:''}}</p>
            <p>  {{showDetail[1]?showDetail[1].content[1][1]:''}}</p>
            <p>  {{showDetail[1]?showDetail[1].content[2][0]:''}}</p>
            <p>  {{showDetail[1]?showDetail[1].content[2][1]:''}}</p>
            <img src="/src/assets/images/banner.jpg" />
        </div>
        <div class="h50"></div>
        <ul class="fixed-btn">
            <li ><a href="" class="current">立即购买</a></li>
            <li><a href="javascript:;">加入购物车</a></li>
        </ul>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
        computed: mapGetters([
            'showDetail'
        ]),
        created(){
            this.$http.get('http://localhost:3000/detail').then((res) => {
                this.$store.dispatch('getDetail',res.body);
            },(error) => {
                console.log(error);
            })
        }
    }
</script>