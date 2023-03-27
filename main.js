const sectionBtns = document.querySelectorAll('.collBtn');
const contentArea = document.querySelectorAll('.content');
const aboutCont = document.getElementById('About');
const header = document.getElementsByTagName('header');
const btnArr = Array.from(sectionBtns);
const smallFont = 'clamp(0.75rem, 1.5vw, 1rem)';
const largeFont = 'clamp(1.25rem, 2vw, 2.25rem)';
const getNextElement = (button) => button.nextElementSibling;

//loop over btn array
for (let i = 0; i < btnArr.length; i++) {
    //give current button event listener
    btnArr[i].addEventListener('click', function () {
        //select collapsed content for current button on left click
        openContent(btnArr[i]);
        setTimeout(() => {
            window.scroll({top: 110, behavior: "auto"});
        }, 500)
    });
    btnArr[i].addEventListener('keypress', function (e) {
        //select collapsed content for current button on enter press
        if (e.key === "Enter") {
            openContent(btnArr[i])
            setTimeout(() => {
                window.scroll({top: 110, behavior: "auto"});
            }, 500)
        }
    });
};

function openContent(button) {

    //filter out the current button in btn array
    const filteredBtns = btnArr.filter((btn) => btn !== button);
    //select collapsed content for current button
    let content = getNextElement(button);
    //add active class to clicked button       
    content.classList.add('activeContent');
    button.classList.add('activeBtn');
    button.firstElementChild.setAttribute("aria-expanded", true)
    content.setAttribute('aria-hidden', false)
    //remove active class from button not clicked and give large font to all other
    filteredBtns.forEach((btn) => {
        getNextElement(btn).style.maxHeight = null;
        btn.classList.remove('activeBtn');
        getNextElement(btn).classList.remove('activeContent');
        btn.firstElementChild.setAttribute("aria-expanded", false)
        btn.style.fontSize = largeFont;
        getNextElement(btn).setAttribute('aria-hidden', true)
    });
    //if maxHeight is set on clicked button, collapse content and remove active classes
    if (content.style.maxHeight) {
        content.style.maxHeight = null;
        button.classList.remove('activeBtn');
        content.classList.remove('activeContent');
        content.setAttribute('aria-hidden', true)
        button.firstElementChild.setAttribute("aria-expanded", false)
    } else {
        //if maxHeight not set, give a maxHeight of the contents scroll height
        setTimeout(() => {
            content.style.maxHeight = (content.scrollHeight + 200) + 'px';
            button.style.fontSize = largeFont;
            button.firstElementChild.setAttribute("aria-expanded", true)
            content.setAttribute('aria-hidden', false)
        }, 300)
        //remove maxHeight and active class from buttons NOT clicked on 
        filteredBtns.forEach((btn) => {
            getNextElement(btn).style.maxHeight = null;
            btn.classList.remove('activeBtn');
            getNextElement(btn).classList.remove('activeContent');
            btn.style.fontSize = smallFont;
            btn.firstElementChild.setAttribute("aria-expanded", false)
            getNextElement(btn).setAttribute('aria-hidden', true)
        });
    }
}