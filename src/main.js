import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import RouterMap from './routers'
import store from './store'
import './assets/styles/index.styl'

Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
    store: store,
    router: RouterMap,
    render: h => h(App)
}).$mount('#app')
