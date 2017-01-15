<template>
    <div style="height: 100%">
        <router-view></router-view>
        <toast v-model="isShowToast" type="text">{{toastText}}</toast>
        <loading v-model="isShowLoading" :text="loadingText"></loading>
    </div>
</template>
<script>
    import { Toast, Loading } from 'vux'
    import { mapGetters } from 'vuex'
    export default {
        name: 'app',
        data() {
            return {
                // isShowToast: true
            }
        },
        computed: mapGetters([
            'isShowToast',
            'toastText',
            'isShowLoading',
            'loadingText'
        ]),
        components: {
            Toast,
            Loading
        }
    }
</script>