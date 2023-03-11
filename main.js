const sectionBtns = document.querySelectorAll(".collBtn");
const btnArr = Array.from(sectionBtns);
const aboutBtn = document.getElementById("aboutBtn");
const aboutCont = document.getElementById("About");

setTimeout(() => {
    aboutBtn.classList.add("activeBtn")
    aboutCont.classList.add("activeContent")
    aboutCont.style.maxHeight = ((aboutCont.scrollHeight + 128)+ "px");
},1000)


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
        this.classList.add("activeBtn");

        //if maxHeight is set
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.classList.remove("activeContent");
            btnArr[i].classList.remove("activeBtn");
        } else {
            //if maxHeight not set, give a maxHeight of contents vertical height
            content.style.maxHeight = ((content.scrollHeight + 128)+ "px");
            //remove maxHeight and active class from buttons NOT clicked on 
            filteredBtns.forEach(
                (btn) => (btn.nextElementSibling.style.maxHeight = null, btn.nextElementSibling.classList.remove("activeContent"), btn.classList.remove("activeBtn")));
        }
    });
};