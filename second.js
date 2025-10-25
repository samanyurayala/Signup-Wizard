let value = document.getElementById("value");
let text = document.getElementById("text");
let spin = document.getElementById("spin");
let date = document.getElementById("date");
let submit = document.getElementById("submit");

value.addEventListener("input", function() { text.textContent = value.value; });
spin.addEventListener("click", function() {
    let month_value = Math.floor(Math.random() * 12) + 1;
    let day_value = Math.floor(Math.random() * 31) + 1;
    let year_value = Math.floor(Math.random() * 56) + 1970;
    date.textContent = month_value + " / " + day_value + " / " + year_value;
});

submit.addEventListener("click", function() {
    if (text.textContent != 0)
        window.location.href = "third.html";
})
