// =====================================================
// MOBILE MENU
// =====================================================

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-menu");


menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("open");

});


// Close menu after clicking a link

document.querySelectorAll(".nav-menu a").forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

    });

});



// =====================================================
// SCROLL REVEAL ANIMATION
// =====================================================

const revealElements =
    document.querySelectorAll(".reveal");


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach((element) => {

    observer.observe(element);

});



// =====================================================
// CURRENT YEAR
// =====================================================

document.getElementById("year").textContent =
    new Date().getFullYear();



// =====================================================
// SMOOTH NAVIGATION
// =====================================================

document.querySelectorAll('a[href^="#"]').forEach((link) => {

    link.addEventListener("click", function (event) {

        const target =
            document.querySelector(this.getAttribute("href"));

        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});



// =====================================================
// NAVBAR SHADOW ON SCROLL
// =====================================================

window.addEventListener("scroll", () => {

    const navbar =
        document.querySelector(".navbar");

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 10px 35px rgba(0,0,0,.07)";

    } else {

        navbar.style.boxShadow = "none";

    }

});