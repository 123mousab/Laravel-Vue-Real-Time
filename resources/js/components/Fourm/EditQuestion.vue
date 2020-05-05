<template>
    <v-container fluid>
        <v-form @submit.prevent="update">
            <v-text-field
                v-model="form.title"
                label="Title"
                type="text"
                required
            ></v-text-field>
            <markdown-editor v-model="form.body"/>

            <v-card-actions>
                <v-btn outline fab small type="submit">
                    <v-icon color="teal">mdi-content-save-all-outline</v-icon>
                </v-btn>
                <v-btn outline fab small @click="cancel">
                    <v-icon color="red">mdi-close-circle</v-icon>
                </v-btn>
            </v-card-actions>
        </v-form>
    </v-container>
</template>

<script>
    export default {
        props: ['data'],
        data() {
            return {
                form: {
                    title: null,
                    body: null
                }
            }
        },
        created() {
            this.form = this.data;
        },
        methods: {
            cancel() {
                EventBus.$emit('cancelEditing');
            },
            update() {
                axios.patch(`/api/question/${this.form.slug}`,this.form)
                    .then(res => this.cancel())
            }
        }
    }
</script>

<style scoped>

</style>
