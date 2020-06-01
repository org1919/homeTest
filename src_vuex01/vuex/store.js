//数据处理系统

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//1.state 代表状态
const state = {
    count: 0 //多个组件共享的数据
}

//2.mutations 代表直接修改数据的行为
const mutations = {
    // 不能写判断 循环 定时器
    increment(state) { state.count++ },
    decrement(state) { state.count-- }
}

//3.action 代表用户在组件当中的行为对应的回调函数内部逻辑方法
const actions = {
    increment(context) {
        context.commit('increment')
    },
    decrement(context) {
        context.commit('decrement')
    },
    incrementIfOdd(context) {
        if (context.state.count % 2 === 1) {
            context.commit('increment')
        }
    },
    incrementAsync(context) {
        setTimeout(() => {
            context.commit('increment')
        }, 1000)
    }
}
//4.getter 代表根据我们状态数据，计算出来的数据方法
const getters = {}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
