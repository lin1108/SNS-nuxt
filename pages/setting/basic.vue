<template>
    <div>
        <myheader></myheader>
        <div class="container basic">
            <div class="row">
                <!--==========左侧边栏==========-->
                <div class="col-xs-8">
                    <setting-aside></setting-aside>
                </div>
                <!--==========右侧设置==========-->
                <div class="col-xs-16 main">
                    右侧内容
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import myheader from '~/components/myheader';
    import settingAside from '~/components/setting/settingAside';

    export default {
        name: "basic",
        components:{
            myheader,
            settingAside
        }
    }
</script>

<style scoped>
    @import '../../assets/css/setting/setting.css';

</style>