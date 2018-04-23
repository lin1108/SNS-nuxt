<template>
    <div style="height: 100%">
        <myheader></myheader>
        <p style="height: 2000px;background-color: #C3D08B">主体内容部分</p>
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
<style>

</style>