<template>
    <v-toolbar>
        <v-toolbar-title>Bitfums</v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
            <router-link to="form">
                <v-btn>Form</v-btn>
            </router-link>
            <v-btn>Ask Question</v-btn>
            <v-btn>Category</v-btn>
            <router-link to="/login">
                <v-btn>Login</v-btn>
            </router-link>
        </div>
    </v-toolbar>
</template>

<script>
    export default {
    }
</script>

<style scoped>

</style>
