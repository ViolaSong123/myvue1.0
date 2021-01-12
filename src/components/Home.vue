<template>
    <div>
        <p>首页</p>
        <p>欢迎用户：{{$route.params.name}}</p>
    </div>
</template>
<script>
export default {
    name: 'Home',
    created: function () {
        // console.log(this.$route)
    }
}
</script>