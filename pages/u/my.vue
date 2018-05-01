<template>
    <div>
        <myheader></myheader>
        <div class="container person">
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
                            <li @click="menubar='articles'" :class="menubar=='articles'?'active':''">
                                <i class="iconfont icon-book"></i>
                                文章
                            </li>
                            <li @click="menubar='dynamic'" :class="menubar=='dynamic'?'active':''">
                                <i class="iconfont icon-lingdang"></i>
                                动态
                            </li>
                            <li @click="menubar='comment'" :class="menubar=='comment'?'active':''">
                                <i class="iconfont icon-comment"></i>
                                最新评论
                            </li>
                            <li @click="menubar='hot'" :class="menubar=='hot'?'active':''">
                                <i class="iconfont icon-remen"></i>
                                热门
                            </li>
                        </ul>
                        <div class="list-container">
                            <component :is="menubar"></component>

                        </div>
                    </div>
                </div>
                <!--=============================侧边栏===========================-->
                <div class="col-xs-offset-1 col-xs-7 aside">
                    <div class="title">个人介绍</div>
                    <a class="function-btn" @click="edit">
                        <i class="iconfont icon-pinglun"></i>
                        编辑
                    </a>
                    <div class="clear"></div>
                    <form action="" class="profile-edit" v-show="formshow">
                        <textarea name="intro" v-model="content" autofocus></textarea>
                        <input type="submit" value="保存" class="btn-save" @click.prevent="save">
                        <a href="javascript:;" @click="cancle">取消</a>
                    </form>
                    <div class="desc" v-show="descshow">
                        <div class="js-intro">{{content}}</div>
                    </div>
                    <div id="user-publications"></div>
                    <div id="user-courses"></div>
                    <ul class="list user-dynamic">
                        <li>
                            <nuxt-link to="/">
                                <i class="iconfont icon-gengduo"></i>
                                <span>我关注的专题/文集/连载</span>
                            </nuxt-link>
                        </li>
                        <li>
                            <nuxt-link to="/">
                                <i class="iconfont icon-like1"></i>
                                <span>我喜欢的文章</span>
                            </nuxt-link>
                        </li>
                    </ul>
                    <div>
                        <div class="special">我创建的专题</div>
                        <div class="new-collection">
                            <nuxt-link to="/">
                                <i class="iconfont icon-tianjia"></i>
                                <span>创建一个新专题</span>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import myheader from '~/components/myheader';
    import articles from '~/components/articles';
    import dynamic from '~/components/dynamic';
    import comment from '~/components/comment';
    import hot from '~/components/hot';

    export default {
        name: "my",
        components: {
            myheader,
            articles,
            dynamic,
            comment,
            hot
        },
        data() {
            return {
                menubar: 'dynamic',
                formshow: false,
                descshow: true,
                content: '',
                msg: ''
            }
        },
        methods: {
            edit: function () {
                this.descshow = false;
                this.formshow = true;
                this.msg = this.content;
            },
            cancle: function () {
                this.descshow = true;
                this.formshow = false;
                this.content = this.msg;
            },
            save: function () {
                this.descshow = true;
                this.formshow = false;
            }
        }
    }
</script>

