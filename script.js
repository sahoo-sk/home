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

document.querySelector('.general-action-button').addEventListener('click', function() {
    // 1. Collect the data from the form fields
    const serviceID = "service_kfl5ozx";
    const templateID = "template_ar3xlss";

    const params = {
        from_name: document.querySelector('.standard-text-input-field-element[placeholder="John Doe"]').value,
        reply_to: document.querySelector('input[type="email"]').value,
        subject: document.querySelector('.standard-text-input-field-element[placeholder="Subject of Topic"]').value,
        message: document.querySelector('.multiline-text-area-input-element').value,
    };

    // 2. Send the email
    emailjs.send(serviceID, templateID, params)
        .then((res) => {
            // Clear inputs on success
            alert("Success! Your message has been sent.");
            console.log("Status:", res.status, "Text:", res.text);
            
            // Optional: Reset the form
            document.querySelector('.inquiry-submission-form-element').reset();
        })
        .catch((err) => {
            alert("Failed to send message. Please try again.");
            console.error("EmailJS Error:", err);
        });
});