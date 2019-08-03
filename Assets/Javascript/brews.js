
//// BEGINNING OF DOCUMENT ASKS IF YOU ARE 21 //

$(document).ready(function() {
    $('#old-enough').hide();
    $('#sorry').hide();
    $('#footer').hide();

    
});



/// CLICK EVENTS FOR 21 JUMBOTRON
// CLICK FUNCTION FOR WHEN NO IS CLICKED
//CLICK FUNCTION FOR WHEN YES IS CLICKED -- Jumbotron disappears, and rest of the pages reappear
$('#yesButton').on('click', function(){
    $('#legal-age').hide();
    $('#sorry').hide();
    $('#old-enough').show();
    $('#footer').show();
    
});

$('#noButton').on('click', function(){
    $('#legal-age').hide();
    $('#old-enough').hide();
    $('#sorry').show();
    $('#footer').hide();
    
      
});





//click start button -- needs to show questions, start timer, intake answers.
//$('#yesButton').on('click', function(){
 //   $('#startBtn').hide();
 //   unHide(); 
 //   startTimer();
//$('.results').hide();
    
//});



///////////////////////////////////////////////////////////////////
//can ask for user i.d. here, and use it for central

let city;
let state;
let styleKeywords = ["pilsner", "lager"];
let abv;
let ibu = "medium";
let queryURL;
let displayBeers = $("#displaybeers");
let breweriesDisplay = [];


console.log(displayBeers);




// ABV: low: up to and including 4%
// medium: up to 7%
//     high: 7-10%
//     Very high: above 10%

// IBU Scale: 	low: >=20
//         medium: 21 - 50
//     high: 51-80
//     Very High: Above 80

