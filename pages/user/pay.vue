<template>
    <div>
        <myheader></myheader>
        <div class="container pay">
            <div class="row">
                <div class="col-xs-18 col-xs-offset-3 main">
                    <div class="main-top">
                        <img src="~assets/img/buy.png" alt="" class="tag-img">
                    </div>
                    <!--<ul class="note-list">-->
                    <!--<li></li>-->
                    <!--</ul>-->
                    <div class="outer-container">
                        <ul class="ul-menu">
                            <li @click="menubar='payArticle'" :class="menubar=='payArticle'?'active':''">
                                <i class="iconfont icon-book"></i>
                                文章
                            </li>
                            <li @click="menubar='payOnload'" :class="menubar=='payOnload'?'active':''">
                                <i class="iconfont icon-remen"></i>
                                连载
                            </li>
                        </ul>
                        <div class="list-container">
                            <component :is="menubar"></component>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import myheader from '~/components/myheader';
    import payArticle from '~/components/user/payArticle';
    import payOnload from '~/components/user/payOnload';

    export default {
        name: "pay",
        components:{
            myheader,
            payArticle,
            payOnload
        },
        data() {
            return{
                menubar:'payArticle'
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/user/user.css';

</style>