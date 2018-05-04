<template>
    <div>
        <myheader></myheader>
        <div class="container reward">
            <div class="row">
                <!--==========左侧边栏==========-->
                <div class="col-xs-8">
                    <setting-aside title="reward"></setting-aside>
                </div>
                <!--==========右侧设置==========-->
                <div class="col-xs-16 main">
                    <form action="">
                        <ul>
                            <li class="sex">
                                <span>赞赏功能</span>
                                <div class="right">
                                    <input type="radio" name="reward" id="on" checked>
                                    <label for="on">开启</label>
                                    <input type="radio" name="reward" id="off">
                                    <label for="off">关闭</label>
                                    <p>开启后赞赏按钮将出现在你的文章底部</p>
                                </div>
                            </li>
                            <li class="intro">
                                <span>赞赏描述</span>
                                <div class="right">
                                    <textarea></textarea>
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
        name: "reward",
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