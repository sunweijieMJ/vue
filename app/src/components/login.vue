<template>
    <div class="login">
        <div class="login-title"><p>登录</p>
            <i>{{message}}</i>
        </div>
        <div class="login-bar">
            <ul>
                <li>
                    <img src="/src/assets/images/login_user.png">
                    <input type="text" class="text" :placeholder="userStr" @focus="userFocus" @blur="userBlur" v-model="username" name="username"/>
                </li>
                <li>
                    <img src="/src/assets/images/login_pwd.png">
                    <input type="password" class="psd" :placeholder="passStr" @focus="passFocus" @blur="passBlur" v-model="password" name="password"/>
                </li>
            </ul>
        </div>
        <div class="login-btn">
            <button class="submit" @click="submit">登陆</button>
            <router-link to="/reg">
                <div class="login-reg">
                    <p>莫有账号，先注册</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                userStr: '请输入用户名',
                passStr: '请输入确认密码',
                username: '',
                password: '',
                message: ''
            }
        },
        methods: {
            userFocus(){
                this.userStr = '';
            },
            userBlur(){
                let tel = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if(this.username == ""){
                    this.userStr = '请输入用户名';
                    this.message = '手机号不可为空';
                }else if(!tel.test(this.username)){
                    this.message = '手机号不正确';
                }
            },
            passFocus(){
                this.passStr = '';
            },
            passBlur(){
                if(this.password == ''){
                    this.passStr = '请输入确认密码';
                    this.message = '密码不可为空';
                } else {
                    this.message = '';
                }
            },
            submit(){
                let tel = /^1[3|4|5|7|8][0-9]\d{8}$/;
                // 提交前对输入框中的内容最后做出判断,以决定是否发往后台
                if(tel.test(this.username) && this.password){
                    // 信息初步验证后发往后台验证
                    this.$http.post('http://localhost:3000/login',{
                        // 携带用户的提交信息
                        username: this.username,
                        password: this.password
                    }).then((res) => {
                        if(res.ok){
                            // 根据后台发送过来的信息判断是否登录成功
                            if(!res.body.error){
                                // 取出用户信息
                                let data = res.body[0];
                                // 将后台发送过来的信息发往状态管理中心,以便读取
                                this.$store.dispatch('getUser',data);
                                // 登录成功后直接跳转到用户页面
                                this.$router.replace('/member');
                            } else {
                                // 登录失败后弹出后台发送的信息
                                alert(res.body.msg);
                            }
                        }
                    },(error) => {
                        console.log(error);
                    })
                } else {
                    alert('好好填');
                }
            }
        }
    }
</script>
<style scoped>

    @import '../assets/css/login.css';
    @import '../assets/css/global.css';
</style>