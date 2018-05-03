<template>
    <div>
        <myheader title="follow"></myheader>
        <div class="container follow">
            <div class="row">
                <!--========左侧边栏========-->
                <div class="col-xs-8">
                    <follow-aside title="collection"></follow-aside>
                </div>
                <!--========右侧内容========-->
                <div class="col-xs-16 main">
                    <div class="main-top">
                        <nuxt-link to="/" class="avatar">
                            <img src="~assets/img/head1.jpg" alt="">
                        </nuxt-link>
                        <nuxt-link to="/" class="btn btn-hollow">
                            专题主页 <i class="fa fa-angle-right"></i>
                        </nuxt-link>
                        <a href="javascript:;" to="/" class="btn btn-hollow">
                            投稿
                        </a>
                        <div class="title">
                            <nuxt-link to="/" class="name">
                                简书交友
                            </nuxt-link>
                        </div>
                        <div class="info">
                            <nuxt-link to="/">
                                简书
                            </nuxt-link>
                            编 · 收录了3686篇文章 · 384637人关注
                        </div>
                    </div>
                    <!--====================导航条--动态组件切换=================-->
                    <div class="outer-container">
                        <ul class="ul-menu">
                            <li @click="menubar='newRecord'" :class="menubar=='newRecord'?'active':''">
                                <i class="iconfont icon-book"></i>
                                最新收录
                            </li>
                            <li @click="menubar='newComment'" :class="menubar=='newComment'?'active':''">
                                <i class="iconfont icon-comment"></i>
                                最新评论
                            </li>
                            <li @click="menubar='newHot'" :class="menubar=='newHot'?'active':''">
                                <i class="iconfont icon-remen"></i>
                                热门
                            </li>
                        </ul>
                        <!--=======:is动态组件=======-->
                        <div>
                            <component :is="menubar"></component>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import myheader from '~/components/myheader';
    import followAside from '~/components/follow/followAside';
    import newRecord from '~/components/follow/newRecord';
    import newComment from '~/components/follow/newComment';
    import newHot from '~/components/follow/newHot';

    export default {
        name: "collection",
        components:{
            myheader,
            followAside,
            newRecord,
            newComment,
            newHot
        },
        data() {
            return{
                menubar:'newRecord'
            }
        }
    }
</script>

<style scoped>
    @import '../../../assets/css/follow/follow.css';

</style>