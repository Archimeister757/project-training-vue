<template>
    <input type="text" class="input" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
    name: "my-input",
    props: {
        modelValue: [String, Number],
    },
    methods: {
        updateInput(event) {
            console.log(event);
            this.$emit("update:modelValue", event.target.value);
        },
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
