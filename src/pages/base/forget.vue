<template>
    <section class="page-forget">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="form ui-form">
                <div class="ui-cell">
                    <span class="ui-label">手机号码</span>
                    <input type="number" class="ui-input" placeholder="请注册手机号" v-model="mobile" maxlength="11">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">验证码</span>
                    <input type="number" class="ui-input" placeholder="4位短信验证码" v-model="code" maxlength="6">
                    <span class="ui-btn general" @click="getCode" v-bind:class="isGetCode">
                        {{codeText}}
                        <em v-show="codeTime>0&&!isRequestCode">({{codeTime}}s)</em>
                    </span>
                </div>
            </div>
            <div class="ui-btn max" v-bind:class="isNext" @click="verifySms">下一步</div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: '找回密码',
                mobile: '',
                code: '',
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
                if (!this.mobile || !/1[34578]{1}\d{9}$/.test(this.mobile) || !this.code) {
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
            this.$nextTick(() => {
                // console.log(1)
            })
        },
        methods: {
            ...mapActions([
                'postSendSms',
                'postVerifySms'
            ]),
            getCode() {
                if (!this.isRequestCode) return
                if (!this.mobile) return
                let timer = setInterval(() => {
                    --this.codeTime
                    if (this.codeTime === 0) {
                        this.codeTime = 0
                        this.isRequestCode = true
                        clearInterval(timer)
                    }
                }, 1000)
                this.isRequestCode = false
                this.codeText = '重新获取'
                this.postSendSms({
                    params: {
                        'mobile': this.mobile
                    }
                })
            },
            verifySms() {
                let self = this
                self.postVerifySms({
                    params: {
                        code: self.code,
                        mobile: self.mobile
                    },
                    success() {
                        self.$router.push({ name: 'reset', query: { code: self.code, mobile: self.mobile } })
                    }
                })
            }
        }
    }
</script>