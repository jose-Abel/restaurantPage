const createDivBox = (imageElement, span1Content, span2Content) => {

    // Getting HTML element
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");

    // Adding styles to the HTML elements
    div1.style.display = "flex";
    div1.style.margin = "4rem 0";
    div1.style.borderRadius = "5rem";
    div1.style.border = "5px solid #fceabb";
    
    if(!imageElement.style.width) {
        imageElement.style.width = "500px";
        imageElement.style.height = "500px";
        imageElement.style.borderRadius = "20%";
    }

    div2.style.display = "flex";
    div2.style.flexDirection = "column";
    div2.style.lineHeight = "2";
    div2.style.fontSize = "1.5rem";
    div2.style.justifyContent = "space-around";
    span1.style.marginLeft = "1.5rem";
    span2.style.marginLeft = "1.5rem";

    // Adding content to the HTML elements
    span1.textContent = span1Content;
    span2.textContent = span2Content;

    // Returning the HTML elements
    return { div1, imageElement, div2, span1, span2 }
}

const loadDivBox = (htmlElement, { div1, imageElement, div2, span1, span2 }) => {

    document.addEventListener("DOMContentLoaded", () => {
        htmlElement.appendChild(div1);
        div1.appendChild(imageElement);
        div1.appendChild(div2);
        div2.appendChild(span1);
        div2.appendChild(span2);
    });
}

export {createDivBox, loadDivBox}