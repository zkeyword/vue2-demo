<template>
    <section class="page-userIndex">
        <lt-footer :type="3"></lt-footer>
        <div class="lt-main">
            <header>
                <div class="avatar">
                    <i class="icon icon-user2"></i>
                </div>
                <div class="info">
                    <div class="name">王大锤</div>
                    <div class="num">编号：95270036</div>
                </div>
                <div class="detail">
                    <router-link :to="{ name: 'userInfo' }">
                        个人资料
                        <i class="icon icon-right"></i>
                    </router-link>
                </div>
            </header>
            <div class="ui-block">
                <div class="ui-cell" @click="jump('userSpouseList')">
                    <span class="tag"><i class="icon icon-love"></i></span>
                    <div class="text">配偶信息</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userParent')">
                    <span class="tag"><i class="icon icon-user"></i></span>
                    <div class="text">父母信息</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userChildren')">
                    <span class="tag"><i class="icon icon-xinxi"></i></span>
                    <div class="text">儿女信息</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell">
                    <span class="tag"><i class="icon icon-dizhi"></i></span>
                    <div class="text">主要地址</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userLearning')">
                    <span class="tag"><i class="icon icon-xuexi"></i></span>
                    <div class="text">学习经历</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userWork')">
                    <span class="tag"><i class="icon icon-jingli"></i></span>
                    <div class="text">工作经历</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userMain')">
                    <span class="tag"><i class="icon icon-hongqi"></i></span>
                    <div class="text">主要经历</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userHouseholds')">
                    <span class="tag"><i class="icon icon-list"></i></span>
                    <div class="text">户主户口</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userMore')">
                    <span class="tag"><i class="icon icon-more"></i></span>
                    <div class="text">更多</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
            </div>
            <div class="ui-block">
                <div class="ui-cell" @click="logout">
                    <div class="logout">退出登录</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { ltFooter } from 'components'
    import { delCookie } from 'utils/cookie'
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
                delCookie('isLogin')
                this.$router.push({ name: 'signIn' })
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
            },
            jump(name) {
                this.$router.push({ name: name })
            }
        }
    }
</script>