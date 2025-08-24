import ParallaxScroll from "./module/ParallaxScroll";
import NavExpand from "./module/NavExpand";

new ParallaxScroll();
new NavExpand();

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

const productImages = document.querySelectorAll(".project-img");

// Open modal when clicking an image
productImages?.forEach((img) => {
    img.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Close modal on "X" click
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Close modal when clicking anything outside the image
modal.addEventListener("click", (e) => {
    if (e.target !== modalImg) {
        modal.style.display = "none";
    }
});
