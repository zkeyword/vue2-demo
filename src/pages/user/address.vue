<template>
    <section class="page-userSpouseList page-userAddress">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '新增地址'})">新增地址</footer>
        <div class="lt-main">
            <div class="ui-block" v-for="item in list">
                <div class="ui-cell">
                    <div class="text">住址类型</div>
                    <span class="tag right">
                        <span class="value">{{item.category.name}}</span>
                    </span>
                </div>
                <div class="ui-cell multi">
                    <div class="content">{{item.region_name.join('')}}{{item.address}}</div>
                </div>
                <div class="ui-cell multi">
                    <div class="title">备注</div>
                    <div class="content">{{item.remark}}</div>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn left">
                        <span class="on" v-if="item.is_default"><i class="icon icon-selected"></i>默认地址</span>
                        <span @click="setDefalut(item.id)" v-else><i class="icon icon-select"></i>设为默认</span>
                    </div>
                    <div class="iconBtn">
                        <span @click="jump({
                            title: '编辑地址',
                            id: item.id, 
                            addressCategoryId: item.category.id,
                            addressCategoryName: item.category.name,
                            countryId: item.country_id,
                            provinceId: item.province_id,
                            cityId: item.city_id,
                            districtId: item.district_id,
                            address: item.address,
                            remark: item.remark
                        })">
                            <i class="icon icon-bianji"></i>编辑
                        </span>
                        <span @click="del(item.id)"><i class="icon icon-del"></i>删除</span>
                    </div>
                </div>
            </div>
            <div class="noData" v-if="!list.length">暂无相关信息，请添加！</div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: '主要地址',
                list: []
            }
        },
        components: {
            ltHeader
        },
        mounted() {
            this.getList()
        },
        methods: {
            ...mapActions([
                'getAddressList',
                'setDefalutAddress'
            ]),
            setDefalut(id) {
                this.setDefalutAddress({
                    self: this,
                    params: {
                        id
                    },
                    success(data) {
                        this.getList()
                    }
                })
            },
            getList() {
                this.getAddressList({
                    self: this,
                    success(data) {
                        this.list = data
                    }
                })
            },
            jump(obj) {
                this.$router.push({ name: 'userAddAddress', query: obj })
            },
            del() { }
        }
    }

</script>