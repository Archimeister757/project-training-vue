<template>
    <nav-bar :buttons="navButtons"></nav-bar>
    <div class="app">
        <router-view></router-view>
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
                },{
                    text: "Store",
                    link: "/store",
                },
            ]
        }
    }
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
