<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <div class="form__wrap">
            <my-input
                class="form__input"
                placeholder="Название"
                v-model="post.title"
            />
            <my-input
                class="form__input"
                placeholder="Описание"
                v-model="post.body"
            />
        </div>
        <my-button class="form__btn" @click="addPost"> Создать </my-button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            post: {
                title: "",
                body: "",
            },
        };
    },
    methods: {
        addPost() {
            this.post.id = Date.now();
            this.$emit("create", this.post);
            this.post = {
                title: "",
                body: "",
            };
        },
    },
};
</script>

<style>
.form {
    display: flex;
    flex-direction: column;
}
.form__wrap {
    margin-bottom: 15px;
}
.form__btn {
    align-self: flex-end;
}
.form__input {
    margin-top: 15px;
}
</style>
