<template>
    <div class="followaside">
        <a href="javascript:;" class="change" @click="menushow=!menushow">
            全部关注
            <i class="fa fa-caret-down"></i>
        </a>
        <ul class="dropdown-menu" v-show="menushow">
            <li>全部关注</li>
            <li>只看作者</li>
            <li>只看专题</li>
            <li>只看文集</li>
            <li>只看推送更新</li>
        </ul>
        <nuxt-link to="/" class="addfollow">
            <i class="iconfont icon-follow"></i>
            <span>添加关注</span>
        </nuxt-link>
        <ul class="followed-list">
            <li class="active">
                <nuxt-link to="/" class="avatar">
                    <img src="~assets/img/jianyou.png" alt="" class="circle">
                </nuxt-link>
                <span class="name">简友圈</span>
            </li>
            <li>
                <nuxt-link to="/" class="avatar">
                    <img src="~assets/img/author2.jpg" alt="" class="circle">
                </nuxt-link>
                <span class="name">人文社科</span>
                <span class="number">100</span>
            </li>
            <li>
                <nuxt-link to="/" class="avatar">
                    <img src="~assets/img/author3.jpg" alt="" >
                </nuxt-link>
                <span class="name">故事</span>
                <span class="number">226</span>
            </li>
            <li>
                <nuxt-link to="/" class="avatar">
                    <img src="~assets/img/author4.jpg" alt="">
                </nuxt-link>
                <span class="name">生活</span>
                <span class="number">50</span>
            </li>
            <li>
                <nuxt-link to="/" class="avatar">
                    <img src="~assets/img/author5.jpg" alt="">
                </nuxt-link>
                <span class="name">创业</span>
                <span class="number">150</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "followAside",
        data() {
            return{
                menushow:false
            }
        }
    }
</script>

<style>
    @import '../../assets/css/followed/followaside.css';
</style>