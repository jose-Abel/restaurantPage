import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";
import loadNavbar from "./navbar";

const contentId = document.getElementById("content");


document.addEventListener("DOMContentLoaded", () => {
    const contentId = document.getElementById("content");

    loadNavbar(contentId);
    createHomePage();

    const homeTab = document.getElementById("home-tab");
    const menuTab = document.getElementById("menu-tab");
    const contactTab = document.getElementById("contact-tab");
    
    homeTab.addEventListener("click", runHomeTab);
    menuTab.addEventListener("click", runMenuTab);
    contactTab.addEventListener("click", runContactTab);
});

const runHomeTab = () => {
    content.innerHTML = "";
    loadNavbar(contentId);
    createHomePage();

    const menuTab = document.getElementById("menu-tab");
    const contactTab = document.getElementById("contact-tab");

    menuTab.addEventListener("click", runMenuTab);
    contactTab.addEventListener("click", runContactTab);
}

const runMenuTab = () => {
    content.innerHTML = "";
    loadNavbar(contentId);
    createMenuPage();

    const homeTab = document.getElementById("home-tab");
    const contactTab = document.getElementById("contact-tab");

    homeTab.addEventListener("click", runHomeTab);
    contactTab.addEventListener("click", runContactTab);
}

const runContactTab = () => {
    content.innerHTML = "";
    loadNavbar(contentId);
    createContactPage();

    const homeTab = document.getElementById("home-tab");
    const menuTab = document.getElementById("menu-tab");

    homeTab.addEventListener("click", runHomeTab);
    menuTab.addEventListener("click", runMenuTab);
}