import { GET_DATA2 } from '../../types'

const state = {
    test2: null
}

const getters = {

}

const mutations = {
    [GET_DATA2](state, { data }) {
        console.log(data)
        state.test2 = data
    }
}

const actions = {
    getData2({ commit, state }) {

    }
}

export default {
    state,
    getters,
    mutations,
    actions
}
