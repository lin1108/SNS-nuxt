<template>
    <div class="followaside">
        <a href="javascript:;" class="change" @click="menushow=!menushow">
            {{checked}}
            <i class="fa fa-caret-down"></i>
            <ul class="dropdown-menu" v-show="menushow">
                <li @click="checked='全部关注'">全部关注</li>
                <li @click="checked='只看作者'">只看作者</li>
                <li @click="checked='只看专题'">只看专题</li>
                <li @click="checked='只看文集'">只看文集</li>
                <li @click="checked='只看推送更新'">只看推送更新</li>
            </ul>
        </a>
        <nuxt-link to="/follow/recommend" class="addfollow">
            <i class="iconfont icon-follow"></i>
            <span>添加关注</span>
        </nuxt-link>
        <ul class="followed-list">
            <li :class="checkedli=='friendcircle'?'active':''" @click="checkedli='friendcircle'">
                <nuxt-link to="/follow/friendcircle" class="avatar">
                    <div class="avatar-img">
                        <img src="~assets/img/jianyou.png" alt="" class="circle">
                    </div>
                    <span class="name">简友圈</span>
                    <span class="number"></span>
                </nuxt-link>
            </li>
            <li :class="checkedli=='collection'?'active':''" @click="checkedli='collection'">
                <nuxt-link to="/follow/111/collection" class="avatar">
                    <div class="avatar-img">
                        <img src="~assets/img/head1.jpg" alt="" >
                    </div>
                    <span class="name">简书交友</span>
                    <span class="number">62</span>
                </nuxt-link>
            </li>
            <li :class="checkedli=='collection2'?'active':''" @click="checkedli='collection2'">
                <nuxt-link to="/follow/222/collection" class="avatar">
                    <div class="avatar-img">
                        <img src="~assets/img/head2.jpg" alt="">
                    </div>
                    <span class="name">娱乐圈</span>
                    <span class="number">6</span>
                </nuxt-link>
            </li>
            <li :class="checkedli=='user'?'active':''" @click="checkedli='user'">
                <nuxt-link to="/follow/aaa/user" class="avatar">
                    <div class="avatar-img">
                        <img src="~assets/img/author1.jpg" alt="" class="circle">
                    </div>
                    <span class="name">皮卡林</span>
                    <span class="number">52</span>
                </nuxt-link>
            </li>
            <li >
                <nuxt-link to="/follow/bbb/user" class="avatar">
                    <div class="avatar-img">
                        <img src="~assets/img/head4.jpg" alt="" class="circle">
                    </div>
                    <span class="name">静静的白莲</span>
                    <span class="number">28</span>
                </nuxt-link>
            </li>
            <li >
                <nuxt-link to="/follow/333/collection" class="avatar">
                    <div class="avatar-img">
                        <img src="~assets/img/top1.jpg" alt="">
                    </div>
                    <span class="name">手绘</span>
                    <span class="number"></span>
                </nuxt-link>
            </li>
            <li >
                <nuxt-link to="/follow/444/collection" class="avatar">
                    <div class="avatar-img">
                        <img src="~assets/img/top2.jpg" alt="">
                    </div>
                    <span class="name">读书</span>
                    <span class="number"></span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/follow/ccc/user" class="avatar">
                    <div class="avatar-img">
                        <img src="~assets/img/author5.jpg" alt="" class="circle">
                    </div>
                    <span class="name">人在旅途</span>
                    <span class="number">36</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/follow/ddd/user" class="avatar">
                    <div class="avatar-img">
                        <img src="~assets/img/author3.jpg" alt="" class="circle">
                    </div>
                    <span class="name">起个名字好难</span>
                    <span class="number">2</span>
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "followAside",
        props:['title'],
        data() {
            return{
                menushow:false,
                checked:'全部关注',
                checkedli:'friendcircle'
            }
        },
        mounted:function () {
            this.checkedli = this.title;
        }
    }
</script>

<style scoped>
    @import '../../assets/css/follow/followaside.css';

</style>