<template>
    <div class="v-root">
        <div class="header">
            <h1>Hello Vue.JS</h1>
            <div class="navigation">
                <router-link to="/home">Home</router-link>
                <router-link to="/about">About</router-link>
            </div>
        </div>
        <div class="content">
            <div class="v-router">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style lang="scss" scoped>

</style>
