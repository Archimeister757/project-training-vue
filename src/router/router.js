import Main from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import PostPage from "@/pages/PostPage";
import AboutUs from "@/pages/AboutUs";
import PostsPageWithStore from "@/pages/PostsPageWithStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: Main
    },
    {
        path: "/posts",
        component: PostsPage
    },
    {
        path: "/about",
        component: AboutUs
    },
    {
        path: "/posts/:id",
        component: PostPage
    },{
        path: "/store",
        component: PostsPageWithStore
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router;