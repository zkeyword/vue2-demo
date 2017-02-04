<template>
    <section class="page-forget page-reset">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="form ui-form">
                <div class="ui-cell">
                    <span class="ui-label">新密码</span>
                    <input type="number" class="ui-input" placeholder="请输入6-16新密码，区分大小写" v-model="password" maxlength="11">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">确认密码</span>
                    <input type="number" class="ui-input" placeholder="请再次输入密码" v-model="re_password" maxlength="6">
                </div>
            </div>
            <div class="ui-btn max" v-bind:class="isNext" @click="reset">提交</div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: '重置密码',
                mobile: '',
                code: '',
                password: '',
                re_password: '',
                isRequestCode: true,
                codeText: '发送验证码',
                codeTime: 60
            }
        },
        components: {
            ltHeader
        },
        computed: {
            isNext() {
                let isDisable = false
                if (this.password && this.password === this.re_password) {
                    isDisable = false
                } else {
                    isDisable = true
                }
                return {
                    disable: isDisable
                }
            },
            isGetCode() {
                let isDisable = true
                if (this.isRequestCode) {
                    isDisable = this.mobile === ''
                } else {
                    isDisable = true
                }
                return {
                    disable: isDisable
                }
            }
        },
        mounted() {
            let {mobile, code} = this.$route.query
            this.mobile = mobile
            this.code = code
        },
        methods: {
            ...mapActions([
                'postReset'
            ]),
            reset() {
                let self = this
                self.postReset({
                    self,
                    params: {
                        mobile: this.mobile,
                        code: this.code,
                        password: this.password,
                        re_password: this.re_password
                    }
                })
            }
        }
    }

</script>