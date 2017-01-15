import api from '../api'
import { BASEINFO, SHOWTOAST, HIDETOAST, SHOWLOADING, HIDELOADING } from './types'

export default {
    postLogin({ commit, state }, {params, success, error}) {
        state.isShowLoading = true
        api
            .login(params)
            .then(res => {
                commit(BASEINFO, { data: res })
                success && success(res)
                state.isShowLoading = false
            })
            .catch(res => {
                error && error(res)
                state.isShowLoading = false
            })
    },
    showToast({commit, state}, {isShow, text}) {
        if (isShow) {
            commit(SHOWTOAST, {text})
        } else {
            commit(HIDETOAST)
        }
    },
    showLoading({commit, state}, {isShow, text}) {
        if (isShow) {
            commit(SHOWLOADING, {text})
        } else {
            commit(HIDELOADING)
        }
    }
}
