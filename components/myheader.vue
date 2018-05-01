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
                <!--头像及下拉菜单-->
                <div class="user"  @mouseleave="isShow=false">
                    <div class="drop-down" @mouseenter="isShow=true">
                        <nuxt-link to="/u/123" class="avatar">
                            <img src="~assets/img/avatar.jpg" alt="">
                        </nuxt-link>
                    </div>
                    <ul class="drop-menu" v-show="isShow">
                        <li>
                            <nuxt-link to="/u/my">
                                <i class="iconfont icon-user"></i>
                                我的主页
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/bookmarks">
                                <i class="iconfont icon-shuqian"></i>
                                收藏的文章
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
                                <i class="iconfont icon-diamond"></i>
                                已购内容
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/bookmarks">
                                <i class="iconfont icon-qianbao"></i>
                                我的钱包
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/setting/basic">
                                <i class="fa fa-cog"></i>
                                设置
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/bookmarks">
                                <i class="fa fa-commenting"></i>
                                帮助与反馈
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
                <!--导航条中间部分-->
                <div class="container">
                    <div class="row">
                        <ul class="nav-list">
                        <!--发现-->
                        <li class="find">
                            <nuxt-link to="/" class="active">
                                <i class="fa fa-compass"> </i>
                                <span>发现</span>
                            </nuxt-link>
                        </li>
                        <!--关注-->
                        <li class="watch">
                            <nuxt-link to="/follow">
                                <i class="fa fa-book"></i>
                                <span>关注</span>
                            </nuxt-link>
                        </li>
                        <!--消息及下拉菜单~同头像的下拉菜单-->
                        <li class="user" @mouseenter="modifyShow=true" @mouseleave="modifyShow=false">
                            <nuxt-link to="/message">
                                <i class="fa fa-bell-o"></i>
                                <span>消息</span>
                            </nuxt-link>
                            <ul class="drop-menu" v-show="modifyShow">
                                <li>
                                    <nuxt-link to="/">
                                        <i class="fa fa-comment-o"></i>
                                        评论
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/">
                                        <i class="fa fa-envelope-o"></i>
                                        简信
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/">
                                        <i class="fa fa-upload"></i>
                                        投稿请求
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/">
                                        <i class="fa fa-heart-o"></i>
                                        喜欢和赞
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/">
                                        <i class="fa fa-user-plus"></i>
                                        关注
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/">
                                        <i class="fa fa-rmb"></i>
                                        赞赏和付费
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/">
                                        <i class="fa fa-ellipsis-h"></i>
                                        其它提醒
                                    </nuxt-link>
                                </li>
                            </ul>
                        </li>
                        <!--搜索框-->
                        <li class="search">
                            <form action="" method="post">
                                <input type="text" placeholder="搜索" class="search-input">
                                <a href="#" class="search-btn">
                                    <i class="fa fa-search"></i>
                                </a>
                            </form>
                        </li>
                        <!--Aa-->
                        <li class="user mode">
                            <div>
                                <span @click="modeShow=!modeShow">Aa</span>
                                <transition name="fademode">
                                    <div v-show="modeShow" class="drop-menu mode-btn-group">
                                        <div class="day-night-mode">
                                            <i class="fa fa-moon-o"></i>
                                            <span>夜间模式</span>
                                        </div>
                                        <div class="switch day-night">
                                            <button class="switch-btn switchDay" @click="switchDay">开</button>
                                            <button class="switch-btn switchNight active" @click="switchNight">关</button>
                                        </div>
                                        <div class="hr"></div>
                                        <div class="switch font-family">
                                            <button class="switch-btn fontSong" @click="fontSong">宋体</button>
                                            <button class="switch-btn fontBlack active" @click="fontBlack">黑体</button>
                                        </div>
                                        <div class="switch easy-complex">
                                            <button class="switch-btn active fontEasy" @click="fontEasy">简</button>
                                            <button class="switch-btn fontComplex" @click="fontComplex">繁</button>
                                        </div>
                                    </div>
                                </transition>
                            </div>
                        </li>
                        <!--隐藏的菜单按钮-->
                        <li class="menu-btn" @click="menuShow=!menuShow">
                            <i class="fa fa-align-justify"></i>
                        </li>
                    </ul>
                        <!--隐藏的菜单内容-->
                        <transition name="fade">
                        <ul class="menu-text" v-show="menuShow">
                            <li class="active">
                                <nuxt-link to="/" class="active">
                                    发现
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">
                                    关注
                                </nuxt-link>
                            </li>
                            <li>
                                <nuxt-link to="/">
                                    消息
                                </nuxt-link>
                            </li>
                            <li class="search">
                                <form action="" method="post">
                                    <input type="text" placeholder="搜索" class="search-input">
                                    <a href="#" class="search-btn">
                                        <i class="fa fa-search"></i>
                                    </a>
                                </form>
                            </li>
                        </ul>
                    </transition>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "myheader",
        data(){
            return{
                isShow:false,
                modifyShow:false,
                menuShow:false,
                modeShow:false
            }
        },
        methods:{
            switchDay: function () {
                $('.switchDay').addClass('active').siblings().removeClass('active'),
                    $('.switch-btn').css('outline', 'none');
                $('nav').css({
                    backgroundColor: '#3f3f3f',
                    borderBottomColor: '#2f2f2f'
                }),
                    $('.nav-list .mode>div>span').css('backgroundolor', '#3f3f3f'),
                    $('.nav-list>li>a').css('color', '#fff'),
                    $('.nav-list>li.find>a').css('color', '#ea6f5a'),
                    $('.nav-list>li.search .search-input').css({
                        backgroundColor: '#4f4f4f',
                        borderColor: '#4f4f4f',
                        color: '#fff'
                    }),
                    $('.nav-list>li.search a').css({
                        color: '#fff'
                    }),
                    $('.nav-list>li>a').hover(function () {
                        $(this).css('backgroundColor', '#2f2f2f')
                    }, function () {
                        $(this).css('backgroundColor', '#3f3f3f')
                    }),
                    $('.user').hover(function () {
                        $(this).css('backgroundColor', '#2f2f2f')
                    }, function () {
                        $(this).css('backgroundColor', '#3f3f3f')
                    }),
                    $('.user .drop-menu').css('backgroundColor', '#3f3f3f'),
                    $('.user .drop-menu>li>a').css('color', '#fff'),
                    $('.user .drop-menu>li>a').hover(function () {
                        $(this).css('backgroundColor', '#2f2f2f')
                    }, function () {
                        $(this).css('backgroundColor', '#3f3f3f')
                    })
            },
            switchNight: function () {
                $('.switchNight').addClass('active').siblings().removeClass('active');
                $('.switch-btn').css('outline','none');
            },
            fontSong:function () {
                $('.fontSong').addClass('active').siblings().removeClass('active');
                $('.switch-btn').css('outline','none');
            },
            fontBlack:function () {
                $('.fontBlack').addClass('active').siblings().removeClass('active');
                $('.switch-btn').css('outline','none');
            },
            fontEasy:function () {
                $('.fontEasy').addClass('active').siblings().removeClass('active');
                $('.switch-btn').css('outline','none');
            },
            fontComplex:function () {
                $('.fontComplex').addClass('active').siblings().removeClass('active');
                $('.switch-btn').css('outline','none');
            }
        }
    }
