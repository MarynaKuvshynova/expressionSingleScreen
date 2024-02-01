import gsap from "gsap";

export default {
    mounted() {
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

        const listItem = document.querySelectorAll(".introduction__list li");
        listItem.forEach((item) => {
            gsap.to(item, { opacity: 1, duration: 0.2 }, "-=0.05");
        });

        const linkItem = document.querySelectorAll(".introduction__links > * ");
        linkItem.forEach((item) => {
            gsap.to(item, { opacity: 1, y: 0, duration: 0.1 }, "-=0.01");
        });
    },
};
