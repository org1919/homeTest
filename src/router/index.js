import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import Home from '@/views/Home'
import About from '@/views/About'
import Message from '@/views/Message'
import News from '@/views/News'
import MessageDetail from '../views/MessageDetail.vue'
import NewsDetail from '@/views/NewsDetail'
// 就是定义了一个路由器
export default new VueRouter({
    //就是用来定义我们路由的
    //路由的模式，默认是hash模式，路径后面会有#
    mode: 'history',
    routes: [
        //每一个路由都是一个对象
        {
            path: "/home",//定义一个路径，当点击连接后，路径会变为它
            component: Home, //代表路径变为/home后，要显示的组件是哪个组件
            children: [
                {
                    path: "/home/message",
                    component: Message,
                    children: [
                        {
                            path: '/home/message/info:msgId',
                            component: MessageDetail,
                            // props: true//代表吧路由接收到的params参数 作为子组件的属性来使用
                            // props:{key:value} //很少用,只能给子组件传递默认静态的值
                            props(route) {//roure就是当前我这个路由对象
                                //把路由对象当中的参数,不管什么参数
                                //全部拿到作为子组件的属性去使用
                                return {
                                    msgId: route.params.msgId,
                                    msgContent: route.query.msgContent
                                }
                            },
                            name: 'msgInfo'//给当前这个路由起一个标识名称
                        }
                    ]
                },
                {
                    path: "/home/news",
                    component: News,
                    children: [
                        {
                            path: '/home/news/info:newsId',
                            component: NewsDetail,
                            props(route) {
                                return {
                                    newsId: route.params.newsId,
                                    newsContent: route.query.newsContent
                                }
                            },
                            name: 'newsInfo'
                        }
                    ]
                },
                {
                    path: "/home",
                    redirect: "/home/message"
                }
            ]
        },
        {
            path: "/about",
            component: About
        },
        {
            path: "/",
            redirect: '/home'
        }
    ]
})