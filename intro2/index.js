const sex = document.querySelector("#title");

//const CLICKED_CLASS = "clicked";

// function handleClick() {
//     const hasClass = sex.classList.contains("clicked");
//     if (hasClass) {
//         sex.classList.remove("clicked");
//     }
//     else {
//         sex.classList.add("clicked");
//     }
// }

function handleClick() {
    sex.classList.toggle("clicked");
}

function myInit() {
    sex.addEventListener("click",handleClick);
}

myInit();
