function JavaAdd(num1, num2) {
    return num1 + num2;

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
