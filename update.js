function update() {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
            let res = JSON.parse(xhttp.responseText);
            let slip = res.slip;

            document.getElementById("conselho").innerHTML = slip.advice;
        }
    };
    xhttp.open("GET", "https://api.adviceslip.com/advice", true);
    xhttp.send();
}   