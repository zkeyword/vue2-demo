<template>
    <footer class="lt-footer">
        <router-link :to="{ name: 'home' }"  class="tab" v-bind:class="isA">
            <i class="icon icon-a1" v-if="!isA"></i>
            <i class="icon icon-a2" v-if="isA"></i>
            <div>世系族谱</div>
        </router-link>
        <router-link :to="{ name: 'search' }"  class="tab" v-bind:class="isB">
            <i class="icon icon-b1" v-if="!isB"></i>
            <i class="icon icon-b2" v-if="isB"></i>
            <div>族谱导航</div>
        </router-link>
        <router-link :to="{ name: 'user' }"  class="tab" v-bind:class="isC">
            <i class="icon icon-c1" v-if="!isC"></i>
            <i class="icon icon-c2" v-if="isC"></i>
            <div>我的族亲</div>
        </router-link>
    </footer>
</template>
<script>
    export default {
        props: {
            type: {
                type: Number,
                default: 1
            }
        },
        computed: {
            isA() {
                return {
                    on: this.type === 1
                }
            },
            isB() {
                return {
                    on: this.type === 2
                }
            },
            isC() {
                return {
                    on: this.type === 3
                }
            }
        }
    }
</script>

<style>
</style>