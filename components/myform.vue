<template>
    <form action="" method="post" class="new-comment">
        <slot></slot>
        <textarea name="comment-content" id="" cols="30" rows="10" placeholder="写下你的评论...">
            </textarea>
        <div class="write-function-block">
            <div class="emoji-modal-wrap">
                <a href="#" class="emoji">
                    <i class="fa fa-smile-o"></i>
                </a>
                <div class="emoji-modal"></div>
            </div>
            <div class="hint">Ctrl+Enter发表</div>
            <a href="#" class="btn-send">发送</a>
            <a href="#" class="btn-cancel">取消</a>
        </div>
    </form>
</template>

<script>
    export default {
        name: "myform",
        data () {
            return{

            }
        }
    }
</script>

<style>
    .new-comment{
        margin: 0 0 20px 56px;
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
</style>