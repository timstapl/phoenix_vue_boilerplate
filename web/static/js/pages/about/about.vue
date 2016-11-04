<template>
    <div class="about-page">
        <div> About Page </div>
        <pre v-show="!isLoading"> {{ about }} </pre>
    </div>
</template>

<script>
    import AboutResource from '../../resources/about';

    export default {
        created() {
            this.fetchData();
        },

        data() {
            return {
                isLoading: false,
                about: {}
            }
        },

        methods: {
            fetchData() {
                this.isLoading = true;
                return AboutResource.fetchAbout().then( response => {
                    this.about = response.data;
                    this.isLoading = false;
                });
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>
