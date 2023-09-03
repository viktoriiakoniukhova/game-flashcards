let button = document.getElementById("btn");
let frontSideOfCards = document.querySelectorAll(".front > p");
let backSideOfCards = document.querySelectorAll(".back > p");

let request = new XMLHttpRequest();
request.open("GET", "js/file.json", false);
request.send(null);

let countries = JSON.parse(request.responseText);

let maxValue = 241;

button.addEventListener("click", () => {
    if(maxValue < 10){
        countries = JSON.parse(request.responseText);
        maxValue = 241;
    }
    for(let i = 0; i < frontSideOfCards.length; i++){
        let randomValue = randomIntFromInterval(0, maxValue);

        frontSideOfCards[i].innerHTML = countries[randomValue].country;
        backSideOfCards[i].innerHTML = countries[randomValue].city;

        countries.splice(randomValue,1);
        maxValue--;
    }
})

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}