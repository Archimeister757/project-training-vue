<template>
    <div>
        <!-- <h1>Кол-во лайков = {{ $store.getters.dubleLikes }}</h1>
        <div>
            <my-button @click="$store.commit('incrementLikes')">+++</my-button>
            <my-button @click="$store.commit('decrementLikes')">---</my-button>
        </div> -->
        <h1 class="app__title">Страница с постами с Vuex</h1>
        <my-input
            v-model="searchQuery"
            placeholder="Поиск..."
        />
        <div class="app__btns">
            <my-button style="margin-block: 15px" @click="showModal">Создать пост</my-button>
            <my-select :options="sortOptions" v-model="selectedSort"/>
        </div>
        <my-modal v-model:show="modalVisible">
            <post-form @create="createPost" />
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
        <div v-intersection="loadMorePosts" class="observer"></div>
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import axios from "axios";
import MyButton from '@/components/UI/MyButton.vue';

export default {
    components: {
        PostList,
        PostForm,
        MyButton,
    },
    data() {
        return {
            posts: [],
            page: 1,
            limit: 10,
            totalPages: 0,
            modalVisible: false,
            isPostsLoading: false,
            selectedSort: "",
            searchQuery: "",
            sortOptions: [
                {value: "title", name: "По названию"},
                {value: "body", name: "По описанию"},
            ]
        };
    },
    methods: {
        createPost(post) {
            this.posts.push(post);
            this.modalVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter((item) => item.id !== post.id);
        },
        showModal() {
            this.modalVisible = true;
        },
        changePage(pageNumber) {
            this.page = pageNumber;
        },
        async fetchPosts() {
            try {
                this.isPostsLoading = true;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts", {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        }
                    }
                );
                this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit)
                this.posts = response.data;
            } catch (e) {
                alert("Error");
            } finally {
                this.isPostsLoading = false;
            }
        },
        async loadMorePosts() {
            try {
                this.page += 1;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts", {
                        params: {
                            _page: this.page,
                            _limit: this.limit,
                        }
                    }
                );
                this.totalPages = Math.ceil(response.headers["x-total-count"] / this.limit)
                this.posts = [...this.posts, ...response.data];
            } catch (e) {
                alert("Error");
            }
        },
    },
    mounted() {
        this.fetchPosts();
    },
    computed: {

    },
};
</script>
<style>

.app__title {
    margin-bottom: 30px;
}
.app__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>