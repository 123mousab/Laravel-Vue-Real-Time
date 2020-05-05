<template>
    <div>
        <markdown-editor v-model="reply.reply"></markdown-editor>
        <div>
            <v-card-actions>
                <v-btn small @click="update">
                    <v-icon color="green">mdi-content-save-all-outline</v-icon>
                </v-btn>
                <v-btn small @click="cancel">
                    <v-icon color="black">mdi-close-circle</v-icon>
                </v-btn>
            </v-card-actions>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['reply'],
        methods: {
            cancel() {
                EventBus.$emit('cancelEditing');
            },
            update() {
                axios.patch(`api/question/${this.reply.question_slug}/reply/${this.reply.id}`,{body: this.reply.reply})
                    .then(res => this.cancel());
            }
        }
    }
</script>

<style scoped>

</style>
