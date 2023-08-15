<template>
    <div v-if="posts.length > 0">
        <h3>Список постов</h3>
        <transition-group name="post-list">
            <post-item
                v-for="post in posts"
                :post="post"
                :key="post.id"
                @remove="removePost(post)"
            />
        </transition-group>
        <my-pagination
            :pages="pages"
            :page="page"
            @changePage="changePage()"
        />
    </div>
    <h2 v-else style="color: red">Список постов пуст</h2>
</template>

<script>
import PostItem from "./PostItemComposition.vue";

export default {
    components: { PostItem },
    props: {
        posts: {
            type: Array,
            required: true,
        },
        pages: Number,
        page: Number,
    },
    setup(props, { emit }) {
        const removePost = (post) => {
            emit("remove", post);
        };
        const changePage = (pageNumber) => {
            emit('changePage', pageNumber)
        }
        return { removePost };
    },
};
</script>

<style scoped>
.post-list-item {
    display: inline-block;
    margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
    transition: all 0.5s ease;
}
.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateX(130px);
}
.post-list-move {
    transition: transform 0.5s ease;
}
</style>
