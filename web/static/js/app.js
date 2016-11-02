import "phoenix_html"

import Vue from 'vue';
import VueRouter from 'vue-router';
import RootComponent from './root';
import appRouter from './app/router';

//
// Boot up global utilities
//
require('./app/boot');

//
// Create a router
//
const router = new VueRouter({
    mode: 'history',
    routes: appRouter.routes,
});
//
// Create root Vue instance
//
new Vue({
    el: "#app",
    render: h => h(RootComponent),
    router,
});

