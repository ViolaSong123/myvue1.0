<template>
    <div id='home' class='wrapper'>
        <nav-bar class='home-nav'><div slot = 'center'>购物街</div></nav-bar>
        <!-- 轮播图 -->
        <recommend-view :recommends='recommends'></recommend-view>
        <feature-view></feature-view>
    </div>
</template>
<script>
import NavBar from '@/components/common/navbar/NavBar.vue'
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'

export default {
    name:"Home",
    data() {
        return {
            recommends: []
        }
    },
    components:{
        NavBar,
        RecommendView,
        FeatureView
    },
    created() {
        this.getHomeInfo();
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