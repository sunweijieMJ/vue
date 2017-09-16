<template>
    <div class="foods">
        <ul data-am-widget="gallery" class="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product" >
            <li v-for="(item,index) in (showFoods[0]?showFoods[0].data.content:'')">
                <div class="am-gallery-item">
                    <router-link to="/detail">
                        <img :src="item.src"  alt=""/>
                        <h3 class="am-gallery-title">{{item.name}}</h3>
                        <div class="am-gallery-desc">
                            <em>{{item.price}}</em><i class="am-icon-cart-plus"></i>
                        </div>
                    </router-link>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters([
            'showFoods'
        ]),
        mounted(){
            this.$http.get('http://localhost:3000/foods').then((res) => {
                this.$store.dispatch('getFoods',res.body);
            },(error) => {
                console.log(error);
            });
        }

    }
</script>