<template>
    <nav-bar :buttons="navButtons"></nav-bar>
    <div class="app">
        <<<<<<< HEAD
        <h1 class="app__title">Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Поиск..." />
        <div class="app__btns">
            <my-button style="margin-block: 15px" @click="showModal"
                >Создать пост</my-button
            >
            <my-select :options="sortOptions" v-model="selectedSort" />
        </div>
        <my-modal v-model:show="modalVisible">
            <!-- <post-form @create="createPost" /> -->
            <post-form-composition @create="createPost" />
        </my-modal>
        <post-list
            :posts="searchedAndSortedPosts"
            :pages="totalPages"
            :page="page"
            @remove="removePost"
            @changePage="changePage"
            v-if="!isPostsLoading"
        />
        <div v-else>Loading...</div>
        <div ref="observer" class="observer"></div>
        =======
        <router-view></router-view>
        >>>>>>> 110325fa68e493c44d6bb5a82d32eef36d0753eb
    </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
    components: { NavBar },
    data() {
        return {
            navButtons: [
                {
                    text: "Главная",
                    link: "/",
                },
                {
                    text: "Посты",
                    link: "/posts",
                },
                {
                    text: "О нас",
                    link: "/about",
                },
                {
                    text: "Store",
                    link: "/store",
                },
            ],
        };
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
