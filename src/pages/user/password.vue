<template>
    <section class="page-userPassword">
        <lt-header :title="title" :showBtn="isShowHeaderBtn" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">账号</div>
                    <span class="tag left">
                        <span class="value">{{username}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">当前密码</div>
                    <span class="tag left">
                        <input type="text" v-model="data.ori_password" placeholder="请验证当前密码">
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">新密码</div>
                    <span class="tag left">
                        <input type="text" v-model="data.password" placeholder="请输入6-16位新密码">
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">重复新密码</div>
                    <span class="tag left">
                        <input type="text" v-model="data.re_password" placeholder="请再次输入">
                    </span>
                </div>
            </div> 
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    // mapState
    export default {
        data() {
            return {
                title: '修改密码',
                username: '',
                data: {},
                isShowInputClose: false,
                isShowHeaderBtn: true
            }
        },
        components: {
            ltHeader
        },
        watch: {
            value() {
                this.showInputClose()
            }
        },
        mounted() {
            let {username} = this.$route.query
            this.username = username
        },
        methods: {
            ...mapActions([
                'updatePassword',
                'showToast'
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
                if (!this.data.ori_password) return this.showToast({ isShow: true, text: `原密码不能为空!` })
                if (!this.data.password) return this.showToast({ isShow: true, text: `新密码不能为空!` })
                if (this.data.password.length < 6 || this.data.password.length > 16) return this.showToast({ isShow: true, text: `密码的字符长度不正确` })
                if (!this.data.re_password) return this.showToast({ isShow: true, text: `重复不能为空!` })
                if (this.data.re_password !== this.data.password) return this.showToast({ isShow: true, text: `两次输入不一致!` })
                this.updatePassword({
                    params: this.data,
                    success() {
                        this.$router.back()
                    }
                })
            }
        }
    }
</script>