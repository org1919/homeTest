import Vue from 'vue'
import App from '@/App'
import router from '@/router/index'
new Vue({
    el: '#root',
    render: h => h(App),
    router //this.$router 代表的是路由器对象
    //this.$route 代表的是当前的路由对象
})