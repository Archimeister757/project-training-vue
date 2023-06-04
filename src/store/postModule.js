export const postModule = {
    state: () => ({
        posts: [],
        page: 1,
        limit: 10,
        totalPages: 0,
        isPostsLoading: false,
        selectedSort: "",
        searchQuery: "",
        sortOptions: [
            {value: "title", name: "По названию"},
            {value: "body", name: "По описанию"},
        ]
    }),
    getters: {
        sortedPosts(state) {
            return [state.posts].sort((post1, post2) => post1[state.selectedSort]?.localeCompare(post2[state.selectedSort]));
        },
        searchedAndSortedPosts(state, getters) {
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchQuery.toLowerCase()));
        }
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts;
        },
        setLoading(state, bool) {
            state.isPostsLoading = bool;
        },
        setPage(state, page) {
            state.page = page;
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery;
        }
    },
    actions: {

    }
}