<template>
<div id="app">
    <h1>vue-ssr</h1>
    <router-link class="link" to="/comp1">to comp1</router-link>
    <router-link class="link" to="/comp2">to comp2</router-link>

    <router-view class="view"></router-view>
    <second-com></second-com>
    <div class="bbb">wolaikankan</div>
</div>
</template>

<script>
    import secondCom from "./components/second.vue";
    export default{
        name: 'app',
        components:{
            secondCom,
        },
        
    }


</script>
<style lang="scss" src="./assets/scss/base.scss"></style> 