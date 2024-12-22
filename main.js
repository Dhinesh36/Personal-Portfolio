var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Python Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
    // fadeOut: true,
});
// skill
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-fill");
    progressBars.forEach(bar => {
        const skillLevel = bar.getAttribute("data-skill");
        setTimeout(() => {
            bar.style.width = `${skillLevel}%`; 
        }, 300); 
    });
  });

//   testimonials
  const testimonials = document.querySelectorAll('.testimonial');
  let currentIndex = 0;
  
  function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.classList.toggle('active', i === index);
    });
}
function prevTestimonial() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    showTestimonial(currentIndex);
}
function nextTestimonial() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    showTestimonial(currentIndex);
}