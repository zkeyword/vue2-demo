<template>
    <section class="page-userPost">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                asdfasdf
            </div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    export default {
        data() {
            return {
                title: ''
            }
        },
        components: {
            ltHeader
        },
        mounted() {
            let {title} = this.$route.query
            this.title = title
        }
    }
</script>
