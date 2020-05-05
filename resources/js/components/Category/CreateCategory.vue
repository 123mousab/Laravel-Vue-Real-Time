<template>
    <v-container>
        <v-form @submit.prevent="submit">

            <v-text-field
                v-model="form.name"
                label="Name"
                type="text"
                required
            ></v-text-field>

            <v-btn type="submit" color="pink" v-if="editSlug">Update</v-btn>
            <v-btn type="submit" color="teal" v-else>Create</v-btn>


        </v-form>
        <v-card class="mt-2">
            <v-toolbar
                color="indigo"
                dark
                dense
            >
                <v-toolbar-title>Categories</v-toolbar-title>
            </v-toolbar>
            <v-list>
                <div v-for="(category,index) in categories" :key="category.id">
                    <v-list-item>
                        <v-list-item-icon>
                            <v-btn @click="edit(index)">
                                <v-icon  color="orange">mdi-pencil-outline</v-icon>
                            </v-btn>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ category.name }}</v-list-item-title>
                        </v-list-item-content>

                        <v-list-item-icon>
                            <v-btn>
                                <v-icon  color="red" @click="destroy(category.slug)">mdi-delete</v-icon>
                            </v-btn>
                        </v-list-item-icon>
                    </v-list-item>
                    <v-divider></v-divider>
                </div>
            </v-list>
        </v-card>
    </v-container>
</template>

<script>
    import User from "../../Helpers/User";

    export default {
        data() {
            return {
                form: {
                    name: null
                },
                categories: {},
                editSlug: null
            }
        },
        created() {
            /*if (!User.admin()){
                this.$router.push({name: 'fourm'})
            }*/
            axios.get('/api/category')
                .then(res => this.categories = res.data.data)
                .catch(error => console.log(error.response.data))
        },
        methods: {
            submit() {
                this.editSlug ? this.update() : this.create();
            },
            destroy(slug,index) {
                console.log('success');
                axios.delete(`/api/category/${slug}`)
                    .then(res => this.categories.splice(index,1))
            },
            edit(index) {
                this.form.name = this.categories[index].name;
                this.editSlug = this.categories[index].slug;
                this.categories.splice(index,1);
            },
            update() {
                axios.patch(`/api/category/${this.editSlug}`, this.form)
                    .then(res => {
                        this.categories.unshift(res.data);
                        this.form.name = null;
                    })
                    .catch(err => console.log(err.response.data))
            },
            create() {
                axios.post('/api/category', this.form)
                    .then(res => {
                        this.categories.unshift(res.data);
                        this.form.name = null;
                    })
                    .catch(err => console.log(err.response.data))
            }
        }
    }
</script>

<style scoped>

</style>
