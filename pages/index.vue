<template>
    <div style="height: 100%">
        <myheader></myheader>
        <div class="container index">
            <div class="row">
                <!--**********热门专题**********-->
                <div class="col-xs-16 main">
                    <div class="recommend-collection">
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top1.jpg" alt="">
                            <span class="name">手绘</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top2.jpg" alt="">
                            <span class="name">读书</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top3.jpg" alt="">
                            <span class="name">社会热点</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top4.jpg" alt="">
                            <span class="name">@IT·互联网</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top5.jpg" alt="">
                            <span class="name">旅行·在路上</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top6.jpg" alt="">
                            <span class="name">历史</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="collection">
                            <img src="~assets/img/top7.jpg" alt="">
                            <span class="name">自然科普</span>
                        </nuxt-link>
                        <nuxt-link to="/collection/123" class="more">
                            <span class="more">更多热门专题 ></span>
                        </nuxt-link>
                    </div>
                    <div class="split-line"></div>
                    <div></div>
                </div>
                <div class="col-xs-offset-1 col-xs-7 aside">
                    侧边栏
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import myheader from '../components/myheader';
    export default {
        head:{
          title:'简书-创作你的创作' ,
          meta:[
              {charset:'utf-8'},
              {name:'keywords',content:'简书首页'},
              {name:'description',content:'简书首页'},
              {name:'author',content:'Linli'},
          ]
        },
        components:{
            myheader
        },
        data () {
            return {
                name:'首页'
            }
        }
    }
</script>
