const sectionBtns = document.getElementsByClassName('collBtn');
const contentArea = document.getElementsByClassName('content');
const btnArr = [...sectionBtns];
const reachOut = document.getElementById('reachOut');
const smallFont = 'clamp(0.75rem, 1.5vw, 1rem)';
const largeFont = 'clamp(1rem, 2vw, 2.25rem)';
const getNextElement = (button) => button.nextElementSibling;
const toTop = document.querySelectorAll('.toTop');
const edPictures = document.querySelectorAll('.edPicture')

setTimeout(() => {
    openContent(btnArr[0]);
}, 1000)

edPictures.forEach((pic) => {
    pic.addEventListener('click', () => {
        if (pic.classList.contains('openPic')) {
            pic.classList.remove('openPic')
        } else {
            pic.classList.add('openPic')
            setTimeout(() => {
               pic.scrollIntoView({ block: "start", behavior: "smooth" })
            }, 150)
        }
    })
})

toTop.forEach((btn) => {
    btn.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })
})

reachOut.addEventListener('click', () => {
    openContent(btnArr[2]);
});

reachOut.addEventListener('keypress', (e) => {
    if (e.key == 'enter') {
        openContent(btnArr[2]);
    };
});

//loop over btn array to set listener to each accordian button
for (let i = 0; i < btnArr.length; i++) {
    //set initial font size
    btnArr[i].style.fontSize = largeFont;
    btnArr[i].addEventListener('click', () => {
        openContent(btnArr[i]);
        setTimeout(() => {
            btnArr[i].scrollIntoView({ block: "start", behavior: "smooth" })
        }, 600)
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
    button.firstElementChild.setAttribute("aria-expanded", true);
    content.setAttribute('aria-hidden', false);
    //remove active class from button not clicked and give large font to all other
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
        content.style.maxHeight = null;
        button.classList.remove('activeBtn');
        content.classList.remove('activeContent');
        content.setAttribute('aria-hidden', true);
        button.firstElementChild.setAttribute("aria-expanded", false);
    } else {
        //if maxHeight not set, give a maxHeight of the contents scroll height
        setTimeout(() => {
            content.style.maxHeight = (content.scrollHeight + 400) + 'px';
            button.style.fontSize = largeFont;
            button.firstElementChild.setAttribute("aria-expanded", true);
            content.setAttribute('aria-hidden', false);
        }, 400)
        //remove maxHeight and active class from buttons NOT clicked on 
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