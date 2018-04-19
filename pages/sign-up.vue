<template>
    <div class="sign">
        <!--logo-->
        <div class="logo">
            <nuxt-link to="/">
                <img src="~assets/img/logo.png" alt="">
            </nuxt-link>
        </div>
        <!--主体部分-->
        <div class="main">
            <!--title-->
            <div class="title">
                <h4>
                    <nuxt-link to="/sign-in">
                        登录
                    </nuxt-link>
                    <b>·</b>
                    <nuxt-link to="/sign-up" class="active">
                        注册
                    </nuxt-link>
                </h4>
            </div>
            <!--form表单-->
            <div class="js-form">
                <form action="" method="post" class="sign-up-form">
                    <div class="input-prepend">
                        <input type="text" placeholder="你的昵称">
                        <i class="fa fa-user"></i>
                    </div>
                    <div class="input-prepend">
                        <input type="text" placeholder="手机号">
                        <i class="fa fa-phone"></i>
                    </div>
                    <div class="input-prepend ssm">
                        <input type="text" placeholder="验证码">
                        <i class="fa fa-shield"></i>
                        <a href="" class="send-ssm">发送验证码</a>
                    </div>
                    <div class="input-prepend">
                        <input type="text" placeholder="设置密码">
                        <i class="fa fa-lock"></i>
                    </div>
                    <button class="sign-up-btn">注册</button>
                </form>
                <p class="sign-up-msg">
                    点击 “注册” 即表示您同意并愿意遵守简书
                    <br>
                    <a href="http://www.jianshu.com/p/c44d171298ce" target="_blank">用户协议</a>
                    和
                    <a href="http://www.jianshu.com/p/2ov8x3" target="_blank">隐私政策</a>
                    。
                </p>
            </div>
            <!--第三方登录-->
            <div class="more-sign">
                <p>社交账号直接注册</p>
                <ul>
                    <li>
                        <nuxt-link to="/">
                            <i class="fa fa-weixin"></i>
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/">
                            <i class="fa fa-qq"></i>
                        </nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        //设置页面的标题以及描述、关键字等原信息
        head:{
            title:'注册-简书',
            meta:[
                {name:'keywords',content:'注册页面'},
                {name:'description',content:'注册简书'},
                {name:'author',content:'Linli'},
            ]
        },
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>