<template>
    <span class="custom-cursor" ref="customCursor">&nbsp;</span>
</template>

<script>
import gsap from "gsap";

export default {
    data() {
        return {
            parent: null,
            currentEl: null,
            xSetter: null,
            ySetter: null,
            activeClassSize: "custom-cursor--big",
            activeClassColor: "custom-cursor--green",
        };
    },
    methods: {
        moveCursor(e) {
            const el = e.target;
            if (
                el.tagName.toLowerCase() === "a" ||
                el.tagName.toLowerCase() === "button"
            ) {
                this.currentEl.classList.add(this.activeClassSize);

                if (
                    el.classList.contains("btn") ||
                    el.classList.contains("link")
                ) {
                    this.currentEl.classList.add(this.activeClassColor);
                }
            } else {
                this.currentEl.classList.remove(
                    this.activeClassSize,
                    this.activeClassColor
                );
            }

            let x = e.clientX;
            let y = e.clientY;

            this.xSetter(x);
            this.ySetter(y);
        },
    },
    mounted() {
        this.currentEl = this.$refs.customCursor;
        this.$nextTick(function () {
            this.xSetter = gsap.quickTo(this.currentEl, "x", {
                duration: 0.15,
                ease: "power3",
            });

            this.ySetter = gsap.quickTo(this.currentEl, "y", {
                duration: 0.15,
                ease: "power3",
            });

            this.parent = document.getElementById("app");

            this.parent.addEventListener("pointermove", this.moveCursor);
        });
    },
    unmounted() {
        this.parent.removeEventListener("pointermove", this.moveCursor);
    },
};
</script>

<style scope>
.custom-cursor {
    pointer-events: none;
    position: fixed;
    z-index: 200;
    border-radius: 50%;
    background: var(--orange-text-color);
    width: 10px;
    height: 10px;
    top: 0;
    left: 0;
    transform: translate(-10px, -10px);
    margin: -5px 0 0 -5px;
    transition: all 0.15s linear;
    display: none;
}

.custom-cursor--big {
    margin: -10px 0 0 -10px;
    width: 20px;
    height: 20px;
}

.custom-cursor--green {
    background: var(--main-text-color);
}

@media (min-width: 1024px) {
    .custom-cursor {
        display: block;
    }
}
</style>
