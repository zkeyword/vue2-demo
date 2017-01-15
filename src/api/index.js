import axios from 'axios'
export default {
    baseInfo(data) {
        return axios
            .get('/api/test.json', {
                params: data
            })
    },
    login(data) {
        return axios
            .post('/api/login', {
                params: data
            })
    }
}
