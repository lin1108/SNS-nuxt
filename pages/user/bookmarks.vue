<template>
    <div>
        <myheader></myheader>
        <div class="container bookmarks">
            <div class="row">
                <div class="col-xs-18 col-xs-offset-3 main">
                    <div class="main-top">
                        <img src="~assets/img/bookmarks.png" alt="" class="tag-img">
                    </div>
                    <!--<ul class="note-list">-->
                        <!--<li></li>-->
                    <!--</ul>-->
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import myheader from '~/components/myheader'
    export default {
        name: "bookmarks",
        components:{
            myheader
        }
    }
</script>

<style scoped>
    @import '../../assets/css/user/user.css';

</style>