let breweriesCollection = [
    {
        name: "Pegasus City Brewing Company",
        info: "Small but mighty, our taproom is a place to relax, enjoy a cold brew, and be among friends.",
        url: "https://www.pegasuscitybrewery.com/home",
        position: { lat: 32.7991564828495, lng: -96.8339969571821 },
        beers: [
            {
                name: "Nine Volt",
                keywords: ["paleale"],
                style: "Tripel",
                abv: 9.1,
                abvRank: "high",
                ibu: 35,
                ibuRank: "medium",
                info: "This deceptively easy-to-drink tripel is drier and less sweet, with an extremely clean finish. Light bodied with a hint of citrus and spice aromas, it pairs well with pasta, swing dancing and Sam Lao"
            },
            {
                name: "Cannoneer",
                keywords: ["redamberale"],
                style: "Bold Amber",
                abv: 7.4,
                abvRank: "high",
                ibu: 29,
                ibuRank: "medium",
                info: "This flavorful amber is medium-bodied with a crisp finish and light caramel aroma. A beer made with all-american ingredients, it pairs well with Texas BBQ, golden retrievers, and the American Dream"
            },
            {
                name: "Highpoint",
                keywords: ["ale"],
                style: "Porch Ale",
                abv: 5.3,
                abvRank: "medium",
                ibu: 20,
                ibuRank: "low",
                info: "Our flagship beer is caramel-colored and light-bodied. First brewed and enjoyed on a porch, this English Mild Ale is extremely refreshing with a toasted malt aroma. Pairs well with seafood, the old 97’s, and sunsets."
            },
            {
                name: "Sixth Floor",
                keywords: ["porter"],
                style: "Easy Porter",
                abv: 5.4,
                abvRank: "medium",
                ibu: 31,
                ibuRank: "medium",
                info: "Our easy porter has all the taste and flavor, without the heaviness, so it can be enjoyed year-round. With a medium body and roasted coffee aroma, it pairs well with steak, smooth jazz, and conspiracy theories."
            },
            {
                name: "Texikaner",
                keywords: ["lager"],
                style: "Black Lager",
                abv: 5.2,
                abvRank: "medium",
                ibu: 21,
                ibuRank: "medium",
                info: "Though dark in color, this lager is light-bodied and extremely smooth. A mix of German and Mexican lager flavors gives it a mild toffee aroma and crisp finish, pairs well with Tex-Mex, Willie Nelson, and beachcombing"
            }

        ]
    },
    {
        name: "Texas Ale Project",
        info: "Texas Ale Project Is the first brewery & TAP Room to be built from the ground up in the City of Dallas since the late 1800s. We are family and veteran-owned and have a passionate, dedicated team. We are proud to serve our fine ales to you.",
        url: "https://www.texasaleproject.com/drink/",
        position: { lat: 32.7818812, lng: -96.8148593 },
        beers: [
            {
                name: "100 Million Angels Singing",
                keywords: ["ipa", "imperialdouble"],
                style: "Double IPA",
                abv: 9.2,
                abvRank: "high",
                ibu: 100,
                ibuRank: "veryhigh",
                info: "SIMPLY GLORIOUS. Harmonious within the realm of extremism. This Double IPA is double dry-hopped with copious amounts of some of our favorite American-grown hops. Pine, resin, and citrus."
            },
            {
                name: "Fire Ant Funeral",
                keywords: ["redamberale"],
                style: "Amber Ale",
                abv: 6,
                abvRank: "medium",
                ibu: 32,
                ibuRank: "medium",
                info: "AN ANTIDOTE TO THE BIG STING. A traditional amber ale complexly built from a careful selection of 7 different malts. American grown hops harmoniously round out the wonderfully rich malts. Balanced without the bite."
            },
            {
                name: "50 Foot Jackrabbit",
                keywords: ["ipa"],
                style: "IPA",
                abv: 7,
                abvRank: "high",
                ibu: 70,
                ibuRank: "high",
                info: "BIG TASTE. BIG AROMA. YOU BET. But expect to be greeted by a surprising smoothness and a composed presence of tropical and citrus humulus lupulus. Only spotted in Texas, this IPA is our celebration of the most flavorful American grown hops."
            },
            {
                name: "Payne Pills",
                keywords: ["pilsner", "lager"],
                style: "Citrus Pilsner",
                abv: 5.5,
                abvRank: "medium",
                ibu: 31,
                ibuRank: "medium",
                info: "NO PRESCRIPTION NECESSARY. Traditional pilsner brewed with citrus-forward hops. This lager is crisp and refreshing."
            }

        ]
    },
    {
        name: "Deep Ellum Brewing Co",
        info: "",
        url: "http://www.deepellumbrewing.com",
        position: {lat: 32.7806273333333,lng: -96.7815684545455 },
        beers: [{
            name: "Dallas Blonde",
            keywords: ["Ale"],
            style: "American Blonde",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info:"In a town famous for its bottled blondes, we’ve reset the bar. This shimmering, golden ale combines citrusy and floral American hops with Pale, Vienna and Wheat malts. It’s a beautifully balanced, sessionable brew. Guaranteed to deliver more fun—go blonde."
    },
    {
            name: "Deep Ellum IPA",
            keywords: ["Indian Pale Ale"],
            style: "Light",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info:"For an IPA to bear our hometown name, it better be potent. So we loaded it with our favorite American hops for a bitter punch. And with some over-the-top tropical fruit, citrus, pine and floral aromas and flavors, you’ve got one big Texas IPA, deserving of the Deep Ellum name."
    },
    {
            name: "Deep Ellum Lager",
            keywords: ["Lager"],
            style: "Throwback American",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info:"Our throwback to great show beer. Inspired by soft pilsner malt, we use rye malt for flavor and spice it up with hops from the Czech Republic. Distinct light body, earthy, and floral aroma that will leave you thirsting for an encore."
    },
    {
            name: "Local Legend",
            keywords: ["Stout"],
            style: "Sweet Milk",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info:"A sessionable Sweet Milk Stout, Local Legend is the perfect balance of roasted barley and milk sugar for a subtly sweet, silky brew. This Legend is definitely one for the books."
    },
    {
            name: "Dream Cruiser",
            keywords: ["Indian Pale Ale"],
            style: "Double Rye",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info:"Citrusy, piney, floral and fruity hops are at least a third of the reason we got ourselves into this whole brewing adventure. We’ve taken the IPA to its Event Horizon. Get the picture? It’s hoppy!"
    },
    ]
    },
    {
        name: "Four Corners Brewing Co",
        info: "",
        url: "http://www.fcbrewing.com",
        position: {lat: 32.7793491,lng: -96.830624167423 },
        beers: [{
            name: "El Grito",
            keywords: ["Lager"],
            style: "Light",
            abv: 4.4,
            abvRank: "high",
            ibu: 20,
            ibuRank: "medium",
            info:"A classic blend of Pilsner malt and flaked corn provide a light, earthy body to the brew. "
        },
    {
            name: "Local BUzz",
            keywords: ["Ale"],
            style: "Honey Rye Golden",
            abv: 5.2,
            abvRank: "high",
            ibu: 20,
            ibuRank: "medium",
            info:"A crisp and delicious Golden Ale brewed with honey. Refreshing taste is what the buzz is all about. ¡Salud!"
    },
    {
            name: "El Chingon",
            keywords: ["Indian Pale Ale"],
            style: "American",
            abv: 7.3,
            abvRank: "high",
            ibu: 72,
            ibuRank: "medium",
            info:"This IPA is brewed with a chingo-blend of American hops, balanced with Munich malt AND dry-hopped para más intensidad."
    },
]
    },
    {
        name: "Noble Rey Brewing Company",
        info: "",
        url: "http://www.noblereybrewing.com",
        position: {lat:32.7999840454545,lng:-96.8395214545454},
        beers: [{
            name: "Off The Leash",
            keywords: ["Ale"],
            style: "Texas Red",
            abv: 6.0,
            abvRank: "high",
            ibu: 23,
            ibuRank: "medium",
            info:"This shamefully good Texas Red Ale is brewed with no restraint. Malty and robust with a perfect balance of hop flavor and aroma, our red finishes smooth and easy!"
        },
    {
            name: "Sex In A Canoe",
            keywords: ["Lager"],
            style: "American Light",
            abv: 4.2,
            abvRank: "high",
            ibu: 8,
            ibuRank: "medium",
            info:"If you have made love in a canoe, then you know it is done really close to water…this American Light Lager is meant for one thing and one thing only — to crush, and crush often while still drinking a flavorful craft lager." 
    },
    {
            name: "Tactical Combat Firefighter",
            keywords: ["Ale"],
            style: "American IPA",
            abv: 6.2,
            abvRank: "high",
            ibu: 70,
            ibuRank: "medium",
            info:"Tactical Combat Firefighter is everything we love in an IPA, little bit of NE, little bit of West Coast, a whole lot of Noble Rey. This DDH IPA is smooth and crushable, packed with hoppy goodness for the Texas heat while staying full bodied."
    },
    {
            name: "Golden Ray",
            keywords: ["Ale"],
            style: "American Wheat",
            abv: 6.0,
            abvRank: "high",
            ibu: 30,
            ibuRank: "medium",
            info:"Golden Rey is brewed with 35% wheat which makes for a creamy mouthful that carries a punch of orange and tropical flavors."
    },
    {
            name: "Baracus",
            keywords: ["Ale"],
            style: "Brown",
            abv: 6.1,
            abvRank: "high",
            ibu: 30,
            ibuRank: "medium",
            info:"Our American Brown Ale with a robust mix of roasted malt flavor and full body."
    }
]
    },
    {
        name: "Oak Cliff Brewing Co",
        info: "N/A",
        url: "N/A",
        position: "N/A",
        beers: "N/A"
    },
    {
        name: "Oak Highlands Brewery",
        info:"",
        url: "http://www.ohbrewery.com",
        position: "N/A",
        beers:[{
            name: "Allgood",
            keywords: ["Ale"],
            style: "German Kolsch",
            abv: 5.8,
            abvRank: "high",
            ibu: 22,
            ibuRank: "medium",
            info:"Golden in color, light in body, and full in flavor."
        },
        {
            name: "Derelic IPA",
            keywords: ["India Pale Ale"],
            style: "American IPA",
            abv: 6.1,
            abvRank: "high",
            ibu: 56,
            ibuRank: "medium",
            info:"Strong citrus hop aroma and flavor without an overly bitter taste."
        },
        {
            name: "DFDub",
            keywords: ["Ale"],
            style: "German Dunkelweizen (dark wheat)",
            abv: 7.1,
            abvRank: "high",
            ibu: 13,
            ibuRank: "medium",
            info:"Heavy banana and clove aromas. A dark, slightly cloudy beer with a fresh crisp taste."
        },
        {
            name: "Freaky Deaky",
            keywords: ["Ale"],
            style: "Belgium Triple",
            abv: 10.0,
            abvRank: "high",
            ibu: 45,
            ibuRank: "medium",
            info:"Light in color and brewed with a larger amount of American hops than a traditional tripel."
        },
        {
            name: "Golden Mustache",
            keywords: ["Lager"],
            style: "German Dortmunder",
            abv: 5.5,
            abvRank: "high",
            ibu: 26,
            ibuRank: "medium",
            info:"Originated in Dortmund Germany, this lager is crisp, clear, and easy drinking."
        },
        ]

    },

    


]





