<template>
    <section class="page-userInfo">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell" @click="submitInfo({title: '姓名', type: '1', name: 'realname', value: data.realname})">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.realname}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">账号</div>
                    <span class="tag right">
                        <span class="value">{{data.username}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="modifyPassword">
                    <div class="text">密码</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value"></span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenu('sex')">
                    <div class="text">性别</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.sex === 1 ? '男' : '女'}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">籍贯</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">xxx</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">编号</div>
                    <span class="tag right">
                        <span class="value">{{data.sn}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">旧编号</div>
                    <span class="tag right">
                        <span class="value">{{data.old_sn}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">手机号码</div>
                    <span class="tag right">
                        <span class="value">{{data.mobile}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '身份证号', type: '1', name: 'idno', value: data.idno})">
                    <div class="text">身份证号</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.idno}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">出生日期</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.birthday}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '所在区域', type: '2', name: 'name', value: 'xxx'})">
                    <div class="text">所在区域</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data}}</span>
                    </span>
                </div>
            </div>
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">家族标识</div>
                    <span class="tag right">
                        <span class="value">{{data.family_sn}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">家族名称</div>
                    <span class="tag right">
                        <span class="value">{{data.family_name}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">始祖</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.family_name}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '第几世', type: '1', name: 'generations', value: data.generations})">
                    <div class="text">第几世</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.generations}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '辈分', type: '1', name: 'hierarchies_name', value: data.hierarchies_name})">
                    <div class="text">辈分</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.hierarchies_name}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="submitInfo({title: '排行', type: '1', name: 'rank', value: 'data.rank'})">
                    <div class="text">排行</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.rank}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenu('marital_status')">
                    <div class="text">婚姻状况</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{marital}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenu('son_in_law')">
                    <div class="text">上门女婿</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.son_in_law === 0 ? '否' : '是'}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">户主姓名</div>
                    <span class="tag right">
                        <span class="value">{{data.huzhu}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">是否健在</div>
                    <span class="tag right">
                        <span class="value">{{data.living === 0 ? '否' : '是'}}</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">审核状态</div>
                    <span class="tag right">
                        <span class="value">{{audit}}</span>
                    </span>
                </div>
            </div>
        </div>
        <actionsheet v-model="isShowMenus" :menus="menus" @on-click-menu="menusClick"></actionsheet>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { Actionsheet, Datetime } from 'vux'
    export default {
        data() {
            return {
                title: '个人资料',
                menus: {},
                isShowMenus: false,
                data: {},
                name: ''
            }
        },
        components: {
            ltHeader,
            Actionsheet,
            Datetime
        },
        mounted() {
            this.getData()
        },
        computed: {
            marital() {
                if (this.data.marital_status === 0) return '未设置'
                if (this.data.marital_status === 1) return '已婚'
                if (this.data.marital_status === 2) return '未婚'
                if (this.data.marital_status === 3) return '离异'
                if (this.data.marital_status === 4) return '丧偶'
            },
            audit() {
                if (this.data.audit_status === 1) return '待审核'
                if (this.data.audit_status === 2) return '审核通过'
                if (this.data.audit_status === 3) return '审核不通过'
            }
        },
        methods: {
            ...mapActions([
                'getMemberInfo',
                'updateInfo'
            ]),
            getData() {
                this.getMemberInfo({
                    self: this,
                    success(data) {
                        this.data = data
                    }
                })
            },
            submitInfo(obj) {
                this.$router.push({ name: 'userForm', query: obj })
            },
            modifyPassword() {
                this.$router.push({ name: 'userPassword', query: {username: this.data.username} })
            },
            showMenu(type) {
                if (type === 'sex') {
                    this.menus = {
                        1: '男',
                        2: '女'
                    }
                } else if (type === 'marital_status') {
                    this.menus = {
                        1: '已婚',
                        2: '未婚',
                        3: '离异',
                        4: '丧偶'
                    }
                } else {
                    this.menus = {
                        0: '否',
                        1: '是'
                    }
                }
                this.isShowMenus = true
                this.name = type
            },
            menusClick(key) {
                let params = {}
                params[this.name] = Number(key)
                this.data[this.name] = Number(key)
                this.updateInfo({
                    self: this,
                    params,
                    success() {
                    }
                })
            }
        }
    }

</script>