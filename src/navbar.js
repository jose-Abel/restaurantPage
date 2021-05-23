const createNavbar = () => {
  // Getting HTML element
  const nav = document.createElement('nav');
  const ul = document.createElement('ul');
  const li1 = document.createElement('li');
  const li2 = document.createElement('li');
  const li3 = document.createElement('li');
  const a1 = document.createElement('a');
  const a2 = document.createElement('a');
  const a3 = document.createElement('a');
  const liArray = [li1, li2, li3];
  const aArray = [a1, a2, a3];

  // Adding styles to the HTML elements
  ul.style.display = 'flex';
  ul.style.justifyContent = 'center';

  for (let i = 0; i < liArray.length; i++) {
    liArray[i].style.marginRight = '2rem';
    liArray[i].style.listStyle = 'none';
    liArray[i].style.fontSize = '2rem';
    liArray[i].style.border = '4px solid #fceabb';
    liArray[i].style.padding = '0 5px';
    liArray[i].style.color = '#fceabb';

    aArray[i].type = 'button';
    aArray[i].style.cursor = 'pointer';
  }

  // Adding content to the HTML elements
  a1.textContent = 'Home';
  a2.textContent = 'Menu';
  a3.textContent = 'Contact';

  // Adding ID's to the Nav elements
  nav.setAttribute('id', 'nav-bar');
  a1.setAttribute('id', 'home-tab');
  a2.setAttribute('id', 'menu-tab');
  a3.setAttribute('id', 'contact-tab');

  // Returning the HTML elements
  return {
    nav, ul, li1, li2, li3, a1, a2, a3,
  };
};

const loadNavbar = (htmlElement) => {
  const {
    nav, ul, li1, li2, li3, a1, a2, a3,
  } = createNavbar();

  htmlElement.appendChild(nav);
  nav.appendChild(ul);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  li1.appendChild(a1);
  li2.appendChild(a2);
  li3.appendChild(a3);
};

export default loadNavbar;