import loadNavBar from "./navBar";
import { createDivBox, loadDivBox } from "./divBox";

const createMenuPage = () => {

    // Getting HTML element
    const contentId = document.getElementById("content");
    const body = document.body;
    const h1 = document.createElement("h1");
    const h2 = document.createElement("h2");
    const secondH2 = document.createElement("h2");
    const imagesArray = [];
    const h3Array = [];
    const divBoxElementsArray = [];

    for(let i = 0; i < 11; i++) {
        let newImage = new Image(500, 500);
        imagesArray.push(newImage);
        console.log(newImage);

        let newH3 = document.createElement("h3");
        // newH3.setAttribute("class", "h3-element");
        h3Array.push(newH3);
    }

    // Add content to the HTML elements
    h1.textContent = "Menu Selection";
    h2.textContent = "Foods Selection";
    secondH2.textContent = "Wine Selection";

    const imagesArraySrc = ["../src/images/gumbo-shrimp.jpg", "../src/images/shellfish-stew.jpg", "../src/images/prawn-crayfish-cocktail.jpg", "../src/images/Roasted-Leg-of-Lamb.jpg", "../src/images/Lamb-Ribs.jpg", "../src/images/Pineapple-Shrimp-Rice-Noodle-recipe.jpg", "../src/images/spaghettis_a_la_mariniere.jpg", "../src/images/chateauneuf-du-pape-la-fiole-du-pape.png", "../src/images/Louis Latour Pinot Noir.jpeg", "../src/images/Mouton Cadet, Baron P. De Roths.jpeg", "../src/images/Beaujolais Villages, Georges Duboeuf.jpg"];

    const h3ContentArray = ["Gumbo Shrimp", "Shellfish Stew", "Prawn of Crayfish", "Leg of Lamb", "Lamb Ribs", "Pineapple Shrimp Noodle Bowls", "Spaghetti a la Mariniere", "Chateauneuf du Pape, La Fiole", "Louis Latour Pinot Noir", "Mouton Cadet, Baron P. De Roths", "Beaujolais Villages, Georges Duboeuf"];

    const span1ContentArray = ["his spicy Cajun gumbo, a stew originating in Louisiana in the 18th century, gains much of its flavor from the dark roux and its characteristic thickness from file, an herb made from the ground leaves of the sassafras tree.", "An all-star recipe for fish stew with a Sicilian twist! The comfort of Italian flavors in one delicious stew cooked in a white wine-tomato broth with garlic, capers, raisins more!", "Uses a mixture of big meaty prawns and smaller sweet ones for texture and flavour, with added crayfish for a special festive starter.", "Boneless leg of lamb roast with good marbling (white flecks of fat within the meat muscle), and meat that is fine textured and firm.", "Lamb Ribs are prepared from the ribs, backbone, and in some cases, the rib eye muscle. The meat in lamb ribs is close to the bone, which makes them very flavorful.", "Caramelized pineapple cubes and sautéed shrimp tossed in a sweet, sour, and spicy sauce with lots of fresh basil. Spooned over rice noodles and topped with crunchy cucumbers, onions, and peanuts.", "An excellent culinary alternative and an exquisite and tasty dish. The secret to flavorful marinara spaghetti lies in the sauce, loaded with a penetrating and delicious seafood aroma.", "Nose – Fruity and spiced. Reminiscent of ripe berries, cherry “eau-de-vie”, warm spices and truffles.", "The result of a long history, Burgundy and its wines are known worldwide. Pinot Noir is a native grape variety of the area. Bourgogne Pinot Noir is the regional appellation whose wines can come from any part of Burgundy. This wine exhibits the characteristics of the great red Burgundies.", "Colour: A still-youthful ruby red with a violet hint. Nose: Aromas of ripe fruit (black and red cherry, blackcurrant) and a touch of spice.", "An intense, brilliant cherry colour with purplish tints. Complex nose with red and black berry aromas. A smooth wine with fine tannins, harmonious and complete."];
    
    const span2ContentArray = ["Onions, celery and green peppers, the 'holy trinity' of both Creole and Cajun cooking, add flavor and substance to the thick shrimp and sausage stew, which is served over a heaping portion of white rice.", "This fish stew recipe is quite simple, but the balance of flavors is truly incredible. From lovely and familiar aromatics like onions and garlic--providing the glorious start to this recipe--to a hint of sweetness from golden raisins balanced with tart capers. All the while, a white wine and tomato-based broth marries everything together.", "The sauce is rich and refreshing with a spicy kick. You can make the sauce in advance then assemble everything just before serving.", "Marinated in a citrus rosemary marinade, extra virgin olive oil, garlic, pepper and lemon juice, sear it on the outside and slow-cook-low-heat method until tender.", "Slow grilled the ribs with a salt, crushed garlic and sage rub. The rib is plenty meaty and the fat added a wonderful flavor and rendered off nicely. Taste absolutely wonderful.", "Rice noodles among bowls. Spoon pineapple-shrimp mixture over noodles and drizzle with extra sauce. Top with cucumbers, onion, peanuts, and more basil. Served with lime wedges alongside for squeezing over.", "Ribbony mafalda Spaghetti captures briny ricotta salata, tangy vegetables, and nutty roasted chickpeas for great flavors in every bite.", "Palate – Elegant and well balanced, fleshy and powerful, with long lasting aromas: fruits (blackcurrant, strawberry jam), soft spices (pepper, clove).", "Of a bright deep ruby hue this Bourgogne pinot noir 2019 offers nice cherry aromas on the nose. The palate is fresh and round with blackcurrant bud notes. A gourmet wine with silky tannins.", "Palate: A powerful attack leads in a solidly-structured mid-palate, combining rich and fresh flavours with tightly-knit tannins. A wine with significant ageing potential, its expressive fruitiness makes it readily accessible.", "Ideal for all occasions, from aperitif to cheese."];

    for(let i = 0; i < imagesArray.length; i++) {
        imagesArray[i].src = imagesArraySrc[i];

        h3Array[i].textContent = h3ContentArray[i];
    }

    // Styles to the HTML elements
    body.style.background = "linear-gradient(to right, #64f38c, #f79d00)";
    body.style.fontFamily = "'Pattaya', sans-serif";
    contentId.style.margin = "0 3rem;";
    h1.style.textAlign = "center";
    h1.style.color = "#fceabb";
    h1.style.fontSize = "5rem";
    h2.style.textAlign = "center";
    h2.style.color = "#fceabb";
    h2.style.fontSize = "2rem";
    secondH2.style.textAlign = "center";
    secondH2.style.color = "#fceabb";
    secondH2.style.fontSize = "2rem";

    for(let i = 1; i < imagesArray.length; i+=2) {
        imagesArray[i].style.order = 1;
    }

    // Mounting Navbar
    loadNavBar(contentId);

    // Mounting H1
    contentId.appendChild(h1);

    // Mounting H2
    contentId.appendChild(h2);

    // Creating the DivBoxes
    for(let i = 0; i < 11; i++) {
        let newDivBoxElements = createDivBox({imageElement: imagesArray[i], span1Content: span1ContentArray[i], span2Content: span2ContentArray[i], h3Element: h3Array[i]});

        divBoxElementsArray.push(newDivBoxElements);
    }

    // Mounting DivBoxes
    for(let i = 0; i < divBoxElementsArray.length; i++) {
        loadDivBox(contentId, divBoxElementsArray[i]);

        if(i === 6) {
            contentId.appendChild(secondH2);
        }
    }
}

export default createMenuPage;