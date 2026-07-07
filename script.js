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
// Animated Statistics Counter

const counters = document.querySelectorAll(".counter");

const statsObserver = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            const counter = entry.target;
            const target = +counter.getAttribute("data-target");

            let count = 0;

            const updateCounter = () => {

                const increment = target / 100;

                if(count < target){

                    count += increment;
                    counter.innerText = Math.ceil(count);

                    setTimeout(updateCounter,20);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

            statsObserver.unobserve(counter);

        }

    });

}, {
    threshold:0.5
});


counters.forEach(counter=>{
    statsObserver.observe(counter);
});
const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll",()=>{

if(window.scrollY > 400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});


topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};
