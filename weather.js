console.log("Today's Weather");
var city_name = "Tallinn";
$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city_name + "&units=metric&APPID=0b8cbee81d0ead6a4cb183e0b7437fe0",
function(data){
  console.log(data);

  var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
  var city = data.name;
  var temp = Math.floor(data.main.temp) + " °C";
  var max_temp = Math.floor(data.main.temp_max);
  var min_temp = Math.floor(data.main.temp_min);
  var weather = data.weather[0].description + " " + "(" + min_temp + "..." + max_temp + ")";
  console.log(city);
  $(".icon").attr("src", icon);
  $(".temp").append(temp);
  $(".city").append(city);
  $(".weather").append(weather);
});


//document.getElementByClass('temp').innerHTML = temp;

/*var request = new XMLHttpRequest();
var url = "http://api.openweathermap.org/data/2.5/weather?q=Tallinn,ee&units=metric&APPID=0b8cbee81d0ead6a4cb183e0b7437fe0";

request.open('GET', url, false);
request.send();

var response = request.response;
var data = JSON.parse(response);

console.log(data["text"]);*/
