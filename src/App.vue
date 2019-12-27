<template>
    
        <!-- <app-header></app-header> -->
        <!-- <navigation-tabs></navigation-tabs> -->
        <!-- <app-navigation></app-navigation> -->

        <v-content transition="slide-x-transition">
            <router-view></router-view>
        </v-content>
    
</template>

<script>
// import NavigationTabs from '@/components/NavigationTabs';
// import AppHeader from '@/components/AppHeader';
// import AppNavigation from '@/components/AppNavigation';

export default {
    name: 'App',
    components: {
        // NavigationTabs,
        // AppHeader
        
    }
};
</script>

<style></style>
