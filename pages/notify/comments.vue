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
                    <div class="menu">收到的评论</div>
                    <ul class="comment-list">
                        <li @mouseenter="reportshow=true" @mouseleave="reportshow=false">
                            <nuxt-link to="/" class="avatar">
                                <img src="~assets/img/author2.jpg" alt="">
                            </nuxt-link>
                            <div class="info">
                                <div>
                                    <nuxt-link to="/" class="username">
                                        范傻比
                                    </nuxt-link>
                                    <span>在文章</span>
                                    <nuxt-link to="/">
                                        《今天天气不错》
                                    </nuxt-link>
                                    <span>中写了一条评论</span>
                                </div>
                                <div class="time">2018.04.26 18:30</div>
                            </div>
                            <p>
                                <nuxt-link to="/">
                                    @啦啦啦啦
                                </nuxt-link>
                                不错不错~
                            </p>
                            <div class="meta">
                                <a class="fun-btn" @click="formshow=!formshow">
                                    <i class="iconfont icon-comment1"></i>
                                    <span>回复</span>
                                </a>
                                <nuxt-link to="/" class="fun-btn">
                                    <i class="iconfont icon-xinxi"></i>
                                    <span>查看对话</span>
                                </nuxt-link>
                                <a href="javascript:;" class="report" v-show="reportshow">
                                    <span>举报</span>
                                </a>
                            </div>
                            <myform v-show="formshow"></myform>
                        </li>
                        <li @mouseenter="reportshow=true" @mouseleave="reportshow=false">
                            <nuxt-link to="/" class="avatar">
                                <img src="~assets/img/author4.jpg" alt="">
                            </nuxt-link>
                            <div class="info">
                                <div>
                                    <nuxt-link to="/" class="username">
                                        范傻逼
                                    </nuxt-link>
                                    <span>在文章</span>
                                    <nuxt-link to="/">
                                        《今天天气不错》
                                    </nuxt-link>
                                    <span>中写了一条评论</span>
                                </div>
                                <div class="time">2018.04.26 18:30</div>
                            </div>
                            <p>
                                <nuxt-link to="/">
                                    @啦啦啦啦
                                </nuxt-link>
                                不错不错~
                            </p>
                            <div class="meta">
                                <a class="fun-btn" @click="formshow=!formshow">
                                    <i class="iconfont icon-comment1"></i>
                                    <span>回复</span>
                                </a>
                                <nuxt-link to="/" class="fun-btn">
                                    <i class="iconfont icon-xinxi"></i>
                                    <span>查看对话</span>
                                </nuxt-link>
                                <a href="javascript:;" class="report" v-show="reportshow">
                                    <span>举报</span>
                                </a>
                            </div>
                            <myform v-show="formshow"></myform>
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
        name: "comments",
        components: {
            myheader,
            leftAside,
            myform
        },
        data() {
            return {
                reportshow: false,
                formshow:false
            }
        },
        methods: {}
    }
</script>

<style scoped>
    @import '../../assets/css/notify/notify.css';
    form{
        margin-top: 20px;
    }
</style>