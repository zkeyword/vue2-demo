<template>
    <section class="page-userAddMain">
        <lt-header :title="title" :showBtn="true" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <datetime v-model="birthday" :min-year=1900 @on-change="change" title="" confirm-text="完成" cancel-text="取消">
                        <div class="text">开始时间</div>
                        <span class="tag right">
                            <i class="icon icon-right"></i>
                            <span class="value">{{birthday}}</span>
                        </span>
                    </datetime>
                </div>
                <div class="ui-cell">
                    <datetime v-model="birthday" :min-year=1900 @on-change="change" title="" confirm-text="完成" cancel-text="取消">
                        <div class="text">结束时间</div>
                        <span class="tag right">
                            <i class="icon icon-right"></i>
                            <span class="value">{{birthday}}</span>
                        </span>
                    </datetime>
                </div>
                <div class="ui-cell">
                    <div class="text">经历介绍</div>
                    <input type="text" class="tag ui-input" v-model="name" placeholder="请经历介绍">
                </div>
                <div class="ui-cell">
                    <datetime v-model="birthday" :min-year=1900 @on-change="change" title="" confirm-text="完成" cancel-text="取消">
                        <div class="text">创建日期</div>
                        <span class="tag right">
                            <i class="icon icon-right"></i>
                            <span class="value">{{birthday}}</span>
                        </span>
                    </datetime>
                </div>
                <div class="ui-cell">
                    <div class="text">备注</div>
                    <input type="text" class="tag ui-input" v-model="name" placeholder="请备注">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { Datetime } from 'vux'
    export default {
        data() {
            return {
                title: '主要经历',
                birthday: '',
                name: ''
            }
        },
        components: {
            ltHeader,
            Datetime
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
            change() {}
        }
    }
</script>