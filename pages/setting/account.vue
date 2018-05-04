<template>
    <div>
        <myheader></myheader>
        <div class="container account">
            <div class="row">
                <!--==========左侧边栏==========-->
                <div class="col-xs-8">
                    <setting-aside title="account"></setting-aside>
                </div>
                <!--==========右侧设置==========-->
                <div class="col-xs-16 main">
                    <form action="">
                        <ul>
                            <li>
                                <span>打包下载文章</span>
                                <div class="right">
                                    <input type="button" value="下载所有文章" class="btn btn-change">
                                </div>
                            </li>
                            <li>
                                <span class="delete" @click="spanclick" v-show="spanshow">
                                    删除账号
                                    <i class="iconfont icon-arrow"></i>
                                </span>
                            </li>
                        </ul>
                        <div class="hide-content" v-show="deleteshow">
                            <h4>永久删除账号</h4>
                            <ul>
                                <li>如果你不小心创建出了多余的帐号，或在绑定帐号的时候提示帐号被占用，你可以在
                                    <a href="https://www.jianshu.com/p/eea64a29cf9d">简书帐号绑定解绑相关问题汇总</a>
                                    中获得相关帮助。</li>
                                <li>如果你对简书上的某些内容、功能或社区规则不满意，你可以在
                                    <a href="https://www.jianshu.com/help">帮助与反馈页</a>
                                    向我们提出。</li>
                                <li>删除帐号前，请确保已经没有任何公开或私密文章，且钱包中全部余额已清零。</li>
                                <li>删除帐号是不可逆的操作，删除后将无法恢复。</li>
                            </ul>
                            <a class="btn btn-change" @click="saveclick">保留我的帐号</a>
                            <a class="btn btn-change btn-delete">删除帐号</a>
                        </div>
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
        name: "account",
        components:{
            myheader,
            settingAside
        },
        data() {
            return{
                spanshow:true,
                deleteshow:false
            }
        },
        methods:{
            spanclick:function () {
                this.spanshow = false;
                this.deleteshow = true;
            },
            saveclick:function () {
                this.spanshow = true;
                this.deleteshow = false;
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/setting/setting.css';

</style>