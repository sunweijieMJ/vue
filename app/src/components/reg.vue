<template>
    <div id="layout">
        <span>账号注册</span>
        <ul>
            <p id="err_msg" v-show="oP" v-html="oPhtml"></p>
            <li>
                <i class="un">
                    <img src="/src/assets/images/user_name.png">
                </i>
                <input class="username" type="text" :placeholder="userStr" @focus="userFocus" @keyup="userBlur" :style="userJson" v-model="username"/>
            </li>
            <li>
                <i class="yz">
                    <img src="/src/assets/images/msg.png">
                </i>
                <input class="yzm" type="text" :placeholder="phoneStr" @focus="phoneFocus" :style="phoneJson" @keyup="listen" v-model="code"/>
                <input type="button" id="send" @click="send" v-model="sendStr" :style="sendJson" />
            </li>
            <li>
                <i class="pw">
                    <img src="/src/assets/images/pwd.png">
                </i>
                <input class="pwd" type="password" :placeholder="passStr" @focus="passFocus" @keyup="passBlur" :style="passJson" v-model="password"/>
            </li>
            <li>
                <i class="pw2">
                    <img src="/src/assets/images/pwd.png">
                </i>
                <input class="pwd2" type="password" :placeholder="confStr" @focus="confFocus" @keyup="confBlur" :style="confJson" v-model="confirm"/>
            </li>
            <div class="queren">
                <input class="fx" type="checkbox" checked="checked" />
                <p>我已阅读并同意《用户协议》</p>
            </div>
        </ul>
        <div class="reg_btn">
            <button class="submit" @click="submit">注册</button>
            <router-link to="/login">
                <div class="reg-login">
                    <p>已有帐号，立即登陆</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                oP: true,
                oPhtml: '',
                userStr: '请输入用户名',
                username: '',
                userJson: {},
                code: '',
                phoneStr: '请输入四位验证码',
                phoneJson: {},
                passStr: '请输入密码',
                password: '',
                passJson: {},
                confJson: {},
                confirm: '',
                confStr: '请输入确认密码',
                sendStr: '获取验证码',
                times: 60,
                timer: null,
                sendJson: {}
            }
        },
        methods: {
            userFocus(){
                this.oP = true;
                this.userStr = '';
                this.userJson = {border:"1px solid #fff"};
            },
            userBlur(){
                // 含有非法字符 ，不能为空 ，长度少于5个字符 ，长度大于25个字符
                let tel = /^1[3|4|5|7|8][0-9]\d{8}$/;
                if(this.username == ''){
                    this.userStr = '请输入用户名';
                    this.oPhtml = '请输入用户名';
                    this.userJson = {border:"1px solid red"};
                } else if(!tel.test(this.username)){
                    this.oPhtml = "<i>手机号不正确</i>";
                    this.userJson = {border:"1px solid red"};
                } else{
                    this.oPhtml = '';
                    this.userJson = {border:"1px solid #fff"};
                }

            },
            phoneFocus(){
                //短信验证码检测
                this.oP = true;
                this.phoneStr = '';
                this.phoneJson = {border:"1px solid #fff"};
            },
            passFocus(){
                //密码检测
                this.oP = true;
                this.passStr = '';
                this.passJson = {border:"1px solid #fff"};
            },
            findStr(str,n){
                var tmp=0;
                for(var i=0;i<str.length;i++){
                    if(str.charAt(i)==n){
                        tmp++;
                    }
                }
                return tmp;
            },
            passBlur(){
                let m = this.findStr(this.password,this.password[0]);
                let re_n = /[^\d]/g;
                var re_t = /[^a-zA-Z]/g;

                if(this.password == ''){
                    this.passStr = '请输入密码'
                    this.oPhtml = '<i>密码不可为空</i>';
                    this.passJson = {border:"1px solid red"};
                } else if(m == this.password.length){
                    this.oPhtml = '<i>密码不可使用相同的字符</i>';
                    this.passJson = {border:"1px solid red"};
                } else if(this.password.length < 6 || this.password.length > 16){
                    this.oPhtml = '<i>密码长度应为6到16个字符</i>';
                    this.passJson = {border:"1px solid red"};
                } else if(!re_n.test(this.password)){
                    this.oPhtml = '<i>密码不能全为数字</i>';
                    this.passJson = {border:"1px solid red"};
                } else if(!re_t.test(this.password)){
                    this.oPhtml = '<i>密码不能全为字母</i>';
                    this.passJson = {border:"1px solid red"};
                } else {
                    this.oPhtml = '';
                    this.passJson = {border:"1px solid #fff"};
                }
            },
            confFocus(){
              this.confStr = '';
              this.confJson = {border:"1px solid #fff"};
            },
            confBlur(){
                //确认密码
                if(this.confirm == ''){
                    this.confStr = '请输入确认密码';
                    this.oPhtml = '<i></i>请输入密码';
                    this.confJson = {border:"1px solid red"};
                } else if(this.confirm != this.password){
                    this.oPhtml = '<i></i>两次密码输入到不一致';
                    this.confJson = {border:"1px solid red"};
                } else {
                    this.oPhtml = '';
                    this.confJson = {border:"1px solid #fff"};
                }
            },
            CreateCode(){
                // 将所有需要随机的字符都一一列出
                var str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

                var result = "";
                for(var i = 0; i < 4; i++){
                    // 生成一个随机的下标
                    var ranInt = Math.floor(Math.random()*str.length);
                    // 将字符拿到放到结果字符串中
                    result += str.charAt(ranInt);
                }
                return result;
            },
            listen(){
                if(this.code == this.sendStr){
                    this.oPhtml = '';
                } else {
                    this.oPhtml = '验证码输入有误';
                }
            },
            send(){
                // 计时开始
                this.sendStr = this.CreateCode();
            },
            submit(){
                if(!this.oPhtml && !this.userStr && !this.passStr && !this.confStr){
                    this.$http.post('http://localhost:3000/reg',{
                        username: this.username,
                        password: this.password
                    },{
                        emulateJSON: true
                    }).then((res) => {
                        if(res.ok){
                            alert(res.body.msg);
                            if(!res.body.error){
                                this.$router.replace('/login');
                            }
                        }
                    },(error) => {
                        console.log(error);
                    })
                } else {
                    alert('弄啥呢,好好填');
                }
            }
        }
    }
</script>
<style scoped>
    @import '../assets/css/global.css';
    @import '../assets/css/register.css';
</style>