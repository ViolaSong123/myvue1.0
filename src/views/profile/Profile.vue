<template>
    <div>
        <p>我的</p>
        <user-list :studentsList='studentsList'></user-list>

    </div>
</template>
<script>
import UserList from './UserList'

export default {
    name: 'Profile',
    components:{
        UserList
    },
    data () {
        return {
            studentsList: []
        }
    },
    created: function () {
        this.studentsList = this.$store.state.students
    }
}
</script>