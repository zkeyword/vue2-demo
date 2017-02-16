<template>
    <section class="page-userSpouseList">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '学习经历'})">新增学习经历</footer>
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
                    <div class="text">就读学校</div>
                    <span class="tag right">
                        <span class="value">{{item.school_name}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">就读专业</div>
                    <span class="tag right">
                        <span class="value">{{item.school_major}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">学历</div>
                    <span class="tag right">
                        <span class="value">{{item.degree|degreeName}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn">
                        <span @click="jump({title: '学习经历'}, item)"><i class="icon icon-bianji"></i>编辑</span>
                        <span><i class="icon icon-del" @click="delId = item.id;isShow = true"></i>删除</span>
                    </div>
                </div>
            </div>
            <div class="noData" v-if="!list.length">暂无相关信息，请添加！</div>
        </div>
        <confirm v-model="isShow" title="提示" @on-confirm="onConfirm">
            <p style="text-align:center;">确定要删除？</p>
        </confirm>
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
                title: '学习经历',
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
            this.schoolList({
                self: this,
                success(data) {
                    this.list = data
                }
            })
        },
        methods: {
            ...mapActions([
                'schoolList',
                'delSchool'
            ]),
            onHaddle() {
                // console.log(1212)
            },
            jump(obj, item) {
                if (item) {
                    obj.id = item.id
                    obj.startDate = item.start_date
                    obj.endDate = item.end_date
                    obj.schoolName = item.school_name
                    obj.schoolMajor = item.school_major
                    obj.degree = item.degree
                }
                this.$router.push({ name: 'userAddLearning', query: obj })
            },
            onConfirm() {
                this.delSchool({
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