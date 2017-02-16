<template>
    <section class="page-userSpouseList page-userChildren">
        <lt-header :title="title" :showBtn="true" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <input class="tag right ui-input" v-model="data.realname" placeholder="请填写该子女姓名">
                </div>
                <div class="ui-cell" @click="showMenu('sex')">
                    <div class="text">性别</div>
                    <span class="tag right">
                        <span class="value">{{data.sex === 1 ? '男' : '女'}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenu('cat')">
                    <div class="text">类型</div>
                    <span class="tag right">
                        <span class="value">{{data.category_id | childrenCat}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">排行</div>
                    <input class="tag right ui-input" type="number" v-model="data.number" placeholder="请填写该子女的排行">
                </div>
                <div class="ui-cell">
                    <datetime v-model="data.birthday" :min-year=1900 title="" confirm-text="完成" cancel-text="取消">
                        <div class="text">出生年月</div>
                        <span class="tag right">
                            <i class="icon icon-right"></i>
                            <span class="value">{{data.birthday}}</span>
                        </span>
                    </datetime>
                </div>
            </div>
        </div>
        <actionsheet v-model="isShow" :menus="menus" @on-click-menu="menusClick"></actionsheet>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { Datetime, Actionsheet } from 'vux'
    // mapState
    export default {
        data() {
            return {
                title: '儿女信息',
                data: {
                    children_id: '',
                    sn: '',
                    realname: '',
                    sex: 1,
                    category_id: '',
                    rank: '',
                    birthday: '1970-01-01'
                },
                isShow: false,
                menus: {},
                type: ''
            }
        },
        components: {
            ltHeader,
            Datetime,
            Actionsheet
        },
        mounted() {
            let {title, id, category, realname, sex, sn, rank, birthday} = this.$route.query
            this.title = title
            this.data.children_id = id
            this.data.sn = sn
            this.data.realname = realname
            this.data.sex = sex
            this.data.category_id = category
            this.data.rank = rank
            this.data.birthday = birthday
        },
        methods: {
            ...mapActions([
                'saveChildren',
                'showToast'
            ]),
            onHaddle() {
                if (!this.data.realname) return this.showToast({ isShow: true, text: '姓名不能为空!' })
                if (!this.data.number) return this.showToast({ isShow: true, text: '子女的排行不能为空!' })
                if (!this.data.category_id) return this.showToast({ isShow: true, text: '请选择子女类型!' })
                this.saveChildren({
                    self: this,
                    params: this.data,
                    success(data) {
                        this.showToast({ isShow: true, text: `操作成功` })
                        this.$router.back()
                    }
                })
            },
            showMenu(type) {
                this.isShow = true
                this.type = type
                if (this.type === 'sex') {
                    this.menus = {
                        1: '男',
                        2: '女'
                    }
                } else {
                    this.menus = {
                        1: '亲生男',
                        2: '亲生女',
                        3: '过继男',
                        4: '过继女',
                        5: '认养儿',
                        6: '认养女',
                        7: '出承男',
                        8: '出承女',
                        9: '入承男',
                        10: '入承女',
                        11: '上门女婿'
                    }
                }
            },
            menusClick(key) {
                key = Number(key)
                if (this.type === 'sex') {
                    this.data.sex = key
                } else {
                    this.data.category_id = key
                }
            }
        }
    }
</script>