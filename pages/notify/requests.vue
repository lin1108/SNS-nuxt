<template>
    <div>
        <myheader></myheader>
        <div class="container notification">
            <div class="row">
                <!--================左侧边栏==================-->
                <div class="col-xs-8">
                    <left-aside></left-aside>
                </div>
                <!--============中间部分=============-->
                <div class="col-xs-16 main">
                    <div class="menu">全部投稿请求</div>
                    <ul class="request-list">
                        <li>
                            <nuxt-link to="/" class="wrap">
                                <i class="iconfont icon-shangchuan"></i>
                                <span>全部未处理请求</span>
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import myheader from '~/components/myheader';
    import leftAside from '~/components/notify/leftAside';
    import myform from '~/components/detailpage/myform';

    export default {
        name: "requests",
        components: {
            myheader,
            leftAside,
            myform
        },
    }
</script>

<style>
    @import '../../assets/css/notify/notify.css';

</style>