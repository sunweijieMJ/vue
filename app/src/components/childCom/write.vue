<template>
    <div class="write" v-show="showWrite">
        <textarea name="comment" v-model="comment"></textarea>
        <input type="button" id="btn" value="发送" @click="send">
    </div>
</template>
<script>
    import {mapGetters} from 'vuex';
    export default {
        data(){
            return {
                comment: ''
            }
        },
        methods: {
            send(){
                if(this.comment.length != 0){
                    let data = {
                        comment: this.comment,
                        time: this.date().getTime()
                    };

                    this.$http.post('http://localhost:3000/comment',data,{
                        emulateJSON: true
                    }).then((res) => {
                        if(!res.body.error){
                            alert(res.body.msg);
                            this.$emit('to-parent',data);
                        }
                    },(err) => {
                        console.log(err);
                    });
                }
                this.$store.dispatch('getWrite');
            },
            date(){
                return new Date();
            }
        },
        computed: mapGetters([
            'showWrite'
        ])
    }
</script>
<style>
    .write{
        width: 275px;
        height: 300px;
        border:2px solid #ccc;
        position:absolute;
        margin:200px 50px;
    }
    #btn{
        position: absolute;
        width: 100%; height: 50px;
        line-height: 50px;
        font-size: 30px;color:#399;
        background: #ccc;
    }
    textarea{
        width: 100%;
        height: 246px;
        resize: none;
    }
</style>