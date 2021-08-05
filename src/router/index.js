import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import User1 from '@/components/NavigationTabs.vue';
import AboutTab from '@/components/About.vue';
import WorkTab from '@/components/Work.vue';
import EducationTab from '@/components/Education.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/user/:id',
            component: User1,
            props: true,
            children: [
                {
                    path: '',
                    component: AboutTab
                },
                {
                    path: 'work',
                    component: WorkTab
                },
                {
                    path: 'education',
                    component: EducationTab
                }
            ]
        }
    ],
    mode: 'history'
});
