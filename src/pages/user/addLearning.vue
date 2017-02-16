<template>
    <section class="page-userSpouseList">
        <lt-header :title="title" :showBtn="true" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <datetime v-model="data.start_date" :min-year=1900 title="" confirm-text="完成" cancel-text="取消">
                        <div class="text">开始时间</div>
                        <span class="tag right">
                            <i class="icon icon-right"></i>
                            <span class="value">{{data.start_date}}</span>
                        </span>
                    </datetime>
                </div>
                <div class="ui-cell">
                    <datetime v-model="data.end_date" :min-year=1900 title="" confirm-text="完成" cancel-text="取消">
                        <div class="text">结束时间</div>
                        <span class="tag right">
                            <i class="icon icon-right"></i>
                            <span class="value">{{data.end_date}}</span>
                        </span>
                    </datetime>
                </div>
                <div class="ui-cell">
                    <div class="text">就读学校</div>
                    <input class="tag right ui-input" v-model="data.school_name" placeholder="请填写就读学校">
                </div>
                <div class="ui-cell">
                    <div class="text">就读专业</div>
                    <input class="tag right ui-input" v-model="data.school_major" placeholder="请填写就读专业">
                </div>
                <div class="ui-cell" @click="isShow=true">
                    <div class="text">学历</div>
                    <span class="tag right">
                        <span class="value">{{data.degree|degreeName}}</span>
                    </span>
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
    export default {
        data() {
            return {
                title: '学习经历',
                isShow: false,
                data: {
                    id: '',
                    start_date: '',
                    end_date: '',
                    school_name: '',
                    school_major: '',
                    degree: ''
                },
                menus: {
                    1: '小学',
                    2: '初中',
                    3: '中专',
                    4: '高中',
                    5: '大专',
                    6: '本科',
                    7: '硕士研究生',
                    8: '博士研究生'
                }
            }
        },
        components: {
            ltHeader,
            Datetime,
            Actionsheet
        },
        mounted() {
            this.$nextTick(() => {
                let {title, id, startDate, endDate, schoolName, schoolMajor, degree} = this.$route.query
                this.data.id = id
                this.data.start_date = startDate
                this.data.end_date = endDate
                this.data.school_name = schoolName
                this.data.school_major = schoolMajor
                this.data.degree = degree
                this.title = title
            })
        },
        methods: {
            ...mapActions([
                'saveSchool',
                'showToast'
            ]),
            onHaddle() {
                if (!this.data.start_date) return this.showToast({ isShow: true, text: '开始时间不能为空!' })
                if (!this.data.end_date) return this.showToast({ isShow: true, text: '结束时间不能为空!' })
                if (!this.data.school_name) return this.showToast({ isShow: true, text: '学校不能为空!' })
                if (!this.data.school_major) return this.showToast({ isShow: true, text: '专业不能为空!' })
                if (!this.data.degree) return this.showToast({ isShow: true, text: '请选择学历类型!' })
                this.saveSchool({
                    self: this,
                    params: this.data,
                    success() {
                        this.showToast({ isShow: true, text: `操作成功` })
                        this.$router.back()
                    }
                })
            },
            menusClick(key) {
                this.data.degree = key
            }
        }
    }
</script>