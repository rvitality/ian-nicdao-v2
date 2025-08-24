import ParallaxScroll from "./module/ParallaxScroll";
import NavExpand from "./module/NavExpand";

new ParallaxScroll();
new NavExpand();

const modal = document.getElementById("myModal");
const modalImg = document.getElementById("modalImage");
const closeBtn = document.querySelector(".close");

const productImages = document.querySelectorAll(".project-img");
console.log("====================================");
console.log(productImages);
console.log("====================================");

// Open modal when clicking an image
productImages?.forEach((img) => {
    img.addEventListener("click", () => {
        console.log("====================================");
        console.log("fire");
        console.log("====================================");
        
        modal.style.display = "block";
        modalImg.src = img.src;
    });
});

// Close modal on "X" click
closeBtn.onclick = () => {
    modal.style.display = "none";
};

// Close modal on outside click
modal.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};
