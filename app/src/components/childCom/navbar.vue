<template>
    <div data-am-widget="navbar" class="am-navbar am-cf am-navbar-default footer "  id="">
        <ul class="am-navbar-nav am-cf am-avg-sm-4">
            <li >
                <router-link to="/index">
                    <span class=""><img :src="showNavbar[0]?showNavbar[0].src:''"/></span>
                    <span class="am-navbar-label">{{showNavbar[0]?showNavbar[0].nav:''}}</span>
                </router-link>
            </li>
            <li>
                <router-link to="/speak">
                    <span class=""><img :src="showNavbar[0]?showNavbar[1].src:''"/></span>
                    <span class="am-navbar-label">{{showNavbar[0]?showNavbar[1].nav:''}}</span>
                </router-link>
            </li>
            <li>
                <router-link to="/we">
                    <span class=""><img :src="showNavbar[0]?showNavbar[2].src:''"/></span>
                    <span class="am-navbar-label">{{showNavbar[0]?showNavbar[2].nav:''}}</span>
                </router-link>
            </li>
            <li >
                <router-link to="/member">
                    <span class=""><img :src="showNavbar[0]?showNavbar[3].src:''"/></span>
                    <span class="am-navbar-label">{{showNavbar[0]?showNavbar[3].nav:''}}</span>
                </router-link>
            </li>

        </ul>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters([
            'showNavbar'
        ]),
        mounted(){
            this.$http.get('http://localhost:3000/navbar').then((res) => {
                this.$store.dispatch('getNavbar',res.body);
            },(error) => {
                console.log(error);
            })
        }
    }
</script>
