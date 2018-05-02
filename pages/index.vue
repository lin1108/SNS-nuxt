<template>
    <div style="height: 100%">
        <myheader></myheader>
        <div class="container index">
            <div class="row">
                <!--====================热门专题以及文章列表===================-->
                <div class="col-xs-16 main">
                    <div class="index-carousel">
                        <img src="~assets/img/main.png" alt="">
                    </div>
                    <!--====热门专题====-->
                    <div class="recommend-collection">
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top1.jpg" alt="">
                            <span class="name">手绘</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top2.jpg" alt="">
                            <span class="name">读书</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top3.jpg" alt="">
                            <span class="name">社会热点</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top4.jpg" alt="">
                            <span class="name">@IT·互联网</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top5.jpg" alt="">
                            <span class="name">旅行·在路上</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top6.jpg" alt="">
                            <span class="name">历史</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top7.jpg" alt="">
                            <span class="name">自然科普</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="more">
                            <span class="more">更多热门专题&nbsp;
                                <i class="fa fa-angle-right"></i>
                            </span>
                        </nuxt-link>
                    </div>
                    <div class="split-line"></div>
                    <!--========================文章列表===========================-->
                    <div class="list-container">
                        <ul class="note-list">
                            <!--===有图片的文章===-->
                            <li class="have-img">
                                <div>
                                    <nuxt-link to="/" class="wrap-img">
                                        <img src="~assets/img/main1.jpg" alt="">
                                    </nuxt-link>
                                    <div class="content">
                                        <div class="author">
                                            <nuxt-link to="/" class="avatar">
                                                <img src="~assets/img/author1.jpg" alt="">
                                            </nuxt-link>
                                            <div class="info">
                                                <nuxt-link to="/" class="nickname">
                                                    林无敌
                                                </nuxt-link>
                                                <a href="http://www.jianshu.com/p/d1d89ed69098" target="_blank" class="icon-tag">
                                                    <img src="~assets/img/star-tag.jpg" alt="" v-tooltip="'简书优秀游戏作者'">
                                                </a>
                                                <span class="time">04.23 10:20</span>
                                            </div>
                                            <!--<div class="icon-title">-->
                                                <!--简书游戏优秀作者-->
                                            <!--</div>-->
                                        </div>
                                        <nuxt-link class="title" to="/p/123">
                                            三世断桥之白浪梦迷 第七章 望海镇
                                        </nuxt-link>
                                        <div class="abstruct">
                                            再说若冰和十七，伏身在东镇庙西驿馆屋顶，听尚书府大管家求石抑扬顿挫地朗诵《获鹿记》，正沉浸在一派安静祥和的气氛中，也忘了什么月桂不月桂，剑胆不剑胆，忽听一声响亮，两个黑衣...
                                        </div>
                                        <div class="meta">
                                            <nuxt-link to="/" class="collection-tag">散文随笔</nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-eye"></i>
                                                1500
                                            </nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-comment"></i>
                                                100
                                            </nuxt-link>
                                            <span>
                                                <i class="fa fa-heart"></i>
                                                20
                                            </span>
                                            <span>
                                                <i class="fa fa-rmb"></i>
                                                10
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <!--===没有图片的文章===-->
                            <li>
                                <div class="">
                                    <!--<nuxt-link to="/">-->
                                    <!--<img src="~assets/img/note.jpg" alt="">-->
                                    <!--</nuxt-link>-->
                                    <div class="content">
                                        <div class="author">
                                            <nuxt-link to="/" class="avatar">
                                                <img src="~assets/img/author2.jpg" alt="">
                                            </nuxt-link>
                                            <div class="info">
                                                <nuxt-link to="/" class="nickname">
                                                    范傻比
                                                </nuxt-link>
                                                <a href="http://www.jianshu.com/p/9cb2014de249" target="_blank" class="icon-tag">
                                                    <img src="~assets/img/yes-tag.jpg" alt="" v-tooltip="'简书认证群主'">
                                                </a>
                                                <span class="time">04.23 19:20</span>
                                            </div>
                                        </div>
                                        <nuxt-link class="title" to="/">二胎辣妈，每月五万字：在写作里，我是那个自律的“疯子”</nuxt-link>
                                        <div class="abstruct">
                                            因为热爱，所以疯狂。 2018.3.7 文/与君成悦 01 大宝幼儿园开学了，等了一个假期，终于等到了这一天，我像是看到了希望似的，开心极了。
                                            凌乱喧闹的假期，她一会儿一个妈...
                                        </div>
                                        <div class="meta">
                                            <nuxt-link to="/" class="collection-tag">社会与法</nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-eye"></i>
                                                1500
                                            </nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-comment"></i>
                                                100
                                            </nuxt-link>
                                            <span>
                                                <i class="fa fa-heart"></i>
                                                20
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="">
                                    <!--<nuxt-link to="/">-->
                                    <!--<img src="~assets/img/note.jpg" alt="">-->
                                    <!--</nuxt-link>-->
                                    <div class="content">
                                        <div class="author">
                                            <nuxt-link to="/" class="avatar">
                                                <img src="~assets/img/author2.jpg" alt="">
                                            </nuxt-link>
                                            <div class="info">
                                                <nuxt-link to="/" class="nickname">
                                                    范傻比
                                                </nuxt-link>
                                                <a href="http://www.jianshu.com/p/9cb2014de249" target="_blank" class="icon-tag">
                                                    <img src="~assets/img/yes-tag.jpg" alt="" v-tooltip="'简书认证群主'">
                                                </a>
                                                <span class="time">04.23 19:20</span>
                                            </div>
                                        </div>
                                        <nuxt-link class="title" to="">二胎辣妈，每月五万字：在写作里，我是那个自律的“疯子”</nuxt-link>
                                        <div class="abstruct">
                                            因为热爱，所以疯狂。 2018.3.7 文/与君成悦 01 大宝幼儿园开学了，等了一个假期，终于等到了这一天，我像是看到了希望似的，开心极了。
                                            凌乱喧闹的假期，她一会儿一个妈...
                                        </div>
                                        <div class="meta">
                                            <nuxt-link to="/" class="collection-tag">社会与法</nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-eye"></i>
                                                1500
                                            </nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-comment"></i>
                                                100
                                            </nuxt-link>
                                            <span>
                                                <i class="fa fa-heart"></i>
                                                20
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="">
                                    <!--<nuxt-link to="/">-->
                                    <!--<img src="~assets/img/note.jpg" alt="">-->
                                    <!--</nuxt-link>-->
                                    <div class="content">
                                        <div class="author">
                                            <nuxt-link to="/" class="avatar">
                                                <img src="~assets/img/author2.jpg" alt="">
                                            </nuxt-link>
                                            <div class="info">
                                                <nuxt-link to="/" class="nickname">
                                                    范傻比
                                                </nuxt-link>
                                                <a href="http://www.jianshu.com/p/9cb2014de249" target="_blank" class="icon-tag">
                                                    <img src="~assets/img/yes-tag.jpg" alt="" v-tooltip="'简书认证群主'">
                                                </a>
                                                <span class="time">04.23 19:20</span>
                                            </div>
                                        </div>
                                        <nuxt-link class="title" to="">二胎辣妈，每月五万字：在写作里，我是那个自律的“疯子”</nuxt-link>
                                        <div class="abstruct">
                                            因为热爱，所以疯狂。 2018.3.7 文/与君成悦 01 大宝幼儿园开学了，等了一个假期，终于等到了这一天，我像是看到了希望似的，开心极了。
                                            凌乱喧闹的假期，她一会儿一个妈...
                                        </div>
                                        <div class="meta">
                                            <nuxt-link to="/" class="collection-tag">社会与法</nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-eye"></i>
                                                1500
                                            </nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-comment"></i>
                                                100
                                            </nuxt-link>
                                            <span>
                                                <i class="fa fa-heart"></i>
                                                20
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="">
                                    <!--<nuxt-link to="/">-->
                                    <!--<img src="~assets/img/note.jpg" alt="">-->
                                    <!--</nuxt-link>-->
                                    <div class="content">
                                        <div class="author">
                                            <nuxt-link to="/" class="avatar">
                                                <img src="~assets/img/author2.jpg" alt="">
                                            </nuxt-link>
                                            <div class="info">
                                                <nuxt-link to="/" class="nickname">
                                                    范傻比
                                                </nuxt-link>
                                                <a href="http://www.jianshu.com/p/9cb2014de249" target="_blank" class="icon-tag">
                                                    <img src="~assets/img/yes-tag.jpg" alt="" v-tooltip="'简书认证群主'">
                                                </a>
                                                <span class="time">04.23 19:20</span>
                                            </div>
                                        </div>
                                        <nuxt-link class="title" to="">二胎辣妈，每月五万字：在写作里，我是那个自律的“疯子”</nuxt-link>
                                        <div class="abstruct">
                                            因为热爱，所以疯狂。 2018.3.7 文/与君成悦 01 大宝幼儿园开学了，等了一个假期，终于等到了这一天，我像是看到了希望似的，开心极了。
                                            凌乱喧闹的假期，她一会儿一个妈...
                                        </div>
                                        <div class="meta">
                                            <nuxt-link to="/" class="collection-tag">社会与法</nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-eye"></i>
                                                1500
                                            </nuxt-link>
                                            <nuxt-link to="/">
                                                <i class="fa fa-comment"></i>
                                                100
                                            </nuxt-link>
                                            <span>
                                                <i class="fa fa-heart"></i>
                                                20
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <a class="load-more" href="">阅读更多</a>
                </div>
                <!--============================侧边栏=============================-->
                <div class="col-xs-offset-1 col-xs-7 aside">
                    <div class="row">
                        <!--==========广告==========-->
                        <div class="board">
                            <nuxt-link to="/">
                                <img src="~assets/img/aside1.png" alt="">
                            </nuxt-link>
                            <nuxt-link to="/">
                                <img src="~assets/img/aside2.png" alt="">
                            </nuxt-link>
                            <nuxt-link to="/">
                                <img src="~assets/img/aside3.png" alt="">
                            </nuxt-link>
                            <nuxt-link to="/">
                                <img src="~assets/img/aside4.png" alt="">
                            </nuxt-link>
                            <nuxt-link to="/" class="last">
                                <div class="code" @mouseenter="codeshow=true" @mouseleave="codeshow=false">
                                    <div class="left">
                                        <img src="~assets/img/aside5.png" alt="">
                                    </div>
                                    <div class="right">
                                        <p class="download">
                                            下载简书手机APP&nbsp;
                                            <i class="fa fa-angle-right"></i>
                                        </p>
                                        <p class="checkout">随时随地发现和创作内容</p>
                                    </div>
                                </div>
                                <div class="big-code" v-show="codeshow">
                                    <img src="~assets/img/aside5.png" alt="">
                                </div>
                            </nuxt-link>

                        </div>
                        <!--=========推荐作者=========-->
                        <div class="recommend-author">
                            <div class="title">
                                <span>推荐作者</span>
                                <a href="#" class="page-change" @click="rotate">
                                    <i class="fa fa-refresh"></i>
                                    换一批
                                </a>
                            </div>
                            <ul class="recommend-list">
                                <li>
                                    <nuxt-link to="/" class="avatar">
                                        <img src="~assets/img/author1.jpg" alt="">
                                    </nuxt-link>
                                    <!--<a href="#" class="followed" v-if="followed" @click="followedshow">-->
                                        <!--<i class="fa fa-plus"></i>-->
                                        <!--关注-->
                                    <!--</a>-->
                                    <!--<a href="#" class="followed followed" v-if="followed" @mouseenter="unfollowedshow">-->
                                        <!--<i class="fa fa-check"></i>-->
                                        <!--已关注-->
                                    <!--</a>-->
                                    <!--<a href="#" class="followed followed" v-if="unfollowed" @click="followshow" @mouseleave="unfollowedhide">-->
                                        <!--<i class="fa fa-close"></i>-->
                                        <!--取消关注-->
                                    <!--</a>-->
                                    <a href="#" :class="followshow?'follow':'followed'" @click="followshow=!followshow" @mouseenter="!followshow&&followedshow?followedshow=false:followedshow=true" @mouseleave="!followshow&&followedshow?followedshow=true:followedshow=!followedshow">
                                        <i :class="followshow?'fa fa-plus':followedshow?'fa fa-check':'fa fa-close'"></i>
                                        {{followshow?'关注':followedshow?'已关注':'取消关注'}}
                                    </a>
                                    <nuxt-link to="/u/123" class="name">
                                        林无敌
                                    </nuxt-link>
                                    <p> 写了1958k字·1.9k喜欢</p>
                                </li>
                                <li>
                                    <nuxt-link to="/" class="avatar">
                                        <img src="~assets/img/author1.jpg" alt="">
                                    </nuxt-link>
                                    <a href="#" :class="followshow?'follow':'followed'" @click="followshow=!followshow" @mouseenter="!followshow&&followedshow?followedshow=false:followedshow=true" @mouseleave="!followshow&&followedshow?followedshow=true:followedshow=!followedshow">
                                        <i :class="followshow?'fa fa-plus':followedshow?'fa fa-check':'fa fa-close'"></i>
                                        {{followshow?'关注':followedshow?'已关注':'取消关注'}}
                                    </a>
                                    <nuxt-link to="/u/123" class="name">
                                        林无敌
                                    </nuxt-link>
                                    <p> 写了1958k字·1.9k喜欢</p>
                                </li>
                                <li>
                                    <nuxt-link to="/" class="avatar">
                                        <img src="~assets/img/author1.jpg" alt="">
                                    </nuxt-link>
                                    <a href="#" :class="followshow?'follow':'followed'" @click="followshow=!followshow" @mouseenter="!followshow&&followedshow?followedshow=false:followedshow=true" @mouseleave="!followshow&&followedshow?followedshow=true:followedshow=!followedshow">
                                        <i :class="followshow?'fa fa-plus':followedshow?'fa fa-check':'fa fa-close'"></i>
                                        {{followshow?'关注':followedshow?'已关注':'取消关注'}}
                                    </a>
                                    <nuxt-link to="/u/123" class="name">
                                        林无敌
                                    </nuxt-link>
                                    <p> 写了1958k字·1.9k喜欢</p>
                                </li>
                            </ul>
                            <nuxt-link to="/" class="find-more">
                                查看全部
                                <i class="fa fa-angle-right"></i>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--================回到顶部================-->
        <div class="side-tool">
            <ul>
                <li @click="returnTop" v-show="topbtnshow">
                    <i class="iconfont icon-huidaodingbu"></i>
                </li>
            </ul>
        </div>
        <!--===================底部内容==================-->
        <footer class="container">
            <div class="row">
                <div class="col-xs-17 main">
                    <a target="_blank" href="http://www.jianshu.com/c/jppzD2">关于简书</a>
                    <em> · </em>
                    <a target="_blank" href="http://www.jianshu.com/contact">联系我们</a>
                    <em> · </em>
                    <a target="_blank" href="http://www.jianshu.com/c/bfeec2e13990">加入我们</a>
                    <em> · </em>
                    <a target="_blank" href="http://www.jianshu.com/p/fc1c113e5b6b">简书出版</a>
                    <em> · </em>
                    <a target="_blank" href="http://www.jianshu.com/press">品牌与徽标</a>
                    <em> · </em>
                    <a target="_blank" href="http://www.jianshu.com/faqs">帮助中心</a>
                    <em> · </em>
                    <a target="_blank" href="http://www.jianshu.com/p/cabc8fa39830">合作伙伴</a>
                    <div class="icp">
                        ©2012-2018 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
                        <a target="_blank"
                           href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">
                            <img src="~assets/img/bottom1.png" alt="Smrz">
                        </a>
                        <a target="_blank"
                           href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31010402002252">
                            沪公网安备31010402002252号 / </a>
                        <a target="_blank" href="http://www.shjbzx.cn/">
                            <img src="~assets/img/bottom2.png" alt="Wxb">
                        </a>
                        举报电话：021-34770013 /
                        <a target="_blank"
                           href="http://218.242.124.22:8081/businessCheck/verifKey.do?showType=extShow&amp;serial=9031000020171107081457000002158769-SAIC_SHOW_310000-20171115131223587837&amp;signData=MEQCIADWZ5aTcBeER5SOVp0ly+ElvKnwtjczum6Gi6wZ7/wWAiB9MAPM22hp947ZaBobux5PDkd0lfqoCOkVV7zjCYME6g==">
                            <img src="~assets/img/bottom3.png" alt="Zggsrz">
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
    /*************导入头部组件************/
    import myheader from '../components/myheader';

    export default {
        head: {
            title: '简书-创作你的创作',
            meta: [
                {charset: 'utf-8'},
                {name: 'keywords', content: '简书首页'},
                {name: 'description', content: '简书首页'},
                {name: 'author', content: 'Linli'},
            ]
        },
        components: {
            myheader
        },
        data() {
            return {
                name: '首页',
                showTitle: false,
                codeshow: false,
                degree: 0,
                // followed: true,
                // followed: false,
                // unfollowed: false,
                followshow:true,
                followedshow:true,
                topbtnshow:false
            }
        },
        methods: {
            rotate: function () {
                $('.fa-refresh').css({
                    transform: 'rotate(' + (this.degree + 360) + 'deg)',
                    transition: 'all .2s'
                })
                this.degree = this.degree + 360;
            },
            // followedshow: function () {
            //     this.followed = false;
            //     this.followed = true;
            // },
            // unfollowedshow: function () {
            //     this.followed = false;
            //     this.unfollowed = true;
            // },
            // unfollowedhide: function () {
            //     this.followed = true;
            //     this.unfollowed = false;
            // },
            // followshow: function () {
            //     this.followed = true;
            //     this.unfollowed = false;
            // }

            returnTop:function () {
                $('html').animate({scrollTop:0},500);
            },
            gotoTop:function () {
                let curHeight = document.documentElement.scrollTop || document.body.scrollTop;
                if (curHeight > 100) this.topbtnshow = true;
                else this.topbtnshow = false;
            }
        },
        mounted:function () {
            window.addEventListener('scroll',this.gotoTop);
        }
    }
</script>
