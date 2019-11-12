

//Collapsible
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


//Smart Connection

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
    var description = d.weather[0].description;

    document.getElementById('description').innerHTML = description;
    document.getElementById('temp').innerHTML = celcius + '&deg;';
    document.getElementById('location').innerHTML = d.name;

    //if (description.indexOf('rain') > 0) {
    //    document.weatherBody.className = 'rainy';
    //} else if (description.indexOf('cloud') > 0) {
    //    document.weatherBody.className = 'cloudy';
    //} else if (description.indexOf('sunny') > 0) {
    //    document.weatherBody.className = 'sunny';
    //}

}

//window.onload = function () {
//    weatherBallon(6167865);
//}

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

function afbeeldingherkennen() {
    //var lblafbeelding;
    //lblafbeelding = document.getElementById('lblafbeelding').innerHTML;
    //document.getElementById('imageBox').src = lblafbeelding;


    // The image we want to classify
    const image = document.querySelector('#image');
    // The result tag in the HTML
    const result = document.getElementById('result');
    // The probability tag in the HTML
    const probability = document.getElementById('probability');
    // Change button text
    const button = document.getElementById('btn-detect');
    button.innerText = "Wait ...."

    // Initialize the Image Classifier method with MobileNet
    const classifier = ml5.imageClassifier('MobileNet', function () {
        console.log('Model Loaded!');

    });
    // Make a prediction with the selected image
    // This will return an array with a default of 10 options with their probabilities
    classifier.predict(image, function (err, results) {
        console.table(results);
        result.innerText = results[0].className;
        probability.innerText = results[0].probability.toFixed(4);
        button.innerText = "Detect Objects"
    });
}
