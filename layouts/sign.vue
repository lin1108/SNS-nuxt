<template>
    <div id="sign-template">
        <nuxt/>
    </div>
</template>
<script>
    // import Vue from 'vue'
    // import BoostrapVue from 'bootstrap-vue'
    // Vue.use(BoostrapVue)
    // //首先引入bootstrap.css文件，加载bootstrap样式
    // import 'bootstrap/dist/css/bootstrap.css'
    // //引入bootstrap-vue.css文件
    // import 'bootstrap-vue/dist/bootstrap-vue.css'
    export default {

    }
</script>

<style>
    .sign{
        height: 100%;
        font-size: 14px;
        text-align: center;
        background-color: #f1f1f1;
        min-height: 750px;
    }
    .sign:before{
        content: '';
        display: inline-block;
        height: 85%;
        vertical-align: middle;
    }
    .sign .logo{
        position: absolute;
        top: 56px;
        left: 50px;
    }
    .sign img{
        width: 100px;
    }
    .sign .main{
        width: 400px;
        margin: 60px auto 0;
        padding: 50px 50px 30px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        display: inline-block;
        vertical-align: middle;
    }
    .sign .main .title{
        margin: 0 auto 50px;
        color: #939393;
        font-size: 18px;
    }
    .sign .main .title h4 {
        font-size:18px;
    }
    .sign .main h4 a{
        padding: 10px;
        color: #969696;
        font-weight: 400;
    }
    .sign .main h4 b{
        font-weight: 700;
        padding: 10px;
        color: #969696;
    }
    .sign .main h4 a.active {
        font-weight:700;
        color:#ea6f5a;
        border-bottom:2px solid #ea6f5a;
    }
    .sign .main h4 a:hover {
        border-bottom:2px solid #ea6f5a;
    }
    .sign .main form{
        color: #969696;
        margin: 0 0 30px;
    }
    .sign .main form .input-prepend{
        position: relative;
        width: 100%;
    }
    .sign .main form .input-prepend input{
        width: 100%;
        height: 50px;
        padding: 4px 12px 4px 30px;
        border: 1px solid #c8c8c8;
        border-radius: 4px;
        background-color: rgb(248,248,248);
    }
    .sign .main form .input-prepend:nth-of-type(1) input{
        border-bottom: 0;
        border-radius: 4px 4px 0 0;
    }
    .sign .main form .input-prepend:nth-of-type(2) input{
        border-radius: 0 0 4px 4px;
    }
    /*注册里面的form input*/
    .sign .main form .ssm{
        position: relative;
        line-height: 36px;
    }
    .sign .main form .ssm .send-ssm{
        position: absolute;
        top: 8px;
        right: 5px;
        width: 100px;
        height: 35px;
        background-color: #3db922;
        border-radius: 20px;
        color: #fff;
    }
    .sign .main .sign-up-form .input-prepend:nth-of-type(2) input,
    .sign .main .sign-up-form .input-prepend:nth-of-type(3) input{
        border-bottom: 0;
        border-radius: 0;
    }
    .sign .main .sign-up-form .input-prepend:nth-of-type(4) input{
        border-radius: 0 0 4px 4px;
    }
    .sign .main form .input-prepend i{
        position: absolute;
        left: 10px;
        top: 15px;
        font-size: 20px;
        color: #969696;
    }
    .sign .main form .remember{
        float: left;
        margin: 15px 0;
    }
    .sign .main form .help{
        float: right;
        margin: 15px 0;
        color: #969696;
    }
    .sign .main form .help:hover{
        color: #333;
    }
    .sign .main form button{
        width: 100%;
        padding: 9px 18px;
        text-align: center;
        color: #fff;
        background-color: #3194d0;
        border: none;
        border-radius: 25px;
        font-size: 18px;
        cursor: pointer;
        font-family: inherit;
        line-height: inherit;
    }
    .sign .main form button.sign-up-btn{
        background-color: #42C02E;
        margin-top: 20px;
    }
    .sign .main form button:hover{
        background-color: rgb(24,124,183);
    }
    .sign .main form button.sign-up-btn:hover{
        background-color: rgb(61,185,34);
    }
    /*注册页面*/
    .sign .sign-up-msg {
        margin: -20px 0 30px 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        color: #969696;
    }
    .sign .sign-up-msg a,.sign .sign-up-msg a:hover{
        color: #3194d0;
    }
    .sign .main .more-sign p{
        position: relative;
        font-size: 14px;
        color: #b8b8b8;
        margin-bottom: 20px;
    }
    .sign .main .more-sign p:before{
        content: '';
        width: 60px;
        border-bottom: 1px solid #b8b8b8;
        position: absolute;
        left: 30px;
        top: 10px;
    }
    .sign .main .more-sign p:after{
        content: '';
        width: 60px;
        border-bottom: 1px solid #b8b8b8;
        position: absolute;
        right: 30px;
        top: 10px;
    }
    .sign .main .more-sign ul{
        margin-bottom: 10px;
    }
    .sign .main .more-sign ul li{
        display: inline-block;
        color: white;
        margin: 0 5px;
        border-radius: 50%;
    }
    .sign .main .more-sign ul li a{
        width: 50px;
        height: 50px;
        line-height: 50px;
        display: block;
    }
    .sign .main .more-sign ul li a i{
        font-size: 24px;
        line-height: 50px;
        text-align: center;
    }
    .sign .main .more-sign ul li i.fa-weibo{
        color: #e05244;
    }
    .sign .main .more-sign ul li i.fa-weixin{
        color: #00bb29;
    }
    .sign .main .more-sign ul li i.fa-qq{
        color: #498ad5;
    }
    .sign .main .more-sign ul li i.other:before{
        cursor: pointer;
        color: #A69E99;
        content: '其它';
        font-style: normal;
        font-weight: 700;
        font-size: 15px;
    }
    @media screen and (max-width: 768px){
        .sign .logo{
            display: none;
        }
        .sign .main{
            border: none;
            box-shadow: none;
            margin: 0 auto;
        }
        .sign{
            background-color: #fff;
        }
        .sign:before{
            height: 0;
        }
    }
</style>
