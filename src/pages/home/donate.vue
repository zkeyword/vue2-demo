<template>
    <section class="page-homeDonate">
        <lt-header :title="title"></lt-header>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell multi">
                    <div class="title">{{nameType}}</div>
                    <div class="content">
                        俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发
                    </div>
                </div>
            </div>
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell multi">
                    <div class="title">{{nameType}}</div>
                    <div class="content">
                        俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发
                    </div>
                </div>
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
                nameType: ''
            }
        },
        components: {
            ltHeader
        },
        mounted() {
            let {title, type} = this.$route.query
            this.title = title
            if (type === 1) {
                this.nameType = '事迹'
            } else {
                this.nameType = '经历'
            }
        },
        methods: {
            ...mapActions([
                'postLogin'
            ])
        }
    }

</script>