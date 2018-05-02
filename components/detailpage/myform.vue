<template>
    <form action="" method="post" class="new-comment">
        <slot></slot>
        <textarea name="comment-content" placeholder="写下你的评论..." v-model="value" @click="writeshow=true">

        </textarea>
        <div class="write-function-block" v-show="writeshow">
            <div class="emoji-modal-wrap">
                <a href="javascript:;" class="emoji" @click="showEmoji = !showEmoji">
                    <i class="fa fa-smile-o"></i>
                </a>
                <div class="emoji-modal">
                    <transition name="fade">
                        <div class="emoji-box" v-if="showEmoji" >
                            <!--<el-button class="pop-close" :plain="true" type="danger" size="mini" icon="close" @click="showEmoji = false"></el-button>-->
                            <emoji @select="selectEmoji"></emoji>
                            <span class="pop-arrow arrow"></span>
                        </div>
                    </transition>
                </div>
            </div>
            <div class="hint">Ctrl+Enter发表</div>
            <a href="javascript:;" class="btn-send" @click="submit">发送</a>
            <a href="javascript:;" class="btn-cancel" @click="writeshow=false">取消</a>
            <transition-group tag="div" name="list" class="comment">
                <p v-for="(item,index) in data" :key="index" class="item">
                    <span v-html="emoji(item)"></span>
                </p>
            </transition-group>
        </div>
    </form>
</template>

<script>
    import emoji from '~/components/detailpage/emoji'
    export default {
        name: "myform",
        components:{
            emoji
        },
        data () {
            return{
                formshow:true,
                writeshow:false,
                value: '',
                showEmoji: false,
                data: []
            }
        },
        methods: {
            selectEmoji (code) {
                this.showEmoji = false
                this.value += code
            },
            submit () {
                this.data.push(this.value)
                this.value = ''
            }
        }
    }
</script>

<style>
    .new-comment{
        position: relative;
    }
    .new-comment .avatar{
        width: 38px;
        height: 38px;
        position: absolute;
        left: -54px;
        top: 0;
        display: inline-block;
        margin-right: 10px;
        border: 1px solid #e1e1e1;
    }
    .new-comment textarea{
        padding: 10px 15px;
        width: 100%;
        height: 80px;
        outline: none;
        /*设置textarea不改变宽高*/
        resize: none;
        display: inline-block;
        font-size: 13px;
        border: 1px solid #dcdcdc;
        background-color: #f7f7f7;
        border-radius: 4px;
        vertical-align: top;
    }
    .new-comment .write-function-block{
        height: 50px;
        border-bottom: none;
    }
    .new-comment .write-function-block .emoji{
        float: left;
        margin-top: 18px;
    }
    .new-comment .write-function-block .emoji i{
        font-size: 20px;
        color: #969696;
    }
    .new-comment .write-function-block .emoji i:hover{
        color: #2f2f2f;
    }
    .new-comment .write-function-block .hint{
        float: left;
        margin: 20px 0 0 20px;
        font-size: 13px;
        color: #969696;
    }
    .new-comment .write-function-block .btn-send{
        float: right;
        width: 78px;
        padding: 8px 18px;
        margin: 10px 0;
        display: block;
        font-size: 16px;
        background-color: #42c02e;
        color: #fff;
        text-align: center;
        border-radius: 20px;
        outline: none;
    }
    .new-comment .write-function-block .btn-send:hover{
        background-color: #3db922;
    }
    .new-comment .write-function-block .btn-cancel{
        float: right;
        margin: 18px 30px 0 0;
        font-size: 16px;
        color: #969696;
    }
    .new-comment .write-function-block .btn-cancel:hover{
        color: #2f2f2f;
    }

    .clearfix:after {
        content: '';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
    .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
    .fade-enter, .fade-leave-active { opacity: 0; }
    .fade-move { transition: transform .4s; }

    .list-enter-active, .list-leave-active { transition: all .5s; }
    .list-enter, .list-leave-active { opacity: 0; transform: translateX(30px); }
    .list-leave-active { position: absolute !important; }
    .list-move { transition: all .5s;}
</style>