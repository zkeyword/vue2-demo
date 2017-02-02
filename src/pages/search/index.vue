<template>
    <section class="page-search">
        <header>
            <input type="text" placeholder="成员编号和姓名">
            <span>搜索</span>
        </header>
        <lt-footer :type="2"></lt-footer>
        <div class="lt-main">
            <div>关系查询</div>
            <chats :width="200" :height="300" :data="treeData"></chats>
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