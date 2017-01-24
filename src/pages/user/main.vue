<template>
    <section class="page-userSpouseList">
        <lt-header :title="title" :showBtn="isShowHeaderBtn" @on-haddle="onHaddle"></lt-header>
        <footer>主要经历</footer>
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
                    <div class="text">经历介绍</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">创建日期</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">备注</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn">
                        <span><i class="icon icon-bianji"></i>编辑</span>
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
    import { mapGetters, mapActions } from 'vuex'
    // mapState
    export default {
        data() {
            return {
                title: '主要经历',
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