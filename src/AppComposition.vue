<template>
    <div class="app">
        <h1 class="app__title">Страница с постами</h1>
        <my-input v-model="searchQuery" placeholder="Поиск..." />
        <div class="app__btns">
            <my-button style="margin-block: 15px" @click="showModal"
                >Создать пост</my-button
            >
            <my-select :options="sortOptions" v-model="selectedSort" />
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
        <div ref="observer" class="observer"></div>
    </div>
</template>

<script>
import PostForm from "@/components/PostFormComposition.vue";
import PostList from "@/components/PostListComposition.vue";
import axios from "axios";
import { computed, onMounted, ref } from "vue";

export default {
    components: {
        PostList,
        PostForm,
    },
    setup() {
        const posts = ref([]);
        const page = ref(1);
        const limit = 10;
        const totalPages = ref(0);
        const modalVisible = ref(false);
        const isPostsLoading = ref(false);
        const selectedSort = ref("");
        const searchQuery = ref("");
        const sortOptions = ref([
            { value: "title", name: "По названию" },
            { value: "body", name: "По описанию" },
        ]);
        const createPost = (post) => {
            posts.value.push(post);
            modalVisible.value = false;
        };
        const removePost = (post) => {
            posts.value = posts.value.filter((item) => item.id !== post.id);
        };
        const showModal = () => {
            modalVisible.value = true;
        };
        const changePage = (pageNumber) => {
            page.value = pageNumber;
        };
        const fetchPosts = async () => {
            try {
                isPostsLoading.value = true;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: page.value,
                            _limit: limit,
                        },
                    }
                );
                totalPages.value = Math.ceil(
                    response.headers["x-total-count"] / limit
                );
                posts.value = response.data;
            } catch (e) {
                alert("Error");
            } finally {
                isPostsLoading.value = false;
            }
        };
        const loadMorePosts = async () => {
            try {
                page.value += 1;
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts",
                    {
                        params: {
                            _page: page.value,
                            _limit: limit,
                        },
                    }
                );
                totalPages.value = Math.ceil(
                    response.headers["x-total-count"] / limit
                );
                posts.value = [...posts.value, ...response.data];
            } catch (e) {
                alert("Error");
            }
        };
        onMounted(() => {
            fetchPosts();
            const options = {
                rootMargin: "0px",
                threshold: 1.0,
            };
            const callback = (entries, observer) => {
                if (
                    entries[0].isIntersecting &&
                    page.value < totalPages.value
                ) {
                    loadMorePosts();
                }
            };
            const observer = new IntersectionObserver(callback, options);
            // observer.observe(this.$refs.observer);
        });
        const sortedPosts = computed(() => {
            return [...posts.value].sort((post1, post2) =>
                post1[selectedSort.value]?.localeCompare(
                    post2[selectedSort.value]
                )
            );
        });
        const searchedAndSortedPosts = computed(() => {
            return sortedPosts.value.filter((post) =>
                post.title
                    .toLowerCase()
                    .includes(searchQuery.value.toLowerCase())
            );
        });
        return {
            posts,
            page,
            totalPages,
            modalVisible,
            isPostsLoading,
            selectedSort,
            searchQuery,
            sortOptions,
            createPost,
            removePost,
            showModal,
            changePage,
            searchedAndSortedPosts,
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
.app__title {
    margin-bottom: 30px;
}
.app__btns {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
