<template>
    <select 
        class="select"
        :value="modelValue" 
        @change="changeOptions"
    >
        <option disabled value="">Выберите из списка</option>
        <option 
            v-for="option in options" 
            :key="option.value" 
            :value="option.value"
        >
            {{ option.name }}
        </option>
    </select>
</template>

<script>
export default {
    name: "my-select",
    props: {
        modelValue: {
            type: String,
        },
        options: {
            type: Array,
            default: () => [],
        }
    },
    methods: {
        changeOptions(event) {
            this.$emit("update:modelValue", event.target.value);
        }
    }
};
</script>

<style scoped>
.select {
    padding: 10px 15px;
    border: 1px solid teal;
    color: teal;
}
</style>
