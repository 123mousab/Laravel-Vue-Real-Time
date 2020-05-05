<template>
    <v-card class="mt-2">
       <!-- <v-img
            class="white&#45;&#45;text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        >
            <v-card-title>{{ data.title }}</v-card-title>
        </v-img>-->
        <v-card-title primary-title>
            <div>
                <h3 class="headline mb-0">
                    <router-link :to="data.path">
                        {{ data.user }} said
                        {{ data.title }}
                    </router-link>
                </h3>
                <div class="grey--text">{{ data.created_at }}</div>
            </div>
        </v-card-title>
        <!--<v-card-text>
            {{ data.body }}
        </v-card-text>-->
        <v-card-text v-html="body">
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        props: ['data'],
        computed: {
            body() {
                return md.parse(this.data.body);
            }
        }
    }
</script>

<style scoped>

</style>
