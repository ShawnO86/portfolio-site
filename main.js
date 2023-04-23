const sectionBtns = document.getElementsByClassName('collBtn');
const btnArr = [...sectionBtns];
const contentArea = document.getElementsByClassName('content');
const toTop = document.querySelectorAll('.toTop');
const edPictures = document.querySelectorAll('.edPicture');
const reachOut = document.getElementById('reachOut');
const smallFont = 'clamp(0.75rem, 1.25vw, 1rem)';
const largeFont = 'clamp(1rem, 2vw, 2rem)';
const getNextElement = (button) => button.nextElementSibling;
const header = document.getElementsByTagName('header')

//open "about me" after 1000ms on initial load or refresh
setTimeout(() => {
    openContent(btnArr[0]);
}, 1000);

//expand degree and certification images or set to initial size
edPictures.forEach((pic) => {
    pic.addEventListener('click', () => {
        if (pic.classList.contains('openPic')) {
            pic.classList.remove('openPic');
            getNextElement(pic).classList.remove('openPicText');
        } else {
            pic.classList.add('openPic');
            getNextElement(pic).classList.add('openPicText');
        };
    })
});

//button for scrolling to top of page
toTop.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.scrollTo(0, 0);
    })
});

//reach out link in about me text -- opens contact me section on click
reachOut.addEventListener('click', () => {
    openContent(btnArr[2]);
});
//reach out link in about me text -- opens contact me section on enter
reachOut.addEventListener('keypress', (e) => {
    if (e.key == 'enter') {
        openContent(btnArr[2]);
    };
});

//loop over btn array to set listener to each accordian button
for (let i = 0; i < btnArr.length; i++) {
    //set initial font size
    btnArr[i].style.fontSize = largeFont;
    //listener too open corresponding section
    btnArr[i].addEventListener('click', () => {
        openContent(btnArr[i]);
        //timeout to allow for current section to "close" before new one opens
        setTimeout(() => {
            btnArr[i].scrollIntoView({ block: "start", behavior: "smooth" })
        }, 600);
    });
};

//opens next section related to "button"
function openContent(button) {
    //filter out the current button in btn array
    const filteredBtns = btnArr.filter((btn) => btn !== button);
    //select next section for current button
    let content = getNextElement(button);
    //add active classes to clicked button and content     
    content.classList.add('activeContent');
    button.classList.add('activeBtn');
    //aria-expanded for accessibility of accordian
    button.firstElementChild.setAttribute("aria-expanded", true);
    //remove aria-hidden from active content for accessibility
    content.setAttribute('aria-hidden', false);
    //for each button not clicked on
    filteredBtns.forEach((btn) => {
        getNextElement(btn).style.maxHeight = null;
        btn.classList.remove('activeBtn');
        getNextElement(btn).classList.remove('activeContent');
        btn.firstElementChild.setAttribute("aria-expanded", false);
        btn.style.fontSize = largeFont;
        getNextElement(btn).setAttribute('aria-hidden', true);
    });
    //if maxHeight is set on clicked button, collapse content and remove active classes
    if (content.style.maxHeight) {
        header[0].classList.remove('dull');
        content.style.maxHeight = null;
        button.classList.remove('activeBtn');
        content.classList.remove('activeContent');
        content.setAttribute('aria-hidden', true);
        button.firstElementChild.setAttribute("aria-expanded", false);
    } else {
        //contract header padding for less used space when content is open
        header[0].classList.add('dull');
        //if maxHeight not set, give a maxHeight of the contents scroll height to display
        setTimeout(() => {
            content.style.maxHeight = '100%';
            button.style.fontSize = largeFont;
            button.firstElementChild.setAttribute("aria-expanded", true);
            content.setAttribute('aria-hidden', false);
        }, 150)
        //remove maxHeight and active class from buttons NOT clicked on to close other open content
        filteredBtns.forEach((btn) => {
            getNextElement(btn).style.maxHeight = null;
            btn.classList.remove('activeBtn');
            getNextElement(btn).classList.remove('activeContent');
            btn.style.fontSize = smallFont;
            btn.firstElementChild.setAttribute("aria-expanded", false);
            getNextElement(btn).setAttribute('aria-hidden', true);
        });
    };
};