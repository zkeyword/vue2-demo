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
                    <input type="text" class="ui-input" placeholder="您的辈分" v-model="mobile" maxlength="4">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">排   行</span>
                    <input type="text" class="ui-input" placeholder="请输入您的排行" v-model="mobile" maxlength="11">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">主继承</span>
                    <input type="text" class="ui-input" placeholder="请选择您的主继承" v-model="code" @click="showMenus(1)">
                    <i class="icon icon-right" @click="showMenus(1)"></i>
                </div>
                <div class="ui-cell">
                    <span class="ui-label">父亲姓名</span>
                    <input type="text" class="ui-input" placeholder="请选择您的父亲姓名" v-model="mobile" @click="showMenus(2)">
                    <i class="icon icon-right" @click="showMenus(2)"></i>
                </div>
                <div class="ui-cell">
                    <span class="ui-label">母亲姓名</span>
                    <input type="text" class="ui-input" placeholder="母亲姓名" v-model="mobile" @click="showMenus(3)">
                    <i class="icon icon-right" @click="showMenus(3)"></i>
                </div>
            </div>
            <div class="ui-btn max">注册</div>
        </div>
        <actionsheet v-model="isShow" :menus="menus" @on-click-menu="menusClick"></actionsheet>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapGetters, mapActions } from 'vuex'
    import { Actionsheet } from 'vux'
    export default {
        data() {
            return {
                title: '找回密码',
                mobile: '',
                code: '',
                isRequestCode: true,
                codeText: '发送验证码',
                codeTime: 60,
                isShow: false,
                menus: {},
                fatherData: [],
                motherData: []
            }
        },
        components: {
            ltHeader,
            Actionsheet
        },
        computed: {
            ...mapGetters([
                'isLogin'
            ])
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
            showMenus(type) {
                if (type === 1) {
                    this.menus = {
                        1: '父亲',
                        2: '母亲'
                    }
                } else if (type === 2) {
                    this.menus = {
                        1: 'Take Photo',
                        2: 'Choose from photos',
                        3: 'Choose from photos'
                    }
                } else if (type === 3) {
                    this.menus = {
                        1: 'Take Photo'
                    }
                }
                this.isShow = true
            },
            menusClick(key) {
                console.log(key)
            }
        }
    }
</script>