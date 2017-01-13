import api from '../api'
import { BASEINFO, INCREMENT, DECREMENT } from './types'

export default {
    // getData({ commit, state }) {
    //     cityGuess().then(res => {
    //         commit(GET_DATA, { data: res })
    //     })
    // }
    getBaseInfo({ commit, state }, {params, success, error}) {
        api.baseInfo(params).then(res => {
            commit(BASEINFO, { data: res })
            success(res)
        }).catch(res => {
            // error(res)
            console.log(error)
        })
    },
    increment: ({ commit }) => commit(INCREMENT),
    decrement: ({ commit }) => commit(DECREMENT),
    incrementIfOdd({ commit, state }) {
        if ((state.count + 1) % 2 === 0) {
            commit(INCREMENT)
        }
    },
    incrementAsync({ commit, state }, a) {
        console.log(state.count)
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit(INCREMENT)
                resolve()
            }, 1000)
        })
    }
}
