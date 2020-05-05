<template>
    <v-toolbar>
        <v-toolbar-title>Bitfums</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
            <router-link
                v-for="item in items"
                :key="item.title"
                :to="item.to"
                v-if="item.show"
            >
                <v-btn>{{item.title}}</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>

<script>
    import User from '../Helpers/User';
    export default {
        data() {
            return {
                items: [
                    {title: 'Fourm', to:'/fourm', show: true},
                    {title: 'Ask Question', to:'/ask', show: User.loggedIn()},
                    {title: 'Category', to:'/category', show: User.loggedIn()},
                    {title: 'Login', to:'/login', show: !User.loggedIn()},
                    {title: 'Logout', to:'/logout', show: User.loggedIn()},
                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.logout();
            });
        }
    }
</script>

<style scoped>

</style>
