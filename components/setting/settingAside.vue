<template>
    <div class="settingaside leftaside">
        <ul>
            <li :class="checkedmenu=='basic'?'active':''" @click="checkedmenu='basic'">
                <nuxt-link to="/setting/basic">
                    <i class="iconfont icon-menubutton1"></i>
                    基础设置
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='personal'?'active':''" @click="checkedmenu='personal'">
                <nuxt-link to="/setting/personal">
                    <i class="iconfont icon-gerenziliao1"></i>
                    个人资料
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='blog'?'active':''" @click="checkedmenu='blog'">
                <nuxt-link to="/setting/blog">
                    <i class="iconfont icon-renzheng"></i>
                    微博认证
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='blacklist'?'active':''" @click="checkedmenu='blacklist'">
                <nuxt-link to="/setting/blacklist">
                    <i class="iconfont icon-jinzhi"></i>
                    黑名单
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='reward'?'active':''" @click="checkedmenu='reward'">
                <nuxt-link to="/setting/reward">
                    <i class="iconfont icon-newbimoney"></i>
                    赞赏设置
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='account'?'active':''" @click="checkedmenu='account'">
                <nuxt-link to="/setting/account">
                    <i class="iconfont icon-shezhi"></i>
                    账号管理
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "settingAside",
        props:['title'],
        data() {
            return{
                checkedmenu:'basic'
            }
        },
        mounted:function() {
            this.checkedmenu = this.title;
        }
    }
</script>

<style scoped>
    @import '../../assets/css/notify/leftaside.css';
    @import '../../assets/css/setting/settingAside.css';

</style>