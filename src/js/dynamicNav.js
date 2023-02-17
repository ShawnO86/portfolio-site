
function buildNavBar() {
//Declare the navagation items
let navListItems = document.getElementsByTagName("section");
const navBar = document.createElement("nav");
const newList = document.createElement("ul");
const mainHead = document.getElementById("mainHead");

//Loop through referenced array of navagation items
for (let i = 0; i <= navListItems.length - 1; i++) {
    const newListItem = document.createElement('li');
    const newItemBtn = document.createElement("a")
    //Append button to this li
    newListItem.appendChild(newItemBtn);
    //Set class and id of this button
    newItemBtn.setAttribute("class", "navBtn");
    newItemBtn.setAttribute("id", navListItems[i].id + "_Btn");
    newItemBtn.setAttribute("href", "#"+navListItems[i].id)
    //Set text to corresponding section
    newItemBtn.innerText = navListItems[i].id;
    //Append li to unordered list
    newList.appendChild(newListItem);
}

//Append nav to body and previously created list to nav
navBar.appendChild(newList);
document.body.appendChild(navBar);

//Get array of buttons in nav
const buttons = document.querySelectorAll('.navBtn');
//Loop through buttons array until "i" is greater than length of buttons array
for (let i = 0; i < buttons.length; i++) {
    //Gettting #id of button to add listener too 
    const button = document.getElementById(buttons[i].id);
    //Add event listeners to each button in "buttons" array
    button.addEventListener("click", (e) => {
        e.preventDefault();
        navListItems[i].scrollIntoView({
            block: "start",
            behavior: "smooth"
        });
    })
}

//Scroll sensing function
function isInViewport(section) {
    //Getting and storing DOMRect info for specified section
    const domRectSection = section.getBoundingClientRect();
    //Returns true while section is showing on atleast 25% of window.
    return domRectSection.top <= window.innerHeight * 0.75 && domRectSection.bottom >= window.innerHeight * 0.75;
}

//Button for scrolling to the top of page
const topContainer = document.querySelector(".topLinkContainer");
const toTopBtn = document.getElementById("goTopLink");
//Add or remove "to top" button if scrolled down 25% past main header
window.addEventListener("scroll", () => {
if(isInViewport(mainHead)) {
    topContainer.classList.remove('aniSectionContentIn')
    topContainer.classList.add('hideArea')
} else {
    topContainer.classList.add('aniSectionContentIn')
    topContainer.classList.remove('hideArea')
    toTopBtn.addEventListener("click", () => {
        mainHead.scrollIntoView({
            block: "start",
            behavior: "smooth"
        })
    })
}
})

//Adding button styles if corresponding section is in view
for (let i = 0; i < buttons.length; i++) {
    //Gettting #id of button to add listener too 
    const button = document.getElementById(buttons[i].id);
    //Getting section to check isInViewport
    const section = navListItems[i];
    const sectionHead = section.querySelector(".sectionHeader");
    const sectionContent = section.querySelector(".sectionContent");
    window.addEventListener("scroll", () => {
        //Add classes if isInViewport returns true
        if (isInViewport(section)) {
            button.classList.add("navBtnIsActive");
            sectionHead.classList.remove("aniSectionHeadOut");
            sectionContent.classList.remove("aniSectionContentOut");
            sectionHead.classList.add("aniSectionHeadIn");
            sectionContent.classList.add("aniSectionContentIn");
            //Remove class if false
        } else {
            button.classList.remove("navBtnIsActive");
            sectionHead.classList.remove("aniSectionHeadIn");
            sectionContent.classList.remove("aniSectionContentIn");
            sectionHead.classList.add("aniSectionHeadOut");
            sectionContent.classList.add("aniSectionContentOut");
        }
    })
}
}

export {buildNavBar}