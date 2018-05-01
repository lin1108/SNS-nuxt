<template>
    <ul class="note-list">
        <li>
            <div class="content">
                <div class="author">
                    <nuxt-link to="/" class="avatar">
                        <img src="~assets/img/author1.jpg" alt="">
                    </nuxt-link>
                    <div class="info">
                        <nuxt-link to="/" class="nickname">
                            皮卡林
                        </nuxt-link>
                        <em>·</em>
                        <span>赞了评论·04.25 20:20</span>
                    </div>
                    <p class="comment">轻描淡写的就把自己背后的努力藏住，真喜欢你这样的人。</p>
                    <blockquote>
                        <div class="origin-author">
                            <nuxt-link to="/">
                                把天聊死了
                            </nuxt-link>
                            <span>评论自</span>
                            <nuxt-link to="/">
                                在大二，我是怎么月收入6000
                            </nuxt-link>
                        </div>
                    </blockquote>
                </div>
            </div>
        </li>
        <li>
            <div class="content">
                <div class="author">
                    <nuxt-link to="/" class="avatar">
                        <img src="~assets/img/author1.jpg" alt="">
                    </nuxt-link>
                    <div class="info">
                        <nuxt-link to="/" class="nickname">
                            皮卡林
                        </nuxt-link>
                        <em>·</em>
                        <span>赞了评论·04.25 20:20</span>
                    </div>
                    <p class="comment">轻描淡写的就把自己背后的努力藏住，真喜欢你这样的人。</p>
                    <blockquote>
                        <div class="origin-author">
                            <nuxt-link to="/">
                                把天聊死了
                            </nuxt-link>
                            <span>评论自</span>
                            <nuxt-link to="/">
                                在大二，我是怎么月收入6000
                            </nuxt-link>
                        </div>
                    </blockquote>
                </div>
            </div>
        </li>
        <li>
            <div class="content">
                <div class="author">
                    <nuxt-link to="/" class="avatar">
                        <img src="~assets/img/author1.jpg" alt="">
                    </nuxt-link>
                    <div class="info">
                        <nuxt-link to="/" class="nickname">
                            皮卡林
                        </nuxt-link>
                        <em>·</em>
                        <span>赞了评论·04.25 20:20</span>
                    </div>
                    <p class="comment">轻描淡写的就把自己背后的努力藏住，真喜欢你这样的人。</p>
                    <blockquote>
                        <div class="origin-author">
                            <nuxt-link to="/">
                                把天聊死了
                            </nuxt-link>
                            <span>评论自</span>
                            <nuxt-link to="/">
                                在大二，我是怎么月收入6000
                            </nuxt-link>
                        </div>
                    </blockquote>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "dynamic"
    }
</script>

<style scoped>
    .note-list li{
        margin: 0 0 17px;
        padding: 0 2px 8px 0;
        font-size: 13px;
        font-weight: normal;
        border-bottom: 1px solid #f0f0f0;
    }
    .note-list .author{
        margin-bottom: 14px;
    }
    .note-list .author .info span{
        padding-left: 3px;
        color: #969696;
    }
    .note-list .author .comment{
        font-size: 15px;
        line-height: 1.7;
        margin: 10px 0;
        color: #2f2f2f;
    }
    .note-list blockquote{
        border-left: 3px solid #d9d9d9;
        font-size: 13px;
        margin: 0;
        padding: 10px 20px;
        margin-bottom: 0;
    }
    .note-list .origin-author a{
        margin-right: 5px;
        color: #3194d0;
    }
</style>