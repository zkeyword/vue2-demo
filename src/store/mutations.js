import { INCREMENT, DECREMENT } from './types.js'

export default {
    [INCREMENT](state) {
        console.log(state.count)
        state.count++
    },
    [DECREMENT](state) {
        console.log(state.count)
        state.count--
    }
}
