<template>
    <div class='itemList'>
        <div class='title'>{{goodTitle}}</div>
        <div class='goodlist' >
            <div v-for="(item, key) in goodListArray" :key="key" @click="selectGood(item, key)" :class="{'activeStyle': item.isActive}">
                <!-- <img src='~@/assets/img/common/goods.png' alt=''/> -->
                <img :src='item.src' alt=''/>
                <p>{{item.name}}</p>
                <p class='price'>{{item.price|priceFilter}}</p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'GoodListItem',
    props:{
        goodTitle: {
            type:String,
            default: ''
        },
        goodListArray:{
            type:Array,
            default: []
        }
    },
    data () {
        return{
            // 
        }
    },
    created: function () {
       
    },
    methods:{
        selectGood:function (item, key) {
            this.goodListArray[key].isActive = !this.goodListArray[key].isActive
            // this.$emit('selectGoods',key)
            // this.$store.commit('selectGoods',item)
        }
    }
}
</script>
<style scoped>
.itemList .title{
    text-align: center;
    font-size:24px;
    color:coral;
}
.itemList .goodlist{
    width:100%;
} 
.itemList .goodlist div{
    width:33%;
    display:inline-block;
    text-align: center;
    font-size:14px;
    margin-bottom:10px;
}
.itemList .goodlist div img{
    width:100%;
}
.itemList .goodlist .price{
    color:red;
    font-size:12px;
}
.itemList .goodlist .activeStyle{
    background-color: rgb(129, 92, 92);
}
</style>