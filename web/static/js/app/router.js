import PageNotFoundComponent from '../pages/404/404';
import HomeComponent from '../pages/home/home';
import AboutComponent from '../pages/about/about';

export default {

    //
    // Routes
    //
    routes: [

        //
        // Default Redirect
        //
        {
            path: '/',
            redirect: '/home',
        },

        //
        // Home
        //
        {
            path: '/home',
            component: HomeComponent,
            meta: {
                title: 'Home Page',
            }
        },

        //
        // About
        //
        {
            path: '/about',
            component: AboutComponent,
            meta: {
                title: 'About Page',
            }
        },

        //
        // 404
        //
        {
            path: '*',
            component: PageNotFoundComponent,
            meta: {
                title: 'Page not found',
            }
        },
    ]
}
