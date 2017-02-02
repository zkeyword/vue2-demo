<template>
    <section class="page-homePost">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
               {{detail}}
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
                title: '',
                detail: ''
            }
        },
        components: {
            ltHeader
        },
        mounted() {
            this.$nextTick(() => {
                let {title, name} = this.$route.query
                this.title = title
                this.name = name
            })
        },
        methods: {
            ...mapActions([
                'postLogin'
            ])
        }
    }
</script>