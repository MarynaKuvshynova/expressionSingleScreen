<template>
    <span class="custom-cursor" ref="customCursor">&nbsp;</span>
</template>

<script>
import gsap from "gsap";

export default {
    data() {
        return {
            parent: null,
            xSetter: null,
            ySetter: null,
            activeClassSize: "custom-cursor--big",
            activeClassColor: "custom-cursor--green",
        };
    },
    methods: {
        moveCursor(e) {
            if (
                e.target.tagName.toLowerCase() === "a" ||
                e.target.tagName.toLowerCase() === "button"
            ) {
                this.$refs.customCursor.classList.add(this.activeClassSize);

                if (e.target.classList.contains("btn")) {
                    this.$refs.customCursor.classList.add(
                        this.activeClassColor
                    );
                }
            } else {
                this.$refs.customCursor.classList.remove(
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
        this.$nextTick(function () {
            this.xSetter = gsap.quickTo(this.$refs.customCursor, "x", {
                duration: 0.6,
                ease: "power3",
            });

            this.ySetter = gsap.quickTo(this.$refs.customCursor, "y", {
                duration: 0.6,
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
    transition: all 0.6s linear;
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
