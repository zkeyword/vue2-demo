<template>
    <section>
        <lt-header :title="title" :showBtn="true" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">住宅类型</div>
                    <input type="text" class="tag ui-input" v-model="address_category_name" placeholder="请填写住址类型">
                </div>
                <div class="ui-cell">
                    <div class="text">所做国家</div>
                </div>
                <div class="ui-cell">
                    <div class="text">所在区域</div>
                    <x-address @on-hide="logHide" @on-show="logShow" v-model="areaValue" title="" :list="addressData" placeholder="请选择地址"></x-address>
                    <!--<input type="text" class="tag ui-input" v-model="regionDetail" placeholder="国家-省-市-区">-->
                </div>
                <div class="ui-cell">
                    <div class="text">详细地址</div>
                    <input type="text" class="tag ui-input" v-model="address" placeholder="请填写详细地址">
                </div>
                <div class="ui-cell">
                    <div class="text">备注</div>
                    <input type="text" class="tag ui-input" v-model="remark" placeholder="请填写备注信息">
                </div>
            </div>
        </div>
        {{this.areaValue}}
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { XAddress } from 'vux'
    export default {
        data() {
            return {
                title: '',
                id: '',
                address_category_id: '',
                address_category_name: '',
                // country_id: '',
                // province_id: '',
                // city_id: '',
                // district_id: '',
                address: '',
                remark: '',
                areaValue: [],
                addressData: [],
                countryData: []
            }
        },
        components: {
            ltHeader,
            XAddress
        },
        mounted() {
            let {title, id, addressCategoryId, addressCategoryName, countryId, provinceId, cityId, districtId, address, remark} = this.$route.query
            this.title = title
            this.id = id
            this.address_category_id = addressCategoryId
            this.address_category_name = addressCategoryName
            // this.country_id = countryId
            // this.province_id = provinceId
            // this.city_id = cityId
            // this.district_id = districtId
            this.address = address
            this.remark = remark
            this.getZoneData()
            if (countryId) {
                this.areaValue.push(countryId)
                this.areaValue.push(provinceId)
                this.areaValue.push(cityId)
                this.areaValue.push(districtId)
            }
        },
        methods: {
            ...mapActions([
                'showToast',
                'saveAddress',
                'getZone'
            ]),
            onHaddle() {
                if (!this.areaValue.length) return this.showToast({ isShow: true, text: '所在区域不能为空!' })
                if (!this.address) return this.showToast({ isShow: true, text: '详细地址不能为空!' })
                if (!this.address_category_id) return this.showToast({ isShow: true, text: '住宅类型不能为空!' })
                let countryId = this.areaValue[0]
                let provinceId = this.areaValue[1]
                let cityId = this.areaValue[2]
                let districtId = this.areaValue[3]

                this.saveAddress({
                    self: this,
                    params: {
                        id: this.id,
                        address_category_id: this.address_category_id,
                        // country_id: this.country_id,
                        // province_id: this.province_id,
                        // city_id: this.city_id,
                        // district_id: this.district_id,
                        country_id: countryId,
                        province_id: provinceId,
                        city_id: cityId,
                        district_id: districtId,
                        address: this.address,
                        remark: this.remark
                    },
                    success(data) {
                        this.$router.back()
                    }
                })
            },
            getZoneData(id) {
                this.getZone({
                    self: this,
                    params: {
                        zone_id: id
                    },
                    success(data) {
                        if (id !== undefined) {
                            this.addressData = data
                        } else {
                            this.countryData = data
                        }
                    }
                })
            },
            logHide() { },
            logShow() { }
        }
    }

</script>