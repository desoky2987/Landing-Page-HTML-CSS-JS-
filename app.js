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

// Select all sections and put them into sectionList.
const sectionList = document.querySelectorAll('section');
// Put all elements that have id 'navbar__list' into menuList.
const menuList = document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

sectionList.forEach((sectionElement) =>{
    // Set sectionName from 'data-nav'.
    let sectionName = sectionElement.getAttribute('data-nav');
    // Create li into listItem.
    let listItem = document.createElement('li');
    // Get innerHTML to 'listItem' from 'data-nav'.
    listItem.innerHTML = sectionName;
    // Event that's click on listItem to scroll smoothly for his own section. 
    listItem.addEventListener('click', () => {
        sectionElement.scrollIntoView({
            behavior: 'smooth', block: 'end', inline: 'nearest'
        });
    });
    // Put listItem into menuList.
    menuList.appendChild(listItem);
});

// Event that's show what's the active section when I scroll on page.
window.addEventListener('scroll',function(){
    sectionList.forEach(sectionElement =>{
        // I use getBoundingClientRect method to get the viewbord of the active section.
        let sectionActive = sectionElement.getBoundingClientRect();
        if(sectionActive.top >=-200 && sectionActive.top <= 400){
            // Add active class if the sectionElement is in the viewbord.
            sectionElement.classList.add('your-active-class');
        }
        else {
            // Remove active class if the sectionElement doesn't in the viewbord.
            sectionElement.classList.remove('your-active-class');
        }
    });
});

/**
 * End Helper Functions
 * 
*/


