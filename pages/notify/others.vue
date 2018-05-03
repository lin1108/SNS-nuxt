<template>
    <div>
        <myheader title="notify"></myheader>
        <div class="container notification">
            <div class="row">
                <!--================左侧边栏==================-->
                <div class="col-xs-8">
                    <left-aside title="others"></left-aside>
                </div>
                <!--============中间部分=============-->
                <div class="col-xs-16 main">
                    <div class="menu">其他提醒</div>
                    <ul class="pay-list">
                        <li></li>
                    </ul>
                    <div class="nothing">
                        <img src="~assets/img/onload.png" alt="">
                        <p>这里还木有内容哦~</p>
                    </div>
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
        name: "others",
        components: {
            myheader,
            leftAside,
            myform
        },
    }
</script>

<style scoped>
    @import '../../assets/css/notify/notify.css';

</style>