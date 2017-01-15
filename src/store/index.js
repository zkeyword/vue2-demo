import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
// import checkout from './modules/checkout/checkout'

Vue.use(Vuex)

const state = {
    count: 0,
    isLogin: false,
    isShowToast: false,
    toastText: '',
    isShowLoading: false,
    loadingText: '请稍候~~'
}

export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
    modules: {
        // checkout
    }
})
