const sectionBtns = document.querySelectorAll(".collBtn");
const btnArr = Array.from(sectionBtns);

for (let i = 0; i < btnArr.length; i++) {
  let filteredBtns = btnArr.filter((btn) => btn !== btnArr[i]);
  console.log(filteredBtns);
  btnArr[i].addEventListener("click", function (e) {
    let content = this.nextElementSibling;
    content.classList.add("active");
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove("active");
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      filteredBtns.forEach(
        (btn) => (btn.nextElementSibling.style.maxHeight = null)
      );
    }
  });
}
