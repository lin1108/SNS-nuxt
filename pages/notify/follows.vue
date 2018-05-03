<template>
    <div>
        <myheader title="notify"></myheader>
        <div class="container notification">
            <div class="row">
                <!--================左侧边栏==================-->
                <div class="col-xs-8">
                    <left-aside title="follows"></left-aside>
                </div>
                <!--============中间部分=============-->
                <div class="col-xs-16 main">
                    <div class="menu">全部关注</div>
                    <ul class="follow-list">
                        <li>
                            <nuxt-link to="/" class="avatar">
                                <img src="~assets/img/author2.jpg" alt="">
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link to="/">
                                    赤耳小乐
                                </nuxt-link>
                                <span>关注了你</span>
                                <div class="time">2018.04.30 08:20</div>
                            </div>
                            <div class="btn follow-btn" v-if="follow" @click="followedshow">
                                <i class="iconfont icon-cc-plus"></i>
                                <span>关注</span>
                            </div>
                            <div class="btn follow-btn followed" v-if="followed" @mouseenter="unfollowshow">
                                <i class="iconfont icon-rightline"></i>
                                <span>已关注</span>
                            </div>
                            <div class="btn follow-btn unfollow" v-if="unfollow" @mouseleave="unfollowhide" @click="followshow">
                                <i class="iconfont icon-close"></i>
                                <span>取消关注</span>
                            </div>
                        </li>
                        <li>
                            <nuxt-link to="/" class="avatar">
                                <img src="~assets/img/author4.jpg" alt="">
                            </nuxt-link>
                            <div class="info">
                                <nuxt-link to="/">
                                    嘉庆年华
                                </nuxt-link>
                                <span>关注了你</span>
                                <div class="time">2018.04.28 08:30</div>
                            </div>
                            <div class="btn follow-btn">
                                <i class="iconfont icon-cc-plus"></i>
                                <span>关注</span>
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
        name: "follows",
        components: {
            myheader,
            leftAside,
            myform
        },
        data() {
            return{
                follow:true,
                followed:false,
                unfollow:false
            }
        },
        methods:{
            followedshow:function () {
                this.follow = false;
                this.followed = true;
            },
            unfollowshow:function () {
                this.followed = false;
                this.unfollow = true;
            },
            unfollowhide:function () {
                this.unfollow = false;
                this.followed = true;
            },
            followshow:function () {
                this.followed = false;
                this.follow = true;
                this.unfollow = false;
            },
        }
    }
</script>

<style scoped>
    @import '../../assets/css/notify/notify.css';

</style>