<template>
    <section class="page-forget page-signUp page-signUp2">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="form ui-form">
                <div class="ui-cell">
                    <span class="ui-label">第几代</span>
                    <input type="number" class="ui-input" placeholder="请用数字输入，如16" v-model="generations" maxlength="11" @blur="blur">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">辈   分</span>
                    <input type="text" class="ui-input" placeholder="您的辈分" v-model="hierarchies_name" maxlength="4">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">排   行</span>
                    <input type="number" class="ui-input" placeholder="请输入您的排行" v-model="rank" maxlength="11">
                </div>
                <div class="ui-cell" @click="showMenus(1)" v-if="isShowParent">
                    <span class="ui-label">主继承</span>
                    <input type="text" class="ui-input" placeholder="请选择您的主继承" v-model="inherit" disabled>
                    <i class="icon icon-right"></i>
                </div>
                <div class="ui-cell" @click="showMenus(2)" v-if="isShowParent">
                    <span class="ui-label">父亲姓名</span>
                    <input type="text" class="ui-input" placeholder="请选择您的父亲姓名" v-model="father_name" disabled>
                    <i class="icon icon-right"></i>
                </div>
                <div class="ui-cell" v-if="isShowParent">
                    <span class="ui-label">母亲姓名</span>
                    <input type="text" class="ui-input" placeholder="母亲姓名" v-model="mother_name" disabled>
                </div>
            </div>
            <div class="ui-btn max" v-bind:class="isNext" @click="register">注册</div>
        </div>
        <actionsheet v-model="isShow" :menus="menus" @on-click-menu="menusClick"></actionsheet>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { Actionsheet } from 'vux'
    export default {
        data() {
            return {
                title: '注册',
                token: '',
                family: '',
                generations: '',
                hierarchies_name: '',
                rank: '',
                inherit: '',
                inherit_type: '',
                father_name: '',
                father_id: '',
                mother_name: '',
                mother_id: '',
                isShow: false,
                type: '',
                menus: {},
                fatherData: {},
                fatherIdData: {},
                isShowParent: false
            }
        },
        components: {
            ltHeader,
            Actionsheet
        },
        computed: {
            isNext() {
                let isDisable = false
                if (!this.mobile || !/1[34578]{1}\d{9}$/.test(this.mobile) || !this.code || !this.password || !this.realname || !this.family_sn) {
                    isDisable = true
                }
                return {
                    disable: isDisable
                }
            }
        },
        mounted() {
            this.$nextTick(() => {
                let {family, token} = this.$route.query
                this.family = family
                this.token = token
            })
        },
        methods: {
            ...mapActions([
                'getParent',
                'getSpouseList',
                'postPerfectInfo'
            ]),
            showMenus(type) {
                this.type = type
                if (type === 1) {
                    this.menus = {
                        1: '父亲',
                        2: '母亲'
                    }
                } else if (type === 2) {
                    this.menus = this.fatherData
                }
                this.isShow = true
            },
            menusClick(key) {
                let self = this
                if (this.type === 1) {
                    this.inherit_type = key
                    this.inherit = this.menus[key]
                } else if (this.type === 2) {
                    this.father_name = this.menus[key]
                    this.father_id = this.fatherIdData[key]
                    this.getSpouseList({
                        params: {
                            token: this.token,
                            family_sn: this.family,
                            member_id: key
                        },
                        success(data) {
                            self.mother_name = data[0].name
                            self.mother_id = data[0].id
                        }
                    })
                }
            },
            register() {
                this.postPerfectInfo({
                    params: {
                        token: this.token,
                        family_sn: this.family,
                        generations: this.generations,
                        hierarchies_name: this.hierarchies_name,
                        rank: this.rank,
                        inherit: this.inherit,
                        inherit_type: this.inherit_type,
                        father_name: this.father_name,
                        father_id: this.father_id,
                        mother_name: this.mother_name,
                        mother_id: this.mother_id
                    }
                })
            },
            blur() {
                let self = this
                this.getParent({
                    params: {
                        token: this.token,
                        family_sn: this.family,
                        generations: this.generations
                    },
                    success(data) {
                        for (let i = 0, len = data.length; i < len; i++) {
                            self.fatherData[`${data[i].member_id}`] = data[i].name
                            self.fatherIdData[`${data[i].member_id}`] = data[i].id
                        }
                        self.isShowParent = true
                    }
                })
            }
        }
    }
</script>