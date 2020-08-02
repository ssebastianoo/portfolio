function random() {
    var min = parseInt(document.getElementById("min").value);
    var max = parseInt(document.getElementById("max").value);
    var random = Math.floor(Math.random() * (max - min) ) + min;
    document.getElementById("result").innerHTML = random;
}

