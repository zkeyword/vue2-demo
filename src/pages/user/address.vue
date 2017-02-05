<template>
    <section class="page-userSpouseList page-userAddress">
        <lt-header :title="title"></lt-header>
        <footer @click="jump({title: '主要地址'})">新增地址</footer>
        <div class="lt-main">
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">姓名</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell multi">
                    <div class="title">备注</div>
                    <div class="content">
                        俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发
                    </div>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn left">
                        <span @click="jump({title: '主要经历'})" class="on"><i class="icon icon-selected"></i>默认地址</span>
                    </div>
                    <div class="iconBtn">
                        <span @click="jump({title: '主要经历'})"><i class="icon icon-bianji"></i>编辑</span>
                        <span><i class="icon icon-del"></i>删除</span>
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
                    <div class="title">备注</div>
                    <div class="content">
                        俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发俺是打发打发
                    </div>
                </div>
                <div class="ui-cell">
                    <div class="iconBtn left">
                        <span @click="jump({title: '主要经历'})"><i class="icon icon-select"></i>设为默认</span>
                    </div>
                    <div class="iconBtn">
                        <span @click="jump({title: '主要经历'})"><i class="icon icon-bianji"></i>编辑</span>
                        <span><i class="icon icon-del"></i>删除</span>
                    </div>
                </div>
            </div>
            <div class="noData">暂无相关信息，请添加！</div>
        </div>
    </section>
</template>
<script>
    import { ltHeader } from 'components'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: '主要地址'
            }
        },
        components: {
            ltHeader
        },
        methods: {
            ...mapActions([
                'postLogin'
            ]),
            jump(obj) {
                this.$router.push({ name: 'userAddAddress', query: obj })
            },
            del() { }
        }
    }
</script>