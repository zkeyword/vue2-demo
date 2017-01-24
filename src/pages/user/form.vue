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
    import { mapGetters, mapActions } from 'vuex'
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
        computed: {
            ...mapGetters([
                'userFormName',
                'userFormValue',
                'userFormType',
                'userFormTitle'
            ])
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
                'postLogin',
                'showToast',
                'showLoading'
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
                // console.log(1212)
            }
        }
    }
</script>