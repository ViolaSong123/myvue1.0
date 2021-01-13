<template>
    <div class='GoodType'>
        <div v-for='(item,key) in goodTypes' :key="key" @click="pickType(item, key)" :class="{activeStyle: isActive == key}">{{item.words}}</div>
    </div>
</template>
<script>
export default {
    name:'GoodType',
    data() {
        return {
            isActive: 0
        }
    },
    props:{
        goodTypes:{
            type:Array,
            default: []
        }
    },
    methods: {
        pickType(item, key) {
            // 子组件给父组件传值
            this.$emit('func', item.words)
            this.isActive = key
        }
    },
    components:{
    
    }
}
</script>
<style scoped>
.GoodType div{
    border-bottom:1px solid;
    border-right:1px solid;
    background:#FFF;
    color:coral;
    padding:15px;
    text-align:center;
}
.GoodType div.activeStyle{
    color:#FFF;
    background: coral;
}
</style>