<template>
    <div>
        <myheader></myheader>
        <div class="container notification">
            <div class="row">
                <!--================左侧边栏==================-->
                <div class="col-xs-8">
                    <left-aside></left-aside>
                </div>
                <!--============中间部分=============-->
                <div class="col-xs-16 main">
                    <div class="menu">全部简信</div>
                    <ul class="chat-list">
                        <li>
                            <nuxt-link to="/" class="avatar">
                                <img src="~assets/img/author2.jpg" alt="">
                            </nuxt-link>
                            <nuxt-link to="/" class="name">
                                简宝玉
                            </nuxt-link>
                            <nuxt-link to="/" class="wrap">
                                <p>欢迎加入丰富多彩的原创内容社区—简书。新手有关简书的任何疑问请点击链接查看 http://www.jianshu.com/p/27de765cdb28 ，同时关注微信公众号简宝玉（jianshu4321)，后台回复“指南”可获取新手玩转简书社区指南详细资料礼包；简宝玉同志会专程为你答疑解惑关于简书的一切。</p>
                            </nuxt-link>
                            <div class="pull-right">
                                <span class="time">04.20 16:20</span>
                                <i class="fa fa-angle-down" @click="menushow=!menushow"></i>
                                <ul class="dropdown-menu" v-show="menushow">
                                    <li>
                                        <i class="iconfont icon-shanchu"></i>
                                        删除会话
                                    </li>
                                    <li>
                                        <i class="iconfont icon-jinzhi"></i>
                                        加入黑名单
                                    </li>
                                    <li>
                                        <i class="iconfont icon-qizi"></i>
                                        举报用户
                                    </li>
                                </ul>
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
        name: "chats",
        components: {
            myheader,
            leftAside,
            myform
        },
        data() {
            return{
                menushow:false
            }
        }
    }
</script>

<style>
    @import '../../assets/css/notify/notify.css';

</style>