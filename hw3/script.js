document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll("img.lazy");
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute("data-src");
                
                if (src) {
                    img.setAttribute("src", src);
                    img.classList.add("loaded");
                    observer.unobserve(img);
                }
            }
        });
    });
    
    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
});