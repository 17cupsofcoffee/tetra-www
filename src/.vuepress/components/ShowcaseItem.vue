<template>
    <div class="ShowcaseItem">
        <div v-if="screenshotUrl" class="ShowcaseItem__screenshot">
            <a :href="item.url">
                <img :src="screenshotUrl" />
            </a>
        </div>
        <div class="ShowcaseItem__content">
            <h4 class="ShowcaseItem__title">
                <a :href="item.url">{{ item.title }}</a>
            </h4>
            <p class="ShowcaseItem__author">
                <a :href="item.authorUrl">{{ item.author }}</a>
            </p>
            <p class="ShowcaseItem__description">
                {{ item.description }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["item"],
    computed: {
        screenshotUrl() {
            return this.item.screenshot
                ? `/img/showcase/${this.item.screenshot}`
                : "";
        }
    }
}
</script>

<style scoped>
.ShowcaseItem {
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    border-radius: 4px;
}

.ShowcaseItem__screenshot {
    height: 256px;
    overflow: hidden;
    border-radius: 4px 4px 0 0;
}

.ShowcaseItem__screenshot img {
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.ShowcaseItem__content {
    padding: 16px;
}

.ShowcaseItem__title {
    margin: 0;
}

.ShowcaseItem__title a {
    font-weight: bold;
}

.ShowcaseItem__author {
    margin: 0;
    font-size: 0.8rem;
}

.ShowcaseItem__description {
    margin: 8px 0 0 0;
    font-size: 0.8rem;
    line-height: 1.5;
}
</style>