// ==========================
// Smooth Fade-in Animation
// ==========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});

// ==========================
// Navbar Shadow on Scroll
// ==========================

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

    }else{

        nav.style.boxShadow = "none";

    }

});
