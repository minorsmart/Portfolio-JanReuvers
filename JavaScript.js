

//Collapsible
function collapsible() {
    var acc = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            /* Toggle between adding and removing the "active" class,
            to highlight the button that controls the panel */
            this.classList.toggle("active");

            /* Toggle between hiding and showing the active panel */
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
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

function JavaAdd() {
    var x = document.getElementById('numberX').value
    var y = document.getElementById("numberY").value
    var z = x * 1 + y * 1;  /*Values times 1 to make it an integer*/

    return "het antwoord is: " + z;

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

function ConvertImage() {
    
    //var lblafbeelding;
    //lblafbeelding = document.getElementById('lblafbeelding').innerHTML;
    //document.getElementById('imageBox').src = lblafbeelding;

    ////urlPath = address of your picture on internet
    //URL = new URL(afbeelding.innerText);
    //BufferedImage c = ImageIO.read(url);
    //ImageIcon image = new ImageIcon(c);
    //jXImageView1.setImage(image);

    //URL url = new URL("http://www.mkyong.com/image/mypic.jpg");
    //Image image = ImageIO.read(url);

    var img = new Image;
    img.src = document.getElementById('afbeelding').innerHTML;

    // The image we want to classify
    const image = img;
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
    //   const classifier = ml5.imageClassifier('DarkNet', function() {
    //     console.log('Model Loaded!');
    //   });

    // Make a prediction with the selected image
    // This will return an array with a default of 10 options with their probabilities
    classifier.predict(image, function (err, results) {
        try {
            console.table(results);
            result.innerText = results[0].className;
            probability.innerText = results[0].probability.toFixed(4);

            // Change button text
            button.innerText = "Done"
        } catch (e) {

            // Change button text
            button.innerText = "Error"
        }

    });


    //var timer = setInterval(function () { MyTimer() }, 200);
    //function MyTimer() {
    //    var ctx = canvas.getContext('2d');
    //    ctx.drawImage(img, 0, 0, 500, 675);
    //    img = new Image;
    //    img.src = "http://yinoneliraz-001-site1.smarterasp.net/MyPicture.png";
    //}
        
}

function afbeeldingherkennen() {

    //Dont forget to add ml5 script in the HTML

    // The image we want to classify
    const image = document.getElementById('image');
    // The result tag in the HTML
    const result = document.getElementById('result');
    // The probability tag in the HTML
    const probability = document.getElementById('probability');
    // Change button text
    const button = document.getElementById('btn-detect');
    button.innerText = "Wait ...."

    // Initialize the Image Classifier method with MobileNet
    const classifier = ml5.imageClassifier('MobileNet', function() {
        console.log('Model Loaded!');

    });
    //   const classifier = ml5.imageClassifier('DarkNet', function() {
    //     console.log('Model Loaded!');
    //   });

    // Make a prediction with the selected image
    // This will return an array with a default of 10 options with their probabilities
    classifier.predict(image, function (err, results) {
        try {
            console.table(results);
            result.innerText = results[0].className;
            probability.innerText = results[0].probability.toFixed(4);

            // Change button text
            button.innerText = "Done"
        } catch (e) {

            // Change button text
            button.innerText = "Error"
        }
        
    });

}
