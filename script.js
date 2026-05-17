// =========================================
// BPC CONSTRUCTION SERVICES
// FULL SCRIPT UPGRADE
// Mobile Menu + Back To Top + Sticky UX
// =========================================

// MOBILE MENU
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.classList.toggle("active");
    });

    // Close mobile menu when link is clicked
    const mobileNavLinks = navbar.querySelectorAll("a");
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", () => {
            navbar.classList.remove("active");
        });
    });
}

// BACK TO TOP BUTTON
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTop.style.display = "block";
        } else {
            backToTop.style.display = "none";
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ACTIVE NAVIGATION HIGHLIGHT BASED ON CURRENT PAGE
const currentPage = window.location.pathname.split("/").pop();
const pageNavLinks = document.querySelectorAll("#navbar a");

pageNavLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
        link.classList.add("active");
    }
});

// SMOOTH FADE-IN EFFECT FOR CARDS ON LOAD
const cards = document.querySelectorAll(".card, .project-card");

window.addEventListener("load", () => {
    cards.forEach((card, index) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";

        setTimeout(() => {
            card.style.transition = "all 0.6s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 100);
    });
});