$("#submitem").on("click", function () {
    event.preventDefault()
    city = $("#city").val().trim()
    state = $("#state").val().trim()

    //give styles, abv, abu their user inputted values here





    




  for (let brewery of breweriesCollection) {
        for (let beer of brewery.beers) {

            if (beer.ibuRank === ibu && beer.abvRank === abv && styleKeywords === beer.keywords) {
                if (!breweriesDisplay.includes(brewery)) {
                    breweriesDisplay.push(brewery)
                }
            }
        }
    }
    console.log(breweriesDisplay)





   


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
        document.getElementById('map'), { zoom: zoomlevel, center: central })
       
        
        var infowindow = new google.maps.InfoWindow({
            content: document.getElementById('info-content')
    });
      var places = new google.maps.places.PlacesService(map);






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

            //Code to filter the map markers

            // create series of arrays, each modified by input search parameters, if they are found using Object.values, or just manually by property name, then push to the new array, finally display the new array under the div. 

            // Each div should be styled, have an identifying information data-name attribute, which can be used to bring up the information for the appropriate beers, after filtering these too
            
            for (let brewery of response) {
                let brewLat = parseFloat(brewery.latitude)
                let brewLong = parseFloat(brewery.longitude)
                let location = { lat: brewLat, lng: brewLong };
                console.log(location)
                
                var icon = {
                      url: place.icon,
                      size: new google.maps.Size(71, 71),
                      origin: new google.maps.Point(0, 0),
                      anchor: new google.maps.Point(17, 34),
                      scaledSize: new google.maps.Size(25, 25)
                    };
                let marker = new google.maps.Marker({
                    position: place.location,
                    map: map,
                    icon: icon,
                    title: name
                    
                });
//-------------------------------------------------------------------------------------------------------------------
        
         
         places.getDetails({placeId: marker.placeResult.place_id},
         function(place, status) {
          if (status !== google.maps.places.PlacesServiceStatus.OK) {
            return;
          }
         
        });
        function buildIWContent(place) {
            document.getElementById('iw-icon').innerHTML = '<img class="brewIcon" ' +
                'src="' + place.icon + '"/>';
            document.getElementById('iw-url').innerHTML = '<b><a href="' + place.url +
                '">' + place.name + '</a></b>';
            document.getElementById('iw-address').textContent = place.vicinity;
    
            if (place.formatted_phone_number) {
              document.getElementById('iw-phone-row').style.display = '';
              document.getElementById('iw-phone').textContent =
                  place.formatted_phone_number;
            } else {
              document.getElementById('iw-phone-row').style.display = 'none';
            }
    
            // Assign a five-star rating to the location, using a black star ('&#10029;')
            // to indicate the rating the brewery has earned, and a white star ('&#10025;')
            // for the rating points not achieved.
            if (place.rating) {
              var ratingHtml = '';
              for (var i = 0; i < 5; i++) {
                if (place.rating < (i + 0.5)) {
                  ratingHtml += '&#10025;';
                } else {
                  ratingHtml += '&#10029;';
                }
              document.getElementById('iw-rating-row').style.display = '';
              document.getElementById('iw-rating').innerHTML = ratingHtml;
              }
            } else {
              document.getElementById('iw-rating-row').style.display = 'none';
            }
    
            // The regexp isolates the first part of the URL (domain plus subdomain)
            // to give a short URL for displaying in the info window.
            if (place.website) {
              var fullUrl = place.website;
              var website = hostnameRegexp.exec(place.website);
              if (website === null) {
                website = 'http://' + place.website + '/';
                fullUrl = website;
              }
              document.getElementById('iw-website-row').style.display = '';
              document.getElementById('iw-website').textContent = website;
            } else {
              document.getElementById('iw-website-row').style.display = 'none';
            }
          }

                marker.addListener("click", function () {
                    //why wont this work? Find a way to empty all child nodes from a div, but not the text in the div itself, though current method works
                    displayBeers.empty()
                    infowindow.open(map, marker);
                    buildIWContent(place);
                    console.log("click successful")
                    console.log(this.title)
                    $(`<div class = "brewclick" data-name="${this.title}">A clickable list of all the beers for a given brewery will go here when this brewery is clicked on. This brewery is named ${this.title}</div>`).appendTo(displayBeers)

                })


                }
        })
        }
    


    }






//find a way to get coordinates of state or city and set it to map center
//add identifying info to the map markers, then create a click handler to display the proper info
//create informational opbjects for all included breweries
//think on how to style/display info