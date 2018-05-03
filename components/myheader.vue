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
                        <nuxt-link to="/user/my" class="avatar">
                            <img src="~assets/img/avatar.jpg" alt="">
                        </nuxt-link>
                    </div>
                    <ul class="drop-menu" v-show="isShow">
                        <li>
                            <nuxt-link to="/user/my">
                                <i class="iconfont icon-user"></i>
                                我的主页
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/user/bookmarks">
                                <i class="iconfont icon-shuqian"></i>
                                收藏的文章
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/user/123/likes">
                                <i class="fa fa-heart"></i>
                                喜欢的文章
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/user/pay">
                                <i class="iconfont icon-diamond"></i>
                                已购内容
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/user/wallet">
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
                            <nuxt-link to="/user/help">
                                <i class="fa fa-commenting"></i>
                                帮助与反馈
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">
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
                        <li class="find" @click="navmenu='index'">
                            <nuxt-link to="/" :class="navmenu=='index'?'active':''">
                                <i class="fa fa-compass"> </i>
                                <span>发现</span>
                            </nuxt-link>
                        </li>
                        <!--关注-->
                        <li class="watch" @click="navmenu='follow'">
                            <nuxt-link to="/follow/friendcircle" :class="navmenu=='follow'?'active':''">
                                <i class="fa fa-book"></i>
                                <span>关注</span>
                            </nuxt-link>
                        </li>
                        <!--消息及下拉菜单~同头像的下拉菜单-->
                        <li class="user" @mouseenter="modifyShow=true" @mouseleave="modifyShow=false" @click="navmenu='notify'">
                            <nuxt-link to="/notify/comments" :class="navmenu=='notify'?'active':''">
                                <i class="fa fa-bell-o"></i>
                                <span>消息</span>
                            </nuxt-link>
                            <ul class="drop-menu" v-show="modifyShow">
                                <li>
                                    <nuxt-link to="/notify/comments">
                                        <i class="iconfont icon-comment1"></i>
                                        评论
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/notify/chats">
                                        <i class="iconfont icon-icon"></i>
                                        简信
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/notify/requests">
                                        <i class="iconfont icon-shangchuan"></i>
                                        投稿请求
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/notify/likes">
                                        <i class="iconfont icon-heart1"></i>
                                        喜欢和赞
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/notify/follows">
                                        <i class="iconfont icon-yiguanzhu"></i>
                                        关注
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/notify/money">
                                        <i class="iconfont icon-money1"></i>
                                        赞赏和付费
                                    </nuxt-link>
                                </li>
                                <li>
                                    <nuxt-link to="/notify/others">
                                        <i class="iconfont icon-qita"></i>
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
        props:['title'],
        data(){
            return{
                isShow:false,
                modifyShow:false,
                menuShow:false,
                modeShow:false,
                navmenu:'index'
            }
        },
        mounted:function () {
            console.log(this.title)
            this.navmenu = this.title;
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
        },

    }
</script>

<style>
    @import '../assets/css/myheader.css';

</style>
