<template>
    <div class="index">
        <banner></banner>
        <router-link to="/search" class="search" tag="input" placeholder="开启你的美食之旅...">
        </router-link>
        <ul class="nav">
            <li>
                <router-link to="/search">
                    <img :src="showIndex[0]?showIndex[0].nav[0].src:''" />
                    <p>{{showIndex[0]?showIndex[0].nav[0].font:''}}</p>
                </router-link>
            </li>
            <li>
                <router-link to="/search">
                    <img :src="showIndex[0]?showIndex[0].nav[1].src:''" />
                    <p>{{showIndex[0]?showIndex[0].nav[1].font:''}}</p>
                </router-link>
            </li>
            <li>
                <router-link to="/search">
                    <img :src="showIndex[0]?showIndex[0].nav[2].src:''" />
                    <p>{{showIndex[0]?showIndex[0].nav[2].font:''}}</p>
                </router-link>
            </li>
            <li>
                <router-link to="/yhq">
                    <img :src="showIndex[0]?showIndex[0].nav[3].src:''" />
                    <p>{{showIndex[0]?showIndex[0].nav[3].font:''}}</p>
                </router-link>
            </li>
        </ul>
        <div data-am-widget="titlebar" class="am-titlebar am-titlebar-default title" >
            <h2 class="am-titlebar-title ">{{showIndex[1]?showIndex[1].data.name:''}}</h2>
            <nav class="am-titlebar-nav">
                <a href="#more" class="">more &raquo;</a>
            </nav>
        </div>
        <foods></foods>
        <div class="h50"></div>
    </div>
</template>
<script>
    import banner from './childCom/banner.vue';
    import foods from './childCom/foods.vue';

    import {mapGetters} from 'vuex';

    export default {
        components: {
            banner,foods
        },
        mounted(){
            this.$http.get('http://localhost:3000/').then((res) => {
                this.$store.dispatch('getIndex',res.body);
            },(error) => {
                console.log(error);
            });
        },
        computed: mapGetters([
            'showIndex'
        ])
    }
</script>
