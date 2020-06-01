import Vue from 'vue';
import App from './App.vue';
import store from './vuex/store'

new Vue({
    el: '#root',
    render: h => h(App),
    store//注册vuex,只有在这里注册以后vuex才生效
    //注册号之后，那么每个组件当中都可以通过this.$stroe拿到我们的store对象
});