const sex = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "rgb(127, 140, 141)";

function handleFuxkinClick() {
    const currentColor = sex.style.color;
    if (currentColor === BASE_COLOR) {
        sex.style.color = OTHER_COLOR;
    }
    else {
        sex.style.color = BASE_COLOR;
    }
}

function myInit() {
    sex.style.color = BASE_COLOR;   
    sex.addEventListener("mouseenter",handleFuxkinClick);
}
myInit();
