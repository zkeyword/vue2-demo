<template>
    <section class="page-userIndex">
        <lt-footer :type="1"></lt-footer>
        <div class="lt-main">
            index
        </div>
    </section>
</template>
<script>
    import { ltFooter } from 'components'
    import { mapGetters, mapActions } from 'vuex'
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
            ltFooter
        },
        computed: {
            ...mapGetters([
                'isLogin'
            ]),
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
                'postLogin',
                'showToast',
                'showLoading'
            ]),
            logout() {
                this.postLogin({
                    params: {
                        'mobile': this.mobile,
                        'password': this.password
                    },
                    error() {
                        console.log(12)
                    }
                })
            },
            getCode() {
                // this.showLoading({
                //    isShow: true,
                //    text: '请稍等~~'
                // })
                if (!this.isRequestCode) return
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
                this.showToast({
                    isShow: true,
                    text: 'xxx'
                })
            }
        }
    }
</script>