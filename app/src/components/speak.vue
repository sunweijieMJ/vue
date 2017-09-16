<template>
    <div class="speak">
        <slide></slide>
        <ul class="nav">
            <li>
                <router-link to="/search">
                    <img :src="showSpeak[0]?showSpeak[0].nav[0].src:''" />
                    <p>{{showSpeak[0]?showSpeak[0].nav[0].font:''}}</p>
                </router-link>
            </li>
            <li>
                <router-link to="/search">
                    <img :src="showSpeak[0]?showSpeak[0].nav[1].src:''" />
                    <p>{{showSpeak[0]?showSpeak[0].nav[1].font:''}}</p>
                </router-link>
            </li>
            <li>
                <router-link to="/search">
                    <img :src="showSpeak[0]?showSpeak[0].nav[2].src:''" />
                    <p>{{showSpeak[0]?showSpeak[0].nav[2].font:''}}</p>
                </router-link>
            </li>
            <li>
                <router-link to="/klist">
                    <img :src="showSpeak[0]?showSpeak[0].nav[3].src:''" />
                    <p>{{showSpeak[0]?showSpeak[0].nav[3].font:''}}</p>
                </router-link>
            </li>
        </ul>
        <div data-am-widget="intro" class="am-intro am-cf am-intro-default">
            <div class="am-intro-hd">
                <h2 class="am-intro-title">{{showSpeak[1]?showSpeak[1].data.name:''}}</h2>
            </div>
            <div class="am-g am-intro-bd" v-for="(item,index) in (showSpeak[1]?showSpeak[1].data.content:'')">
                <router-link to="/contents">
                    <div class="am-intro-left am-u-sm-3"><img :src="item.src"  /></div>
                    <div class="am-intro-right am-u-sm-9">
                        <h2>{{item.title}}</h2>
                        <p>{{item.detail}}</p>
                        <div class="text">
                            <span class="fl">{{item.time}}</span>
                            <span class="fr"><i class="am-icon-thumbs-o-up"></i>{{item.up}}</span>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
        <div class="h50"></div>
    </div>
</template>
<script>
    import slide from './childCom/slide.vue';

    import {mapGetters} from 'vuex';

    export default {
        components: {
            slide
        },
        computed: mapGetters([
            'showSpeak'
        ]),
        mounted(){
            this.$http.get('http://localhost:3000/speak').then((res) => {
                this.$store.dispatch('getSpeak',res.body);
            },(error) => {
                console.log(error);
            });
        }
    }
</script>