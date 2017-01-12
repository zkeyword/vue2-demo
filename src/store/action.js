import { baseInfo } from '../api'
import { GET_DATA, INCREMENT, DECREMENT } from './types'

export default {
    // getData({ commit, state }) {
    //     cityGuess().then(res => {
    //         commit(GET_DATA, { data: res })
    //     })
    // }
    getBaseInfo({ commit, state }) {
        baseInfo().then(res => {
            commit(GET_DATA, { data: res })
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
