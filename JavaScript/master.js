// Select Landing Page Element
let landingPage = document.querySelector(".landing");

// Get Array Of Images
let imgsArray = ["landing (1).jpg", "landing (2).jpg", "landing (3).jpg", "landing (4).jpg", "landing (5).jpg"];

setInterval(() => {
    // GEt Random Numer
    let random = Math.floor(Math.random() * imgsArray.length);

    // Change Bckground Image URL
    landingPage.style.backgroundImage = `url("../Images/${imgsArray[random]}")`;
}, 5000);


"================================================================================="