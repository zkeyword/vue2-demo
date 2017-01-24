<template>
    <section class="page-forget page-signUp page-signUp2">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="form ui-form">
                <div class="ui-cell">
                    <span class="ui-label">第几代</span>
                    <input type="number" class="ui-input" placeholder="请用数字输入，如16" v-model="generations" maxlength="11">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">辈   分</span>
                    <input type="text" class="ui-input" placeholder="您的辈分" v-model="hierarchies_name" maxlength="4">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">排   行</span>
                    <input type="number" class="ui-input" placeholder="请输入您的排行" v-model="rank" maxlength="11">
                </div>
                <div class="ui-cell">
                    <span class="ui-label">主继承</span>
                    <input type="text" class="ui-input" placeholder="请选择您的主继承" v-model="inherit" @click="showMenus(1)">
                    <i class="icon icon-right" @click="showMenus(1)"></i>
                </div>
                <div class="ui-cell">
                    <span class="ui-label">父亲姓名</span>
                    <input type="text" class="ui-input" placeholder="请选择您的父亲姓名" v-model="father_name" @click="showMenus(2)">
                    <i class="icon icon-right" @click="showMenus(2)"></i>
                </div>
                <div class="ui-cell">
                    <span class="ui-label">母亲姓名</span>
                    <input type="text" class="ui-input" placeholder="母亲姓名" v-model="mother_name">
                </div>
            </div>
            <div class="ui-btn max" @click="register">注册</div>
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
                motherData: {}
            }
        },
        components: {
            ltHeader,
            Actionsheet
        },
        mounted() {
            this.$nextTick(() => {
                let self = this
                let {family_sn} = this.$route.query
                this.getParent({
                    params: {
                        generations: this.generations,
                        family_sn: family_sn
                    },
                    success(data) {
                        for (let i = 0, len = data.length; i < len; i++) {
                            self.fatherData[`${data[i].id}`] = data[i].name
                        }
                    }
                })
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
                    this.father_id = key
                    this.getSpouseList({
                        params: {
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
            }
        }
    }
</script>