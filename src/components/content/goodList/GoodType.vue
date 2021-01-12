<template>
    <div class='GoodType'>
        <div v-for='(item,key) in goodTypes' :key="key" @click="pickType(item)">{{item.words}}</div>
    </div>
</template>
<script>
export default {
    name:'GoodType',
    props:{
        goodTypes:{
            type:Array,
            default: []
        }
    },
    methods: {
        pickType(item) {
            // 子组件给父组件传值
            this.$emit('func', item.words)
        }
    }
}
</script>
<style scoped>
.GoodType div{
    border-bottom:1px solid;
    background:coral;
    color:#FFF;
    padding:15px;
}
</style>