import Vue from 'vue'
import App from './App'
import RouterMap from './routers'
import store from './store'
import './assets/icomoon/style.styl'
import './assets/styles/index.styl'
import { getCookie } from 'utils/cookie'

RouterMap.beforeEach(({meta, path}, from, next) => {
    // let { auth = true } = meta
    let isStateLogin = Boolean(store.state.isLogin)
    let isCookieLogin = getCookie('isLogin')
    let isNoBase = !/base/.test(path)
    if (isStateLogin && isNoBase) {
        return next()
    }
    if (!isCookieLogin && isNoBase) {
        return next({ path: '/base/signIn' })
    }
    next()
})

// RouterMap.afterEach(route => {
// })

/* eslint-disable no-new */
new Vue({
    store: store,
    router: RouterMap,
    render: h => h(App)
}).$mount('#app')
