<template>
   <div class='recommend-view'>
       <div v-for="(item, key) in recommends" :key='key'>
           <a :href='item.link'>
               <img :src="item.image"/>
               <p>{{item.title}}</p>
           </a>
       </div>
   </div>
</template>
<script>
export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return []
        }
      }
    }
}
</script>
<style scoped>
.recommend-view{
    width:100%;
    display:flex;
    text-align: center;
    padding-top:20px;
    border-bottom: 10px solid #eee;
}
.recommend-view div{
    flex:1;
    padding: 0 8px;
}
.recommend-view a img{
    width: 100%;
    height: auto;
}
.recommend-view p{
    color:#666666;
}
</style>