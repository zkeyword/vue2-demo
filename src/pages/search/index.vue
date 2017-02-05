<template>
    <section class="page-search">
        <header>
            <input type="text" placeholder="成员编号和姓名">
            <span>搜索</span>
        </header>
        <lt-footer :type="2"></lt-footer>
        <div class="lt-main">
            <div class="sectionBox">
                <div>
                    <i class="icon icon-user3"></i>
                    <input type="text" placeholder="家族成员A">
                </div>
                <em>与</em>
                <div>
                    <i class="icon icon-user3"></i>
                    <input type="text" placeholder="家族成员B">
                </div>
                <span>关系查询</span>
            </div>
            <chats :width="200" :height="300" :data="treeData"></chats>
            <i class="icon icon-family" v-if="treeData.length"></i>
        </div>
        <div class="actionsheet">

        </div>
    </section>
</template>
<script>
    import { ltFooter, chats } from 'components'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                treeData: []
            }
        },
        components: {
            ltFooter,
            chats
        },
        mounted() {
            this.getTree({
                self: this,
                success(treeData) {
                    this.treeData = treeData
                }
            })
        },
        methods: {
            ...mapActions([
                'getTree'
            ])
        }
    }
</script>