export default {
    pushLoadStack(state) {
        console.log(1212)
        state.stack.push(1)
    },
    completeLoad(state) {
        let stack = state.stack
        stack.pop()
        if (!stack.length) {
            console.log(1212)
        }
    }
}
