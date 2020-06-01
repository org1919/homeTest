import { REQUESTING, REQUEST_FAILD, REQUEST_SUCCESS } from './mutationType'

export const mutations = {
    //请求中在操作数据
    [REQUESTING](state) {
        state.isFirt = false
        state.isLoading = true
    },
    //请求成功在操作数据
    [REQUEST_SUCCESS](state, users) {
        state.isLoading = false
        state.users = users
    },
    //请求失败在操作数据
    [REQUEST_FAILD](state, msg) {
        state.errMsg = msg;
        state.isLoading = false;
    }
}