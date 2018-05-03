<template>
    <div>
        <myheader></myheader>
        <h1>有问题？<a href="http://www.jianshu.com">去官网</a></h1>
    </div>

</template>

<script>
    import myheader from '~/components/myheader'
    export default {
        name: "wallet",
        components:{
            myheader
        }
    }
</script>

<style scoped>
    h1{
        margin: 200px auto;
        text-align: center;
    }
</style>