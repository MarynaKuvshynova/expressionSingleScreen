<template>
    <section class="introduction">
        <div class="container">
            <slot />
        </div>
    </section>
</template>

<script></script>

<style>
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
    gap: 20px 40px;
    align-items: center;
    color: var(--main-text-color);
}

@media (min-width: 1024px) {
    .introduction__text {
        max-width: 1220px;
        width: 80%;
    }
}
</style>
