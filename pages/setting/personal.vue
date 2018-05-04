<template>
    <div>
        <myheader></myheader>
        <div class="container personal">
            <div class="row">
                <!--==========左侧边栏==========-->
                <div class="col-xs-8">
                    <setting-aside title="personal"></setting-aside>
                </div>
                <!--==========右侧设置==========-->
                <div class="col-xs-16 main">
                    <form action="" method="post">
                        <ul>
                            <li class="sex">
                                <span>性别</span>
                                <div class="right">
                                    <input type="radio" name="sex" id="male">
                                    <label for="male">男</label>
                                    <input type="radio" name="sex" id="female">
                                    <label for="female">女</label>
                                    <input type="radio" name="sex" id="secret" checked>
                                    <label for="secret">保密</label>
                                </div>
                            </li>
                            <li class="intro">
                                <span>个人简介</span>
                                <div class="right">
                                    <textarea placeholder="填写你的个人简介"></textarea>
                                </div>
                            </li>
                            <li>
                                <span>个人网站</span>
                                <div class="right">
                                    <input type="text" placeholder="http://你的网址" class="nickname website">
                                </div>
                            </li>
                            <li>
                                <span>微信二维码</span>
                                <div class="">
                                    <a href="javascript:;" class="btn btn-change">
                                        <input type="file" class="change">
                                        更换图片
                                    </a>
                                </div>
                            </li>
                            <li class="social">
                                <span>社交账号</span>
                                <div class="right">
                                    <p>你可以通过绑定的社交帐号登录简书。出于安全因素, 你最初用来创建账户的社交帐号不能移除。</p>
                                    <p>如果帐号被占用，你可以在<a href="https://www.jianshu.com/p/eea64a29cf9d">简书帐号绑定解绑相关问题汇总</a>中获得相关帮助。</p>
                                    <ul>
                                        <li>
                                            <a href="https://www.jianshu.com/users/auth/weibo">
                                                <i class="iconfont icon-weibo weibo"></i>
                                                <span>
                                                    绑定微博
                                                    <i class="fa fa-angle-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.jianshu.com/users/auth/wechat">
                                                <i class="iconfont icon-weixin weixin"></i>
                                                <span>
                                                    绑定微信
                                                    <i class="fa fa-angle-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.jianshu.com/users/auth/qq">
                                                <i class="iconfont icon-qq qq"></i>
                                                <span>
                                                    绑定QQ
                                                    <i class="fa fa-angle-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.jianshu.com/users/auth/douban">
                                                <i class="iconfont icon-douban douban"></i>
                                                <span>
                                                    绑定豆瓣
                                                    <i class="fa fa-angle-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.jianshu.com/users/auth/google_oauth2">
                                                <i class="iconfont icon-googleplus google"></i>
                                                <span>
                                                    绑定Google+
                                                    <i class="fa fa-angle-right"></i>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
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
    import myheader from '~/components/myheader';
    import settingAside from '~/components/setting/settingAside';

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
        name: "personal",
        components:{
            myheader,
            settingAside
        },
        data() {
            return{

            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/setting/setting.css';

</style>