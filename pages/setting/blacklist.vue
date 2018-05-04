<template>
    <div>
        <myheader></myheader>
        <div class="container blacklist">
            <div class="row">
                <!--==========左侧边栏==========-->
                <div class="col-xs-8">
                    <setting-aside title="blacklist"></setting-aside>
                </div>
                <!--==========右侧设置==========-->
                <div class="col-xs-16 main">
                    <div>
                        <p>你可以在用户主页将用户加入你的黑名单。在你黑名单中的用户无法在你文章下评论，无法在其它评论中提到你，无法给你发送简信，自动从你的粉丝列表移除且无法再关注你。</p>
                        <ul>
                            <li></li>
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
        name: "blacklist",
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