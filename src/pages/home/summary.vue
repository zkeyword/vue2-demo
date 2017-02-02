<template>
    <section class="page-home">
        <header>
            <ul>
                <li class="on">家族介绍</li>
                <li @click="jump()">家族族谱</li>
            </ul>
        </header>
        <div class="lt-main">
            家族图集
            
        </div>
    </section>
</template>
<script>
    import { ltFooter } from 'components'
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
            ltFooter
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
                this.$router.push({ name: 'home' })
            }
        }
    }
</script>