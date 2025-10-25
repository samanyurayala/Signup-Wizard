let email = document.getElementById("email");
let submit = document.getElementById("submit");

email.addEventListener("keypress", function(event) {
    event.preventDefault();
    const chars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    const randIndex = Math.floor(Math.random() * chars.length);
    const randChar = chars.charAt(randIndex);
    email.value += randChar;
});
submit.addEventListener("mouseover", function() {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const boxW = submit.offsetWidth;
    const boxH = submit.offsetHeight;
    const randX = Math.floor(Math.random() * (vw - boxW));
    const randY = Math.floor(Math.random() * (vh - boxH));
    submit.style.position = "absolute";
    submit.style.left = randX + "px";
    submit.style.top = randY + "px";
});
