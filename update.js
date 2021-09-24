function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ")
}
function update(t, v) {
    v = v.replace(' ', '');
    var m = document.getElementById("mode").value;
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            if (t == "rank") {
                document.getElementById("pp").value = this.responseText;
            } else {
                document.getElementById("rank").value = this.responseText;
            }
            console.log(document.getElementById("pp").value.toLocaleString('en'));
            document.getElementById("pp").value = formatNumber(document.getElementById("pp").value.replace(' ', ''));
            document.getElementById("rank").value = formatNumber(document.getElementById("rank").value.replace(' ', ''));
        }
    };
    xhttp.open("GET", "data/getPPRank.php?t=" + t + "&v=" + v + "&m=" + m, true);
    xhttp.send();
}