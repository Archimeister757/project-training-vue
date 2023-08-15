<template>
    <input type="text" class="input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number],
    },
    setup(props, { emit }) {
        const updateInput = (event) => {
            console.log(event);
            // emit("update:modelValue", event.target.value);
        };
        return { updateInput };
    },
};
</script>

<style>
.input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid teal;
}
</style>
