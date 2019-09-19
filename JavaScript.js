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
        document.getElementById('ItIsTime').innerHTML = "alt='ja'/><h2>Het is tijd voor bier! Proost!</h2>"
    }
    else {
        document.getElementById('ItIsTime').innerHTML = "alt='nee'/><h2>Helaas, het is nog geen tijd voor bier. Het is nog te vroeg</h2>"
    }

}
