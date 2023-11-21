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
    "&units=metric&appid=";
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
  $("#currentDate").text(data.list[0].dt_txt);
  $("#currentTemp").text(data.list[0].main.temp);
  $("#currentWind").text(data.list[0].wind.speed);
}

function createButton(city) {
  // Generates buttons for each location in the array
  var a = $("<button>");
  // Adding a class of location to the button
  a.addClass("location");
  // Adding a data-attribute
  // a.attr("location-name", location[i]);
  // Providing the initian button text
  a.text(city);
  // Adding the button to the buttons-view div
  $("#buttons-view").append(a);
}
// // Function handles events where one button is clicked
//     $(#add-location).on("click", function (event) {
//         event.preventDefault();

// })
// show the city name
// show the date
// show icons of weather conditions
// show the temperature
// show the humidity
// show the wind speed

// show the future weather for the next 5 days
// show the next 5 dates
// show the weather conditions with an icon for the next 5 days
// show the temperature for the next 5 days
// show the humidity for the next 5 days

// Click a previous search and the weather conditions will show
