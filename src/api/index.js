import axios from 'axios'
export default {
    reset(data) {
        return axios
            .post('/api/auth/reset_password', data)
    },
    login(data) {
        return axios
            .post('/api/auth/login', data)
    },
    register(data) {
        return axios
            .post('/api/auth/register', data)
    },
    sendSms(data) {
        return axios
            .post('/api/common/send_sms', data)
    },
    verifySms(data) {
        return axios
            .post('/api/common/verify_sms', data)
    },
    parent(data) {
        return axios
            .get('/api/common/parent_items', { params: data })
    },
    spouseList(data) {
        return axios
            .get('/api/common/spouse_items', { params: data })
    },
    perfectInfo(data) {
        return axios
            .post('/api/auth/perfect_info', data)
    },
    memberInfo(data) {
        return axios
            .get('/api/auth/member_info', data)
    },
    tree(data) {
        return axios
            .get('/api/tree', data)
    }
}
