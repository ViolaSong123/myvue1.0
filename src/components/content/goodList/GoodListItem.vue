<template>
    <div class='itemList'>
        <div v-for="(it, key) in goodLists" :key='key'>{{it}}</div>
    </div>
</template>
<script>
export default {
    name: 'GoodListItem',
    props:{
        goodLists: {
            type:Array,
            default: []
        }
    }
}
</script>
<style scoped>
.itemList div{
    text-align: center;
    font-size:24px;
    color:coral;
}
</style>