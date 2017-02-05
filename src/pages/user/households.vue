<template>
    <section class="page-userHouseholds">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '添加成员'})">添加成员</footer>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">性别</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">出生年月</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
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
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: '户主户口'
            }
        },
        components: {
            ltHeader
        },
        mounted() {
        },
        methods: {
            ...mapActions([
                'postLogin'
            ]),
            jump(obj) {
                this.$router.push({ name: 'userAddHouseholds', query: obj })
            },
            del() { }
        }
    }

</script>