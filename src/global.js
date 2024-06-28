// for header and footer to every page
document.body.insertAdjacentHTML("afterbegin", Header);
document.body.insertAdjacentHTML("beforeend", Footer);
document
    .getElementById("whatsapp-floating-icon")
    .insertAdjacentHTML("afterbegin", whatsappIcons);

let mob_header = document.querySelector("#mob_header");
let btn = document.querySelector("#menu_toggle_btn");
let close_btn = document.getElementById("close_btn");
mob_header.insertAdjacentHTML("afterbegin", Footer);
close_btn.addEventListener(
    "click",
    () => {
        mob_header.classList.toggle("hidden");
    },
    false
);
btn.addEventListener(
    "click",
    () => {
        mob_header.classList.toggle("hidden");
    },
    false
);

// scroll to top btn
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > window.innerHeight) {
        scrollToTopBtn.classList.remove("hidden");
        scrollToTopBtn.classList.add("block");
    } else {
        scrollToTopBtn.classList.remove("block");
        scrollToTopBtn.classList.add("hidden");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    gsap.to(window, { scrollTo: { y: 0, autoKill: true }, duration: 1 });
});

//      ANIMATION STARTS
let tl = gsap.timeline();
tl.from("#logo-img, #menu-item", {
    y: -30,
    opacity: 0,
    delay: 1,
    duration: 0.5,
    stagger: 0.1,
});

let menuItems = document.querySelectorAll("#menu-item");
menuItems.forEach((item) => {
    item.addEventListener("mouseover", () => {
        const hoverElement = item.querySelector(".menu-item-active");
        const el = item.querySelector(".menu-item");
        gsap.to(hoverElement, {
            yPercent: -70,
            duration: 0.3,
            ease: "sine.in",
        });
        gsap.to(el, { yPercent: -100, duration: 0.3, ease: "sine.out" });
    });
});

// -------------------------- CONTENT ANIMATION
let tlContent = gsap.timeline({
    scrollTrigger: {
        trigger: "#home-content-title",
        scroller: "body",
        // markers: false,
        // scrub: true,
        start: "top 40%",
        end: "top -10%",
        // toggleActions: "play reverse play reverse",
    },
});

tlContent.from(
    "#home-content-title, #home-content-subtitle, #home-content-desc, #home-content-btn",
    {
        opacity: 0,
        x: -100,
        duration: 0.5,
        stagger: 0.1,
    }
);

// -------------------------- CATEGORY ANIMATION
let tlCategory = gsap.timeline({
    scrollTrigger: {
        trigger: "#architectural",
        scroller: "body",

        start: "top 60%",
        end: "top -10%",
    },
});

tlCategory.from("#architectural, #residential, #commercial", {
    opacity: 0,
    x: -100,
    duration: 0.5,
    stagger: 0.1,
});

tlCategory.from(
    "#video2",
    {
        opacity: 0,
        x: 100,
        duration: 0.5,
        stagger: 0.1,
    },
    "-=0"
);

gsap.from("#footer", {
    // Use gsap.to for opacity and transform animations
    opacity: 0, // Start with opacity 0
    x: 0, // Start at the original x position
    scrollTrigger: {
        trigger: "#footer", // Element to trigger animation on scroll
        start: "top 50%", // Animation starts when #footer enters viewport bottom
        end: "top -10%", // Animation ends when #footer exits viewport top + 100vh
        //scrub: true,          // Link animation progress to scrolling (scrub)
    },
});