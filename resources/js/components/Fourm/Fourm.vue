<template>
    <v-container fluid grid-list-md>
        <v-layout row wrap>
            <v-flex xs8>
                <app-question
                    v-for="question in questions"
                    :key="question.path"
                    :data=question
                >

                </app-question>
            </v-flex>
            <v-flex xs4>
                <app-sidebar></app-sidebar>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    import Question from './Question';
    import AppSidebar from './AppSidebar';
    export default {
        data() {
            return {
                questions: {}
            }
        },
        created() {
            axios.get('/api/question')
                .then(res => this.questions = res.data.data)
                .catch(error => console.log(error.response.data))
        },
        components: {
            AppQuestion: Question,
            AppSidebar
        }
    }
</script>

<style scoped>

</style>
