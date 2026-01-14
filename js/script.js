const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');



// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple button interaction effect
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mousedown', function() {
        this.style.transform = 'scale(0.95)';
    });
    btn.addEventListener('mouseup', function() {
        this.style.transform = 'translateY(-2px) scale(1)';
    });
});

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Change icon between Bars and X
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});
// Keep your existing menu and scroll logic at the top...

(function(){
    emailjs.init("lFwGzHK4QKOSU4RVv");
})();

// NEW CONTACT FORM LOGIC
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-button');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the page from reloading

    // Change button text to show progress
    submitBtn.innerHTML = 'Sending... <i class="fa-solid fa-spinner fa-spin"></i>';
    submitBtn.disabled = true;

    const serviceID = "service_kfl5ozx";
    const templateID = "template_ar3xlss";

    // Use sendForm instead of send for better compatibility with HTML forms
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            submitBtn.innerHTML = 'Send Message <i class="fa-regular fa-paper-plane"></i>';
            submitBtn.disabled = false;
            alert("Success! Your message has been sent.");
            contactForm.reset(); // Clears the form
        }, (err) => {
            submitBtn.innerHTML = 'Send Message <i class="fa-regular fa-paper-plane"></i>';
            submitBtn.disabled = false;
            alert("Failed to send: " + JSON.stringify(err));
        });
});