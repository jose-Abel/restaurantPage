import loadNavBar from "./navBar";
import {createDivBox, loadDivBox} from "./divBox";

const createMenuPage = () => {

    // Getting HTML element
    const contentId = document.getElementById("content");
    const body = document.body;
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h1");
    const h3 = document.createElement("h1");
    const firstImage = new Image(500, 500);
    const secondImage = new Image(500, 500);
    const thirdImage = new Image(500, 500);
    const fourthImage = new Image(500, 500);
    const fifthImage = new Image(500, 500);
    const sixthImage = new Image(500, 500);
    const seventhImage = new Image(500, 500);
    const eigthImage = new Image(500, 500);
    const ninethImage = new Image(500, 500);
    const tenthImage = new Image(500, 500);
    const eleventhImage = new Image(500, 500);


    // Add content to the HTML elements
    h1.textContent = "Menu Selection";
    h1.textContent = "Foods Selection";
    h1.textContent = "Wine Selection";
    firstImage.src = "";
    secondImage.src = "";
    thirdImage.src = "";
    fourthImage.src = "";
    secondImage.src = "";
    fifthImage.src = "";
    sixthImage.src = "";
    seventhImage.src = "";
    eigthImage.src = "";
    ninethImage.src = "";
    tenthImage.src = "";
    eleventhImage.src = "";

    // Styles to the HTML elements
    body.style.background = "linear-gradient(to right, #64f38c, #f79d00)";
    body.style.fontFamily = "'Pattaya', sans-serif";
    contentId.style.margin = "0 3rem;";
    
    h1.style.textAlign = "center";
    h1.style.color = "#fceabb";
    h1.style.fontSize = "5rem";
    h2.style.textAlign = "center";
    h2.style.color = "#fceabb";
    h2.style.fontSize = "5rem";
    h3.style.textAlign = "center";
    h3.style.color = "#fceabb";
    h3.style.fontSize = "5rem";

    secondImage.style.order = 1;
    fourthImage.style.order = 1;
    sixthImage.style.order = 1;
    eigthImage.style.order = 1;
    tenthImage.style.order = 1;

    // Mounting Navbar
    loadNavBar(contentId);

    // Mounting H1
    document.addEventListener("DOMContentLoaded", () => {
        contentId.appendChild(h1);
    });

    // Mounting H2
    document.addEventListener("DOMContentLoaded", () => {
        contentId.appendChild(h2);
    });


    // Creating the First Div
    let firstDivText1 = "";

    let firstDivText2 = "";

    const firstDivBoxElements = createDivBox(firstImage, firstDivText1, firstDivText2);

    // Mounting First Div
    loadDivBox(contentId, firstDivBoxElements);

}

export default createMenuPage;