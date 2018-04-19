<template>
    <div>
        <nav class="navbar navbar-fixed-top">
            <div class="width-limit">
                <!--logo-->
                <nuxt-link to="/" class="logo">
                    <img src="~assets/img/nav-logo.png" alt="">
                </nuxt-link>
                <nuxt-link to="/write" class="write-btn">
                    <i class="fa fa-edit"></i>
                    写文章
                </nuxt-link>
                <div class="user"  @mouseleave="closeMenu">
                    <div class="drop-down" @mouseenter="showMenu">
                        <nuxt-link to="/u/123" class="avatar">
                            <img src="~assets/img/avatar.jpg" alt="">
                        </nuxt-link>
                    </div>
                    <ul class="drop-menu" v-show="isShow">
                        <li>
                            <nuxt-link to="/">
                                <i class="fa fa-home"></i>
                                我的主页
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/user/123/like">
                                <i class="fa fa-heart"></i>
                                喜欢的文章
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/bookmarks">
                                <i class="fa fa-bookmark"></i>
                                收藏的文章
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/setting/basic">
                                <i class="fa fa-cog"></i>
                                设置
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/logout">
                                <i class="fa fa-sign-out"></i>
                                退出
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
                <!--右上角登录和注册-->
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "myheader",
        data(){
            return{
                isShow:false
            }
        },
        methods:{
            showMenu() {
                this.isShow=true
            },
            closeMenu(){
                this.isShow=false
            }
        }
    }
</script>

<style scoped>
    .navbar-fixed-top {
        height: 56px;
        border-bottom: 1px solid #f1f1f1;
        border-color: #f0f0f0;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
    }
    .navbar:before {
        content: '';
        display: table;
    }
    nav .width-limit {
        min-width: 768px;
        max-width: 1440px;
        height: 56px;
        margin: 0 auto;
    }
    nav .logo {
        float: left;
        height: 56px;
        display: block;
    }
    nav .logo img {
        height: 100%;
    }
    nav .write-btn{
        float: right;
        width: 100px;
        height: 40px;
        line-height: 40px;
        margin: 8px 15px 0;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
        text-align: center;
        cursor: pointer;
    }
    nav .write-btn:hover{
        background-color: #ec6149;
    }
    nav .user{
        position: relative;
        float: right;
    }
    nav .user .avatar{
        position: relative;
        display: block;
        width: 40px;
        height: 40px;
        margin: 8px 28px 8px 20px;
    }
    nav .user:hover{
        background-color: #f5f5f5;
    }
    nav .user .avatar:before{
        content: '';
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 5px solid #999;
        position: absolute;
        top: 18px;
        right: -14px;
    }
    nav .user .avatar img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid #eee;
    }
    nav .user .drop-menu{
        position: absolute;
        left: 0;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        min-width: 160px;
        z-index: 90;
        margin: 0;
        padding: 10px 0;
        font-size: 15px;
    }
    nav .user .drop-menu li a{
        padding: 10px 20px;
        line-height: 30px;
        display: block;
    }
    nav .user .drop-menu li a:hover{
        background-color: #f5f5f5;
    }
    nav .user .drop-menu li a i{
        color: #ea6f5a;
        margin-right: 10px;
        font-size: 20px;
        width: 20px;
        height: 20px;
    }
</style>