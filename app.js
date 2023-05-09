function navSetup() {
    const burger = document.querySelector(".navigation__burger");
    const links = document.querySelector(".navigation__links");
    const overlay = document.querySelector(".navigation__overlay");
    const body = document.querySelector("body");

    burger.addEventListener("click", () => {
        links.classList.toggle("show");
        overlay.classList.toggle("show");
        body.classList.toggle("scroll-lock");
    });
}

function main() {
    navSetup();
}

main();