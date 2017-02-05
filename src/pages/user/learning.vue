<template>
    <section class="page-userSpouseList">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '学习经历'})">新增学习经历</footer>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">开始时间</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">结束时间</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">就读学校</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">就读专业</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">学历</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn">
                        <span @click="jump({title: '学习经历'})"><i class="icon icon-bianji"></i>编辑</span>
                        <span><i class="icon icon-del"></i>删除</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    // mapState
    export default {
        data() {
            return {
                title: '学习经历'
            }
        },
        components: {
            ltHeader
        },
        methods: {
            ...mapActions([
                'postLogin'
            ]),
            onHaddle() {
                // console.log(1212)
            },
            jump(obj) {
                this.$router.push({ name: 'userAddLearning', query: obj })
            },
            del() { }
        }
    }
</script>