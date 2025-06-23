// document.addEventListener("DOMContentLoaded", function() {
//     const lazyImages = document.querySelectorAll("img.lazy");
    
//     const imageObserver = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 const src = img.getAttribute("data-src");
                
//                 if (src) {
//                     img.setAttribute("src", src);
//                     img.classList.add("loaded");
//                     observer.unobserve(img);
//                 }
//             }
//         });
//     });
    
//     lazyImages.forEach(img => {
//         imageObserver.observe(img);
//     });
// });

const imeges = document.querySelectorAll(".container img.lazy")
const onEntry = (elements, observer) => {
    elements.forEach(element => {
        console.log(element);
        if(element.isIntersecting){
             const img = element.target;
             const src = img.getAttribute("data-src");
             if (src) {
                    // img.setAttribute("src", src)
                    // observer.unobserve(img);
                    img.src = src
                    observer.unobserve(img);
                 }
             }
        
    });
}
console.log(imeges);
const observer = new IntersectionObserver(onEntry, {threshold: 0.5})

imeges.forEach(img => {
    observer.observe(img)
})
