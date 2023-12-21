// Search for a city and return the weather data for that city
$("#search-button").on("click", function (event) {
  // prevent default to stop the buttom from trying to submit another inut
  event.preventDefault();

  // grab text from the input box
  var location = $("#search-input").val();
  console.log(location);

  // construct the URL
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    location +
    "&units=metric&appid=249c195c4f8adef1883d23b14c215681";
  // var queryURL =`https://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=249c195c4f8adef1883d23b14c215681`

  console.log(queryURL);

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      createButton(data.city.name);
      displayCurrent(data);

      $("#search-input").text(JSON.stringify(data));
    })
    .catch(function (error) {
      console.log(error);
    });
});

function displayCurrent(data) {
  $("#currentName").text(data.city.name);
  $("#currentDate").text(data.list[0].dt_txt.substr(0, 10));
  var iconCode = data.list[0].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
  var img = $("<img/>");
  img.attr("src", iconurl);
  $("#currentImage").empty();
  $("#currentImage").append(img);
  $("#currentTemp").text("Temp: " + data.list[0].main.temp + " \u00B0C");
  $("#currentHumidity").text("Humidity: " + data.list[0].main.humidity + " %");
  $("#currentWind").text("Wind Speed: " + data.list[0].wind.speed + " KPH");

  console.log(iconurl);

  // show the future weather for the next 5 days
  // day 1
  $("#oneDate").text(data.list[5].dt_txt.substr(0, 10));
  var iconCode = data.list[5].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
  var img = $("<img/>");
  img.attr("src", iconurl);
  $("#imageOne").empty();
  $("#imageOne").append(img);
  $("#oneTemp").text("Temp: " + data.list[5].main.temp + " \u00B0C");
  $("#oneWind").text("Wind Speed: " + data.list[5].wind.speed + " KPH");
  $("#oneHumidity").text("Humidity: " + data.list[5].main.humidity + " %");

  // day 2
  $("#twoDate").text(data.list[13].dt_txt.substr(0, 10));
  var iconCode = data.list[13].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
  var img = $("<img/>");
  img.attr("src", iconurl);
  $("#imageTwo").empty();
  $("#imageTwo").append(img);
  $("#twoTemp").text("Temp: " + data.list[13].main.temp + " \u00B0C");
  $("#twoWind").text("Wind Speed: " + data.list[13].wind.speed + " KPH");
  $("#twoHumidity").text("Humidity: " + data.list[13].main.humidity + " %");

  // day 3
  $("#threeDate").text(data.list[21].dt_txt.substr(0, 10));
  var iconCode = data.list[21].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
  var img = $("<img/>");
  img.attr("src", iconurl);
  $("#imageThree").empty();
  $("#imageThree").append(img);
  $("#threeTemp").text("Temp: " + data.list[21].main.temp + " \u00B0C");
  $("#threeWind").text("Wind Speed: " + data.list[21].wind.speed + " KPH");
  $("#threeHumidity").text("Humidity: " + data.list[21].main.humidity + " %");

  // day 4
  $("#fourDate").text(data.list[29].dt_txt.substr(0, 10));
  var iconCode = data.list[29].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
  var img = $("<img/>");
  img.attr("src", iconurl);
  $("#imageFour").empty();
  $("#imageFour").append(img);
  $("#fourTemp").text("Temp: " + data.list[29].main.temp + " \u00B0C");
  $("#fourWind").text("Wind Speed: " + data.list[29].wind.speed + " KPH");
  $("#fourHumidity").text("Humidity: " + data.list[29].main.humidity + " %");

  // day 5
  $("#fiveDate").text(data.list[37].dt_txt.substr(0, 10));
  var iconCode = data.list[37].weather[0].icon;
  var iconurl = "http://openweathermap.org/img/wn/" + iconCode + "@2x.png";
  var img = $("<img/>");
  img.attr("src", iconurl);
  $("#imageFive").empty();
  $("#imageFive").append(img);
  $("#fiveTemp").text("Temp: " + data.list[37].main.temp + " \u00B0C");
  $("#fiveWind").text("Wind Speed: " + data.list[37].wind.speed + " KPH");
  $("#fiveHumidity").text("Humidity: " + data.list[37].main.humidity + " %");
}

function createButton(city) {
  // Generates buttons for each location in the array
  city.preventDefault;
  var a = $("<button>");
  // Adding a class of location to the button
  a.addClass("location-btn");
  // Adding a data-attribute
  // Providing the initian button text
  a.text(city);
  // Adding the button to the buttons-view div
  $("#buttons-view").append(a);
  a.on("click", handleSearchClick);
}

// Click a previous search and the weather conditions will show
function handleSearchClick(e) {
  e.preventDefault();
  // if (!e.target.matches('btn-history')) {
  //   return;
  // }
  console.log(e);
  var btn = e.target;
  var search = btn.textContent;
  console.log(search);
  // displayCurrent(search)

  // construct the URL
  var queryURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    search +
    "&units=metric&appid=249c195c4f8adef1883d23b14c215681";
  console.log(queryURL);

  fetch(queryURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      displayCurrent(data);
      $("#search-input").text(JSON.stringify(data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
