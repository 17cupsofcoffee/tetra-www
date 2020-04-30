<template>
    <div class="Showcase">
        <ShowcaseItem v-for="g in games" :item="g" />
    </div>
</template>

<script>
export default {
    props: ["games"]
}
</script>

<style scoped>
.Showcase {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(256px, 1fr));
    gap: 16px;
    margin-top: 2rem;
}
</style>
