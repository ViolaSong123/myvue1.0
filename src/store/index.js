import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        // state相当于data
        count: 0,
        students:[
            { id: 1, name: 'Mike',age: 17},
            { id: 2, name: 'Marry', age: 14 },
            { id: 3, name: 'Gina', age: 18 },
            { id: 4, name: 'Cindy',age: 19 },
            { id: 5, name: 'Kevin',age: 13 },
            { id: 6, name: 'Kobe', age: 21 },
            { id: 7, name: 'Viola', age: 22 },
            { id: 8, name: 'Letty',age: 24 },
        ],
        selectedGoods:[]
    },
    mutations: {
        // mutations 存放同步的方法
        increment(state, payload){
            state.count += payload.amount
        },
        decrement(state){
            state.count--
        },
        selectGoods(state, payload){
            console.log(payload)
        }
    },
    actions: {
        // actions 存放异步的方法
    },
    getters: {
        // getters相当于computed
        getterAgeState: state=>{
            return state.students.filters(s=>s.age >= 15);
        }
    }
})

export default store