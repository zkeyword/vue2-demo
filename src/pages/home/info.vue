<template>
    <section class="page-home">
        <header>
            <ul>
                <li class="on">家族介绍</li>
                <li @click="jump({name:'home'})">家族族谱</li>
            </ul>
        </header>
        <div class="lt-main">
            <div class="ui-blockHeader">基本信息</div>
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">家族标识</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">家族名称</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">家族姓氏</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">起源年份</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">家族起源</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">祖先</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">世系数</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">总人数</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">总户数</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">健在人数</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">男性人数</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">女性人数</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell" @click="jump({name:'homePost', title: '家族图集', type: 1})">
                    <div class="text">家族图集</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell" @click="jump({name:'homePost', title: '家族简介', type: 2})">
                    <div class="text">家族简介</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell" @click="jump({name:'homePost', title: '家族详细', type: 3})">
                    <div class="text">家族详细</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
            </div>
            <div class="ui-blockHeader">辈分信息</div>
            <div class="ui-block">
                <div class="ui-cell">
                    <div class="text">第几世</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">名称</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
                <div class="ui-cell">
                    <div class="text">备注</div>
                    <span class="tag right">
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
            </div>
            <div class="ui-block">
                <div class="ui-cell" @click="jump({name: 'homeDonate', title: '家族乐捐', type: 1})">
                    <div class="text">家族乐捐</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
            </div>
            <div class="ui-block">
                <div class="ui-cell" @click="jump({name: 'homeDonate', title: '名人事迹', type: 2})">
                    <div class="text">名人事迹</div>
                    <span class="tag right">
                        <i class="icon icon-right"></i>
                        <span class="value">sadfadfasdf</span>
                    </span>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    import { ltFooter } from 'components'
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                title: '家族介绍'
            }
        },
        components: {
            ltFooter
        },
        mounted() {
            this.$nextTick(() => {
                // console.log(1)
            })
        },
        methods: {
            ...mapActions([
                'postLogin'
            ]),
            jump(obj) {
                this.$router.push({ name: obj.name, query: obj })
            }
        }
    }
</script>