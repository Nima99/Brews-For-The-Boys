



//can ask for user i.d. here, and use it for central

let city;
let state;
let queryURL;


$("#submitem").on("click", function () {
    event.preventDefault()
city = $("#city").val().trim()
state = $("#state").val().trim()
console.log(city)
console.log(state)
queryURL = `https://api.openbrewerydb.org/breweries?by_state=${state}&by_city=${city}&per_page=50`
console.log(queryURL)


// // if (state) {
// //     central = 
// // }
// // if (city) {

// }


initMap()

})



function initMap() {
    // The location of Uluru
    let central = { lat: 39.8283, lng: -98.5795 };

    let zoomlevel = 4;

    // if (city || state) {
    //     zoomlevel = 10;
    // } else {
    //     zoomlevel = 4;
    // }

    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: zoomlevel, center: central });







if (city || state) {

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response) 
        console.log(response[7].latitude)
        console.log(response[7].longitude)
        console.log(response.length)


        // filter responses here using array of obs initialized outside into list of viable breweries

        // use data-value to help with later on click functions

        for (let brewery of response) {
            let brewLat = parseFloat(brewery.latitude) 
            let brewLong = parseFloat(brewery.longitude)
            let location = { lat: brewLat, lng: brewLong };
            console.log(location)
            let marker = new google.maps.Marker({ position: location, map: map });
            marker.addClass("clickmarker")
        }

    })


}



}


//find a way to get coordinates of state or city and set it to map center
//add identifying info to the map markers, then create a click handler to display the proper info
//create informational opbjects for all included breweries
//think on how to style/display info