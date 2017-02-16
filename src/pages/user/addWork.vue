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
                    <div class="text">就职单位</div>
                    <input class="tag right ui-input" v-model="data.company_name" placeholder="请填写就职单位">
                </div>
                <div class="ui-cell">
                    <div class="text">就职职位</div>
                    <input class="tag right ui-input" v-model="data.position" placeholder="请填写就职职位">
                </div>
                <div class="ui-cell">
                    <div class="text">备注</div>
                    <input class="tag right ui-input" v-model="data.remark" placeholder="请填写就职职位">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { Datetime } from 'vux'
    export default {
        data() {
            return {
                title: '工作经历',
                data: {
                    id: '',
                    start_date: '',
                    end_date: '',
                    company_name: '',
                    position: '',
                    remark: ''
                }
            }
        },
        components: {
            ltHeader,
            Datetime
        },
        mounted() {
            this.$nextTick(() => {
                let {title, id, startDate, endDate, companyName, position, remark} = this.$route.query
                this.data.id = id
                this.data.start_date = startDate
                this.data.end_date = endDate
                this.data.company_name = companyName
                this.data.position = position
                this.data.remark = remark
                this.title = title
            })
        },
        methods: {
            ...mapActions([
                'saveWork'
            ]),
            onHaddle() {
                if (!this.data.start_date) return this.showToast({ isShow: true, text: '开始时间不能为空!' })
                if (!this.data.end_date) return this.showToast({ isShow: true, text: '结束时间不能为空!' })
                if (!this.data.company_name) return this.showToast({ isShow: true, text: '公司不能为空!' })
                this.saveWork({
                    self: this,
                    params: this.data,
                    success() {
                        this.showToast({ isShow: true, text: `操作成功` })
                        this.$router.back()
                    }
                })
            },
            change() {}
        }
    }
</script>