



//can ask for user i.d. here, and use it for central

let city;
let state;
let queryURL;
let displayBeers = $("#displaybeers")
console.log(displayBeers)


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

        //can use regexps to searc h for keywords decided on based off

        //Code to filter the map markers

        // create series of arrays, each modified by input search parameters, if they are found using Object.values, or just manually by property name, then push to the new array, finally display the new array under the div. 

        let breweriesCollection = [
            {"pegasus city brewery": {info: "blahblah",
            beers: [
                {
                    name: "examplename",
                    
                }

            ]} }
        ]

        // Each div should be styled, have an identifying information data-name attribute, which can be used to bring up the information for the appropriate beers, after filtering these too

        for (let brewery of response) {
            let brewLat = parseFloat(brewery.latitude) 
            let brewLong = parseFloat(brewery.longitude)
            let location = { lat: brewLat, lng: brewLong };
            console.log(location)
            let marker = new google.maps.Marker({ position: location,
                map: map,
                title: brewery.name});
            marker.addListener("click", function (){
                //why wont this work? Find a way to empty all child nodes from a div, but not the text in the div itself, though current method works
                displayBeers.empty()
                console.log("click successful")
                console.log(this.title)
                $(`<div data-name="${this.title}">A clickable list of all the beers for a given brewery will go here when a brewery is clicked on This brewery is named ${this.title}</div>`).appendTo(displayBeers)
                
            })


        }

    })


}



}


//find a way to get coordinates of state or city and set it to map center
//add identifying info to the map markers, then create a click handler to display the proper info
//create informational opbjects for all included breweries
//think on how to style/display info