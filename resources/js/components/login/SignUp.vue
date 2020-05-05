<template>
    <v-container>
        <v-form @submit.prevent="signUp">
            <v-text-field
                v-model="form.name"
                label="Name"
                type="text"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{errors.name[0]}}</span>
            <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{errors.email[0]}}</span>
            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{errors.password[0]}}</span>
            <v-text-field
                v-model="form.password_confirmation"
                label="password_confirmation"
                type="password"
                required
            ></v-text-field>
            <span class="red--text" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</span>
            <v-btn
                color="green"
                type="submit"
            >
                Sign Up
            </v-btn>
            <router-link to="/login">
                <v-btn
                    color="blue"
                >
                    Login
                </v-btn>
            </router-link>
        </v-form>
    </v-container>
</template>

<script>

    import User from "../../Helpers/User";

    export default {
        data() {
            return {
                form: {
                    name: null,
                    email: null,
                    password: null,
                    password_confirmation: null,
                },
                errors: {}
            }
        },
        methods: {
            signUp() {
                axios.post('/api/auth/signup', this.form)
                    .then(res => {
                        console.log(res.data);
                        // Token.payload(res.data.access_token)
                        User.responseAfterLogin(res);
                        this.$router.push({name: 'fourm'})
                    })
                    .catch(err => this.errors = err.response.data.errors)
            }
        }
    }
</script>

<style scoped>

</style>
