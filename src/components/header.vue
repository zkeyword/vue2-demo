<template>
    <header class="lt-header">
        <span class="back" @click="goBack">
            <i class="icon icon-back"></i>
            返回
        </span>
        <h2 class="title">{{title}}</h2>
        <span class="btns">
            <em v-for="item in btns">{{item}}</em>
        </span>
    </header>
</template>
<script>
    export default {
        data() {
            return {
                // route: '/'
            }
        },
        props: {
            showBack: {
                type: Boolean,
                default: true
            },
            title: {
                type: String,
                default: ''
            },
            btns: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            route() {
                return this.$route.path
            }
        },
        methods: {
            goBack() {
                this.$router.back()
            }
        }
    }
</script>

<style>
</style>