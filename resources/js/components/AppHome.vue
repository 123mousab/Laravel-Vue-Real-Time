<template>
    <div>
        <app-toolbar></app-toolbar>
        <router-view></router-view>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Toolbar from './Toolbar';
    import AppFooter from './AppFooter';
    import Login from './login/Login';
    export default {
        components: {
            AppToolbar: Toolbar,
            AppFooter: AppFooter,
            Login
        }
    }
</script>

<style scoped>

</style>
