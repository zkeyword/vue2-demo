<template>
    <section>
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-text">家族简介</div>
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
                title: '家族简介'
            }
        },
        components: {
            ltHeader
        },
        mounted() {
            this.$nextTick(() => {
                // console.log(1)
            })
        },
        methods: {
            ...mapActions([
                'postLogin'
            ])
        }
    }
</script>