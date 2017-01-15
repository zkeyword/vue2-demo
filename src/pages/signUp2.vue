<template>
    <section class="page-forget page-signUp page-signUp2">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="form ui-form">
                <div class="ui-cell">
                    <span class="ui-label">第几代</span>
                    <input type="number" class="ui-input" placeholder="请用数字输入，如16" v-model="mobile" maxlength="11">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">辈   分</span>
                    <input type="number" class="ui-input" placeholder="您的辈分" v-model="mobile" maxlength="11">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">排   行</span>
                    <input type="number" class="ui-input" placeholder="请输入您的排行" v-model="mobile" maxlength="11">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">主继承</span>
                    <input type="number" class="ui-input" placeholder="请选择您的主继承" v-model="code" maxlength="6">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">父亲姓名</span>
                    <input type="number" class="ui-input" placeholder="请选择您的父亲姓名" v-model="mobile" maxlength="11">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">母亲姓名</span>
                    <input type="number" class="ui-input" placeholder="母亲姓名" v-model="mobile" maxlength="11">
                </div>
            </div>
            <div class="ui-btn max" @click="login">注册</div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from '../components/'
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
            ltHeader
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
            login() {
                if (!this.mobile) return
                if (!this.password) return
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