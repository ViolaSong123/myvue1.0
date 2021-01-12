import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        count: 0,
        students:[
            { id: 1, age: 17},
            { id: 2, age: 14 },
            { id: 3, age: 18 },
            { id: 4, age: 19 },
            { id: 5, age: 13 },
            { id: 6, age: 21 },
            { id: 7, age: 22 },
            { id: 8, age: 24 },
        ]
    },
    mutations: {
        increment(state, payload){
            console.log(payload)
            state.count += payload.amount
        },
        decrement(state){
            state.count--
        }
    },
    getters: {
        getterAgeState: state=>{
            return state.students.filters(s=>s.age >= 15);
        }
    }
})

export default store