<template>
    <div>
        <myheader></myheader>
        <div class="container likes">
            <div class="row">
                <div class="col-xs-16 main">
                    <div class="main-top">
                        <nuxt-link to="/" class="avatar">
                            <img src="~assets/img/author1.jpg" alt="">
                        </nuxt-link>
                        <div class="title">
                            <nuxt-link to="/" class="name">
                                皮卡林
                            </nuxt-link>
                        </div>
                        <div class="info">
                            <ul>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/">
                                            <p>14</p>
                                            关注
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/">
                                            <p>1314</p>
                                            粉丝
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/">
                                            <p>10</p>
                                            文章
                                            <i class="fa fa-angle-right"></i>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/">
                                            <p>65628</p>
                                            <div>字数</div>
                                        </nuxt-link>
                                    </div>
                                </li>
                                <li>
                                    <div class="meta-block">
                                        <nuxt-link to="/">
                                            <p>3200</p>
                                            <div>收获喜欢</div>
                                        </nuxt-link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="outer-container">
                        <ul class="ul-menu">
                            <li @click="menubar='followed'" :class="menubar=='followed'?'active':''">
                                关注的专题/文集/连载 14
                            </li>
                            <li @click="menubar='liked'" :class="menubar=='liked'?'active':''">
                                喜欢的文章 2
                            </li>
                        </ul>
                        <div class="list-container">
                            <component :is="menubar"></component>

                        </div>
                    </div>
                </div>
                <!--=============================右侧边栏===========================-->
                <div class="col-xs-offset-1 col-xs-7 aside">
                    <right-aside></right-aside>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import myheader from '~/components/myheader';
    import rightAside from '~/components/user/rightAside';
    import followed from '~/components/user/followed';
    import liked from '~/components/user/liked';

    export default {
        name: "likes",
        components: {
            myheader,
            rightAside,
            followed,
            liked
        },
        data() {
            return {
                menubar: 'liked'
            }
        },

    }
</script>

<style scoped>
    @import '../../../assets/css/user/user.css';

</style>