const sectionBtns = document.querySelectorAll('.collBtn');
const contentArea = document.querySelectorAll('.content');
const aboutCont = document.getElementById('About');
const btnArr = Array.from(sectionBtns);
const [aboutBtn, projectBtn, contactBtn] = btnArr;

const smallFont = 'clamp(0.75rem, 1.5vw, 1rem)';
const largeFont = 'clamp(1.25rem, 2vw, 2.25rem)';

const getNextElement = (button) => button.nextElementSibling;

setTimeout(() => {
    aboutBtn.classList.add('activeBtn');
    projectBtn.style.fontSize = smallFont
    contactBtn.style.fontSize = smallFont
    aboutCont.classList.add('activeContent');
    aboutCont.style.maxHeight = (aboutCont.scrollHeight + 128) + 'px';
}, 1000)

//loop over btn array
for (let i = 0; i < btnArr.length; i++) {
    //filter out the current button in btn array
    const filteredBtns = btnArr.filter((btn) => btn !== btnArr[i]);
    //give current button event listener
    btnArr[i].addEventListener('click', function () {
        //select collapsed content for current button
        let content = getNextElement(this);
        //add active class to clicked button       
        content.classList.add('activeContent');
        this.classList.add('activeBtn');
        filteredBtns.forEach((btn) => {
            getNextElement(btn).style.maxHeight = null;
            btn.classList.remove('activeBtn');
            getNextElement(btn).classList.remove('activeContent');
            btn.style.fontSize = largeFont;
        });
        //if maxHeight is set
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            this.classList.remove('activeBtn');
            content.classList.remove('activeContent');
            this.style.color = smallFont
        } else {
            //if maxHeight not set, give a maxHeight of contents vertical height
            //timeout allows for collapse animation to happen first
            setTimeout(() => {
                content.style.maxHeight = content.scrollHeight + 'px';
                this.style.fontSize = largeFont;
            }, 300)
            //remove maxHeight and active class from buttons NOT clicked on 
            filteredBtns.forEach((btn) => {
                getNextElement(btn).style.maxHeight = null;
                btn.classList.remove('activeBtn');
                getNextElement(btn).classList.remove('activeContent');
                btn.style.fontSize = smallFont;
            });
        }
    });
};