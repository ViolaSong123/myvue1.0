<template>
    <div id='home' class='wrapper'>
        <nav-bar class='home-nav'><div slot = 'center'>购物街</div></nav-bar>
        <!-- 轮播图 -->
        <recommend-view :recommends='recommends'></recommend-view>
        <feature-view></feature-view>
        <div>裙子颜色是：{{dress.color}} 数量：{{dress.num}}</div>
        <button @click='addNum($event)'>增加</button>
    </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

export default {
    mounted () {
        this.$set(this.dress, 'num', 0)
    },
     created() {
        this.getHomeInfo();
        this.changeMary();
    },
    name:"Home",
    data() {
        return {
            recommends: [],
            dress:{
                color:'red',
                size: 'M'
            },
            mary:{
                age: 18
            }
        }
    },
    components:{
        NavBar,
        RecommendView,
        FeatureView
    },
    methods: {
        async getHomeInfo() {
            const {data: res} = await this.$http.get('/home/multidata');
            if (res.success){
                this.recommends = res.data.recommend.list;
                console.log(this.recommends)
            } else {
                console.log('获取数据异常')
            }
        },
        addNum (ev) {
            console.log(ev);
            this.dress.num += 1;
        },
        // 数据挟持
        changeMary() {
            Object.defineProperty(this.mary, 'age', {
                get: function() {
                    console.log('获取年龄')
                },
                set: function (newVal) {
                    console.log('重置年龄')
                }
            })
            this.mary.age = 22;
        }
    }
}
</script>
<style scoped>
.home-nav{
    background: pink;
    color:#FFF;
}
</style>