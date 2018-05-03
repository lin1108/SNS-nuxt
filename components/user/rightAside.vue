<template>
    <div>
        <div class="title">个人介绍</div>
        <a class="function-btn" @click="edit">
            <i class="iconfont icon-pinglun"></i>
            编辑
        </a>
        <div class="clear"></div>
        <form action="" class="profile-edit" v-show="formshow">
            <textarea name="intro" v-model="content" autofocus></textarea>
            <input type="submit" value="保存" class="btn-save" @click.prevent="save">
            <a href="javascript:;" @click="cancle">取消</a>
        </form>
        <div class="desc" v-show="descshow">
            <div class="js-intro">{{content}}</div>
        </div>
        <div id="user-publications"></div>
        <div id="user-courses"></div>
        <ul class="list user-dynamic">
            <li>
                <nuxt-link to="/">
                    <i class="iconfont icon-gengduo"></i>
                    <span>我关注的专题/文集/连载</span>
                </nuxt-link>
            </li>
            <li>
                <nuxt-link to="/">
                    <i class="iconfont icon-like1"></i>
                    <span>我喜欢的文章</span>
                </nuxt-link>
            </li>
        </ul>
        <div>
            <div class="special">我创建的专题</div>
            <div class="new-collection">
                <nuxt-link to="/">
                    <i class="iconfont icon-tianjia"></i>
                    <span>创建一个新专题</span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "rightAside",
        data() {
            return {
                formshow: false,
                descshow: true,
                content: '',
                msg: ''
            }
        },
        methods: {
            edit: function () {
                this.descshow = false;
                this.formshow = true;
                this.msg = this.content;
            },
            cancle: function () {
                this.descshow = true;
                this.formshow = false;
                this.content = this.msg;
            },
            save: function () {
                this.descshow = true;
                this.formshow = false;
            }
        }
    }
</script>

<style scoped>
    @import '../../assets/css/user/user.css';

</style>