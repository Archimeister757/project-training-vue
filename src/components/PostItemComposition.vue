<template>
    <div class="post">
        <div>
            <div><strong>Id:</strong> {{ post.id }}</div>
            <div><strong>Название:</strong> {{ post.title }}</div>
            <div><strong>Описание:</strong> {{ post.body }}</div>
        </div>
        <div class="post__btns">
            <my-button class="post__btn" @click="removePost">
                Удалить
            </my-button>
        </div>
    </div>
</template>

<script>
import MyButton from "./UI/MyButton.vue";
export default {
    components: { MyButton },
    props: {
        post: {
            type: Object,
            required: true,
        },
    },
    setup(props, { emit }) {
        const removePost = (post) => {
            emit("remove", post);
        };
        return { removePost };
    },
};
</script>

<style scoped>
.post {
    padding: 15px;
    margin-top: 15px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
