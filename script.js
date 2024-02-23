//--- hide and show navbar ---
const nav = document.querySelector(".navbar");

let lastScrollY = window.scrollY;

//---toggle darkmode--- 
const darkModeIcon = document.querySelector("#darkMode-icon");


// ---pages botton---
const btnAbout = document.getElementById("btn-about");
const btnPortfolio = document.getElementById("btn-portfolio");
const btnContact = document.getElementById("btn-contact");


// --- navbar pages---
const topPageNav = document.getElementById("top-page-nav");
const btnAboutNav = document.getElementById("btn-about-nav");
const btnPortfolioNav = document.getElementById("btn-portfolio-nav");
const btnContactNav = document.getElementById("btn-contact-nav");


//--- footer nav pages ---
const topNav = document.getElementById("top-nav");
const aboutNav = document.getElementById("about-nav");
const portfolioNav = document.getElementById("portfolio-nav");
const contactNav = document.getElementById("contact-nav");


// ---sections pages---
const topPage = document.getElementById("top-page");
const aboutPage = document.getElementById("about-page");
const portfolioPage = document.getElementById("portfolio-page");
const contactPage = document.getElementById("contact-page");


// ---toggle darkmode---

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("fa-cloud-sun");
    document.body.classList.toggle("dark-icon");
}


//--- hide and show navbar---
window.addEventListener("scroll", () => {
  if(lastScrollY < window.scrollY) {
    nav.classList.add("nav-hidden");
  } else{
    nav.classList.remove("nav-hidden");
  }

  lastScrollY = window.scrollY;
});


//--- pages bottons---
btnAbout.addEventListener("click", () => {
  aboutPage.style.display = "block";
  topPage.style.display = "none";
})

btnPortfolio.addEventListener("click", () => {
  portfolioPage.style.display = "block";
  aboutPage.style.display = "none";
  
})

btnContact.addEventListener("click", () => {
  contactPage.style.display = "block";
  portfolioPage.style.display = "none";
  
})


//--- navbar pages---
topPageNav.addEventListener("click", () => {
  topPage.style.display = "block";  
  aboutPage.style.display = "none";
  portfolioPage.style.display = "none";
  contactPage.style.display = "none";
})


btnAboutNav.addEventListener("click", () => {
  aboutPage.style.display = "block";
  topPage.style.display = "none";  
  portfolioPage.style.display = "none";
  contactPage.style.display = "none";
})

btnPortfolioNav.addEventListener("click", () => {
  portfolioPage.style.display = "block";
  aboutPage.style.display = "none";
  topPage.style.display = "none";  
  contactPage.style.display = "none";
  
})

btnContactNav.addEventListener("click", () => {
  contactPage.style.display = "block";
  portfolioPage.style.display = "none";
  aboutPage.style.display = "none";
  topPage.style.display = "none";  
  
})

//--- footer nav pages---
topNav.addEventListener("click", () => {
  topPage.style.display = "block";  
  aboutPage.style.display = "nne";
  portfolioPage.style.display = "none";
  contactPage.style.display = "none";
})

aboutNav.addEventListener("click", () => {
  aboutPage.style.display = "block";
  topPage.style.display = "none";  
  portfolioPage.style.display = "none";
  contactPage.style.display = "none";
})

portfolioNav.addEventListener("click", () => {
  portfolioPage.style.display = "block";
  aboutPage.style.display = "none";
  topPage.style.display = "none";  
  contactPage.style.display = "none";
  
})

contactNav.addEventListener("click", () => {
  contactPage.style.display = "block";
  portfolioPage.style.display = "none";
  aboutPage.style.display = "none";
  topPage.style.display = "none";  
  
})