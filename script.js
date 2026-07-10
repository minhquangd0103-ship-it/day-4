function changeBackground() {
    document.body.style.background = "grey";
}

function showTime() {
    document.getElementById("time").textContent = new Date().toLocaleTimeString();
}

function welcome() {
    alert("Sup");
}

welcome();