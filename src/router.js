import Vue from "vue"
import VueRouter from "vue-router";
import Index from './view/Index'
import Cart from './view/Cart'
import Record from "./view/content/Record";
Vue.use(VueRouter)

let router = new VueRouter({
    mode: 'history',
    routes:[
        {
            path:'/',
            component:Index,
            name:'Index',
            // redirect: '/index',
            children: [
                {
                    path: '/record',
                    name: 'Record',
                    component: Record,
                    meta: {
                        requireAuth: true,
                    }
                }]
        },
        {
            path:'/cart',
            component: Cart,
            name:'cart'
        }
    ]
})
export default router