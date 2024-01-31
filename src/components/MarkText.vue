<template>
    <span class="mark-text" ref="mark"></span>
</template>

<script>
export default {
    props: {
        textArray: Array,
    },
    data() {
        return {
            currentIndex: 0,
            timer: null,
        };
    },
    methods: {
        changeText() {
            this.currentIndex =
                this.currentIndex >= this.textArray.length
                    ? 0
                    : this.currentIndex;
            this.$refs.mark.innerHTML = this.textArray[this.currentIndex];
            this.currentIndex++;
        },
    },
    mounted() {
        this.$nextTick(function () {
            this.changeText();
            this.timer = setInterval(() => {
                this.changeText();
            }, 1000);
        });
    },
    unmounted() {
        clearInterval(this.timer);
    },
};
</script>

<style scope>
.mark-text {
    color: var(--orange-text-color);
}
</style>
