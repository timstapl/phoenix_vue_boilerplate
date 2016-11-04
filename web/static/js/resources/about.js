import Vue from 'vue';

export default {
    fetchAbout() {
        return Vue.http.get("/api/test");
    }
};