<style>
    .container {
        padding: 0 15px;
        margin-left: auto;
        margin-right: auto;
    }
    .person .row {
        padding-top: 30px;
    }
    .row {
        margin: 0 -15px;
    }
    .person .main {
        padding-right: 0;
    }
    .person .main-top {
        margin-bottom: 20px;
    }
    .person .main-top .avatar {
        width: 80px;
        height: 80px;
        float: left;
    }
    .avatar img {
        width: 80px;
        border-radius: 50%;
        border: 1px solid #ddd;
        vertical-align: middle;
    }
    .person .main .main-top .title {
        padding: 5px 0 0 100px;
    }
    .person .main .main-top .title .name {
        font-size: 21px;
        font-weight: 700;
        vertical-align: middle;
    }
    .person .main .main-top .info {
        margin-top: 5px;
        padding-left: 100px;
        font-size: 14px;
    }
    .person .main .main-top .info ul li {
        display: inline-block;
        font-size: 12px;
        margin: 0 7px 6px 0;
        padding: 0 7px 0 0;
        border-right: 1px solid #f0f0f0;
    }
    .person .main .main-top .info ul li:nth-last-child(1) {
        border: none;
    }
    .person .main .main-top .info ul div,
    .person .main .main-top .info ul li i {
        color: #969696;
    }
    /***************菜单切换***************/
    .outer-container .ul-menu {
        margin-bottom: 20px;
        border-bottom: 1px solid #f0f0f0;
    }
    .outer-container ul li {
        display: inline-block;
        padding: 15px 20px;
        font-size: 15px;
        font-weight: 700;
        color: #969696;
        line-height: 25px;
        margin-bottom: -1px;
        cursor: pointer;
    }
    .outer-container .ul-menu li i {
        margin-right: 5px;
    }
    .outer-container .ul-menu li.active {
        border-bottom: 2px solid #646464;
        color: #646464;
    }
    .outer-container .ul-menu li:hover {
        border-bottom: 2px solid #646464;
        color: #646464;
    }

    /****************侧边栏****************/
    .person .aside {
        padding: 0;
    }
    .person .aside .title {
        float: left;
        margin-bottom: 10px;
        font-size: 14px;
        color: #969696;
    }
    .person .aside .function-btn {
        float: right;
        font-size: 13px;
        color: #969696;
        cursor: pointer;
    }
    .person .aside .function-btn:hover {
        color: #2f2f2f;
    }
    .person .aside .clear {
        overflow: hidden;
        clear: both;
    }
    .person .aside .profile-edit {
        margin-bottom: 20px;
        margin: 0 0 20px;
    }
    .person .aside .profile-edit textarea {
        margin-bottom: 5px;
        width: 100%;
        height: 125px;
        padding: 5px 10px;
        font-size: 14px;
        background-color: #f7f7f7;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        resize: none;
        outline: none;
    }
    .person .aside .profile-edit .btn-save {
        padding: 5px 20px;
        font-size: 14px;
        cursor: pointer;
        color: #42c02e;
        border: 1px solid #42c02e;
        border-radius: 40px;
        background: none;
    }
    .person .aside .profile-edit .btn-save:hover {
        border: 1px solid #3db922;
        background-color: #f5fcf3;
    }
    .person .aside .profile-edit a {
        margin-left: 10px;
        font-size: 14px;
        color: #969696;
        line-height: 34px;
        vertical-align: middle;
        cursor: pointer;
    }
    .person .aside .profile-edit a:hover {
        color: #2f2f2f;
    }
    .person .aside .desc {
        margin-bottom: 16px;
        padding: 0 0 16px;
    }
    .person .aside .user-dynamic {
        padding: 16px 0 6px 0;
        margin: 16px 0;
        list-style: none;
        border-bottom: 1px solid #f0f0f0;
        border-top: 1px solid #f0f0f0;
    }
    .person .aside .list li {
        margin-bottom: 10px;
        display: list-item;
    }
    .person .aside .list li a {
        font-size: 14px;
        color: #333;
        line-height: 30px;
    }
    .person .aside .list li a i {
        margin-right: 10px;
        vertical-align: middle;
        font-size: 20px;
    }
    .person .aside .special {
        margin-bottom: 10px;
        font-size: 14px;
        color: #969696;
    }
    .person .aside .new-collection {
        margin-bottom: 16px;
        padding: 0 0 16px;
        border-bottom: 1px solid #f0f0f0;
    }
    .person .aside .new-collection a {
        font-size: 13px;
        color: #42c02e;
    }
    .person .aside .new-collection a i {
        margin-right: 2px;
        font-size: inherit;
    }
</style>