<template>
    <section class="page-userSpouseList page-userParent">
        <lt-header :title="title" :showBtn="true" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">排行</div>
                    <input type="text" class="tag ui-input" v-model="data.rank" placeholder="请填写排行">
                </div>
                <div class="ui-cell" @click="showMenus(4)">
                    <div class="text">类型</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.kind | kind}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenus(1)">
                    <div class="text">主继承</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.inherit_type | inheritName}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenus(2)" v-if="data.inherit_type == 1 && isShowParent">
                    <div class="text">父亲姓名</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.father_name}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenus(3)" v-if="data.inherit_type == 1 && isShowParent && isShowSpouse">
                    <div class="text">母亲姓名</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.mother_name}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenus(2)" v-if="data.inherit_type == 2 && isShowParent">
                    <div class="text">母亲姓名</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">{{data.mother_name}}</span>
                    </span>
                </div>
                <div class="ui-cell" @click="showMenus(3)" v-if="data.inherit_type == 2 && isShowParent && isShowSpouse">
                    <div class="text">父亲姓名</div>
                    <span class="tag right">
                        <span class="value">{{data.father_name}}</span>
                    </span>
                </div>
            </div>
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
                title: '父母信息',
                data: {
                    id: '',
                    rank: '',
                    inherit: '',
                    inherit_type: '',
                    father_name: '',
                    parent_id: '',
                    mother_name: '',
                    parent_spouse_id: ''
                },
                isShow: false,
                type: '',
                menus: {},
                parentData: {},
                parentIdData: {},
                spouseData: {},
                isShowParent: false,
                isShowSpouse: false
            }
        },
        components: {
            ltHeader,
            Actionsheet
        },
        mounted() {
            let self = this
            let {title, generations, familySn, id, rank, inheritType, parentId, parentSpouseId, parentSpouseName, parentName, kind} = this.$route.query
            this.title = title
            this.data.id = id
            this.data.rank = rank
            this.data.inherit_type = inheritType
            this.data.parent_id = parentId
            this.data.parent_spouse_id = parentSpouseId
            this.data.father_name = parentName
            this.data.mother_name = parentSpouseName
            this.data.kind = kind
            if (this.data.id) {
                this.isShowSpouse = true
                this.getSpouse(parentSpouseId)
            }
            this.getParent({
                params: {
                    family_sn: familySn,
                    generations: generations,
                    kind: 1,
                    gap_num: 1
                },
                success(data) {
                    for (let i = 0, len = data.length; i < len; i++) {
                        self.parentData[`${data[i].member_id}`] = data[i].name
                        self.parentIdData[`${data[i].member_id}`] = data[i].member_id
                        self.isShowParent = true
                    }
                }
            })
        },
        methods: {
            ...mapActions([
                'getParent',
                'getSpouseList',
                'saveParents'
            ]),
            getSpouse(memberId) {
                this.getSpouseList({
                    self: this,
                    params: {
                        member_id: memberId
                    },
                    success(data) {
                        for (let i = 0, len = data.length; i < len; i++) {
                            this.spouseData[`${data[i].id}`] = data[i].name
                        }
                        this.data.mother_name = data[0].name
                        this.data.parent_spouse_id = data[0].id
                        this.isShowSpouse = true
                    }
                })
            },
            showMenus(type) {
                this.type = type
                if (type === 1) {
                    this.menus = {
                        1: '父亲',
                        2: '母亲'
                    }
                } else if (type === 2) {
                    this.menus = this.parentData
                } else if (type === 3) {
                    this.menus = this.spouseData
                } else {
                    this.menus = {
                        1: '亲生父母',
                        2: '领养父母',
                        3: '过继父母',
                        4: '双承出承父母',
                        5: '双承入承父母'
                    }
                }
                this.isShow = true
            },
            menusClick(key) {
                if (this.type === 1) {
                    this.data.inherit_type = key
                } else if (this.type === 2) {
                    this.data.father_name = this.menus[key]
                    this.data.parent_id = this.parentIdData[key]
                    this.getSpouse(key)
                } else if (this.type === 3) {
                    this.data.mother_name = this.menus[key]
                    this.data.parent_spouse_id = key
                } else {
                    this.data.kind = key
                }
            },
            onHaddle() {
                this.saveParents({
                    self: this,
                    params: this.data,
                    success(data) {
                        this.showToast({ isShow: true, text: `操作成功` })
                        this.$router.back()
                    }
                })
            }
        }
    }

</script>