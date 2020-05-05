<template>
    <div class="mt-3">
        <v-card>
            <v-card-title>
                <div class="headline">{{data.user}}</div>
                <div class="ml-2">{{data.created_at}}</div>
            </v-card-title>

            <edit-reply v-if="editing" :reply=data></edit-reply>

            <v-card-text v-else v-html="reply"></v-card-text>
            <v-divider></v-divider>
            <div v-if="!editing">
                <v-card-actions v-if="own">
                    <v-btn outline fab small @click="edit">
                        <v-icon color="orange">mdi-pencil-outline</v-icon>
                    </v-btn>
                    <v-btn outline fab small @click="destroy">
                        <v-icon color="red">mdi-delete</v-icon>
                    </v-btn>
                </v-card-actions>
            </div>
        </v-card>
    </div>
</template>

<script>
    import EditReply from './EditReply';
    export default {
        props: ['data','index'],
        data() {
            return {
                editing: false,
                own: User.own(this.data.user_id)
            }
        },
        created() {
          this.listen();
        },
        methods: {
            destroy() {
                EventBus.$emit('deleteReply',this.index)
            },
            edit() {
                this.editing = true;
            },
            listen() {
                EventBus.$on('cancelEditing', () => {
                   this.editing = false;
                });
            }
        },
        computed: {
            reply() {
                return md.parse(this.data.reply);
            }
        },
        components: {
            EditReply
        }
    }
</script>

<style scoped>

</style>
