<template>
    <div style="height: 100%">
        <myheader></myheader>
        <div class="container index">
            <div class="row">
                <!--**********热门专题**********-->
                <div class="col-xs-16 main">
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
                    <!--******文章列表******-->
                    <div class="list-container">
                        <ul class="note-list">
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
                                                <a href="http://www.jianshu.com/p/d1d89ed69098" target="_blank" class="icon-tag" @mouseenter="showTitle=true" @mouseleave="showTitle=false">
                                                    <img src="~assets/img/star-tag.jpg" alt="">
                                                </a>
                                                <span class="time">04.23 10:20</span>
                                            </div>
                                            <div class="icon-title" v-show="showTitle">
                                                简书游戏优秀作者
                                            </div>
                                            <div class="caret-down" v-show="showTitle">
                                                <i class="fa fa-caret-down"></i>
                                            </div>
                                        </div>
                                        <nuxt-link class="title" to="">从《唐人街探案2》探寻一个屌丝逆袭的真相</nuxt-link>
                                        <div class="abstruct">
                                            《唐人街探案2》目前票房已经突破33亿，是2015年《唐人街探案1》8亿余票房的4倍多，票房收入高居历年国产喜剧电影的榜首。这部电影成功的背后，秦风的扮演者刘昊然，宋义的扮演...
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
                                                <a href="http://www.jianshu.com/p/9cb2014de249" target="_blank" class="icon-tag" @mouseenter="showTitle=true" @mouseleave="showTitle=false">
                                                    <img src="~assets/img/yes-tag.jpg" alt="">
                                                </a>
                                                <span class="time">04.23 19:20</span>
                                            </div>
                                            <div class="icon-title" v-show="showTitle">
                                                简书认证群主
                                            </div>
                                            <div class="caret-down" v-show="showTitle">
                                                <i class="fa fa-caret-down"></i>
                                            </div>
                                        </div>
                                        <nuxt-link class="title" to="">二胎辣妈，每月五万字：在写作里，我是那个自律的“疯子”</nuxt-link>
                                        <div class="abstruct">
                                            因为热爱，所以疯狂。 2018.3.7 文/与君成悦 01 大宝幼儿园开学了，等了一个假期，终于等到了这一天，我像是看到了希望似的，开心极了。 凌乱喧闹的假期，她一会儿一个妈...
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
                </div>
                <div class="col-xs-offset-1 col-xs-7 aside">
                    侧边栏
                </div>
            </div>
        </div>
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
                showTitle:false
            }
        }
    }
</script>
