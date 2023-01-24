let weather ={
    apikey: "3ab63b5a7c7e3ffad1c3c90764eb93d1",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apikey)
        .then((response)=>response.json())
        .then((data) => this.displayWeather(data));
        }, 
    displayWeather: function(data){
        const { name } = data;
        const { icon, description } =data.weather[0];
        const { temp, humidity } = data.main;
        const {speed } =data.wind;
        document.querySelector(".city").innerHTML = `
        Temperatura ${name}`;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerHTML= description
        document.querySelector(".temp").innerHTML= temp + "°C";
        document.querySelector(".humidity").innerHTML = `
        Humedad: ${humidity} %`;
        document.querySelector(".wind").innerHTML = `
        Viento: ${speed} km`;
        document.body.style.backgroundImage =
        "url('https://source.unsplash.com/1600x900/?" + name + "')";
        if(temp>25){
            document.querySelector(".card").style.background = " linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 100%)"
        }else{
            document.querySelector(".card").style.background = "linear-gradient(90deg, rgba(4,24,69,1) 0%, rgba(107,177,255,1) 100%)"
        }

    },
        search: function(){
            this.fetchWeather(document.querySelector(".searchBar").value);
        }

    };

document.querySelector(".search button").addEventListener("click", function (){
weather.search();
});
document
  .querySelector(".searchBar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Mar del plata");