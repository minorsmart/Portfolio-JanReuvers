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

function weatherBalloon(cityID) {
    var key = 'c8b47a274389d245d740bb448a2eea91';
    fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID + '&appid=' + key)
        .then(function (resp) { return resp.json() }) // Convert data to json
        .then(function (data) {
            drawWeather(data);
        })
        .catch(function () {
            // catch any errors
        });
}

function drawWeather(d) {
    var celcius = Math.round(parseFloat(d.main.temp) - 273.15);
    var fahrenheit = Math.round(((parseFloat(d.main.temp) - 273.15) * 1.8) + 32);

    document.getElementById('description').innerHTML = d.weather[0].description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;
}

//window.onload = function () {
//    weatherBallon(6167865);
//}