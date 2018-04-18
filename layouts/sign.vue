<template>
    <div>
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
    body{
        background-color: #f1f1f1;
    }
    .sign{
        height: 100%;
        font-size: 14px;
        text-align: center;
    }
    .sign .logo{
        position: absolute;
        top: 50px;
        left: 50px;
    }
    .sign img{
        width: 100px;
    }
    .sign .main{
        width: 400px;
        margin: 60px auto;
        padding: 50px 50px 30px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px rgba(0,0,0,.1);
        display: inline-block;
    }
    .sign .main .title{
        margin: 0 auto 30px;
        color: #939393;
        font-size: 18px;
    }
    .sign .main h4 a{
        padding: 10px;
        color: #969696;
        font-weight: 700;
    }
    .sign .main h4 b{
        font-weight: 800;
        padding: 10px;
        color: #969696;
    }
    .sign .main h4 a.active,
    .sign .main h4 a:hover{
        color: #ea6f5a;
        border-bottom: 2px solid #ea6f5a;
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
    .sign .main form .input-prepend i{
        position: absolute;
        left: 10px;
        top: 15px;
        font-size: 20px;
        color: #969696;
    }
    .sign .main form .remember{
        float: left;
        margin: 20px 0;
    }
    .sign .main form .help{
        float: right;
        margin: 20px 0;
        color: #969696;
    }
    .sign .main form .help:hover{
        color: #333;
    }
    .sign .main form button{
        width: 100%;
        margin: 0;
        padding: 9px 18px;
        text-align: center;
        color: #fff;
        background-color: #3194d0;
        border: 1px solid #3194d0;
        border-radius: 20px;
        font-size: 18px;
        cursor: pointer;
    }
    .sign .main form button:hover{
        background-color: rgb(24,124,183);
    }
</style>
