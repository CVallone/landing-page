/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const nav = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navBar = () => {
    // create an empty container for nav items
    let navList = '';
    // iterate over each section element
    sections.forEach(section => {

        const navId = section.id;
        const navDataSet = section.dataset.nav;

        // append the navList
        navList += `<li><a class="menu__link" href="#${navId}">${navDataSet}</a></li>`;
    });

    nav.innerHTML = navList;
};

navBar();
// Add class 'active' to section when near top of viewport

const rect = (section) => {
    return Math.floor(section.getBoundingClientRect().top);
};

const removeState = (section) => {
    section.classList.remove('your-active-class');
};

const addState = (conditional, section) => {
    if(conditional){
        section.classList.add('your-active-class');
    };
};

const setActive = () => {
    sections.forEach(section => {
        const elementRect = rect(section);

        visible = () => elementRect < 150 && elementRect >= -150;

        removeState(section);
        addState(visible(),section);
    });
};

window.addEventListener('scroll', setActive);

// Scroll to anchor ID using scrollTO event

const scrollToAnchor = () => {

    const navElement = document.querySelectorAll('navbar__menu a');
    navElement.forEach(link => {
        link.addEventListener('click', () => {
            for(i=0; i<sections; i++) {
                sections[i].addEventListener('click', sectionScroll(link));
            }
        });
    });
};

scrollToAnchor();
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

