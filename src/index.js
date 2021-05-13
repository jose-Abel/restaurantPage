import pageLoad from "./pageLoad";

const divContent = document.getElementById("content");

const h1 = document.createElement("h1");

h1.textContent = "Olive Garden Restaurant";

const image = new Image(500, 500);

image.src = "../src/images/pexels-rene-asmussen-1581384.jpg";

const p1 = document.createElement("p");

p1.textContent = "Everyone has a favorite restaurant that he or she loves to eat at. The best restaurant to go to in Altoona is The Olive Garden. This peaceful place has the most delicious food for all the Italian food lovers out there. The Olive Garden is the most exquisite place to eat and is truly the finest restaurant in town.";

const p2 = document.createElement("p");

p2.textContent = "Every time I walk in to the Olive Garden I obtain the best feeling. No matter how many times I come, I always love to observe what is around me. Each and every comforting smile the employees have on their faces and the soft Italian music playing, always makes me feel relaxed. When I breathe in the aroma of the Italian food, it always reminds me of how hungry I am.";

const p3 = document.createElement("p");

p3.textContent = "The uniquely textured walls produce a smooth yet flowing look. It is almost as I am in a famous building in Italy. The viny plants that clasp to the walls ever so freely give it a natural appearance. The marble tiled floor beneath me gives the restaurant a clean yet warm appearance.";


pageLoad(divContent, [h1, image, p1, p2, p3]);