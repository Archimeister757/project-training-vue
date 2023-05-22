<template>
    <form class="form" @submit.prevent>
        <h4>Создание поста</h4>
        <input
            v-bind:value="title"
            @input="title = $event.target.value"
            type="text"
            class="input"
            placeholder="Название"
        />
        <input
            v-bind:value="body"
            @input="body = $event.target.value"
            type="text"
            class="input"
            placeholder="Описание"
        />
        <button class="btn" @click="addPost">Создать</button>
    </form>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .form {
        display: flex;
        flex-direction: column;
    }
    .input {
        width: 100%;
        padding: 10px 15px;
        margin-top: 15px;
        border: 1px solid teal;
    }
    .btn {
        align-self: flex-end;
        margin-top: 15px;
        padding: 10px 15px;
        background: none;
        color: teal;
        border: 1px solid teal;
        cursor: pointer;
    }
</style>