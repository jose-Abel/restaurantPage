import createHomePage from "./home";
import createMenuPage from "./menu";
import createContactPage from "./contact";

const content = document.querySelector("#content");

const observer = new MutationObserver(function(mutations_list) {
	mutations_list.forEach(function(mutation) {
		mutation.addedNodes.forEach(function(added_node) {
			if(added_node.id == 'nav-bar') {
                console.log("Navbar added");

                const homeTab = document.getElementById("home-tab");
                const menuTab = document.getElementById("menu-tab");
                const contactTab = document.getElementById("contact-tab");

				homeTab.addEventListener("click", () => {
                    content.innerHTML = "";
                    createHomePage();
                });

                menuTab.addEventListener("click", () => {
                    content.innerHTML = "";
                    createMenuPage();
                });
                
                contactTab.addEventListener("click", () => {
                    content.innerHTML = "";
                    createContactPage();
                });

				observer.disconnect();
			}
		});
	});
});

observer.observe(content, { subtree: false, childList: true });


createHomePage();

