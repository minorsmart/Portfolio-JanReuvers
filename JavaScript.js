function JavaAdd(num1, num2) {
    return num1 + num2;

}

function Sqareroot(n) {
    var x = n;
    var y = 1;
    var e = 0.00001;

    while (x - y > e) {
        x = (x + y) / 2;
        y = n / x;
        sqrt()
    }
    return (x);
}

function JavaGetDate() {
    document.getElementById('CurrentTime').innerHTML = Date()
   
}

function BeerTime() {
    var d = new Date()
    var hour = d.getHours();
    if (hour >= 15 || hour <= 7) {
        document.getElementById('ItIsTime').innerHTML = "<p>Het is tijd voor bier! Proost!</p>"
    }
    else {
        document.getElementById('ItIsTime').innerHTML = "<p>Helaas, het is nog geen tijd voor bier. Het is nog te vroeg</p>"
    }
}

function collapsible() {
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    }
}