const sectionBtns = document.querySelectorAll(".collBtn");
const contentArea = document.querySelectorAll(".content");
const btnArr = Array.from(sectionBtns);
const aboutBtn = document.getElementById("aboutBtn");
const aboutCont = document.getElementById("About");
const projectBtn = document.getElementById("projectBtn");
const contactBtn = document.getElementById("contactBtn");

const smallFont = 'clamp(0.75rem, 1.5vw, 1rem)';
const largeFont = 'clamp(1.25rem, 2vw, 2.25rem)';

window.onload = setTimeout(() => {
    window.scrollTo(0, 1)
}, 0);

setTimeout(() => {
    aboutBtn.classList.add("activeBtn")
    projectBtn.style.fontSize = smallFont
    contactBtn.style.fontSize = smallFont
    aboutCont.classList.add("activeContent")
    setTimeout(() => {
        aboutCont.style.maxHeight = (aboutCont.scrollHeight + 128) + "px";
    }, 150)
}, 1000)


//loop over btn array
for (let i = 0; i < btnArr.length; i++) {
    //filter out the current button in btn array
    let filteredBtns = btnArr.filter((btn) => btn !== btnArr[i]);

    //give current button event listener
    btnArr[i].addEventListener("click", function () {
        //select collapsed content for current button
        let content = this.nextElementSibling;
        //add active class to clicked button       
        content.classList.add("activeContent");
        this.classList.add("activeBtn")

        filteredBtns.forEach((btn) => {
            (btn.nextElementSibling.style.maxHeight = null,
                btn.classList.remove("activeBtn")),
                btn.nextElementSibling.classList.remove("activeContent"),
                btn.style.fontSize = largeFont;
        });

        //if maxHeight is set
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove("activeContent");
            this.classList.remove("activeBtn");
            this.style.color = smallFont
        } else {
            //if maxHeight not set, give a maxHeight of contents vertical height
            //timeout allows for collapse animation to happen first
            setTimeout(() => {
                content.style.maxHeight = content.scrollHeight + "px";
                this.style.fontSize = largeFont;
            }, 100)

            //remove maxHeight and active class from buttons NOT clicked on 
            filteredBtns.forEach((btn) => {
                btn.nextElementSibling.style.maxHeight = null,
                    btn.classList.remove("activeBtn"),
                    btn.nextElementSibling.classList.remove("activeContent"),
                    btn.style.fontSize = smallFont
            });
        }
    });
};
