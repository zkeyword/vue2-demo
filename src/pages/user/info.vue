<template>
    <section class="page-userInfo">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell" @click="submitInfo({title: '姓名', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value"></span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '账号', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">账号</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="modifyPassword">
                    <div class="text">密码</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenu(1)">
                    <div class="text">性别</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '籍贯', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">籍贯</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '编号', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">编号</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '旧编号', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">旧编号</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '手机号码', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">手机号码</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '身份证号', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">身份证号</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">出生日期</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '所在区域', type: '2', name: 'name', value: 'xxx'})">
                    <div class="text">所在区域</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
            </div>
            <div class="ui-block">
                <div class="ui-cell" @click="submitInfo({title: '家族标识', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">家族标识</div>
                    <span class="tag right">
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '家族名称', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">家族名称</div>
                    <span class="tag right">
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '始祖', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">始祖</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '第几世', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">第几世</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '辈分', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">辈分</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '排行', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">排行</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">婚姻状况</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">上门女婿</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '户主姓名', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">户主姓名</div>
                    <span class="tag right">
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">是否健在</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">去世时间</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '墓葬地址', type: '1', name: 'name', value: 'xxx'})">
                    <div class="text">墓葬地址</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">审核状态</div>
                    <span class="tag right">
                        <span class="value">待审核</span>
                    </span>
                </div>
            </div>
        </div>
        <actionsheet v-model="isShowMenus" :menus="menus" @on-click-menu="menusClick"></actionsheet>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapGetters, mapActions } from 'vuex'
    import { Actionsheet, Datetime } from 'vux'
    export default {
        data() {
            return {
                title: '个人资料',
                menus: {},
                isShowMenus: false
            }
        },
        components: {
            ltHeader,
            Actionsheet,
            Datetime
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
                'setUserForm',
                'showToast',
                'showLoading'
            ]),
            submitInfo(obj) {
                this.$router.push({ name: 'userForm', query: obj })
            },
            modifyPassword() {
                this.$router.push({ name: 'userPassword' })
            },
            showMenu(type) {
                if (type === 1) {
                    this.menus = {
                        1: '男',
                        2: '女',
                        3: '未知'
                    }
                }
                this.isShowMenus = true
            },
            menusClick() {
                // sd
            }
        }
    }
</script>