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
    if (backgroundLocalItem === "true") {
        backgroundOption = true;
    } else {
        backgroundOption = false;
    }

    document.querySelectorAll(".random-background span").forEach(element => {
        element.classList.remove("active");
    });

    if (backgroundLocalItem === "true") {
        document.querySelector(".random-background .yes").classList.add("active");
    } else {
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

        // Remove Active Class From All Children
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        // Add Active Class On Self
        e.target.classList.add("active");
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

        // Remove Active Class From All Childrens
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });

        e.target.classList.add("active");
        
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