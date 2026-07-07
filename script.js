// Fade in sections as they scroll into view

const sections = document.querySelectorAll(
    ".card, .gallery-box, .review-card, section h2"
);

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.2
});

sections.forEach(section => {
    section.classList.add("hidden");
    observer.observe(section);
});


// Contact form demo submission

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const button = form.querySelector("button");

    button.textContent = "Sending...";
    button.disabled = true;

    setTimeout(() => {
        alert(
            "Thank you for contacting PowerPressure Washing! We'll reach out shortly with your free quote."
        );

        form.reset();

        button.textContent = "Send Request";
        button.disabled = false;
    }, 1200);
});
