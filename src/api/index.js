import axios from 'axios'
export default {
    /* 基础 */
    tree(data) {
        return axios
            .get('/api/tree', data)
    },
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
    perfectInfo(data) {
        return axios
            .post('/api/auth/perfect_info', data)
    },
    // 获取家族信息
    getFamilyInfoBySn(data) {
        return axios
            .get('/api/common/member_info_by_sn', { params: data })
    },
    // 获取地址分类
    getAddressCat(data) {
        return axios
            .get('/api/common/address_categories', { params: data })
    },
    // 获取地址列表
    getZone(data) {
        return axios
            .get('/api/common/zone_items', { params: data })
    },
    getZoneByCountry(data) {
        return axios
            .get('/api/common/zone_items_by_country', { params: data })
    },
    // 获取上一级
    parent(data) {
        return axios
            .get('/api/common/parent_items', { params: data })
    },
    /* 我的族亲 */
    // 个人信息
    memberInfo(data) {
        return axios
            .get('/api/auth/member_info', { params: data })
    },
    updateInfo(data) {
        return axios
            .post('/api/auth/update_info', data)
    },
    // 密码
    updatePassword(data) {
        return axios
            .post('/api/auth/update_password', data)
    },
    // 地址
    addressList(data) {
        return axios
            .get('/api/auth/address_items', { params: data })
    },
    delAddress(data) {
        return axios
            .post('/api/auth/delete_address', data)
    },
    setDefalutAddress(data) {
        return axios
            .post('/api/auth/set_default_address')
    },
    saveAddress(data) {
        return axios
            .get('/api/auth/save_address', { params: data })
    },
    // 配偶
    spouseList(data) {
        return axios
            .get('/api/common/spouse_items', { params: data })
    },
    saveSpouse(data) {
        return axios
            .post('/api/auth/save_spouse', data)
    },
    delSpouse(data) {
        return axios
            .post('/api/auth/delete_address', data)
    },
    // 父母
    parentsList(data) {
        return axios
            .get('/api/member/parents_items', { params: data })
    },
    saveParents(data) {
        return axios
            .post('/api/auth/save_parents', data)
    },
    delParents(data) {
        return axios
            .post('/api/auth/delete_parents', data)
    },
    // 修改当前用户地址信息
    saveRegionInfo(data) {
        return axios
            .post('/api/auth/save_region_info', data)
    },
    // 儿女
    children(data) {
        return axios
            .get('/api/member/children_items', { params: data })
    },
    delChildren(data) {
        return axios
            .post('/api/member/delete_children', data)
    },
    saveChildren(data) {
        return axios
            .post('/api/member/save_children', data)
    },
    // 工作经历
    majorList(data) {
        return axios
            .get('/api/major_experiences', { params: data })
    },
    delMajor(data) {
        return axios
            .post('/api/major_experiences/delete', data)
    },
    saveMajor(data) {
        return axios
            .post('/api/major_experiences/save', data)
    },
    // 学习经历
    schoolList(data) {
        return axios
            .get('/api/school_experiences', { params: data })
    },
    delSchool(data) {
        return axios
            .post('/api/school_experiences/delete', data)
    },
    saveSchool(data) {
        return axios
            .post('/api/school_experiences/save', data)
    },
    // 工作经历
    workList(data) {
        return axios
            .get('/api/work_experiences', { params: data })
    },
    delWork(data) {
        return axios
            .post('/api/work_experiences/delete', data)
    },
    saveWork(data) {
        return axios
            .post('/api/work_experiences/save', data)
    },
    // 户口
    hukouList(data) {
        return axios
            .get('/api/hukou', { params: data })
    },
    delHukou(data) {
        return axios
            .post('/api/hukou/delete', data)
    },
    saveHukou(data) {
        return axios
            .post('/api/hukou/save', data)
    }
}
