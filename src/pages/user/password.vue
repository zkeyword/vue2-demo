<template>
    <section class="page-userPassword">
        <lt-header :title="title" :showBtn="isShowHeaderBtn" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">账号</div>
                    <span class="tag left">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">当前密码</div>
                    <span class="tag left">
                        <input type="text" name="" id="" placeholder="请验证当前密码">
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">新密码</div>
                    <span class="tag left">
                        <input type="text" name="" id="" placeholder="请输入6-16位新密码">
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">重复新密码</div>
                    <span class="tag left">
                        <input type="text" name="" id="" placeholder="请再次输入">
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
                title: '',
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
                let {title, type, name, value} = this.$route.query
                this.title = title
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