<template>
    <section class="introduction">
        <div class="container">
            <div class="introduction__text">
                <h2>Your trusted web development partner.</h2>
                <p>
                    We support
                    <MarkText
                        :textArray="[
                            'creative agencies',
                            'marketing agencies',
                            'digital agencies',
                            'freelance designers',
                        ]" />
                    to develop all-singing, all-dancing custom websites and
                    digital platforms for national and global brands.
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
                    <a href="mailto:hello@expression.digital"
                        >hello@expression.digital</a
                    ></span
                >
            </div>
        </div>
    </section>
</template>

<script>
import MarkText from "./markText.vue";
export default {
    components: {
        MarkText,
    },
};
</script>

<style scoped>
.introduction .container {
    display: flex;
    gap: 60px;
    flex-direction: column;
}

.introduction__list {
    display: flex;
    gap: 20px 13%;
    flex-wrap: wrap;
    margin-top: 20px;
}

.introduction__links {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: center;
}

@media (min-width: 1024px) {
    .introduction__text {
        max-width: 1220px;
        width: 80%;
    }
}
</style>
