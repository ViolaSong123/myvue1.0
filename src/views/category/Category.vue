<template>
    <div class='category'>
        <good-list ></good-list>
    </div>
</template>
<script>
import GoodList from '@/components/content/goodlist/GoodList.vue'
export default {
    name:'Category',
    components: {
        GoodList
    }
}
</script>
<style scoped>

</style>