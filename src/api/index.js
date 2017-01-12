import axios from 'axios'
export default {
    baseInfo(data) {
        return axios
            .get('/json/test.json', {
                params: data
            })
    },
    login(data) {
        return axios
            .post('/json/test.json', {
                params: data
            })
    }
}
