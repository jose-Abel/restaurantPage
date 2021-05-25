import { createDivBox, loadDivBox } from './divBox';

const createHomePage = () => {
  // Getting HTML element
  const contentId = document.getElementById('content');
  const { body } = document;
  const h1 = document.createElement('h1');
  const imagesArray = [];

  for (let i = 0; i < 3; i += 1) {
    const newImage = new Image(500, 500);
    imagesArray.push(newImage);
  }

  // Add content to the HTML elements
  h1.textContent = 'Olive Garden Restaurant';
  imagesArray[0].src = './images/pexels-rene-asmussen-1581384.jpg';
  imagesArray[1].src = './images/clock.png';
  imagesArray[2].src = './images/location.png';

  // Styles to the HTML elements
  body.style.background = 'linear-gradient(to right, #64f38c, #f79d00)';
  body.style.fontFamily = "'Pattaya', sans-serif";
  contentId.style.margin = '0 3rem;';
  h1.style.textAlign = 'center';
  h1.style.color = '#fceabb';
  h1.style.fontSize = '5rem';
  imagesArray[1].style.order = 1;
  imagesArray[1].style.width = '200px';
  imagesArray[1].style.height = '200px';
  imagesArray[1].style.borderRadius = '20%';

  // Creating the First Div
  const firstDivSpan1Text = 'Join us at Olive Garden Restaurant for great food, great drinks, and great company. You can relax and enjoy specials during your special events. We’ve got a fully stocked bar, comfortable seating, free Wi-Fi, and a spacious outdoor covered deck area.';

  const firstDivSpan2Text = 'You can choose from our wide range of beers, wines, and spirits while enjoying a freshly prepared meal from menu. Our happy hour specials run from 2 to 6 p.m. Olive Garden Restaurant is a fantastic place to bring family and friends to enjoy the hospitality and community spirit.';

  const firstDivBoxElements = createDivBox({
    imageElement: imagesArray[0], span1Content: firstDivSpan1Text, span2Content: firstDivSpan2Text,
  });

  // Creating the Second Div
  const secondDivSpan1Text = 'Hours of Operation:';

  const secondDivSpan2Text = 'Sunday: 8am - 8pm / Monday: 6am - 6pm / Tuesday: 6am - 6pm / Wednesday: 6am - 6pm / Thursday: 6am - 10pm / Friday: 6am - 10pm / Saturday: 8am - 10pm';

  const secondDivBoxElements = createDivBox({
    imageElement: imagesArray[1],
    span1: secondDivSpan1Text,
    span2: secondDivSpan2Text,
  });

  // Creating the Third Div
  const thirdDivSpan1Text = '123 Main Dr, Venus, FL 33960, EE. UU.';

  const thirdDivSpan2Text = '';

  const thirdDivBoxElements = createDivBox({
    imageElement: imagesArray[2],
    span1Content: thirdDivSpan1Text,
    span2Content: thirdDivSpan2Text,
  });

  // Mounting the HTML Elements
  contentId.appendChild(h1);
  loadDivBox(contentId, firstDivBoxElements);
  loadDivBox(contentId, secondDivBoxElements);
  loadDivBox(contentId, thirdDivBoxElements);
};

export default createHomePage;