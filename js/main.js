/* ---------------------------
   BURGER MENU
--------------------------- */
const burger = document.getElementById("burgerBtn");
const mobileNav = document.getElementById("mobileNav");

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    mobileNav.classList.toggle("open");
});

/* ---------------------------
   THEME TOGGLE
--------------------------- */
const themeBtn = document.getElementById("themeToggle");

// Загружаем сохранённую тему
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
}

// Переключение темы
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

/* ----------------------------- */
/* 🌐 ПЛАВНАЯ ЗАГРУЗКА САЙТА     */
/* ----------------------------- */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});

/* ----------------------------------------- */
/* 👀 ПОЯВЛЕНИЕ ЭЛЕМЕНТОВ ПРИ ПРОКРУТКЕ      */
/* ----------------------------------------- */

const animatedItems = document.querySelectorAll(".fade-up, .fade-in, .card-animated");

function showOnScroll() {
    const trigger = window.innerHeight * 0.85;

    animatedItems.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", showOnScroll);
showOnScroll();

/* ----------------------------------------- */
/* 🟣 МЯГКИЙ ПАРАЛЛАКС ДЛЯ HERO               */
/* ----------------------------------------- */

const hero = document.querySelector(".hero-parallax");

if (hero) {
    window.addEventListener("mousemove", (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 40;
        hero.style.transform = `translateX(${x}px)`;
    });
}