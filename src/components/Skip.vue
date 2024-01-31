<template>
    <button @click="scrollToMain" type="button" class="skip-link">
        Skip to content
    </button>
</template>

<script>
export default {
    data() {
        return {};
    },
    methods: {
        scrollToMain($event) {
            $event.stopPropagation();
            smoother.scrollTo(".main", true, "top top");
        },
    },
};
</script>

<style scoped>
.skip-link {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
}
.skip-link:focus {
    z-index: 100;
    width: auto;
    height: auto;
    padding: 0;
    margin: 0;
    overflow: visible;
    clip: auto;
    white-space: normal;
}
</style>
