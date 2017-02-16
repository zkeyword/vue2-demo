<template>
    <section class="page-userSpouseList page-userParent">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '父母信息'})">新增父母信息</footer>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <span class="value">{{data.parent_name}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">类型</div>
                    <span class="tag right">
                        <span class="value">{{data.kind | kind}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">属于家族</div>
                    <span class="tag right">
                        <span class="value">{{data.family_name}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">状态</div>
                    <span class="tag right">
                        <span class="value">已注册</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn">
                        <span @click="jump({title: '父母信息'})"><i class="icon icon-bianji"></i>编辑</span>
                        <span @click="delId = data.parent_id;isShow = true"><i class="icon icon-del"></i>删除</span>
                    </div>
                </div>
            </div>
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <span class="value">{{data.parent_spouse_name}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">类型</div>
                    <span class="tag right">
                        <span class="value">{{data.kind | kind}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">属于家族</div>
                    <span class="tag right">
                        <span class="value">{{data.family_name}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">状态</div>
                    <span class="tag right">
                        <span class="value">{{data.parent_spouse_member_id == 0 ? '未注册' : '已注册' }}</span>
                    </span>
                </div>
            </div>
            <div class="noData" v-if="isNoData">暂无相关信息，请添加！</div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: '父母信息',
                data: {},
                isShow: false,
                delId: '',
                isNoData: true
            }
        },
        components: {
            ltHeader
        },
        mounted() {
            this.parentsList({
                self: this,
                success(data) {
                    this.data = data[0]
                    this.isNoData = !data.length
                }
            })
        },
        methods: {
            ...mapActions([
                'parentsList'
            ]),
            jump(obj) {
                let {generations, familySn} = this.$route.query
                obj.generations = generations
                obj.familySn = familySn
                obj.id = this.data.id
                obj.rank = this.data.rank
                obj.inheritType = this.data.inherit_type
                obj.parentId = this.data.parent_id
                obj.parentSpouseId = this.data.parent_spouse_id
                obj.parentName = this.data.parent_name
                obj.parentSpouseName = this.data.parent_spouse_name
                obj.kind = this.data.kind
                this.$router.push({ name: 'userAddParent', query: obj })
            },
            del(id) { }
        }
    }

</script>