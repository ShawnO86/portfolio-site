const sectionBtns = document.querySelectorAll('.collBtn');
const contentArea = document.querySelectorAll('.content');
const aboutCont = document.getElementById('About');
const btnArr = Array.from(sectionBtns);
const [aboutBtn, projectBtn, contactBtn] = btnArr;

const smallFont = 'clamp(0.75rem, 1.5vw, 1rem)';
const largeFont = 'clamp(1.25rem, 2vw, 2.25rem)';

const getNextElement = (button) => button.nextElementSibling;

//loop over btn array
for (let i = 0; i < btnArr.length; i++) {
    //give current button event listener
    btnArr[i].addEventListener('click', function () {
        //select collapsed content for current button on left click
       openContent(btnArr[i])
    });
    btnArr[i].addEventListener('keypress', function (e) {
        //select collapsed content for current button on enter press
        if(e.key === "Enter") {
            openContent(btnArr[i])
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
      //remove active class from button not clicked and give large font to all other
      filteredBtns.forEach((btn) => {
          getNextElement(btn).style.maxHeight = null;
          btn.classList.remove('activeBtn');
          getNextElement(btn).classList.remove('activeContent');
          btn.style.fontSize = largeFont;
      });
      //if maxHeight is set on clicked button, collapse content and remove active classes
      if (content.style.maxHeight) {
          content.style.maxHeight = null;
          button.classList.remove('activeBtn');
          content.classList.remove('activeContent');
      } else {
          //if maxHeight not set, give a maxHeight of the contents scroll height
          setTimeout(() => {
              content.style.maxHeight = (content.scrollHeight + 200) + 'px';
              button.style.fontSize = largeFont;
          }, 500)

          //remove maxHeight and active class from buttons NOT clicked on 
          filteredBtns.forEach((btn) => {
              getNextElement(btn).style.maxHeight = null;
              btn.classList.remove('activeBtn');
              getNextElement(btn).classList.remove('activeContent');
              btn.style.fontSize = smallFont;
          });
      }
}