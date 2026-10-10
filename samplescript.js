const btn1 = document.getElementById('changeName');
const name = document.getElementById('studentName');
const btn2 = document.getElementById('changeBackground');
const box = document.getElementById('profile');
const btn3 = document.getElementById('toggleDetails');
const info = document.getElementById('details');

let color = false;

btn1.addEventListener("click", function() {
    name.textContent = "Maria Santos";
});

btn2.addEventListener("click", function() {
    if (color == false) {
        box.style.backgroundColor = "#abece1";
        color = true;
    } else {
        box.style.backgroundColor = "";
        color = false;
    }
});

btn3.addEventListener("click", function() {
    if (info.style.display == "none") {
        info.style.display = "block";
    } else {
        info.style.display = "none";
    }
});

