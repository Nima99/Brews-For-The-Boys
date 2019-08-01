
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
            },
        ]
    },

            { name: "Peticolas Brewing Co",
            info: "We’re honest, friendly, down-to-earth brewers delivering world class passion in a glass.",
            url: "https://www.peticolasbrewing.com/beers",
            position: { lat: 32.7967768686869, lng: -96.8303188181818 },
            beers: [
                {
                    name: "HipsterAle",
                    keywords: ["ipa"],
                    style: "Blonde ale",
                    abv: 5.6,
                    abvRank: "medium",
                    ibu: 25,
                    ibuRank: "medium",
                    info: "HIPster Ale is a blonde ale that presents as a classic ‘light beer’ – straw like color beneath a clean white head of foam. And easy drinking is the name of the game for this one. Lemondrop and Cascade hops play a unique background role in both flavor and aroma – present, but intentionally less noticeable. The effervescence brings a refreshing character to the beer and balances out an ever so slight bready finish. You may think it, but it’s not macro beer.."
                },
                {
                    name: "Velvet Hammer",
                    keywords: ["ipa"],
                    style: "Dark beer",
                    abv: 9,
                    abvRank: "high",
                    ibu: 85,
                    ibuRank: "very high",
                    info: "The Hammer is an imperial red ale that appears as a dark, ruby reddish-brown ale beneath a sheath of protective off-white foam. It is malt-forward with elements of caramel and the sweetness of light brown sugar, balanced nicely by a combination of floral hops and a noticeable alcohol bite. It’s a sturdy brew with a smooth character which belies both an inner strength and a slightly full body, along with a moderate bitterness to round out the taste."
                },
                {
                    name: "Golden Opportunity",
                    keywords: ["Kolsch"],
                    style: "light craft beer",
                    abv: 4.6,
                    abvRank: "medium",
                    ibu: 27,
                    ibuRank: "very high",
                    info: "In the spirit of a true session beer we present the Golden Opportunity, a beer modeled after the classic styles of Koln, Germany, but which deliberately lacks the enhanced fruitiness of the typical American interpretation. Straw-like in color with a dense white head, this medium-bodied brew has a light, pleasant malt aroma with a hint of sweetness and faint bitterness. It is clean, well-balanced and suitably carbonated for a crisp, refreshing feel."
                },
                {
                    name: "sit down or i'll sit you down",
                    keywords: ["ipa"],
                    style: "Dark Beer",
                    abv: 10,
                    abvRank: "Very high",
                    ibu: 90,
                    ibuRank: "very high",
                    info: "As for the beer itself, the intent is to exhibit the fresh and bright character of the hops. We dry hopped it with over a pound of hops per barrel of beer. It’s gold in color and the floral ester aroma is high. The hop bitterness is high, but not at all harsh. The hop flavor is high, fresh, and lively. Yet with all of our beers, it’s all about balance and this one is no exception. The malt character is fairly high and provides a tremendously full mouthfeel. Finally, the alcohol in this beer is intentionally present (and delicious)."
                },
                {
                    name: "Too Soon",
                    keywords: ["ipa"],
                    style: "Indiana Pale ale",
                    abv: 10,
                    abvRank: "Very high",
                    ibu: 75,
                    ibuRank: "high",
                    info: "TOO SOON is an IP…A brewed with a ‘back to basics’ approach. Rather than formulate a recipe using the newest and trendiest methods, we used the traditional methods and techniques that are the foundation for some of our earlier beers (e.g., Velvet Hammer, Royal Scandal, Sit Down). Our typical base two row pale malt is accentuated with a minimal amount of light crystal malt and we turned to three of our most tried and true hops…Centennial, Cascade, and Amarillo. The brewhouse hop regimen for TOO SOON mirrors that of the earlier referenced beers and three are dry hopped in the same manner as well. Will this beer turn out as well as Hammer, Scandal, and Sit Down? Does the beer name answer the question?"
                },
                {
                    name: "COME AND TAKE IT",
                    keywords: ["kolsch"],
                    style: "Dark Beer",
                    abv: 5,
                    abvRank: "medium",
                    ibu: 30,
                    ibuRank: "medium",
                    info: "Our Koslch serves as the basis for ‘Come and Take It’, but the similarities between the two beers end there due to an aggressive use of cascade hops that completely change this beer’s character. Although we’ve added nearly a pound and half of Cascade per barrel to a Tettnang hopped beer, the execution and manner of the Cascade addition in a cohesive and seamless manner is what ‘Come and Take It’ is all about. Tettnang imparts spicy and earthy characteristics while also subtly contributing fruity, floral, citrus notes; whereas Cascade is primarily classified as a fruity floral hop with a hint of spice. Emphasizing Tettnang early and Cascade hops late results in huge fruity citrus notes that dominate both Come and Take It’s aroma and flavor. The more you drink it, the more you’ll enjoy it. Weighing in at 5% ABV, we trust you’ll find this one refreshing beer."
                },
                {
                    name: "GOOD CALL",
                    keywords: ["ipa"],
                    style: "summer ale",
                    abv: 6.3,
                    abvRank: "medium",
                    ibu: 41,
                    ibuRank: "medium",
                    info: "The blending of hops create aromas of lemon peel, citrus and a light breadiness. The combination of ginger and citrusy hops creates a crisp bite that quickly fades into a round sweetness.  As carbonation is released on the palate, you’ll experience flavors of orange and pineapple while ginger provides a gentle spice in the background."
                },
                {
                    name: "DON’T THINK IT – WON’T HAPPEN",
                    keywords: ["ipa"],
                    style: "hazy ipa",
                    abv: 7.5,
                    abvRank: "medium",
                    ibu: 5,
                    ibuRank: "medium",
                    info: "Don’t Think it – Won’t Happen rounds itself out when the beer’s pungent aroma pairs with the flavors that come through.  Medium/Low bitterness and a light acidity balance flavors reminiscent of the same tropical and citrus fruits that came through in the aroma.  Residual malt sweetness adds the final touch, and the ending perception is a glass of fresh squeezed juice."
                },
                {
                    name: "GRIN & TONIC",
                    keywords: ["Other"],
                    style: "hazy ipa",
                    abv: 4,
                    abvRank: "medium",
                    ibu: 28,
                    ibuRank: "medium",
                    info: "GrIN is an experimental “cocktail beer” designed to mimic the flavors and experience of a gin and tonic. A golden ale base beer brewed with copious amounts of Juniper and Coriander sets the foundation for this concoction. We then blended the pungent beer with locally sourced tonic water and lime supplied by Oak Cliff Beverage Works.When the Golden Ale and tonic come together, a beautiful balance is achieved and a unique beer drinking experience is realized. If you think your mind’s playing tricks on you, have another. At 4% ABV, GrIN will allow you to have the gin and tonic experience without the repercussions of overindulging on the real thing."
                }
    

            
        ]
    }
]





$("#submitem").on("click", function () {
    event.preventDefault()
    city = $("#city").val().trim()
    state = $("#state").val().trim()

    //give styles, abv, abu their user inputted values here





    




    for (let brewery of breweriesCollection) {
        for (let beer of brewery.beers) {

            if (styleKeywords.every(function (element){

                    if (beer.keywords.includes(element)) {
                        return true;
                }
            })) {
                if (beer.ibuRank === ibu && beer.abvRank === abv) { 
                    if (!breweriesDisplay.includes(brewery)) {
                        breweriesDisplay.push(brewery)
                    }
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

            //Code to filter the map markers

            // create series of arrays, each modified by input search parameters, if they are found using Object.values, or just manually by property name, then push to the new array, finally display the new array under the div. 

      

            for (let brewery of response) {
                let brewLat = parseFloat(brewery.latitude)
                let brewLong = parseFloat(brewery.longitude)
                let location = { lat: brewLat, lng: brewLong };
                console.log(location)
                let marker = new google.maps.Marker({
                    position: location,
                    map: map,
                    title: brewery.name
                });

                marker.addListener("click", function () {
                    //why wont this work? Find a way to empty all child nodes from a div, but not the text in the div itself, though current method works
                    displayBeers.empty()
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