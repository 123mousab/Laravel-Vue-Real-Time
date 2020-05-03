<template>
    <v-container>
        <v-form @submit.prevent="signup">
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
                label="Password"
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
                <v-btn color="blue">Login</v-btn>
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
                    password_confirmation: null
                },
                errors: {}
            }
        },
        methods: {
            signup() {
                console.log('form',this.from);
                axios.post('/api/auth/signup',this.form)
                    .then(res => {
                        // console.log('success');
                        // console.log(res.data)
                        // Token.payload(res.data.access_token)
                        this.responseAfterLogin(res);
                    })
                    .catch(err => this.errors = err.response.data.error)
            }
        }
    }
</script>
<style scoped>

</style>
