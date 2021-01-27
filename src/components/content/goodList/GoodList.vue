<template>
    <div class='goodlist'>
        <div class='goodListType'><good-type :goodTypes='goodTypes' @func='getGoodList'></good-type></div>
        <!-- 右侧展示商品 -->
        <div class='goodlistItem'>
            <good-list-item :goodTitle='goodTitle' :goodListArray='goodListArray'></good-list-item>
        </div>
    </div>
</template>
<script>
import GoodType from './GoodType.vue'
import GoodListItem from './GoodListItem.vue'
const goodListArray = require('@/network/goodlist')

export default {
    name:'GoodList',
    data() {
        return {
            goodTypes: [],
            goodTitle: '',
            goodListArray: []
        }
    },
    components: {
       GoodType,
       GoodListItem
    },
    created () {
        this.getGoodType();
        this.goodListArray = goodListArray.default.goodlist;
    },
    methods:{
        async getGoodType() {
            const {data: res} = await this.$http.get('/home/multidata');
            if (res.success){
                this.goodTypes = res.data.keywords.list;
                this.goodTitle = this.goodTypes[0].words;
            } else {
                console.log('获取数据异常')
            }
        },
        getGoodList (val){
            this.goodTitle = val;
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