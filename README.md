![](https://img.shields.io/badge/Microverse-blueviolet)

# Restaurant Page

The Microverse Restaurant Page v1.1 project for Javascript module. Consisting on continue practicing DOM manipulation by dynamically rendering a simple restaurant website. Build using JavaScript alone to generate the entire contents of the website. 

It has 3 pages, the Home, Menu and Contact page. The Home page is rendered first once the DOMContentLoaded event it's called in index.js, then it attached on click event listeners to all the buttons in the navigation bar, that calls a different callback depending on the button clicked to generate it's respective module for the Home, Menu and Contact pages. The modules are the home.js in charge of generating the Home page, menu.js in charge of generating the Menu page, contact.js in charge of generating the Contact page, and to make less code a divBox.js module and a navbar.js was created, the divBox handles the creation of a div that generates the content base on the different inputs and the navbar in charge of generating a navbar for the navigation.

## Built With
- Javascript


## Author
- 👤GitHub: [Jose Abel Ramirez](https://github.com/jose-Abel)
- Linkedin: [Jose Abel Ramirez Frontany](https://www.linkedin.com/in/jose-abel-ramirez-frontany-7674a842/)

## Getting Started
In order to run locally this project type the following commands over the terminal in Linux or Mac or the Windows cmd console, install the live-server first:

- npm -g live-server
- git clone https://github.com/jose-Abel/restaurantPage.git
- cd restaurantPage
- live-server


## Live Version
[live version](https://jose-abel-restaurant-page-js.netlify.app/)


## Run linters
For the linters, this tests runs once you make a PR, if you have it in the respective folder. In order to have this tests, after cloning this project:

 - cd restaurantPage
- From the root of this project create the folders .github/workflows
- Add a copy of [.github/workflows/linters.yml](https://github.com/microverseinc/linters-config/blob/master/javascript/.github/workflows/linters.yml) to the .github/workflows


### Acknowledgments
A special acknowledgment and appreciation to Microverse for helping me gaining new knowledge as a software developer.


## 📝 License
This project is MIT licensed.