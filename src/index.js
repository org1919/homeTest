import Vue from 'vue'
import App from '@/App'

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = new Vue();
    },
    el: '#root',
    render: h => h(App),
})