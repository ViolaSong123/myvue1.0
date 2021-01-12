<template>
    <div>
        <p>关于我们</p>
        <router-link to='/about/message'>消息</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'About'
}
</script>