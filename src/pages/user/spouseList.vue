<template>
    <section class="page-userSpouseList">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '配偶信息'})">添加配偶信息</footer>
        <div class="lt-main">
            <div class="ui-block" v-for="item in list">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <span class="value">{{item.name}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">类型</div>
                    <span class="tag right">
                        <span class="value">{{item.kind === 1 ? '丈夫' : '妻子'}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">第几任</div>
                    <span class="tag right">
                        <span class="value">{{item.number}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">是否健在</div>
                    <span class="tag right">
                        <span class="value">{{item.living === 0 ? '否' : '是'}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">状态</div>
                    <span class="tag right">
                        <span class="value">{{item.belong_member_id ? '已注册' : '未注册'}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn">
                        <span @click="jump({title: '配偶信息', id: item.id, name: item.name, number: item.number, living: item.living, sn: item.sn})"><i class="icon icon-bianji"></i>编辑</span>
                        <span @click="delId = item.id;isShow = true"><i class="icon icon-del"></i>删除</span>
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
                title: '配偶信息',
                list: [],
                userId: '',
                delId: '',
                isShow: false
            }
        },
        components: {
            ltHeader,
            Confirm
        },
        mounted() {
            let {userId} = this.$route.query
            this.userId = userId
            this.getSpouseList({
                self: this,
                params: {
                    member_id: userId
                },
                success(data) {
                    this.list = data
                }
            })
        },
        methods: {
            ...mapActions([
                'getSpouseList',
                'delSpouse',
                'showToast'
            ]),
            jump(obj) {
                this.$router.push({ name: 'userAddSpouse', query: obj })
            },
            onConfirm() {
                this.del()
            },
            del() {
                this.delSpouse({
                    self: this,
                    params: {
                        id: this.delId
                    },
                    success(data) {
                        this.showToast({ isShow: true, text: `操作成功` })
                        this.list = data
                    }
                })
            }
        }
    }
</script>