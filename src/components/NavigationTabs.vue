<template>
    <v-container grid-list-lg>
        <app-header></app-header>
        <div>
            <v-tabs v-model="activeTab" grow>
                <v-tab v-for="tab of tabs" :key="tab.id" :to="tab.route" exact>
                    {{ tab.name }}
                </v-tab>

                <v-tab-item
                    v-for="tab of tabs"
                    :key="tab.id"
                    :value="tab.route"
                >
                    <router-view></router-view>
                </v-tab-item>
            </v-tabs>
        </div>
    </v-container>
</template>

<script>
import AppHeader from '@/components/AppHeader';

export default {
    components: {
        AppHeader
    },

    props: ['id'],
    data() {
        return {
            activeTab: `/user/${this.id}`,
            tabs: [
                { id: 1, name: 'Portfolio', route: `/user/${this.id}` },
                { id: 2, name: 'Work', route: `/user/${this.id}/work` },
                {
                    id: 3,
                    name: 'Education',
                    route: `/user/${this.id}/education`
                }
            ]
        };
    }
};
</script>
