<template>
    <div>
        <myheader title="follow"></myheader>
        <div class="container follow">
            <div class="row">
                <!--=========侧边栏========-->
                <div class="col-xs-8">
                    <follow-aside title="friendcircle"></follow-aside>
                </div>
                <!--=======中间内容部分========-->
                <div class="col-xs-16 main">
                    <ul class="note-list">
                        <li class="have-img">
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
                                            皮卡林
                                        </nuxt-link>
                                        <img src="~assets/img/star-tag.jpg" alt="" class="img-icon" v-tooltip="'简书优秀游戏作者'">
                                        <span>喜欢了文章 · 12分钟前</span>
                                    </div>
                                </div>
                                <nuxt-link to="/" class="title">
                                    神秘王国
                                </nuxt-link>
                                <p class="abstract">他们原以为外面的世界很精彩比神秘王国还要美丽，可是眼见为实，耳听为虚。外面的世界并没有他们想象中的那么好，甚至让他们有些后悔。空气中到处都弥漫着一股腐臭味，小河里的水...</p>
                                <div class="meta">
                                    <nuxt-link to="/" class="origin-author">
                                        不平凡的世界
                                    </nuxt-link>
                                    <nuxt-link to="/" class="active">
                                        <i class="iconfont icon-eye"></i>12
                                    </nuxt-link>
                                    <nuxt-link to="/" class="active">
                                        <i class="iconfont icon-comment"></i>12
                                    </nuxt-link>
                                    <span>
                                        <i class="iconfont icon-cc-heart"></i>20
                                    </span>
                                    <span>
                                        <i class="iconfont icon-money"></i>3
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="have-img">
                            <nuxt-link to="/" class="wrap-img">
                                <img src="~assets/img/main2.jpg" alt="">
                            </nuxt-link>
                            <div class="content">
                                <div class="author">
                                    <nuxt-link to="/" class="avatar">
                                        <img src="~assets/img/author2.jpg" alt="">
                                    </nuxt-link>
                                    <div class="info">
                                        <nuxt-link to="/" class="nickname">
                                            太湖浪子
                                        </nuxt-link>
                                        <img src="~assets/img/yes-tag.jpg" alt="" class="img-icon" v-tooltip="'简书认证群主'">
                                        <span>喜欢了文章 · 20分钟前</span>
                                    </div>
                                </div>
                                <nuxt-link to="/" class="title">
                                    我好想做天上一朵云
                                </nuxt-link>
                                <p class="abstract">世间万物到处是美景！ 美的心灵，美的一朵三角梅，美的一棵碧绿的小草，美的一条悠悠游动的小金鱼，美的一只快乐的小花猫，美的一条穿着花衣服散步的小狗，美美的一朵朵白云！ 到处都这...</p>
                                <div class="meta">
                                    <nuxt-link to="/" class="origin-author">
                                        春华秋实
                                    </nuxt-link>
                                    <nuxt-link to="/" class="active">
                                        <i class="iconfont icon-eye"></i>12
                                    </nuxt-link>
                                    <nuxt-link to="/" class="active">
                                        <i class="iconfont icon-comment"></i>12
                                    </nuxt-link>
                                    <span>
                                        <i class="iconfont icon-cc-heart"></i>20
                                    </span>
                                    <span>
                                        <i class="iconfont icon-money"></i>3
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="">
                            <!--<nuxt-link to="/" class="wrap-img">-->
                                <!--<img src="~assets/img/main1.jpg" alt="">-->
                            <!--</nuxt-link>-->
                            <div class="content">
                                <div class="author">
                                    <nuxt-link to="/" class="avatar">
                                        <img src="~assets/img/author3.jpg" alt="">
                                    </nuxt-link>
                                    <div class="info">
                                        <nuxt-link to="/" class="nickname">
                                            夜雨可书
                                        </nuxt-link>
                                        <img src="~assets/img/vip-tag.jpg" alt="" class="img-icon" v-tooltip="'简书会员'">
                                        <span>喜欢了文章 · 56分钟前</span>
                                    </div>
                                </div>
                                <nuxt-link to="/" class="title">
                                    如果可以
                                </nuxt-link>
                                <p class="abstract">如果可以 在你孤单的时候 让窗外的小鸟 替我陪你说说话儿 如果可以 在你累了的时候 让屋后的小山 替我的肩给你靠靠 如果可以 在你疲劳的时候 让树上的喜鹊 替我的歌声给你力量...</p>
                                <div class="meta">
                                    <nuxt-link to="/" class="origin-author">
                                        孟凡宇狸
                                    </nuxt-link>
                                    <nuxt-link to="/" class="active">
                                        <i class="iconfont icon-eye"></i>12
                                    </nuxt-link>
                                    <nuxt-link to="/" class="active">
                                        <i class="iconfont icon-comment"></i>12
                                    </nuxt-link>
                                    <span>
                                        <i class="iconfont icon-cc-heart"></i>20
                                    </span>
                                    <span>
                                        <i class="iconfont icon-money"></i>3
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li class="have-img">
                            <nuxt-link to="/" class="wrap-img">
                                <img src="~assets/img/main4.jpg" alt="">
                            </nuxt-link>
                            <div class="content">
                                <div class="author">
                                    <nuxt-link to="/" class="avatar">
                                        <img src="~assets/img/author4.jpg" alt="">
                                    </nuxt-link>
                                    <div class="info">
                                        <nuxt-link to="/" class="nickname">
                                            静静的白莲
                                        </nuxt-link>
                                        <img src="~assets/img/c-tag.jpg" alt="" class="img-icon" v-tooltip="'简书版权'">
                                        <span>喜欢了文章 · 2小时前</span>
                                    </div>
                                </div>
                                <nuxt-link to="/" class="title">
                                    五月，你终究来了
                                </nuxt-link>
                                <p class="abstract">2018年5月1日  星期二   天气  雷阵雨 四月的尾声，过得并不太舒畅，依旧是忙忙碌碌地一日又一日，只是精神疲乏一日胜一日。唯有每天强打精神，做好每天的必备事项。生活里...</p>
                                <div class="meta">
                                    <nuxt-link to="/" class="origin-author">
                                        浅笑淡然
                                    </nuxt-link>
                                    <nuxt-link to="/" class="active">
                                        <i class="iconfont icon-eye"></i>12
                                    </nuxt-link>
                                    <nuxt-link to="/" class="active">
                                        <i class="iconfont icon-comment"></i>12
                                    </nuxt-link>
                                    <span>
                                        <i class="iconfont icon-cc-heart"></i>20
                                    </span>
                                    <span>
                                        <i class="iconfont icon-money"></i>3
                                    </span>
                                </div>
                            </div>
                        </li>
                        <a href="javascript:;" class="more">阅读更多</a>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import myheader from '~/components/myheader';
    import followAside from '~/components/follow/followAside';

    export default {
        name: "friendcircle",
        components:{
            myheader,
            followAside
        }
    }
</script>

<style scoped>
    @import '../../assets/css/follow/follow.css';

</style>