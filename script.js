var typed = new Typed(".input", {
    strings: ["a Computer Engineering Student", "an Aspiring Software Developer", "a 1st year college student from NCST"],
    typedSpeed: 1000,
    backspeed: 1000,
    loop: true
})

const toggleBtn = document.querySelector('.toggle-btn');
const navLinks = document.querySelector('.navlinks');

toggleBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


