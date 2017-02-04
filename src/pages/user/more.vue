<template>
    <section class="page-userSpouseList">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">客服电话</div>
                </div>
                <div class="ui-cell">
                    <div class="text">关于我们</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">隐私建议</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">意见反馈</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">公告信息</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapGetters, mapActions } from 'vuex'
    // mapState
    export default {
        data() {
            return {
                title: '更多',
                name: '',
                type: '',
                value: '',
                isShowInputClose: false,
                isShowHeaderBtn: true
            }
        },
        components: {
            ltHeader
        },
        computed: {
            ...mapGetters([
                'userFormName',
                'userFormValue',
                'userFormType',
                'userFormTitle'
            ])
        },
        watch: {
            value() {
                this.showInputClose()
            }
        },
        mounted() {
            this.$nextTick(() => {
                let {type, name, value} = this.$route.query
                this.name = name
                this.type = type
                this.value = value
            })
        },
        methods: {
            ...mapActions([
                'postLogin',
                'showToast',
                'showLoading'
            ]),
            showInputClose() {
                if (this.value) {
                    this.isShowInputClose = true
                }
            },
            hideInputClose() {
                this.isShowInputClose = false
                this.value = ''
            },
            onHaddle() {
                // console.log(1212)
            }
        }
    }
</script>