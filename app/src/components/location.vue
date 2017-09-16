<template>
    <div class="location">
        <header data-am-widget="header" class="am-header am-header-default header">
            <div class="am-header-left am-header-nav">
                <a href="#left-link" class="" @click="goBack">
                    <i class="am-header-icon am-icon-angle-left"></i>
                </a>
            </div>
            <h1 class="am-header-title">
                <a href="#title-link" class="" style="color: #333;">收货地址</a>
            </h1>
            <div class="am-header-right am-header-nav">
                <a href="#right-link" class=""> </a>
            </div>
        </header>
        <ul class="address-list" v-for="(item,index) in (showLocation[0]?showLocation[0].data:'')">
            <li class="curr">
                <p v-html="item.name"></p>
                <p class="order-add1">{{item.address}}</p>
                <hr>
                <div class="address-cz">
                    <label class="am-radio am-warning">
                        <input type="radio" name="radio3" value="" data-am-ucheck="" checked="" class="am-ucheck-radio">
                        <span class="am-ucheck-icons">
                            <i class="am-icon-unchecked"></i>
                            <i class="am-icon-checked"></i>
                        </span>设为默认
                    </label>
                    <a href="">
                        <img src="/src/assets/images/bj.png" style="width: 18px;">&nbsp;编辑
                    </a>
                    <a href="">删除</a>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        methods: {
            goBack(){
                this.$router.go(-1);
            }
        },
        computed: mapGetters([
            'showLocation'
        ]),
        mounted(){
            this.$http.get('http://localhost:3000/location').then((res) => {
                this.$store.dispatch('getLocation',res.body);
            },(error) => {
                console.log(error);
            });
        }
    }
</script>