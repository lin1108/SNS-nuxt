<template>
    <div>
        <myheader title="follow"></myheader>
        <div class="container follow">
            <div class="row">
                <!--===左侧边栏===-->
                <div class="col-xs-8">
                    <follow-aside></follow-aside>
                </div>
                <!--=======右侧内容======-->
                <div class="col-xs-16 main">
                    <div class="outer-container">
                        <ul class="ul-menu">
                            <li :class="menubar=='recommendAll'?'active':''" @click="menubar='recommendAll'">
                                全部推荐
                            </li>
                            <li :class="menubar=='recommendAuthor'?'active':''" @click="menubar='recommendAuthor'">
                                <i class="iconfont icon-user"></i>
                                推荐作者
                            </li>
                            <li :class="menubar=='recommendSubject'?'active':''" @click="menubar='recommendSubject'">
                                <i class="iconfont icon-gengduo"></i>
                                推荐专题
                            </li>
                        </ul>
                    </div>
                    <!--======is动态组件=======-->
                    <div>
                        <component :is="menubar"></component>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import myheader from '~/components/myheader';
    import followAside from '~/components/follow/followAside';
    import recommendAll from '~/components/follow/recommendAll';
    import recommendAuthor from '~/components/follow/recommendAuthor';
    import recommendSubject from '~/components/follow/recommendSubject';

    export default {
        name: "recommend",
        components:{
            myheader,
            followAside,
            recommendAll,
            recommendAuthor,
            recommendSubject
        },
        data() {
            return{
                menubar:'recommendAll'
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/follow/follow.css';

</style>