<template>
    <section class="page-userSpouseList">
        <lt-header :title="title" :showBtn="true" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">编号</div>
                    <input class="tag ui-input" type="text" v-model="data.sn" placeholder="请输入配偶编号">
                </div>
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <input class="tag ui-input" type="text" v-model="data.name" placeholder="请输入配偶姓名">
                </div>
                <div class="ui-cell">
                    <div class="text">第几任</div>
                    <input class="tag ui-input" type="number" v-model="data.number" placeholder="请输入是第几任配偶">
                </div>
                <div class="ui-cell" @click="isShowMenus = true">
                    <div class="text">是否健在</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.living === 0 ? '否' : '是'}}</span>
                    </span>
                </div>
            </div>
        </div>
        <actionsheet v-model="isShowMenus" :menus="menus" @on-click-menu="menusClick"></actionsheet>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { Actionsheet } from 'vux'
    export default {
        data() {
            return {
                title: '配偶信息',
                data: {
                    id: '',
                    name: '',
                    number: '',
                    living: '',
                    sn: ''
                },
                isShowMenus: false,
                menus: {
                    0: '否',
                    1: '是'
                }
            }
        },
        components: {
            ltHeader,
            Actionsheet
        },
        mounted() {
            let {title, id, name, number, living, sn} = this.$route.query
            this.title = title
            this.data.id = id
            this.data.name = name
            this.data.number = number
            this.data.living = living
            this.data.sn = sn
        },
        methods: {
            ...mapActions([
                'postSaveSpouse',
                'showToast'
            ]),
            onHaddle() {
                if (!this.data.name) return this.showToast({ isShow: true, text: '姓名不能为空!' })
                if (!this.data.number) return this.showToast({ isShow: true, text: '第几任配偶不能为空!' })
                if (!this.data.sn) return this.showToast({ isShow: true, text: '配偶编号不能为空!' })
                this.postSaveSpouse({
                    self: this,
                    params: this.data,
                    success(data) {
                        this.showToast({ isShow: true, text: `操作成功` })
                        this.$router.back()
                    }
                })
            },
            menusClick(key) {
                this.data.living = Number(key)
            }
        }
    }
</script>