const space = document.querySelector(".stars");

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

const fragment = document.createDocumentFragment();
function generateStarField(low, high) {
    for (let i = 0; i < 100; i++) {
        const star = document.createElement("div");
        const starSize = randomNum(1, 3);
        const inc_length = randomNum(low, high);
        const inc_delay = randomNum(1, 4);

        star.classList.add("star");
        star.style.top = randomNum(0, 100) + "%";
        star.style.left = randomNum(0, 100) + "%";
        star.style.width = starSize + "px";
        star.style.height = starSize + "px";
        star.style.animation = `twinkle ${inc_length}s ${inc_delay}s infinite`;
        fragment.appendChild(star);
    };
    space.appendChild(fragment);
};

generateStarField(4, 10);