<template>
    <section class="page-signIn">
        <div class="lt-main">
            <header>欢迎登录</header>
            <div class="form ui-form">
                <div class="ui-cell">
                    <input type="number" class="ui-input" placeholder="手机号" v-model="mobile" maxlength="11" @click="showInputClose">
                    <i class="icon icon-inputClose" v-show="isShowInputClose" @click="hideInputClose"></i>
                </div>
                <div class="ui-cell">
                    <input type="password" class="ui-input" placeholder="密码" v-model="password">
                </div>
            </div>
            <div class="link fn-clear">
                <router-link :to="{ name: 'forget' }">忘记密码</router-link>
                <router-link :to="{ name: 'signUp' }">账号注册</router-link>
            </div>
            <div class="ui-btn max" @click="login">登录</div>
            <footer>
                <div>技术支持</div>
                <div>厦门比朋软件科技有限公司</div>
            </footer>
        </div>
    </section>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex'
    export default {
        data() {
            return {
                btn: false,
                isShowInputClose: false,
                mobile: '',
                password: ''
            }
        },
        computed: mapGetters([
            'isLogin'
        ]),
        watch: {
            mobile() {
                this.showInputClose()
            }
        },
        mounted() {
            this.$nextTick(() => {
            })
        },
        methods: {
            ...mapActions([
                'postLogin'
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
            showInputClose() {
                if (this.mobile) {
                    this.isShowInputClose = true
                }
            },
            hideInputClose() {
                this.isShowInputClose = false
                this.mobile = ''
            }
        }
    }
</script>