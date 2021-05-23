const createDivBox = ({
  imageElement, span1Content, span2Content, h3Element = '',
}) => {
  // Getting HTML element
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const span1 = document.createElement('span');
  const span2 = document.createElement('span');

  // Adding styles to the HTML elements
  div1.style.display = 'flex';
  div1.style.margin = '4rem 0';
  div1.style.borderRadius = '5rem';
  div1.style.border = '5px solid #fceabb';

  if (imageElement.style.width !== '200px') {
    imageElement.style.width = '500px';
    imageElement.style.height = '500px';
    imageElement.style.borderRadius = '20%';
  }

  if (h3Element) {
    h3Element.style.textAlign = 'center';
    h3Element.style.color = '#fceabb';
    h3Element.style.fontSize = '2rem';
  }

  div2.style.display = 'flex';
  div2.style.flexDirection = 'column';
  div2.style.lineHeight = '2';
  div2.style.fontSize = '1.5rem';
  div2.style.justifyContent = 'space-around';
  span1.style.marginLeft = '1.5rem';
  span2.style.marginLeft = '1.5rem';
  span1.textContent = span1Content;
  span2.textContent = span2Content;

  // Returning the HTML elements
  if (h3Element) {
    return {
      div1, imageElement, div2, h3Element, span1, span2,
    };
  }

  return {
    div1, imageElement, div2, span1, span2,
  };
};

const loadDivBox = (htmlElement, elements) => {
  const {
    div1, imageElement, div2, span1, span2, h3Element,
  } = elements;

  if (!h3Element) {
    htmlElement.appendChild(div1);
    div1.appendChild(imageElement);
    div1.appendChild(div2);
    div2.appendChild(span1);
    div2.appendChild(span2);
  } else {
    htmlElement.appendChild(div1);
    div1.appendChild(imageElement);
    div1.appendChild(div2);
    div2.appendChild(h3Element);
    div2.appendChild(span1);
    div2.appendChild(span2);
  }
};

export { createDivBox, loadDivBox };