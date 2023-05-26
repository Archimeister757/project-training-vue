<template>
    <div class="pagination">
        <div 
            v-for="pageNumber in pages" 
            :key="pageNumber" 
            :page="page"
            class="pagination__item"
            :class="{
                'active': page === pageNumber
            }"
            @click="$emit('changePage', pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<script>
export default {
    name: "my-pagination",
    props: {
        pages: {
            type: Number,
            required: true,
        },
        page: {
            type: Number,
            default: 1,
        }
    },
}
</script>

<style>
.pagination {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 20px;
}
.pagination__item {
    padding: 5px 6px;
    border: 1px solid #000;
    cursor: pointer;
}
.pagination__item.active {
    font-weight: bold;
    border: 2px solid teal;
    color: teal;
}
</style>