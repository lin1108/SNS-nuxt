<template>
    <div class="leftaside">
        <ul>
            <li :class="checkedmenu=='comments'?'active':''" @click="checkedmenu='comments'">
                <nuxt-link to="/notify/comments">
                    <i class="iconfont icon-comment1"></i>
                    评论
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='chats'?'active':''" @click="checkedmenu='chats'">
                <nuxt-link to="/notify/chats">
                    <i class="iconfont icon-icon"></i>
                    简信
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='requests'?'active':''" @click="checkedmenu='requests'">
                <nuxt-link to="/notify/requests">
                    <i class="iconfont icon-shangchuan"></i>
                    投稿请求
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='likes'?'active':''" @click="checkedmenu='likes'">
                <nuxt-link to="/notify/likes">
                    <i class="iconfont icon-like1"></i>
                    喜欢和赞
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='follows'?'active':''" @click="checkedmenu='follows'">
                <nuxt-link to="/notify/follows">
                    <i class="iconfont icon-yiguanzhu"></i>
                    关注
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='money'?'active':''" @click="checkedmenu='money'">
                <nuxt-link to="/notify/money">
                    <i class="iconfont icon-money"></i>
                    赞赏和付费
                </nuxt-link>
            </li>
            <li :class="checkedmenu=='others'?'active':''" @click="checkedmenu='others'">
                <nuxt-link to="/notify/others">
                    <i class="iconfont icon-qita"></i>
                    其它提醒
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "leftAside",
        data() {
            return{
                checkedmenu:'comments'
            }
        }
    }
</script>

<style>
    @import '../../assets/css/notify/leftaside.css';

</style>