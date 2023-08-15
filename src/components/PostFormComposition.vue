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
import { ref } from "vue";
export default {
    setup(props, { emit }) {
        const post = ref({
            title: "",
            body: "",
        });
        const addPost = () => {
            console.log(post);
            post.value.id = Date.now();
            emit("create", post.value);
            post.value = {
                title: "",
                body: "",
            };
        };

        return { post, addPost };
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
