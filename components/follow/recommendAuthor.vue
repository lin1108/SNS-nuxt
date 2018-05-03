<template>
    <div>
        <ul class="addfollow-list">
            <li>
                <div>
                    <nuxt-link to="/" class="avatar">
                        <img src="~assets/img/head8.jpg" alt="" class="circle">
                    </nuxt-link>
                    <a href="javascript:;" class="btn btn-success follow">
                        <i class="iconfont icon-cc-plus"></i>
                        关注
                    </a>
                    <div class="info">
                        <nuxt-link to="/" class="name">
                            海纳百川
                        </nuxt-link>
                        <p>欢迎关注公众号简宝玉</p>
                        <nuxt-link to="/">
                            <i class="iconfont icon-gengduo"></i>
                            222.4K篇文章 · 1445.0K人关注
                        </nuxt-link>
                        <!--<nuxt-link to="/">-->
                        <!--<i class="iconfont icon-book"></i>-->
                        <!--伊涅斯塔-->
                        <!--</nuxt-link>-->
                        <div class="meta">
                            <nuxt-link to="/">
                                胡七筒
                            </nuxt-link>
                            关注了作者
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <nuxt-link to="/" class="avatar">
                        <img src="~assets/img/head7.jpg" alt="" class="circle">
                    </nuxt-link>
                    <a href="javascript:;" class="btn btn-success follow">
                        <i class="iconfont icon-cc-plus"></i>
                        关注
                    </a>
                    <div class="info">
                        <nuxt-link to="/" class="name">
                            陈狂
                        </nuxt-link>
                        <p>沉重且轻狂 希望与更多朋友交流绘画，欢迎关注公众号：kua...</p>
                        <nuxt-link to="/">
                            <i class="iconfont icon-book"></i>
                            最近手感尽失，急需找回状态
                        </nuxt-link>
                        <nuxt-link to="/">
                            <i class="iconfont icon-book"></i>
                            伊涅斯塔
                        </nuxt-link>
                        <div class="meta">
                            <nuxt-link to="/">
                                大鸟8wo
                            </nuxt-link>
                            关注了作者
                        </div>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <nuxt-link to="/" class="avatar">
                        <img src="~assets/img/head6.jpg" alt="" class="circle">
                    </nuxt-link>
                    <a href="javascript:;" class="btn btn-success follow">
                        <i class="iconfont icon-cc-plus"></i>
                        关注
                    </a>
                    <div class="info">
                        <nuxt-link to="/" class="name">
                            醉西湖
                        </nuxt-link>
                        <p></p>
                        <nuxt-link to="/">
                            <i class="iconfont icon-book"></i>
                            沟通真的很重要
                        </nuxt-link>
                        <nuxt-link to="/">
                            <i class="iconfont icon-book"></i>
                            人生如此短暂
                        </nuxt-link>
                        <div class="meta">
                            <nuxt-link to="/">
                                夜雨可书
                            </nuxt-link>
                            关注了作者
                        </div>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "recommendAuthor"
    }
</script>

<style scoped>
    @import '../../assets/css/follow/follow.css';

</style>