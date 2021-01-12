<template>
    <div class='goodlist'>
        <div class='goodListType'><good-type :goodTypes='goodTypes' @func='getGoodList'></good-type></div>
        <!-- 右侧展示商品 -->
        <div class='goodlistItem'><good-list-item :goodLists='goodLists'></good-list-item></div>
    </div>
</template>
<script>
import GoodType from './GoodType.vue'
import GoodListItem from './GoodListItem.vue'
export default {
    name:'GoodList',
    data() {
        return {
            goodTypes: [],
            goodLists: []
        }
    },
    components: {
       GoodType,
       GoodListItem
    },
    created () {
        this.getGoodType();
    },
    methods:{
        async getGoodType() {
            const {data: res} = await this.$http.get('/home/multidata');
            if (res.success){
                this.goodTypes = res.data.keywords.list;
                console.log(this.goodLists)
            } else {
                console.log('获取数据异常')
            }
        },
        getGoodList (val){
            this.goodLists = [];
            this.goodLists.push(val)
        }
    }
}
</script>
<style scoped>
.goodlist{
    width:100%;
    display:flex;
    flex-direction:row;
}
.goodListType{
    width:30%;
}
.goodlistItem{
    width:70%;
}
</style>