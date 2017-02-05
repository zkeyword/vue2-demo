<template>
    <section class="page-homePost">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <ul class="imgList fn-clear" v-if="type === 1">
                <li><img src="/static/index.jpg" alt="" width="100%"></li>
                <li><img src="/static/index.jpg" alt="" width="100%"></li>
                <li><img src="/static/index.jpg" alt="" width="100%"></li>
                <li><img src="/static/index.jpg" alt="" width="100%"></li>
                <li><img src="/static/index.jpg" alt="" width="100%"></li>
                <li><img src="/static/index.jpg" alt="" width="100%"></li>
                <li><img src="/static/index.jpg" alt="" width="100%"></li>
                <li><img src="/static/index.jpg" alt="" width="100%"></li>
            </ul>
            <div class="ui-block" v-else>
                <div class="ui-text">{{detail}}</div>
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
                detail: '',
                type: 0
            }
        },
        components: {
            ltHeader
        },
        mounted() {
            let {title, type} = this.$route.query
            this.title = title
            this.type = type
        },
        methods: {
            ...mapActions([
                'postLogin'
            ])
        }
    }
</script>