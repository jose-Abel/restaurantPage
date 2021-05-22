const createNavBar = () => {
    
    // Getting HTML element
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");

    const liArray = [li1, li2, li3];

    // Adding styles to the HTML elements
    ul.style.display = "flex";
    ul.style.justifyContent = "center";

    for(let i = 0; i < liArray.length; i++) {
        console.log(liArray[i]);
        liArray[i].style.marginRight = "2rem";
        liArray[i].style.listStyle = "none";
        liArray[i].style.fontSize = "2rem";
        liArray[i].style.border = "4px solid #fceabb";
        liArray[i].style.padding = "0 5px";
        liArray[i].style.color = "#fceabb";
    }

    // Adding content to the HTML elements
    li1.textContent = "Home";
    li2.textContent = "Menu";
    li3.textContent = "Contact";

    // Returning the HTML elements
    return { nav, ul, li1, li2, li3 }
}

const loadNavBar = (htmlElement) => {
    const { nav, ul, li1, li2, li3 } = createNavBar();
    
    document.addEventListener("DOMContentLoaded", () => {
        htmlElement.appendChild(nav);
        nav.appendChild(ul);
        ul.appendChild(li1);
        ul.appendChild(li2);
        ul.appendChild(li3);
    });
}

export default loadNavBar;