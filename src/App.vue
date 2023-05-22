<template>
    <div class="app">
        
    </div>
</template>

<script>

    export default {
      components: {
        PostList
      },
        data() {
            return {
                posts: [
                    { id: 1, title: "Javascript-1", body: "Описание поста-1" },
                    { id: 2, title: "Javascript-2", body: "Описание поста-2" },
                    { id: 3, title: "Javascript-3", body: "Описание поста-3" },
                ],
                title: "",
                body: "",
            };
        },
        methods: {
            addPost() {
              const newPost = {
                id: Date.now(),
                title: this.title,
                body: this.body,
              }
              this.posts.push(newPost);
              this.title = "";
              this.body = "";
            },
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
