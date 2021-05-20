const createNavBar = () => {
    
    // Create the HTML elements
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    // Styles to the HTML elements
    ul.style.display = "flex";
    ul.style.justifyContent = "center";

    for(i = 1; i <= 3; i++) {
        li[i].style.marginRight = "2rem";
        li[i].style.listStyle = "none";
        li[i].style.fontSize = "2rem";
        li[i].style.border = "4px solid #fceabb";
        li[i].style.padding = "0 5px";
        li[i].style.color = "#fceabb";
    }


    // Add content to the HTML elements
    li1.textContent = "Home";
    li2.textContent = "Menu";
    li3.textContent = "Contact";

   
    // Append the HTML elements to the DOM
    nav.appendChild(ul);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
}


const createDivBox = () => {
    // Create the HTML elements
    const div1 = document.createElement("div");
    const div2 = document.createElement("siv");
    const div3 = document.createElement("div");
    const image = new Image(500, 500);

    // Styles to the HTML elements

    // Add content to the HTML elements
    image.src = "../src/images/pexels-rene-asmussen-1581384.jpg";


    // Append the HTML elements to the DOM

}



const createHomePage = () => {

    // Create the HTML elements
    createNavBar();
    const body = document.getElementsByTagName("body");
    const contentId = document.getElementById("content");
    const h1 = document.createElement("h1");


    // Styles to the HTML elements
    body.style.background = "linear-gradient(to right, #64f38c, #f79d00)";
    body.style.fontFamily = "'Pattaya', sans-serif";
    contentId.style.margin = "0 3rem;";
    h1.style.textAlign = "center";
    h1.style.color = "linear-gradient(to right, #f8b500, #fceabb)";
    h1.fontSize = "5rem";


    // Add content to the HTML elements
    h1.textContent = "Olive Garden Restaurant";


    // Return the HTML elements created to be appended to the DOM by index.js

    return {navBar, homeTab, contactTab, menuTab, h1, image, div1, p2, p3}

}

export default createHomePage;