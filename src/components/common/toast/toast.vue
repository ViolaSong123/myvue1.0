<template>
    <div class='box' v-show="isShow">{{message}}</div>
</template>
<script>
// 封装一个toast
export default {
    data(){
        return{
            isShow:false,
            message:''
        }
    },
    methods:{
        show(msg,time){
            console.log(32)
            this.isShow = !0;
            this.message = msg;
            setTimeout(()=>{
                this.isShow = !1;
                this.message = '';
            },time || 1500)
        }
    }
}
</script>
<style scoped>
.box{
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: coral;
}
</style>