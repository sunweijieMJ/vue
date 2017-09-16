<template>
    <div>
        <header data-am-widget="header" class="am-header am-header-default header">
            <div class="am-header-left am-header-nav">
                <a href="#left-link" class="" @click="goBack">
                    <i class="am-header-icon am-icon-angle-left"></i>
                </a>
            </div>
            <h1 class="am-header-title">
                <a href="#title-link" class="" style="color: #333;">厨房妈妈</a>
            </h1>
            <div class="am-header-right am-header-nav">
                <a href="#right-link" class=""> </a>
            </div>
        </header>
        <div class="search-input">
            <input type="text" placeholder="请输入您搜索的内容" />
        </div>
        <ul class="paixu">
            <li><a href="">默认</a></li>
            <li><a href="">销量</a></li>
            <li><a href="">价格</a></li>
        </ul>
        <foods></foods>
    </div>
</template>
<script>
    import foods from './childCom/foods.vue';

    export default {
        methods: {
            goBack(){
                this.$router.go(-1);
            }
        },
        components: {
            foods
        }
    }
</script>