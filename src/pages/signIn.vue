<template>
    <section>
        <lt-header></lt-header>
        <div class="lt-main">
            用户名 密码 登录     Clicked: {{ $store.state }} times, count is {{ evenOrOdd }}.
            <div>
                <span @click="add">++++++++++++++++++</span>
                <span @click="decrement">----------------</span>
            </div>
            <div>
                <span @click="increment">++++++++++++++++++</span>
                <span @click="decrement">----------------</span>
            </div>
        </div>
        <lt-footer></lt-footer>
    </section>
</template>
<script>
    import { ltHeader, ltFooter } from '../components/'
    import { mapGetters, mapActions } from 'vuex'
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
        computed: mapGetters([
            'evenOrOdd'
        ]),
        mounted() {
            this.$nextTick(() => {
                // console.log(1)
            })
        },
        methods: {
            ...mapActions([
                'increment',
                'decrement',
                'incrementIfOdd',
                'incrementAsync'
            ]),
            add() {
                // this.incrementIfOdd()
                this.incrementAsync({ 'xx': 1 })
            }
        }
    }
</script>