<template>
    <main class="main">
        <Introduction />
    </main>
</template>

<script>
import Introduction from "../components/Introduction.vue";

export default {
    components: {
        Introduction,
    },
};
</script>

<style scoped>
.main {
    display: flex;
    gap: 60px;
    flex-direction: column;
    flex: 1;
    justify-content: center;
}
</style>
