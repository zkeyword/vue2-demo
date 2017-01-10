import Vue from 'vue'
import Vuex from 'vuex'
import loadingMutations from './loading/mutations'

Vue.use(Vuex)

const loading = {
    state: {
        stack: []
    },
    mutations: loadingMutations
}

export default new Vuex.Store({
    modules: {
        loading
    }
})
