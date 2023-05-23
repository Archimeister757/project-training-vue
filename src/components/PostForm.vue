<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <input
            v-model="post.title"
            type="text"
            class="input"
            placeholder="Название"
        />
        <input
            :value="post.body"
            @input="post.body = $event.target.value"
            type="text"
            class="input"
            placeholder="Описание"
        />
        <button class="btn" @click="addPost">Создать</button>
    </form>
</template>

<script>
    export default {
        data() {
            return {
                post: {
                    title: "",
                    body: "",
                }
            }
        },
        methods: {
            addPost() {
                this.post.id = Date.now();
                this.$emit("create", this.post);
                this.post = {
                    title: "",
                    body: "",
                }
            }
        }
    }
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
    }
    .input {
        width: 100%;
        padding: 10px 15px;
        margin-top: 15px;
        border: 1px solid teal;
    }
    .btn {
        align-self: flex-end;
        margin-top: 15px;
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
        cursor: pointer;
    }
</style>