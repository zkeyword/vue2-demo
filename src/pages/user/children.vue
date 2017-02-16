<template>
    <section class="page-userSpouseList page-userChildren">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '儿女信息'})">新增儿女信息</footer>
        <div class="lt-main">
            <div class="ui-block" v-for="item in list">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <span class="value">{{item.realname}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">性别</div>
                    <span class="tag right">
                        <span class="value">{{item.sex === 1 ? '男' : '女'}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">类型</div>
                    <span class="tag right">
                        <span class="value">{{item.category_id | childrenCat}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">排行</div>
                    <span class="tag right">
                        <span class="value">{{item.rank}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">出生年月</div>
                    <span class="tag right">
                        <span class="value">{{item.birthday}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn">
                        <span @click="jump({title: '儿女信息', id: item.children_id, sn: item.sn, realname: item.realname, sex: item.sex, category: item.category_id, rank: item.rank, birthday: item.birthday})"><i class="icon icon-bianji"></i>编辑</span>
                        <span @click="delId = item.children_id;isShow = true"><i class="icon icon-del"></i>删除</span>
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
                title: '儿女信息',
                list: [],
                delId: '',
                isShow: false
            }
        },
        components: {
            ltHeader,
            Confirm
        },
        mounted() {
            this.children({
                self: this,
                success(data) {
                    this.list = data
                }
            })
        },
        methods: {
            ...mapActions([
                'children',
                'delChildren',
                'showToast'
            ]),
            jump(obj) {
                this.$router.push({ name: 'userAddChildren', query: obj })
            },
            onConfirm() {
                this.del()
            },
            del() {
                this.delChildren({
                    self: this,
                    params: {
                        children_id: this.delId
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