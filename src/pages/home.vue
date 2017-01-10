<template>
    <section>
        <lt-header></lt-header>
        <div class="lt-main">
            <div class="dialog">打开弹窗</div>
        </div>
        <lt-footer></lt-footer>
    </section>
</template>
<script>
    import { ltHeader, ltFooter } from '../components/'
    export default {
        data() {
            return {
                btn: false,
                form: {
                    id: '',
                    name: ''
                }
            }
        },
        components: {
            ltHeader,
            ltFooter
        },
        mounted() {
            this.$nextTick(() => {

            })
        },
        methods: {
            submit() {

            }
        }
    }
</script>