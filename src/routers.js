import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/home',
            name: 'home',
            component: resolve => require(['./pages/home'], resolve)
        },

        {
            path: '/signUp',
            name: 'signUp',
            component: resolve => require(['./pages/base/signUp'], resolve)
        },
        {
            path: '/signUp2',
            name: 'signUp2',
            component: resolve => require(['./pages/base/signUp2'], resolve)
        },
        {
            path: '/forget',
            name: 'forget',
            component: resolve => require(['./pages/base/forget'], resolve)
        },
        {
            path: '/signIn',
            name: 'signIn',
            component: resolve => require(['./pages/base/signIn'], resolve)
        },
        {
            path: '/signOut',
            name: 'signOut',
            component: resolve => require(['./pages/base/signOut'], resolve)
        },
        {
            path: '/reset',
            name: 'reset',
            component: resolve => require(['./pages/base/reset'], resolve)
        },

        {
            path: '/user',
            name: 'user',
            component: resolve => require(['./pages/user'], resolve)
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
