import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/signUp',
            name: 'signUp',
            component: resolve => require(['./pages/signUp'], resolve)
        },
        {
            path: '/forget',
            name: 'forget',
            component: resolve => require(['./pages/forget'], resolve)
        },
        {
            path: '/signIn',
            name: 'signIn',
            component: resolve => require(['./pages/signIn'], resolve)
        },
        {
            path: '/signOut',
            name: 'signOut',
            component: resolve => require(['./pages/signOut'], resolve)
        },
        {
            path: '/reset',
            name: 'reset',
            component: resolve => require(['./pages/reset'], resolve)
        },
        {
            path: '/home',
            name: 'home',
            component: resolve => require(['./pages/home'], resolve)
        },
        {
            path: '*',
            redirect: '/signIn'
        }
    ]
})

router.beforeEach(({meta, path}, from, next) => {
    next()
})

export default router
