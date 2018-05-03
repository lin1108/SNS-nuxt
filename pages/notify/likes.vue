<template>
    <div>
        <myheader title="notify"></myheader>
        <div class="container notification">
            <div class="row">
                <!--================左侧边栏==================-->
                <div class="col-xs-8">
                    <left-aside title="likes"></left-aside>
                </div>
                <!--============中间部分=============-->
                <div class="col-xs-16 main">
                    <div class="menu">收到的喜欢和赞</div>
                    <ul class="like-list">
                        <li>
                            <nuxt-link to="/" class="avatar">
                                <img src="~assets/img/author5.jpg" alt="">
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link to="/">
                                    微微一笑
                                </nuxt-link>
                                <span>赞了你的评论</span>
                                <nuxt-link to="/" class="note">
                                    还不错呦~
                                </nuxt-link>
                                <div class="time">2018.04.30 08:20</div>
                            </div>
                        </li>
                        <li>
                            <nuxt-link to="/" class="avatar">
                                <img src="~assets/img/author5.jpg" alt="">
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link to="/">
                                    微微一笑
                                </nuxt-link>
                                <span>赞了你的评论</span>
                                <nuxt-link to="/" class="note">
                                    还不错呦~
                                </nuxt-link>
                                <div class="time">2018.04.30 08:20</div>
                            </div>
                        </li>
                        <li>
                            <nuxt-link to="/" class="avatar">
                                <img src="~assets/img/author5.jpg" alt="">
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link to="/">
                                    微微一笑
                                </nuxt-link>
                                <span>赞了你的评论</span>
                                <nuxt-link to="/" class="note">
                                    还不错呦~
                                </nuxt-link>
                                <div class="time">2018.04.30 08:20</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import myheader from '~/components/myheader';
    import leftAside from '~/components/notify/leftAside';
    import myform from '~/components/detailpage/myform';

    export default {
        name: "likes",
        components: {
            myheader,
            leftAside,
            myform
        },
    }
</script>

<style scoped>
    @import '../../assets/css/notify/notify.css';

</style>