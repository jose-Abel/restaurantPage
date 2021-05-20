import pageLoad from "./pageLoad";

import createHomePage from "./home";

const divContent = document.getElementById("content");

const {h1, image, p1, p2, p3} = createHomePage();

pageLoad(divContent, [h1, image, p1, p2, p3]);