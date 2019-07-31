



//can ask for user i.d. here, and use it for central

let city;
let state;
let styleKeywords;
let abv;
let ibu;
let queryURL;
let displayBeers = $("#displaybeers")
console.log(displayBeers)


$("#submitem").on("click", function () {
    event.preventDefault()
city = $("#city").val().trim()
state = $("#state").val().trim()

//give styles, abv, abu their user inputted values here

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



        // ABV: 	low: up to and including 4%
        // medium: up to and including 7%
        //     high: 7-11%
        //     Very high: above 11%
        
        // IBU Scale: 	low: >=20
        //         medium: 21 - 50
        //     high: 50-80
        //     Very High: Above 80
        



        

        let breweriesCollection = [
            {"pegasus city brewing company": {info: "Small but mighty, our taproom is a place to relax, enjoy a cold brew, and be among friends.",
            beers: [
                {
                    name: "nine volt", 
                    keywords: ["paleale"],
                    style: "Tripel",
                    abv: 9.1,
                    abvRank: "high",
                    ibu: 35,
                    ibuRank: "medium",
                    info: "This deceptively easy-to-drink tripel is drier and less sweet, with an extremely clean finish. Light bodied with a hint of citrus and spice aromas, it pairs well with pasta, swing dancing and Sam Lao"
                },
                {
                    name: "cannoneer", 
                    keywords: ["arale"],
                    style: "Bold Amber",
                    abv: 7.4,
                    abvRank: "high",
                    ibu: 29,
                    ibuRank: "medium",
                    info: "This flavorful amber is medium-bodied with a crisp finish and light caramel aroma. A beer made with all-american ingredients, it pairs well with Texas BBQ, golden retrievers, and the American Dream"
                },
                {
                    name: "highpoint", 
                    keywords: ["ale"],
                    style: "Porch Ale",
                    abv: 5.3,
                    abvRank: "medium",
                    ibu: 20,
                    ibuRank: "low",
                    info: "Our flagship beer is caramel-colored and light-bodied. First brewed and enjoyed on a porch, this English Mild Ale is extremely refreshing with a toasted malt aroma. Pairs well with seafood, the old 97’s, and sunsets."
                },
                {
                    name: "sixth floor", 
                    keywords: ["porter"],
                    style: "Easy Porter",
                    abv: 5.4,
                    abvRank: "medium",
                    ibu: 31,
                    ibuRank: "medium",
                    info: "Our easy porter has all the taste and flavor, without the heaviness, so it can be enjoyed year-round. With a medium body and roasted coffee aroma, it pairs well with steak, smooth jazz, and conspiracy theories."
                },
                {
                    name: "texikaner", 
                    keywords: ["lager"],
                    style: "Black Lager",
                    abv: 5.2,
                    abvRank: "medium",
                    ibu: 21,
                    ibuRank: "medium",
                    info: "Though dark in color, this lager is light-bodied and extremely smooth. A mix of German and Mexican lager flavors gives it a mild toffee aroma and crisp finish, pairs well with Tex-Mex, Willie Nelson, and beachcombing"
                },

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