<template>
    <section class="page-userSpouseList page-userHouseholds">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '添加成员'})">添加成员</footer>
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
                    <div class="text">出生年月</div>
                    <span class="tag right">
                        <span class="value">{{item.birthday}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn">
                        <span @click="jump({title: '添加成员'})"><i class="icon icon-bianji"></i>编辑</span>
                        <span><i class="icon icon-del"></i>删除</span>
                    </div>
                </div>
            </div>
            <div class="noData">暂无相关信息，请添加！</div>
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
    export default {
        data() {
            return {
                title: '户主户口',
                list: [],
                isShow: false
            }
        },
        components: {
            ltHeader,
            Confirm
        },
        mounted() {
            this.hukouList({
                self: this,
                success(data) {
                    this.list = data
                }
            })
        },
        methods: {
            ...mapActions([
                'hukouList',
                'delHukou'
            ]),
            jump(obj) {
                this.$router.push({ name: 'userAddHouseholds', query: obj })
            },
            onConfirm() {
                this.del()
            },
            del() {
                this.delChildren({
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