import api from '../api'
import {
    BASEINFO,
    SHOWTOAST,
    HIDETOAST,
    SHOWLOADING,
    HIDELOADING
} from './types'

export default {
    showToast({commit, state}, {isShow, text}) {
        if (isShow) {
            commit(SHOWTOAST, { text })
        } else {
            commit(HIDETOAST)
        }
    },
    showLoading({commit, state}, {isShow, text}) {
        if (isShow) {
            commit(SHOWLOADING, { text })
        } else {
            commit(HIDELOADING)
        }
    },
    postLogin({ commit, state }, {params, self}) {
        state.isShowLoading = true
        api
            .login(params)
            .then(res => {
                if (res.status === 200) {
                    commit(BASEINFO, { ...res.data, self })
                } else {
                    commit(SHOWTOAST, { text: '网络错误' })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    postReset({ commit, state }, {params, self}) {
        state.isShowLoading = true
        api
            .reset(params)
            .then(res => {
                let {msg, code} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    self.$router.push({ name: 'signIn' })
                } else {
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    postSendSms({ commit, state }, {params}) {
        state.isShowLoading = true
        api
            .sendSms(params)
            .then(res => {
                let {msg, code} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    commit(SHOWTOAST, { text: '发送成功' })
                } else {
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    postVerifySms({ commit, state }, {params, success, error}) {
        state.isShowLoading = true
        api
            .verifySms(params)
            .then(res => {
                let {msg, code} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    success && success()
                } else {
                    error && error()
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    postRegister({ commit, state }, {params, self}) {
        state.isShowLoading = true
        api
            .register(params)
            .then(res => {
                let {msg, code, data} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    commit(SHOWTOAST, { text: msg })
                    self.$router.push({ name: 'signUp2', query: { family: self.family_sn, token: data.access_token } })
                } else {
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    getParent({ commit, state }, {params, success, error}) {
        state.isShowLoading = true
        api
            .parent(params)
            .then(res => {
                let {msg, code, data} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    success && success(data)
                } else {
                    error && error()
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    getSpouseList({ commit, state }, {params, success, error}) {
        state.isShowLoading = true
        api
            .spouseList(params)
            .then(res => {
                let {msg, code, data} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    success && success(data)
                } else {
                    error && error()
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    postPerfectInfo({ commit, state }, {params, self}) {
        state.isShowLoading = true
        api
            .perfectInfo(params)
            .then(res => {
                let {msg, code} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    commit(BASEINFO, { ...res.data, self })
                } else {
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    getMemberInfo({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .memberInfo(params)
            .then(res => {
                let {msg, code, data} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    success && success.apply(self, [data])
                } else {
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    getTree({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .tree(params)
            .then(res => {
                let {msg, code, data} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    success && success.apply(self, [data])
                } else {
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    }
}
