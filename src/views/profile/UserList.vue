<template>
    <div class='cart-student'>
            <div v-for="(item,key) in studentsList" :key="key">
                <p>{{item.id}}</p><p>{{item.name}}</p><p>{{item.age}}</p>
            </div>
    </div>
</template>
<script>
export default {
    name: 'UserList',
    props: {
        studentsList: {
            type:Array,
            default:[]
        }
    }
}
</script>
<style scoped>
.cart-student div{
    display:flex;
    flex-direction: row;
    border-bottom:1px solid;
}
.cart-student div p{
    flex:1;

}
</style>