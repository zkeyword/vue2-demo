<template>
    <section class="page-userSpouseList">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '工作经历'})">新增工作经历</footer>
        <div class="lt-main">
            <div class="ui-block" v-for="item in list">
                <div class="ui-cell">
                    <div class="text">开始时间</div>
                    <span class="tag right">
                        <span class="value">{{item.start_date}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">结束时间</div>
                    <span class="tag right">
                        <span class="value">{{item.end_date}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">就职单位</div>
                    <span class="tag right">
                        <span class="value">{{item.company_name}}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">就职职位</div>
                    <span class="tag right">
                        <span class="value">{{item.position}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">备注</div>
                    <span class="tag right">
                        <span class="value">{{item.remark}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn">
                        <span @click="jump({title: '工作经历'})"><i class="icon icon-bianji"></i>编辑</span>
                        <span><i class="icon icon-del"></i>删除</span>
                    </div>
                </div>
            </div>
            <div class="noData">暂无相关信息，请添加！</div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { Confirm } from 'vux'
    // mapState
    export default {
        data() {
            return {
                title: '工作经历',
                list: [],
                isShow: false,
                delId: ''
            }
        },
        components: {
            ltHeader,
            Confirm
        },
        mounted() {
            this.workList({
                self: this,
                success(data) {
                    this.list = data
                }
            })
        },
        methods: {
            ...mapActions([
                'workList',
                'delWork'
            ]),
            onHaddle() {
                // console.log(1212)
            },
            jump(obj, item) {
                if (item) {
                    obj.id = item.id
                    obj.startDate = item.start_date
                    obj.endDate = item.end_date
                    obj.companyName = item.company_name
                    obj.position = item.position
                    obj.remark = item.remark
                }
                this.$router.push({ name: 'userAddWork', query: obj })
            },
            onConfirm() {
                this.delWork({
                    self: this,
                    params: {
                        id: this.delId
                    },
                    success(data) {
                        this.list = data
                    }
                })
            }
        }
    }
</script>