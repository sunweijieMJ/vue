<template>
    <div class="klist">
        <write v-show="showWrite" @to-parent="show"></write>
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
        <div class="communityPage-main">
            <div class="communityPage-info">
                <img class="communityPage-img" src="/src/assets/images/detail.png">
                <div>
                    <p class="communityPage-title"> 饮食健康</p>
                    <p class="communityPage-num">
                        <label>话题
                            <span class="communityPage-topic-num cmn-theme-color">{{content.length}}</span>
                        </label>
                        <label>回复
                            <span class="communityPage-comment-num cmn-theme-color">{{content.length}}</span>
                        </label>
                    </p>
                </div>
            </div>
            <div class="communityPage-topic cmn-theme-color-active" id="communityPage-topic"><a class="active">全部</a></div>
        </div>
        <div class="nokeshuo" v-show="content.length==0">
            <img src="/src/assets/images/none.png" />
            <p>还没话题，快来说两句</p>
        </div>
        <ul class="comment">
            <li v-for="(item,index) in content" :key="index">
                <p>{{item.comment}}</p><span>{{item.time | date}}</span>
            </li>
        </ul>
        <div class="communityPage-publish-btn cmn-theme-bgcolor" id="communityPage-publish-btn"><span @click="write">发帖</span></div>
    </div>
</template>
<script>
    import write from './childCom/write.vue';
    import {mapGetters} from 'vuex';
    export default {
        data(){
            return {
                count: 1,
                str: 'hidden',
                content: []
            }
        },
        computed: mapGetters([
           'showWrite'
        ]),
        components: {
            write
        },
        mounted(){
            this.$http.get('http://localhost:3000/comment').then((res) => {
                this.content = res.body;
            },(err) => {
                console.log(err);
            });
        },
        methods: {
            goBack(){
                this.$router.go(-1);
            },
            write(){
                this.$store.dispatch('getWrite');
            },
            show(data){
                this.content.push(data);
                console.log(this.content);
            }
        },
        filters: {
            date(time){
                let now = new Date(+time);
                let y = now.getFullYear();
                let m = now.getMonth();
                let d = now.getDate();
                let hou = now.getHours();
                let min = now.getMinutes();
                let sec = now.getSeconds();

                let adjust = n => n < 10 ? '0' + n : '' + n;
                let str = y+'年'+adjust(m)+'月'+adjust(d)+'日'+'  '+adjust(hou)+":"+adjust(min)+":"+adjust(sec);
                return str;
            }
        }
    }
</script>
<style>
    .comment{
        width: 100%;
        background: #ccc;
    }
    .comment li{
        width: 100%;
        height: 50px;
        margin-bottom:10px;
    }
</style>