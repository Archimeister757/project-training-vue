<template>
    <div class="app">
        <post-form @create="createPost"/>
        <post-list :posts="posts" @remove="removePost"/>
    </div>
</template>

<script>
    import PostForm from "@/components/PostForm.vue";
    import PostList from "@/components/PostList.vue";

    export default {
        components: {
            PostList, PostForm
        },
        data() {
            return {
                posts: [
                    { id: 1, title: "Javascript-1", body: "Описание поста-1" },
                    { id: 2, title: "Javascript-2", body: "Описание поста-2" },
                    { id: 3, title: "Javascript-3", body: "Описание поста-3" },
                ],
            };
        },
        methods: {
            createPost(post) {
                this.posts.push(post);
            },
            removePost(post) {
                this.posts = this.posts.filter(item => item.id !== post.id);
            }
        },
    };
</script>
<style>
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
    }
</style>
