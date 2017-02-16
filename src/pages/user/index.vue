<template>
    <section class="page-userIndex">
        <lt-footer :type="3" v-if="isUserIndex"></lt-footer>
        <lt-header :title="title" v-else></lt-header>
        <div class="lt-main">
            <header class="header">
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
                <div class="ui-cell" @click="jump('userParent')" v-if="isUserIndex">
                    <span class="tag"><i class="icon icon-user"></i></span>
                    <div class="text">父母信息</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userChildren')" v-if="isUserIndex">
                    <span class="tag"><i class="icon icon-xinxi"></i></span>
                    <div class="text">儿女信息</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userAddress')">
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
                <div class="ui-cell" @click="jump('userHouseholds')" v-if="isUserIndex">
                    <span class="tag"><i class="icon icon-list"></i></span>
                    <div class="text">户主户口</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
                <div class="ui-cell" @click="jump('userMore')" v-if="isUserIndex">
                    <span class="tag"><i class="icon icon-more"></i></span>
                    <div class="text">更多</div>
                    <span class="tag right"><i class="icon icon-right"></i></span>
                </div>
            </div>
            <div class="ui-block" v-if="isUserIndex">
                <div class="ui-cell" @click="logout">
                    <div class="logout">退出登录</div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { ltHeader, ltFooter } from 'components'
    import { delCookie } from 'utils/cookie'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: '查看详细',
                isUserIndex: true,
                userId: undefined,
                generations: '',
                familySn: ''
            }
        },
        components: {
            ltHeader,
            ltFooter
        },
        mounted() {
            let {userId} = this.$route.query
            this.isUserIndex = userId === undefined
            this.getMemberInfo({
                self: this,
                success(data) {
                    this.userId = data.id
                    this.familySn = data.family_sn
                    this.generations = data.generations
                }
            })
        },
        methods: {
            ...mapActions([
                'getMemberInfo'
            ]),
            logout() {
                delCookie('isLogin')
                this.$router.push({ name: 'signIn' })
            },
            jump(name) {
                if (this.userId) {
                    this.$router.push({ name: name, query: { userId: this.userId, familySn: this.familySn, generations: this.generations } })
                }
            }
        }
    }

</script>