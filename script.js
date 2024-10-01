let date = document.getElementById("date");

const heroSection = document.querySelector("#header");
const scrollToTop = document.querySelector("#scroll-to-top");

window.addEventListener("scroll", () => {
    const heroSectionTop = heroSection.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroSectionTop) {
        scrollToTop.classList.add("show");
        scrollToTop.classList.remove("hidden");
    } else {
        scrollToTop.classList.add("hidden");
        scrollToTop.classList.remove("show");
    }
});

// scroll to top button functionality
scrollToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState({}, "", window.location.pathname);
});

// footer section date manipulation to show exact year
date.innerText = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("[data-scroll-to]");

    links.forEach((link) => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-scroll-to");
            const target = document.getElementById(targetId);
            target.scrollIntoView({ behavior: "smooth" });

            history.pushState({},"",`${window.location.pathname}?section=${targetId}`);
        });
    });
});
