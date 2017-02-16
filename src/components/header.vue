<template>
    <header class="lt-header">
        <span class="back" @click="goBack">
            <i class="icon icon-back"></i>
            返回
        </span>
        <h2 class="title">{{title}}</h2>
        <span class="btns">
            <em @click="onHaddle" v-if="showBtn">完成</em>
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
            showBtn: {
                type: Boolean,
                default: false
            }
        },
        methods: {
            goBack() {
                this.$router.back()
            },
            onHaddle() {
                this.$emit('on-haddle')
            }
        }
    }
</script>

<style>
</style>