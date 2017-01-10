import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        {
            path: '/signUp',
            meta: { auth: false },
            component: resolve => require(['./pages/signUp'], resolve)
        },
        {
            path: '/forget',
            meta: { auth: false },
            component: resolve => require(['./pages/forget'], resolve)
        },
        {
            path: '/signIn',
            meta: { auth: false },
            component: resolve => require(['./pages/signIn'], resolve)
        },
        {
            path: '/signOut',
            component: resolve => require(['./pages/signOut'], resolve)
        },
        {
            path: '/home',
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
