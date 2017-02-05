<template>
    <section class="page-home">
        <header>
            <ul>
                <li @click="jump()">家族介绍</li>
                <li class="on">家族族谱</li>
            </ul>
        </header>
        <lt-footer :type="1"></lt-footer>
        <div class="lt-main">
            <img src="/static/index.jpg" alt="" width="100%">
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
                'postLogin'
            ]),
            jump() {
                this.$router.push({ name: 'homeInfo' })
            }
        }
    }
</script>