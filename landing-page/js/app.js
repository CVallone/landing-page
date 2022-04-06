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
const ul = document.getElementById('navbar__list');
console.log(ul);
const sections = document.querySelectorAll('section')
console.log(sections)
const buildNav = () => {
    for (let i = 1; i < 5; i++) {
        let li = document.createElement('li')
        li.innerText = `Section-${i}`;
        li.id = `Section-${i}`  // Add a class to every Nav link matching the id of corresponding section while creating Nav bar
        li.addEventListener('click', function (e) {
            console.log(e.target.innerText);
            console.dir(ul);
            for (let elem of ul.children) {
                elem.classList.remove('your-active-class')
            }
        e.target.classList.add('your-active-class')
        for (let section of sections) {
            console.log(`this is ${section}`)
            section.classList.remove('your-active-class')
        }
        document.getElementById(e.target.innerText).classList.add('your-active-class')
        // document.getElementById(e.target.innerText).scrollIntoView()
        document.querySelector(`[data-nav="${e.target.innerText}"]`).scrollIntoView()
        });
        ul.append(li)
            console.log(li);
    };
};

buildNav();

window.addEventListener('scroll', function(e) {
    //console.log(e)
    makeActive()
})

function makeActive() {
    for (const section of sections) {
      const box = section.getBoundingClientRect();
      // You can play with the values in the "if" condition to further make it more accurate. 
      if (box.top <= 150 && box.bottom >= 150) {
        console.log(`${box} is in view`)
        console.dir(section)
        // 1. Add "your-active-class" to the current section
        section.classList.add('your-active-class')
        document.getElementById(section.dataset.nav).classList.add('your-active-class')
        // 2. Add "active" class to the Nav link which have a class same as id of the current section
      } else {
        console.log(`${box} is not in view`)
        // 1. Remove "your-active-class" from the current section.
        section.classList.remove('your-active-class')
        document.getElementById(section.dataset.nav).classList.remove('your-active-class')
        // 2. Remove "active" class from the Nav link which have a class same as id of current section
        
      }
    }
  }

/* Add class 'active' to section when near top of viewport
if the section is in view then loop through the sections 
and remove your-active-class from each section
then add the class to the one that is in view
and the same for the nav links

loop through and remove your-active-class from 
each nav link and add the one to the nav link that has 
the same name as the section that is in view
*/

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
