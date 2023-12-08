const space = document.querySelector(".stars");

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const fragment = document.createDocumentFragment();
function generateStarField(low, high) {
    for (let i = 0; i < 10; i++) {
        const star = document.createElement("div");
        const starSize = randomNum(1, 3) + "px";
        const inc_length = randomNum(low, high);
        const inc_delay = randomNum(1, 10);

        star.classList.add("star");
        star.style.top = randomNum(0, 100) + "%";
        star.style.left = randomNum(0, 100) + "%";
        star.style.width = starSize;
        star.style.height = starSize;
        star.style.animationName = `twinkle, move`;
        star.style.animationDuration = inc_length + 's';
        star.style.animationDelay = inc_delay + 's';
        star.style.animationIterationCount = 'infinite';
        fragment.appendChild(star);
    };
    space.appendChild(fragment);
};

generateStarField(6, 15);
generateStarField(8, 20);
