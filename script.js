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
  var iconurl = "http://openweathermap.org/img/wn/"+iconCode+"@2x.png";
  var img = $("<img/>");
  img.attr("src", iconurl);
  $("#currentImage").empty();
  $("#currentImage").append(img);
  $("#currentTemp").text(data.list[0].main.temp);
  $("#currentHumidity").text(data.list[0].main.humidity);
  $("#currentWind").text(data.list[0].wind.speed);

 console.log(iconurl); 


  // show the future weather for the next 5 days
  // day 1
  $("#oneDate").text(data.list[5].dt_txt.substr(0, 10));
  $("#oneTemp").text("Temp" + data.list[5].main.temp);
  $("#oneWind").text(data.list[5].wind.speed);
  $("#oneHumidity").text(data.list[5].main.humidity);

  // day 2
  $("#twoDate").text(data.list[13].dt_txt.substr(0, 10));
  $("#twoTemp").text(data.list[13].main.temp);
  $("#twoWind").text(data.list[13].wind.speed);
  $("#twoHumidity").text(data.list[13].main.humidity);

  // day 3
  $("#threeDate").text(data.list[21].dt_txt.substr(0, 10));
  $("#threeTemp").text(data.list[21].main.temp);
  $("#threeWind").text(data.list[21].wind.speed);
  $("#threeHumidity").text(data.list[21].main.humidity);

  // day 4
  $("#fourDate").text(data.list[29].dt_txt.substr(0, 10));
  $("#fourTemp").text(data.list[29].main.temp);
  $("#fourWind").text(data.list[29].wind.speed);
  $("#fourHumidity").text(data.list[29].main.humidity);

  // day 5
  $("#fiveDate").text(data.list[37].dt_txt.substr(0, 10));
  $("#fiveTemp").text(data.list[37].main.temp);
  $("#fiveWind").text(data.list[37].wind.speed);
  $("#fiveHumidity").text(data.list[37].main.humidity);
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
  var search = btn.textContent
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

