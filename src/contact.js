import { createDivBox, loadDivBox } from './divBox';

const createContactPage = () => {
  // Getting HTML element
  const contentId = document.getElementById('content');
  const { body } = document;
  const h1 = document.createElement('h1');
  const onlyImage = new Image(500, 500);

  // Styles to the HTML elements
  body.style.background = 'linear-gradient(to right, #64f38c, #f79d00)';
  body.style.fontFamily = "'Pattaya', sans-serif";
  contentId.style.margin = '0 3rem;';
  h1.style.textAlign = 'center';
  h1.style.color = '#fceabb';
  h1.style.fontSize = '5rem';

  // Add content to the HTML elements
  h1.textContent = 'Contact Us';
  onlyImage.src = './images/restaurant2.jpg';
  const span1Text = 'Contact Us main Chef at: Chef Smith, chefEmail@fake.com, 555-555-5554, 123 Main Dr, Venus, FL 33960, EE. UU.';
  const span2Text = '';

  const divBoxElements = createDivBox(
    { imageElement: onlyImage, span1Content: span1Text, span2Content: span2Text },
  );

  // Mounting the HTML Elements
  contentId.appendChild(h1);
  loadDivBox(contentId, divBoxElements);
};

export default createContactPage;