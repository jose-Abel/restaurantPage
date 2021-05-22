import loadNavBar from "./navBar";
import {createDivBox, loadDivBox} from "./divBox";

const createHomePage = () => {

    // Getting HTML element
    const contentId = document.getElementById("content");
    const body = document.body;
    const h1 = document.createElement("h1");
    const firstImage = new Image(500, 500);
    const secondImage = new Image(500, 500);
    const thirdImage = new Image(500, 500);

    // Add content to the HTML elements
    h1.textContent = "Olive Garden Restaurant";
    firstImage.src = "../src/images/pexels-rene-asmussen-1581384.jpg";
    secondImage.src = "../src/images/clock.png";
    thirdImage.src = "../src/images/location.png";

    // Styles to the HTML elements
    body.style.background = "linear-gradient(to right, #64f38c, #f79d00)";
    body.style.fontFamily = "'Pattaya', sans-serif";
    contentId.style.margin = "0 3rem;";
    h1.style.textAlign = "center";
    h1.style.color = "#fceabb";
    h1.style.fontSize = "5rem";
    secondImage.style.order = 1;
    secondImage.style.width = "200px";
    secondImage.style.height = "200px";
    secondImage.style.borderRadius = "20%";

    // Mounting Navbar
    loadNavBar(contentId);

    // Mounting H1
    document.addEventListener("DOMContentLoaded", () => {
        contentId.appendChild(h1);
    });


    // Creating the First Div
    let firstDivText1 = "Join us at Olive Garden Restaurant for great food, great drinks, and great company. You can relax and enjoy specials during your special events. We’ve got a fully stocked bar, comfortable seating, free Wi-Fi, and a spacious outdoor covered deck area.";

    let firstDivText2 = "You can choose from our wide range of beers, wines, and spirits while enjoying a freshly prepared meal from menu. Our happy hour specials run from 2 to 6 p.m. Olive Garden Restaurant is a fantastic place to bring family and friends to enjoy the hospitality and community spirit.";

    const firstDivBoxElements = createDivBox(firstImage, firstDivText1, firstDivText2);

    // Mounting First Div
    loadDivBox(contentId, firstDivBoxElements);



    // Creating the Second Div
    let secondDivText1 = "Hours of Operation:";
    
    let secondDivText2 = "Sunday: 8am - 8pm / Monday: 6am - 6pm / Tuesday: 6am - 6pm / Wednesday: 6am - 6pm / Thursday: 6am - 10pm / Friday: 6am - 10pm / Saturday: 8am - 10pm";
    
    const secondDivBoxElements = createDivBox(secondImage, secondDivText1, secondDivText2);

    // Mounting Second Div
    loadDivBox(contentId, secondDivBoxElements);



    // Creating the Third Div
    let thirdDivText1 = "123 Main Dr, Venus, FL 33960, EE. UU.";

    let thirdDivText2 = "";
    
    const thirdDivBoxElements = createDivBox(thirdImage, thirdDivText1, thirdDivText2);

    // Mounting Third Div
    loadDivBox(contentId, thirdDivBoxElements);

}

export default createHomePage;