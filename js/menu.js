let menuBar = document.querySelector("#menu-animate");
let scrolledMenu = document.querySelector("#scrolled-menu");

addEventListener("scroll", ( e ) => {
    if (menuBar.getBoundingClientRect().top <= 0) {
        scrolledMenu.style.top = "0";
        scrolledMenu.style.opacity = "1";
    } else {
        scrolledMenu.style.top = "-40px";
        scrolledMenu.style.opacity = "0";
    }
});