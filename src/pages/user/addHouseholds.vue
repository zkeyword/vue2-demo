<template>
    <section class="page-userAddHouseholds">
        <lt-header :title="title" :showBtn="true" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <input type="text" class="tag ui-input" v-model="name" placeholder="请填写姓名">
                </div>
                <div class="ui-cell" @click="showMenu">
                    <div class="text">性别</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{sex}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <datetime v-model="birthday" :min-year=1900 @on-change="change" title="" confirm-text="完成" cancel-text="取消">
                        <div class="text">出生年月</div>
                        <span class="tag right">
                            <i class="icon icon-right"></i>
                            <span class="value">{{birthday}}</span>
                        </span>
                    </datetime>
                </div>
            </div>
        </div>
        <actionsheet v-model="isShow" :menus="menus" @on-click-menu="menusClick"></actionsheet>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { Datetime, Actionsheet } from 'vux'
    export default {
        data() {
            return {
                title: '',
                birthday: '',
                sex: '',
                name: '',
                isShowInputClose: false,
                isShow: false,
                menus: {
                    1: '男',
                    2: '女'
                }
            }
        },
        components: {
            ltHeader,
            Datetime,
            Actionsheet
        },
        mounted() {
            this.$nextTick(() => {
                let {title} = this.$route.query
                this.title = title
            })
        },
        methods: {
            ...mapActions([
                'postLogin'
            ]),
            onHaddle() {
                // console.log(1212)
            },
            change() { },
            showMenu() {
                this.isShow = true
            },
            menusClick(key) {
                this.sex = this.menus[key]
            }
        }
    }

</script>