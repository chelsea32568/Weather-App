// Search for a city and return the weather data for that city
$("button").on("click", function (event) {

// prevent default to stop the buttom from trying to submit another inut
    event.preventDefault();

// grab text from the input box
    var location = $("#search-input").val();
    console.log(location);

// construct the URL
var queryURL = "https://api.openweathermap.org/data/2.5/weather?" +
"q=Bujumbura,Burundi&appid=" + APIKey;
})
// log the search history on the page
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