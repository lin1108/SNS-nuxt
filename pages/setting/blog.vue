<template>
    <div>
        <myheader></myheader>
        <div class="container blog">
            <div class="row">
                <!--==========左侧边栏==========-->
                <div class="col-xs-8">
                    <setting-aside title="blog"></setting-aside>
                </div>
                <!--==========右侧设置==========-->
                <div class="col-xs-16 main">
                    <img src="~assets/img/renzheng.png" alt="">
                    <div>
                        <p class="title">
                            简书新浪微博联合认证
                            <span>简书推荐作者</span>
                        </p>
                        <ul>
                            <li>
                                <i class="fa fa-close"></i>
                                简书账号注册超过30天
                            </li>
                            <li>
                                <i class="fa fa-close"></i>
                                简书账号绑定新浪微博账号
                            </li>
                            <li>
                                <i class="fa fa-check check"></i>
                                绑定手机号码
                            </li>
                            <li>
                                <i class="fa fa-close"></i>
                                在简书发表文章字数达到20000字
                            </li>
                            <li>
                                <i class="fa fa-close"></i>
                                在简书收获喜欢数达到2000个
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p class="title">
                            简书新浪微博联合认证
                            <span>简书专题运营者</span>
                        </p>
                        <ul>
                            <li>
                                <i class="fa fa-close"></i>
                                简书账号注册超过30天
                            </li>
                            <li>
                                <i class="fa fa-close"></i>
                                简书账号绑定新浪微博账号
                            </li>
                            <li>
                                <i class="fa fa-check check"></i>
                                绑定手机号码
                            </li>
                            <li>
                                <i class="fa fa-close"></i>
                                在简书参与编辑的专题收获订阅总数达到1000个
                            </li>
                        </ul>
                    </div>
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
        name: "blog",
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