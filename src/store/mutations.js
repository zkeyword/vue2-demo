import {
    BASEINFO,
    SHOWTOAST,
    HIDETOAST,
    SHOWLOADING,
    HIDELOADING
} from './types.js'

export default {
    [BASEINFO](state) {
        state.isLogin = true
    },
    [SHOWTOAST](state, obj) {
        state.isShowToast = true
        state.toastText = obj.text
    },
    [HIDETOAST](state) {
        state.isShowToast = false
    },
    [SHOWLOADING](state, obj) {
        state.isShowLoading = true
        if (obj.text) {
            state.loadingText = obj.text
        }
    },
    [HIDELOADING](state) {
        state.isShowLoading = false
    }
}
