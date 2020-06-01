import Vue from "vue"
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 0
}

const mutations = {
    increment(state) {
        state.count++;
    },
    decrement(state) {
        state.count--;
    }
}

const actions = {
    // increment(context) {
    //     context.commit("increment")
    // },
    // decrement(context) {
    //     context.commit("decrement")
    // },
    incrementIfOdd(context) {
        if (context.state.count % 2 !== 0) {
            context.commit("increment")
        }
    },
    incrementAsync(context) {
        setTimeout(() => {
            context.commit("increment")
        }, 1000);
    }
}

const getters = {
    currentCount(state) {
        return state.count
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})