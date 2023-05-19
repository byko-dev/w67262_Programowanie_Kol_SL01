
let red = document.getElementById('red');
let yellow = document.getElementById('yellow');
let green = document.getElementById('green');

let trafficLight = new TrafficLights(1000, 'yellow');

setInterval(() => {
    console.log(trafficLight.getTime())
    if(trafficLight.getLight() == 'yellow'){
        trafficLight.setTime(5000)
        trafficLight.setLight('green');
        green.style.backgroundColor = 'green';
        setBackgroundAsDefault(red, yellow);
    }else if(trafficLight.getLight() == 'green'){
        trafficLight.setTime(1000)
        trafficLight.setLight('red');
        red.style.backgroundColor = 'red';
        setBackgroundAsDefault(green, yellow);
    }else if(trafficLight.getLight() == 'red'){
        trafficLight.setTime(5000)
        trafficLight.setLight('yellow');
        yellow.style.backgroundColor = 'yellow';
        setBackgroundAsDefault(green, red);
    }

}, trafficLight.getTime())

function setBackgroundAsDefault(element1, element2){
    element1.style.backgroundColor = "buttonface";
    element2.style.backgroundColor = "buttonface";
}