<template>
    <section>
        <lt-header :title="title" :showBtn="true" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">住宅类型</div>
                    <input type="text" class="tag ui-input" v-model="name" placeholder="请填写住址类型">
                </div>
                <div class="ui-cell">
                    <div class="text">所在区域</div>
                    <input type="text" class="tag ui-input" v-model="name" placeholder="国家-省-市-区">
                </div>
                <div class="ui-cell">
                    <div class="text">详细地址</div>
                    <input type="text" class="tag ui-input" v-model="name" placeholder="请填写详细地址">
                </div>
                <div class="ui-cell">
                    <div class="text">备注</div>
                    <input type="text" class="tag ui-input" v-model="name" placeholder="请填写备注信息">
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: '新增地址',
                name: ''
            }
        },
        components: {
            ltHeader
        },
        methods: {
            ...mapActions([
                'postLogin'
            ])
        }
    }
</script>