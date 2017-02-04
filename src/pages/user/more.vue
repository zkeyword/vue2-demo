<template>
    <section class="page-userSpouseList">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">客服电话</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell" @click="jump({title: '关于我们'})">
                    <div class="text">关于我们</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                    </span>
                </div>
                <div class="ui-cell" @click="jump({title: '隐私建议'})">
                    <div class="text">隐私建议</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                    </span>
                </div>
                <div class="ui-cell" @click="jump({title: '意见反馈'})">
                    <div class="text">意见反馈</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                    </span>
                </div>
                <div class="ui-cell" @click="jump({title: '公告信息'})">
                    <div class="text">公告信息</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                    </span>
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
                title: '更多'
            }
        },
        components: {
            ltHeader
        },
        mounted() {
            this.$nextTick(() => {
            })
        },
        methods: {
            ...mapActions([
                'postLogin'
            ]),
            jump(obj) {
                this.$router.push({ name: 'userPost', query: obj })
            }
        }
    }
</script>