<template>
    <div class="we">
        <slide></slide>
        <div class="am-tabs qiehuan" data-am-tabs>
            <ul class="am-tabs-nav am-nav am-nav-tabs">
                <li class="am-active"><a href="#tab1">店铺介绍</a></li>
                <li><a href="#tab2">建议留言</a></li>
            </ul>
            <div class="am-tabs-bd">
                <div class="am-tab-panel am-fade am-in am-active" id="tab1">{{showWe[0]?showWe[0].data.introduce:''}}
                    <bMap></bMap>
                </div>
                <div class="am-tab-panel am-fade" id="tab2">
                    <input type="text" placeholder="姓名" class="tab-input" />
                    <input type="text" placeholder="电话" class="tab-input" />
                    <textarea placeholder="建议" class="tab-input"></textarea>
                    <button type="button" class="tab-btn">提交</button>
                </div>

            </div>
        </div>
        <div class="h50"></div>
    </div>
</template>
<script>
    import test from './map.vue';
    import slide from './childCom/slide.vue';
    import bMap  from './map.vue';

    import {mapGetters} from 'vuex';

    export default {
        components: {
            test,slide,bMap
        },
        computed: mapGetters([
            'showWe'
        ]),
        mounted(){
            this.$http.get('http://localhost:3000/we').then((res) => {
                this.$store.dispatch('getWe',res.body);
            },(error) => {
                console.log(error);
            });
        }
    }
</script>