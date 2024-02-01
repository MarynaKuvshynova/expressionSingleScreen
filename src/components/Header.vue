<template>
    <header class="header">
        <div class="container">
            <slot />
        </div>
    </header>
</template>

<style>
.header {
    padding: 40px 0;
    line-height: 1;
}

.header h1 {
    display: inline;
    line-height: inherit;
    margin: 0;
    font-size: 0;
}

.header a {
    text-decoration: none;
}
</style>
