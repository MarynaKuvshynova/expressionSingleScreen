<template>
    <Skip />
    <Header>
        <h1>
            <a href="/">
                <img
                    src="/logo.svg"
                    width="244"
                    height="40"
                    alt="expression digital" />
            </a>
        </h1>
    </Header>
    <main class="main">
        <Introduction>
            <div class="introduction__text">
                <h2>Your trusted web development partner.</h2>
                <p>
                    We support <mark>creative agencies</mark> and
                    <mark>freelance designers</mark> to develop bespoke,
                    high-quality websites and digital platforms for national and
                    global brands.
                </p>
            </div>

            <div class="introduction__text">
                <p><strong>We’re experts at:</strong></p>
                <ul class="introduction__list">
                    <li>WordPress</li>
                    <li>Laravel</li>
                    <li>PHP</li>
                    <li>Vue.js</li>
                    <li>React</li>
                </ul>
            </div>

            <div class="introduction__links">
                <a
                    href="https://meetings-eu1.hubspot.com/liam-mclaney"
                    class="btn"
                    target="_blank">
                    Schedule a call
                </a>
                <span
                    >or email
                    <a class="link" href="mailto:hello@expression.digital"
                        >hello@expression.digital</a
                    ></span
                >
            </div>
        </Introduction>
    </main>
    <Footer>
        Expression Digital Limited • Registered in England 14336157 • VAT
        GB442894076 •
        <address>
            Chorley Business & Technology Centre, Block B1 Room 1, United
            Kingdom, PR7 6TE
        </address>
    </Footer>
    <CustomCursor />
    <CustomBG />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Introduction from "./components/Introduction.vue";
import Skip from "./components/Skip.vue";
import CustomCursor from "./components/CustomCursor.vue";
import CustomBG from "./components/CustomBG.vue";
import animation from "./components/animation.js";

export default {
    mixins: [animation],
    data() {
        return {};
    },
    components: {
        Header,
        Footer,
        Introduction,
        CustomCursor,
        CustomBG,
        Skip,
    },
    methods: {},

    mounted() {
        this.$nextTick(function () {
            // this.animationFunction();
        });
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
