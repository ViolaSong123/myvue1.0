<template>
    <div>
        <p>我的</p>
        <p>{{$route.query.tips}}</p>
    </div>
</template>
<script>
export default {
    name: 'Profile',
    created: function () {
        // console.log(this.$route)
    }
}
</script>