</script>

<style scoped>
    /*****************************导航条左右两侧******************************/
    nav{
        background-color: #fff;
        height: 56px;
        border-bottom: 1px solid #f1f1f1;
        border-color: #f0f0f0;
        position: fixed;
        left: 0;
        top: 0;
        z-index: 100;
        width: 100%;
    }
    nav:before {
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
    /****头像及下拉菜单部分*****/
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
        background-color: #fff;
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

    /*****************************导航条中间部分*******************************/
    nav .nav-list{
        margin: 0;
    }
    nav .nav-list>li{
        float: left;
        margin-right: 5px;
    }
    nav .nav-list:after{
        content: '';
        display: block;
        visibility: hidden;
        clear: both;
    }
    nav .nav-list>li a{
        line-height: 26px;
        padding: 15px;
        display: block;
    }
    nav .nav-list>li a.active{
        color: #ea6f5a;
        background-color: none!important;
    }
    nav .nav-list>li a:hover{
        background-color: #f5f5f5;
    }
    nav .nav-list>li a i{
        margin-right: 5px;
        font-size: 20px;
    }
    /*****搜索框*****/
    nav .nav-list .search{
        padding-left: 15px;
        margin-right: 10px;
    }
    nav .nav-list .search form{
        margin-bottom: 20px;
        position: relative;
        top: 9px;
    }
    nav .nav-list .search form .search-input{
        height: 38px;
        width: 240px;
        padding: 0 40px 0 20px;
        border: 1px solid #eee;
        background: #eee;
        border-radius: 40px;
        font-size: 14px!important;
        font: inherit;
        line-height: inherit;
        transition: width .5s;
    }
    nav .nav-list .search form .search-input:focus{
        width: 320px;
    }
    nav .nav-list .search form .search-input:focus+.search-btn{
        background: rgb(150,150,150);
        color: #fff;
        border-radius: 50%;
    }
    nav .nav-list .search form .search-btn{
        width: 30px;
        height: 30px;
        position: absolute;
        top: 4px;
        right: 5px;
        color: #969696;
        text-align: center;
        padding: 0;
    }
    nav .nav-list .search form .search-btn:hover{
        background: none;
    }
    nav .nav-list .search form .search-btn i{
        margin: 0;
        text-align: center;
        line-height: 30px;
        font-size: 16px;
        display: block!important;
    }
    /*****Aa模式切换******/
    nav .nav-list .mode{
        float: right;
        font-size: inherit;
        cursor: pointer;
        color: #969696;
    }
    nav .nav-list .mode .mode-btn-group{
        padding: 20px 25px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        background-color: #fff;
    }
    nav .nav-list .mode>div>span{
        line-height: 56px;
        padding: 0 30px;
        display: block;
        position: relative;
    }
    nav .nav-list .user.mode .drop-menu{
        margin-left: -152px;
    }
    nav .nav-list .mode .switch{
        text-align: center;
        font-size: 14px;
        width: 192px;
    }
    nav .nav-list .mode .switch.day-night{
        width: 96px;
        display: inline-block;
        margin-left: 20px;
    }
    nav .nav-list .mode .day-night-mode{
        display: inline-block;
    }
    nav .nav-list .mode .switch .switch-btn{
        width: 49%;
        padding: 10px 0;
        background-color: #fff;
        color: #969696;
        font-family: inherit;
        font-size: 14px;
        cursor: pointer;
        border: 1px solid #e5e5e5;
    }
    nav .nav-list .mode .switch .switch-btn:nth-of-type(1){
        border-right: none;
        border-radius: 20px 0 0 20px;
    }
    nav .nav-list .mode .switch .switch-btn:nth-of-type(2){
        border-left: none;
        border-radius: 0 20px 20px 0;
    }
    nav .nav-list .mode .switch .active{
        background-color: #6dacf4;
        color: #fff;
    }
    nav .nav-list .mode .switch.font-family{
        margin: 20px 0 10px 0;
    }
    nav .nav-list .mode .hr{
        width: 100%;
        height: 1px;
        background-color: #e5e5e5;
        margin-top: 20px;
    }
    /******隐藏的菜单按钮及点击显示的内容******/
    nav .nav-list .menu-btn{
        position: absolute;
        top: 10px;
        left: 100px;
        padding: 5px 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
        color: #888888;
        cursor: pointer;
        display: none;
    }
    nav .nav-list .menu-btn:hover{
        background-color: rgb(247,247,247);
    }
    nav .menu-text{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        position: fixed;
        top: 56px;
        left: 0;
        z-index: 8;
        background-color: #fff;
        overflow: hidden;
    }
    nav .menu-text>li{
        text-align: center;
        width: 100%;
        padding: 15px;
        height: 56px;
        border-bottom: 1px solid #ddd;
    }
    nav .menu-text>li:hover{
        background-color: #eee;
    }
    nav .menu-text>li:nth-of-type(-n+3){
        cursor: pointer;
    }
    nav .menu-text>li.active:hover,
    nav .menu-text>li.search:hover{
        background-color: #fff;
    }
    nav .menu-text>li a.active{
        color: #ea6f5a;
    }
    nav .menu-text .search{
        padding-left: 15px;
        margin-right: 10px;
    }
    nav .menu-text .search form{
        margin-bottom: 20px;
        position: relative;
        top: 9px;
    }
    nav .menu-text .search{
        position: relative;
    }
    nav .menu-text .search form .search-input{
        width: 100%;
        position: absolute;
        top: -15px;
        left: 0;
        height: 38px;
        padding: 0 40px 0 20px;
        border: 1px solid #eee;
        background: #eee;
        border-radius: 40px;
        font-size: 14px!important;
        font: inherit;
        line-height: inherit;
    }
    nav .menu-text .search form .search-btn{
        width: 25px;
        height: 25px;
        position: absolute;
        top: -8px;
        right: 5px;
        color: #969696;
        text-align: center;
        padding: 0;
    }
    nav .menu-text .search form .search-input:focus+.search-btn{
        background-color: rgb(150,150,150);
        color: #fff;
        border-radius: 50%;
    }

    /************动画************/
    /****隐藏菜单动画****/
    .fade-enter,.fade-leave-to {
        height: 0;
    }
    .fade-enter-to,.fade-leave {
        height: 206px;
    }
    .fade-enter-active,.fade-leave-active {
        transition: all 0.2s;
    }

    /*********Aa动画*********/
    .fademode-enter,.fademode-leave-to  {
        opacity: 0;
    }
    .fademode-enter-to,.fademode-leave {
        opacity: 1;
    }
    .fademode-enter-active,.fademode-leave-active {
        transition: opacity 0.3s;
    }

    /*@keyframes modeleave{*/
        /*0{*/
            /*height: 100%;*/
        /*}*/
        /*100%{*/
            /*height: 0;*/
        /*}*/
    /*}*/
    /*.fademode-leave-active{*/
        /*animation: modeleave 0.2s;*/
    /*}*/

    @media (max-width:1440px) {
        nav .nav-list>li>a>i{
            display: none;
        }
        nav .nav-list .search form .search-input{
            width: 160px;
        }
        nav .nav-list .search form .search-input:focus{
            width: 240px;
        }
    }
    @media (max-width:1080px) {
        nav .nav-list li span{
            display: none;
        }
        nav .nav-list li.mode span{
            display: inline-block;
        }
        nav .nav-list>li a i{
            display: inline-block;
        }
    }
    @media (max-width:768px) {
        nav .nav-list>li:nth-of-type(-n+5){
            display: none;
        }
        nav .nav-list .menu-btn{
            display: block;
        }
    }
    @media (min-width:768px) {
        nav .menu-text{
            display: none;
        }
    }
</style>
