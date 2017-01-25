import { setCookie } from 'utils/cookie'
import {
    BASEINFO,
    SHOWTOAST,
    HIDETOAST,
    SHOWLOADING,
    HIDELOADING
} from './types'

export default {
    [BASEINFO](state, {code, msg, self}) {
        state.isShowLoading = false
        if (Number(code) === 0) {
            state.isLogin = true
            self.$router.push({ name: 'home' })
            setCookie('isLogin', true)
        } else {
            state.isLogin = false
            setCookie('isLogin', false)
            state.isShowToast = true
            state.toastText = msg
        }
    },
    [SHOWTOAST](state, {text}) {
        state.isShowToast = true
        state.toastText = text
    },
    [HIDETOAST](state) {
        state.isShowToast = false
    },
    [SHOWLOADING](state, {text}) {
        state.isShowLoading = true
        if (text) {
            state.loadingText = text
        }
    },
    [HIDELOADING](state) {
        state.isShowLoading = false
    }
}
