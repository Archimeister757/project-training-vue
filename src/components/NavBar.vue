<template>
    <div class="navbar">
        <div class="navbar__title" @click="$router.push('/')">Vue 3</div>
        <div class="navbar__btns">
            <my-button
                class="navbar__btn"
                @click="$router.push(button.link)"
                v-for="button in buttons"
                :key="button.link"
                :buttons="buttons"
                >{{ button.text }}
            </my-button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        buttons: {
            type: Array,
        },
    },
};
</script>

<style scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 20px;
    height: 50px;
    background-color: teal;
    box-shadow: 2px 2px 4px gray;
}
.navbar__title {
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
}
.navbar__btns {
    display: flex;
    gap: 8px;
}
.navbar__btn {
    color: black;
}
</style>
