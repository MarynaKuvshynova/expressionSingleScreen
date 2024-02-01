<template>
    <footer class="footer">
        <div class="container">
            <p>
                <slot />
            </p>
        </div>
    </footer>
</template>

<style>
.footer {
    font-size: 16px;
    overflow: hidden;
    padding: 40px 0;
}

.footer p {
    margin: 0;
}

.footer address {
    display: inline;
    font-style: normal;
}
</style>
