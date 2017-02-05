import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
        // 登录
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
        // 世系族谱
        {
            path: '/home',
            name: 'home',
            component: resolve => require(['./pages/home'], resolve)
        },
        {
            path: '/home/info',
            name: 'homeInfo',
            component: resolve => require(['./pages/home/info'], resolve)
        },
        {
            path: '/home/post',
            name: 'homePost',
            component: resolve => require(['./pages/home/post'], resolve)
        },
        {
            path: '/home/donate',
            name: 'homeDonate',
            component: resolve => require(['./pages/home/donate'], resolve)
        },
        // {
        //     path: '/home/summary',
        //     name: 'homeSummary',
        //     component: resolve => require(['./pages/home/summary'], resolve)
        // },
        // 族谱导航
        {
            path: '/search',
            name: 'search',
            component: resolve => require(['./pages/search'], resolve)
        },
        // 我的族亲
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
            path: '/user/addParent',
            name: 'userAddParent',
            component: resolve => require(['./pages/user/addParent'], resolve)
        },
        {
            path: '/user/spouseList',
            name: 'userSpouseList',
            component: resolve => require(['./pages/user/spouseList'], resolve)
        },
        {
            path: '/user/addSpouse',
            name: 'userAddSpouse',
            component: resolve => require(['./pages/user/addSpouse'], resolve)
        },
        {
            path: '/user/children',
            name: 'userChildren',
            component: resolve => require(['./pages/user/children'], resolve)
        },
        {
            path: '/user/addChildren',
            name: 'userAddChildren',
            component: resolve => require(['./pages/user/addChildren'], resolve)
        },
        {
            path: '/user/learning',
            name: 'userLearning',
            component: resolve => require(['./pages/user/learning'], resolve)
        },
        {
            path: '/user/addLearning',
            name: 'userAddLearning',
            component: resolve => require(['./pages/user/addLearning'], resolve)
        },
        {
            path: '/user/address',
            name: 'userAddress',
            component: resolve => require(['./pages/user/address'], resolve)
        },
        {
            path: '/user/addAddress',
            name: 'userAddAddress',
            component: resolve => require(['./pages/user/addAddress'], resolve)
        },
        {
            path: '/user/work',
            name: 'userWork',
            component: resolve => require(['./pages/user/work'], resolve)
        },
        {
            path: '/user/addWork',
            name: 'userAddWork',
            component: resolve => require(['./pages/user/addWork'], resolve)
        },
        {
            path: '/user/main',
            name: 'userMain',
            component: resolve => require(['./pages/user/main'], resolve)
        },
        {
            path: '/user/addMain',
            name: 'userAddMain',
            component: resolve => require(['./pages/user/addMain'], resolve)
        },
        {
            path: '/user/households',
            name: 'userHouseholds',
            component: resolve => require(['./pages/user/households'], resolve)
        },
        {
            path: '/user/addHouseholds',
            name: 'userAddHouseholds',
            component: resolve => require(['./pages/user/addHouseholds'], resolve)
        },
        {
            path: '/user/more',
            name: 'userMore',
            component: resolve => require(['./pages/user/more'], resolve)
        },
        {
            path: '/user/post',
            name: 'userPost',
            component: resolve => require(['./pages/user/post'], resolve)
        },
        {
            path: '*',
            redirect: '/base/signIn'
        }
    ]
})

export default router
