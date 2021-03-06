/* eslint-disable no-use-before-define */

import createHomePage from './home';
import createMenuPage from './menu';
import createContactPage from './contact';
import loadNavbar from './navbar';

const contentId = document.getElementById('content');

const runHomeTab = () => {
  contentId.innerHTML = '';
  loadNavbar(contentId);
  createHomePage();

  const menuTab = document.getElementById('menu-tab');
  const contactTab = document.getElementById('contact-tab');

  menuTab.addEventListener('click', runMenuTab);
  contactTab.addEventListener('click', runContactTab);
};

const runMenuTab = () => {
  contentId.innerHTML = '';
  loadNavbar(contentId);
  createMenuPage();

  const homeTab = document.getElementById('home-tab');
  const contactTab = document.getElementById('contact-tab');

  homeTab.addEventListener('click', runHomeTab);
  contactTab.addEventListener('click', runContactTab);
};

const runContactTab = () => {
  contentId.innerHTML = '';
  loadNavbar(contentId);
  createContactPage();

  const homeTab = document.getElementById('home-tab');
  const menuTab = document.getElementById('menu-tab');

  homeTab.addEventListener('click', runHomeTab);
  menuTab.addEventListener('click', runMenuTab);
};

document.addEventListener('DOMContentLoaded', () => {
  loadNavbar(contentId);
  createHomePage();

  const homeTab = document.getElementById('home-tab');
  const menuTab = document.getElementById('menu-tab');
  const contactTab = document.getElementById('contact-tab');

  homeTab.addEventListener('click', runHomeTab);
  menuTab.addEventListener('click', runMenuTab);
  contactTab.addEventListener('click', runContactTab);
});