<template>
    <div>
        <myheader title="follow"></myheader>
        <div class="container follow">
            <div class="row">
                <!--========左侧边栏========-->
                <div class="col-xs-8">
                    <follow-aside title="user"></follow-aside>
                </div>
                <!--========右侧内容========-->
                <div class="col-xs-16 main">
                    <div class="main-top">
                        <nuxt-link to="/" class="avatar">
                            <img src="~assets/img/author1.jpg" alt="" style="border-radius: 50%">
                        </nuxt-link>
                        <nuxt-link to="/" class="btn btn-hollow">
                            个人主页 <i class="fa fa-angle-right"></i>
                        </nuxt-link>
                        <a href="javascript:;" to="/" class="btn btn-hollow">
                            发简信
                        </a>
                        <div class="title">
                            <nuxt-link to="/" class="name">
                                皮卡林
                            </nuxt-link>
                        </div>
                        <div class="info">
                            写了186564字，获得20134个喜欢
                        </div>
                    </div>
                    <!--====================导航条--动态组件切换=================-->
                    <div class="outer-container">
                        <ul class="ul-menu">
                            <li @click="menubar='userRecord'" :class="menubar=='userRecord'?'active':''">
                                <i class="iconfont icon-book"></i>
                                最新发布
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
    import userRecord from '~/components/follow/userRecord';
    import newComment from '~/components/follow/newComment';
    import newHot from '~/components/follow/newHot';

    export default {
        name: "user",
        components:{
            myheader,
            followAside,
            userRecord,
            newComment,
            newHot
        },
        data() {
            return{
                menubar:'userRecord'
            }
        }
    }
</script>

<style scoped>
    @import '../../../assets/css/follow/follow.css';

</style>