<template>
    <Skip />
    <Header />
    <Main />
    <Footer />
    <CustomCursor />
    <CustomBG />
</template>

<script>
import Skip from "./components/Skip.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Main from "./components/Main.vue";
import CustomCursor from "./components/CustomCursor.vue";
import CustomBG from "./components/CustomBG.vue";

import gsap from "gsap";

export default {
    data() {
        return {};
    },
    components: {
        Header,
        Footer,
        Main,
        CustomCursor,
        CustomBG,
        Skip,
    },
    methods: {
        animationFunction() {
            gsap.to(".header", { opacity: 1, duration: 0.2 });
            gsap.to(".footer", { opacity: 1, duration: 0.2 }, "-=0.1");

            const textItem = document.querySelectorAll(".introduction__text");
            textItem.forEach((item) => {
                gsap.to(
                    item,
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.5,
                    },
                    "-=0.05"
                );
            });

            const listItem = document.querySelectorAll(
                ".introduction__list li"
            );
            listItem.forEach((item) => {
                gsap.to(item, { opacity: 1, duration: 0.2 }, "-=0.05");
            });

            const linkItem = document.querySelectorAll(
                ".introduction__links > * "
            );
            linkItem.forEach((item) => {
                gsap.to(item, { opacity: 1, y: 0, duration: 0.1 }, "-=0.01");
            });
        },
    },

    mounted() {
        this.$nextTick(function () {
            this.animationFunction();
        });
    },
};
</script>

<style scoped></style>
