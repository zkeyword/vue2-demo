import api from '../api'
import {
    BASEINFO,
    SHOWTOAST,
    HIDETOAST,
    SHOWLOADING,
    HIDELOADING
} from './types'

export default {
    /* 基础 */
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
    },
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
    // 获取家族信息
    getFamilyInfoBySn({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .getFamilyInfoBySn(params)
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
    // 获取地址分类
    getAddressCat({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .getAddressCat(params)
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
    // 获取地址列表
    getZone({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .getZone(params)
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
    getZoneByCountry({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .getZoneByCountry(params)
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
    // 获取上一级
    getParent({ commit, state }, {params, success, error, self}) {
        state.isShowLoading = true
        api
            .parent(params)
            .then(res => {
                let {msg, code, data} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    success && success.apply(self, [data])
                } else {
                    error && error()
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    /* 我的族亲 */
    // 个人信息
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
    updateInfo({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .updateInfo(params)
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
    // 密码
    updatePassword({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .updatePassword(params)
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
    // 地址
    getAddressList({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .addressList(params)
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
    setDefalutAddress({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .setDefalutAddress(params)
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
    saveAddress({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .saveAddress(params)
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
    delAddress({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .delAddress(params)
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
    // 配偶
    getSpouseList({ commit, state }, {params, success, error, self}) {
        state.isShowLoading = true
        api
            .spouseList(params)
            .then(res => {
                let {msg, code, data} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    success && success.apply(self, [data])
                } else {
                    error && error()
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    postSaveSpouse({ commit, state }, {params, success, error, self}) {
        state.isShowLoading = true
        api
            .saveSpouse(params)
            .then(res => {
                let {msg, code, data} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    success && success.apply(self, [data])
                } else {
                    error && error()
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    delSpouse({ commit, state }, {params, success, error, self}) {
        state.isShowLoading = true
        api
            .delSpouse(params)
            .then(res => {
                let {msg, code, data} = res.data
                state.isShowLoading = false
                if (Number(code) === 0) {
                    success && success.apply(self, [data])
                } else {
                    error && error()
                    commit(SHOWTOAST, { text: msg })
                }
            })
            .catch(res => {
                state.isShowLoading = false
            })
    },
    // 父母
    parentsList({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .parentsList(params)
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
    saveParents({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .saveParents(params)
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
    delParents({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .delParents(params)
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
    // 修改当前用户地址信息
    // 儿女
    children({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .children(params)
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
    delChildren({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .delChildren(params)
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
    saveChildren({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .saveChildren(params)
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
    // 工作经历
    majorList({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .majorList(params)
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
    delMajor({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .delMajor(params)
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
    saveMajor({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .saveMajor(params)
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
    // 学习经历
    schoolList({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .schoolList(params)
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
    delSchool({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .delSchool(params)
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
    saveSchool({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .saveSchool(params)
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
    // 工作经历
    workList({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .workList(params)
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
    delWork({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .delWork(params)
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
    saveWork({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .saveWork(params)
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
    // 户口
    hukouList({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .hukouList(params)
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
    delHukou({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .delHukou(params)
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
    saveHukou({ commit, state }, {params, success, self}) {
        state.isShowLoading = true
        api
            .saveHukou(params)
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
