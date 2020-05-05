<template>
    <div v-if="question">
        <edit-question
            v-if="editing"
            :data=question
        >

        </edit-question>
        <show-question
            v-else
            :data=question
        >
        </show-question>
        <v-container>
            <replies :question="question"></replies>
            <new-reply :questionSlug="question.slug"></new-reply>
        </v-container>
    </div>
</template>

<script>
    import ShowQuestion from './ShowQuestion';
    import EditQuestion from './EditQuestion';
    import Replies from  '../Reply/Replies';
    import NewReply from  '../Reply/NewReply';
    export default {
        data() {
            return {
                question: null,
                editing: false
            }
        },
        created() {
            this.listen();
            this.getQuestion();
        },
        components: {
            ShowQuestion,
            EditQuestion,
            Replies,
            NewReply
        },
        methods: {
            listen() {
                EventBus.$on('startEditing', () => {
                   this.editing = true
                });
                EventBus.$on('cancelEditing', () => {
                   this.editing = false
                });
            },
            getQuestion() {
                // console.log(this.$route.params.slug);
                axios.get(`/api/question/${this.$route.params.slug}`)
                    .then(res => this.question = res.data.data)
                    .catch(error => error.response.data)
            }
        }
    }
</script>

<style scoped>

</style>
