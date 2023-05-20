const space = document.querySelector(".stars");

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function generateStarField(low, high) {

    for (let i = 0; i < 100; i++) {
        const star = document.createElement("span");
        star.classList.add("star");
        space.appendChild(star);
    }

    const allStars = document.querySelectorAll(".star");

    allStars.forEach(starEl => {
        const top = randomNum(0, 100);
        const left = randomNum(0, 100);
        const size = randomNum(1, 3);
        const inc = randomNum(low, high);
        const inc_2 = randomNum(1, 4);
        starEl.style.top = top + '%';
        starEl.style.left = left + '%';
        starEl.style.width = size + 'px';
        starEl.style.height = size + 'px';
        starEl.style.animation = 'twinkle ' + inc + 's ' + inc_2 + 's infinite';
    });
};

generateStarField(4, 10);