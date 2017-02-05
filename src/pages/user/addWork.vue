<template>
    <section class="page-userSpouseList">
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
                    <div class="text">就职单位</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">就职职位</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">备注</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    import { Datetime, Actionsheet } from 'vux'
    export default {
        data() {
            return {
                title: '工作经历',
                birthday: ''
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
            change() {}
        }
    }
</script>