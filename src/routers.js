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
            path: '/home/summary',
            name: 'homeSummary',
            component: resolve => require(['./pages/home/summary'], resolve)
        },
        {
            path: '/search',
            name: 'search',
            component: resolve => require(['./pages/search'], resolve)
        },

        {
            path: '/base/signUp',
            name: 'signUp',
            component: resolve => require(['./pages/base/signUp'], resolve)
        },
        {
            path: '/base/signUp2',
            name: 'signUp2',
            component: resolve => require(['./pages/base/signUp2'], resolve)
        },
        {
            path: '/base/forget',
            name: 'forget',
            component: resolve => require(['./pages/base/forget'], resolve)
        },
        {
            path: '/base/signIn',
            name: 'signIn',
            component: resolve => require(['./pages/base/signIn'], resolve)
        },
        {
            path: '/base/signOut',
            name: 'signOut',
            component: resolve => require(['./pages/base/signOut'], resolve)
        },
        {
            path: '/base/reset',
            name: 'reset',
            component: resolve => require(['./pages/base/reset'], resolve)
        },

        {
            path: '/user',
            name: 'user',
            component: resolve => require(['./pages/user'], resolve)
        },
        {
            path: '/user/info',
            name: 'userInfo',
            component: resolve => require(['./pages/user/info'], resolve)
        },
        {
            path: '/user/form',
            name: 'userForm',
            component: resolve => require(['./pages/user/form'], resolve)
        },
        {
            path: '/user/password',
            name: 'userPassword',
            component: resolve => require(['./pages/user/password'], resolve)
        },
        {
            path: '/user/parent',
            name: 'userParent',
            component: resolve => require(['./pages/user/parent'], resolve)
        },
        {
            path: '/user/spouseList',
            name: 'userSpouseList',
            component: resolve => require(['./pages/user/spouseList'], resolve)
        },
        {
            path: '/user/children',
            name: 'userChildren',
            component: resolve => require(['./pages/user/children'], resolve)
        },
        {
            path: '/user/learning',
            name: 'userLearning',
            component: resolve => require(['./pages/user/learning'], resolve)
        },
        {
            path: '/user/work',
            name: 'userWork',
            component: resolve => require(['./pages/user/work'], resolve)
        },
        {
            path: '/user/main',
            name: 'userMain',
            component: resolve => require(['./pages/user/main'], resolve)
        },
        {
            path: '/user/households',
            name: 'userHouseholds',
            component: resolve => require(['./pages/user/households'], resolve)
        },
        {
            path: '/user/more',
            name: 'userMore',
            component: resolve => require(['./pages/user/more'], resolve)
        },
        {
            path: '*',
            redirect: '/base/signIn'
        }
    ]
})

export default router
