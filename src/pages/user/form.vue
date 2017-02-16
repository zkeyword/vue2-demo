<template>
    <section class="page-userForm">
        <lt-header :title="title" :showBtn="isShowHeaderBtn" @on-haddle="onHaddle"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell" v-if="type === '1'">
                    <input type="text" class="ui-input" v-model="value" @click="showInputClose">
                    <i class="icon icon-inputClose" v-show="isShowInputClose" @click="hideInputClose"></i>
                </div>
                <div class="ui-cell" v-if="type === '2'">
                    <textarea class="ui-texterea" v-model="value"></textarea>
                </div>
            </div> 
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    // mapState
    export default {
        data() {
            return {
                title: '',
                name: '',
                type: '',
                value: '',
                isShowInputClose: false,
                isShowHeaderBtn: true
            }
        },
        components: {
            ltHeader
        },
        watch: {
            value() {
                this.showInputClose()
            }
        },
        mounted() {
            this.$nextTick(() => {
                let {title, type, name, value} = this.$route.query
                this.title = title
                this.name = name
                this.type = type
                this.value = value
            })
        },
        methods: {
            ...mapActions([
                'showToast',
                'updateInfo'
            ]),
            showInputClose() {
                if (this.value) {
                    this.isShowInputClose = true
                }
            },
            hideInputClose() {
                this.isShowInputClose = false
                this.value = ''
            },
            onHaddle() {
                if (!this.value) return this.showToast({ isShow: true, text: `${this.title}不能为空!` })
                let params = {}
                params[this.name] = this.value
                this.updateInfo({
                    self: this,
                    params,
                    success() {
                        this.showToast({ isShow: true, text: `操作成功` })
                        this.$router.back()
                    }
                })
            }
        }
    }
</script>