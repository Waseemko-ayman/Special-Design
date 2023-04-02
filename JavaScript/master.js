// Check If There's Local Storage Color Option
let mainColor = localStorage.getItem("color-option");

if(mainColor !== null) {
    document.documentElement.style.setProperty("--third-color", mainColor);

    // Remove Active Class From All Children
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        
        // Add Active Class On Element With Data-Color === Local Storage Item
        if(element.dataset.color === mainColor) {
            // Add Active Class
            element.classList.add("active");
        }
    });
}

// Random Background Option
let backgroundOption = true;

// Varaible to Control The Background Interval
let backgroundInterval;

// Check If Random Background Local Storage Is Not Item
let backgroundLocalItem = localStorage.getItem("background_option");

if (backgroundLocalItem !== null) {

    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active");
    });

    if (backgroundLocalItem === "true") {

        backgroundOption = true;
        document.querySelector(".random-background .yes").classList.add("active");

    } else {
        backgroundOption = false;
        document.querySelector(".random-background .no").classList.add("active");
        
    }
}

//Toggle Spin Class On Icon
document.querySelector(".toggle-settings").addEventListener("click", () => {
    // Toggle Class Fa-spin For Rotation On Self
    document.querySelector(".Setting-box").classList.toggle("open");
    // Toggle Class Open On Main Settings Box
    document.querySelector(".gear").classList.toggle("fa-spin");
})

// Switch Colors
const colorLi = document.querySelectorAll(".colors-list li");

// Loop On Every List Items 
colorLi.forEach(li => {
    // Click On Every List Items 
    li.addEventListener("click", (e) => {
        // Set Color On Root
        document.documentElement.style.setProperty("--third-color", e.target.dataset.color);

        // Set Color On Local Storage
        localStorage.setItem("color-option", e.target.dataset.color);

        // Handle Active State
        handleActive(e);
    });
});

"======================================="

// Switch Random Background Option
const randomBackEl = document.querySelectorAll(".random-background span");

let datasetBackground = localStorage.getItem("color-option");

// Loop On Every Spans
randomBackEl.forEach(span => {
    // Click On Every Span
    span.addEventListener("click", (e) => {
    
        // Handle Active State
        handleActive(e);
        
        if (e.target.dataset.background === "yes") {
            backgroundOption = true;
            randomizeImgs();
            localStorage.setItem("background_option", true);
        } else {
            backgroundOption = false;
            clearInterval(backgroundInterval);
            localStorage.setItem("background_option", false);
        }

    });
});

"================================================================================="

// Select Landing Page Element
let landingPage = document.querySelector(".landing");

// Get Array Of Images
let imgsArray = ["landing (1).jpg", "landing (2).jpg", "landing (3).jpg", "landing (4).jpg", "landing (5).jpg"];

// Function To Random Imgs
function randomizeImgs() {
    if(backgroundOption === true) {
        backgroundInterval = setInterval(() => {
            // GEt Random Numer
            let random = Math.floor(Math.random() * imgsArray.length);
        
            // Change Bckground Image URL
            landingPage.style.backgroundImage = `url("../Images/${imgsArray[random]}")`;
        }, 1000);
    }
}
randomizeImgs();

"================================================================================="

// Progrss Section
let section = document.querySelector("#our-skills");
let spanProgrss = document.querySelectorAll("#our-skills span");

window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 300) {
        spanProgrss.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    };
};

"================================================================================="

// Create Popup With The Image
let ourGallery = document.querySelectorAll(".gallery img");

ourGallery.forEach((img) => {
    img.addEventListener("click", (e) => {

        // Create Overlay Element
        let overLay = document.createElement("div");

        // Add Class To Overlay
        overLay.className = "popup-overlay";

        // Append Overlay To The Body
        document.body.appendChild(overLay);

        "=============================================="

        // Create The Popup Box
        let popupBox = document.createElement("div");

        // Add Class To popupBox
        popupBox.className = "popup-box";

        "=============================================="

        if (img.alt !== null) {

            // Cretae Heading
            let imgHeading = document.createElement("h2");

            // Add Class To Heading
            imgHeading.className = "title-popup";
            
            // Create Text For Heading
            let textTitle = document.createTextNode(img.alt);

            // Append The Text To The Heading
            imgHeading.appendChild(textTitle);

            // Append The Heading To The Popup Box
            popupBox.appendChild(imgHeading);
        }

        "=============================================="

        // Create The Image
        let popupImage = document.createElement("img");

        // Set Image Source
        popupImage.src = img.src;

        "=============================================="

        // Add Image To Popup Box
        popupBox.appendChild(popupImage);

        document.body.appendChild(popupBox);

        // Create The Close Span
        let closeButton = document.createElement("span");

        // Create The Close Button Text
        let closeButtonText = document.createTextNode("x");

        // Append Text To Close Button
        closeButton.appendChild(closeButtonText);

        // Add Class To Close Button
        closeButton.className = "close-button";

        // Add Close button To The Popup Box
        popupBox.appendChild(closeButton);

    });
});

document.addEventListener("click", (e) => {
    if (e.target.className === "close-button") {
        
        // Remove The Current Popup
        // e.target.parentElement.remove();

        // Remove overlay => طريقة تانية للحذف
        document.querySelector(".popup-overlay").remove();
        document.querySelector(".popup-box").remove();
    }
})

"================================================================================="
// Select All Bullets

let allBullets = document.querySelectorAll(".nav-bullets .bullet");

allBullets.forEach(bullet => {
    bullet.addEventListener("click", (e) => {
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior: "smooth",
        });
    });
});

"================================================================================="
// Floating Action Button

let btnUp = document.getElementById("up");

window.onscroll = function () {
    if (window.scrollY >= 600) {
        btnUp.style.display = "block";
    } else {
        btnUp.style.display = "none";
    }
};

btnUp.onclick = function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
};

"================================================================================="

// Handle Active State

function handleActive(ev) {
    // Remove Active Class From All Children
    ev.target.parentElement.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });

    // Add Active Class On Self
    ev.target.classList.add("active");
}

"================================================================================="

let bulletsSpan = document.querySelectorAll(".bullets-option span");

let bulletsContainer = document.querySelector(".nav-bullets");

let bulletsLocalItem = localStorage.getItem("bullets_option");

if (bulletsLocalItem !== null) {
    bulletsSpan.forEach(span => {

        span.classList.remove("active");

    });

    if (bulletsLocalItem === "block") {
        bulletsContainer.style.display = "block";
        document.querySelector(".bullets-option .yes").classList.add("active");
    } else {
        bulletsContainer.style.display = "none";
        document.querySelector(".bullets-option .no").classList.add("active");
    }
}


bulletsSpan.forEach(span => {
    span.addEventListener("click", (e) => {

        if (span.dataset.display === "show") {
            bulletsContainer.style.display = "block";
            localStorage.setItem("bullets_option", "block");
        } else {
            bulletsContainer.style.display = "none";
            localStorage.setItem("bullets_option", "none");
        }

        // Handle Active State
        handleActive(e);
    });
});

