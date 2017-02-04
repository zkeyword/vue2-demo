<template>
    <div style="height: 100%">
        <router-view></router-view>
        <toast v-model="isShowToast" type="text" @on-hide="onHide">{{toastText}}</toast>
        <loading v-model="isShowLoading" :text="loadingText"></loading>
    </div>
</template>
<script>
    import { Toast, Loading } from 'vux'
    import { mapGetters, mapActions } from 'vuex'
    export default {
        name: 'app',
        computed: mapGetters([
            'isShowToast',
            'toastText',
            'isShowLoading',
            'loadingText'
        ]),
        components: {
            Toast,
            Loading
        },
        methods: {
            ...mapActions([
                'showToast'
            ]),
            onHide() {
                this.showToast({isShow: false})
            }
        }
    }
</script>
<style lang="stylus">
@import './assets/styles/index.styl';
</style>
