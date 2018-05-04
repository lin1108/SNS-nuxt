<template>
    <div>
        <myheader></myheader>
        <div class="container basic">
            <div class="row">
                <!--==========左侧边栏==========-->
                <div class="col-xs-8">
                    <setting-aside title="basic"></setting-aside>
                </div>
                <!--==========右侧设置==========-->
                <div class="col-xs-16 main">
                    <form action="" method="post">
                        <div class="main-top">
                            <a href="javascript:;" class="avatar">
                                <img src="~assets/img/avatar.jpg" alt="" class="circle">
                            </a>
                            <a herf="javascript:;" class="btn btn-change">
                                <input type="file" class="change">
                                更改头像
                            </a>
                        </div>
                        <ul>
                            <li>
                                <span>昵称</span>
                                <div class="right">
                                    <input type="text" placeholder="请输入昵称" class="nickname">
                                </div>
                            </li>
                            <li>
                                <span>电子邮件</span>
                                <div class="right">
                                    <input type="button" value="点击绑定" class="btn btn-change">
                                </div>
                            </li>
                            <li>
                                <span>手机</span>
                                <div class="right">
                                    <input type="text" placeholder="请输入手机号" class="nickname phone">
                                </div>
                            </li>
                            <li>
                                <span>常用编辑器</span>
                                <div class="right">
                                    <div>
                                        <input type="radio" name="text" id="richtext" checked>
                                        <label for="richtext">富文本</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="text" id="markdown">
                                        <label for="markdown">Markdown</label>
                                        <a href="https://www.jianshu.com/p/q81RER" target="_blank">
                                            <i class="iconfont icon-mark"></i>
                                        </a>
                                    </div>
                                    <p>切换后对新建文章有效</p>
                                </div>
                            </li>
                            <li>
                                <span>语言设置</span>
                                <div class="right">
                                    <div>
                                        <input type="radio" name="chinese" id="easy" checked>
                                        <label for="easy">中文简体</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="chinese" id="complex">
                                        <label for="complex">中文繁体</label>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <span>接收谁的简信</span>
                                <div class="right">
                                    <div>
                                        <input type="radio" name="people" id="allpeople" checked>
                                        <label for="allpeople">所有人</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="people" id="followed">
                                        <label for="followed">我关注的人、我发过简信的人</label>
                                    </div>
                                </div>
                            </li>
                            <li class="mail">
                                <span>提醒邮件通知</span>
                                <div class="right">
                                    <div>
                                        <input type="radio" name="dynamic" id="alldynamic" checked>
                                        <label for="alldynamic">所有动态</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="dynamic" id="unread">
                                        <label for="unread">每天未读汇总</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="dynamic" id="reject">
                                        <label for="reject">不接收</label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <input type="submit" value="保存" class="btn btn-success">
                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import myheader from "~/components/myheader";
import settingAside from "~/components/setting/settingAside";

export default {
    head:{
        title:'设置-简书',
        meta:[
            {charset:'utf-8'},
            {name:'description',content:'简书设置页'},
            {name:'keywords',content:'简书设置页'},
            {name:'author',content:'林丽'}
        ]
    },
    name: "basic",
    components: {
        myheader,
        settingAside
    },
    data() {
        return {};
    }
};
</script>

<style scoped>
    @import "../../assets/css/setting/setting.css";

</style>