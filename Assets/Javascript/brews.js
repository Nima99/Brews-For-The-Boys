
//// BEGINNING OF DOCUMENT ASKS IF YOU ARE 21 //

$(document).ready(function () {
    $('#old-enough').hide();
    $('#sorry').hide();
    $('#footer').hide();


});



/// CLICK EVENTS FOR 21 JUMBOTRON
// CLICK FUNCTION FOR WHEN NO IS CLICKED
//CLICK FUNCTION FOR WHEN YES IS CLICKED -- Jumbotron disappears, and rest of the pages reappear
$('#yesButton').on('click', function () {
    $('#legal-age').hide();
    $('#sorry').hide();
    $('#old-enough').show();
    $('#footer').show();

});

$('#noButton').on('click', function () {
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

// let city = "Dallas";
// let state = "Texas";
let styleKeywords;
let abv;
let ibu;
let queryURL = `https://api.openbrewerydb.org/breweries?by_state=texas&by_city=dallas&per_page=50`
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
                keywords: "paleale",
                style: "Tripel",
                abv: 9.1,
                abvRank: "high",
                ibu: 35,
                ibuRank: "medium",
                info: "This deceptively easy-to-drink tripel is drier and less sweet, with an extremely clean finish. Light bodied with a hint of citrus and spice aromas, it pairs well with pasta, swing dancing and Sam Lao"
            },
            {
                name: "Cannoneer",
                keywords: "redamberale",
                style: "Bold Amber",
                abv: 7.4,
                abvRank: "high",
                ibu: 29,
                ibuRank: "medium",
                info: "This flavorful amber is medium-bodied with a crisp finish and light caramel aroma. A beer made with all-american ingredients, it pairs well with Texas BBQ, golden retrievers, and the American Dream"
            },
            {
                name: "Highpoint",
                keywords: "ale",
                style: "Porch Ale",
                abv: 5.3,
                abvRank: "medium",
                ibu: 20,
                ibuRank: "low",
                info: "Our flagship beer is caramel-colored and light-bodied. First brewed and enjoyed on a porch, this English Mild Ale is extremely refreshing with a toasted malt aroma. Pairs well with seafood, the old 97’s, and sunsets."
            },
            {
                name: "Sixth Floor",
                keywords: "porter",
                style: "Easy Porter",
                abv: 5.4,
                abvRank: "medium",
                ibu: 31,
                ibuRank: "medium",
                info: "Our easy porter has all the taste and flavor, without the heaviness, so it can be enjoyed year-round. With a medium body and roasted coffee aroma, it pairs well with steak, smooth jazz, and conspiracy theories."
            },
            {
                name: "Texikaner",
                keywords: "lager",
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
                keywords: "ipa",
                style: "Double IPA",
                abv: 9.2,
                abvRank: "high",
                ibu: 100,
                ibuRank: "veryhigh",
                info: "SIMPLY GLORIOUS. Harmonious within the realm of extremism. This Double IPA is double dry-hopped with copious amounts of some of our favorite American-grown hops. Pine, resin, and citrus."
            },
            {
                name: "Fire Ant Funeral",
                keywords: "redamberale",
                style: "Amber Ale",
                abv: 6,
                abvRank: "medium",
                ibu: 32,
                ibuRank: "medium",
                info: "AN ANTIDOTE TO THE BIG STING. A traditional amber ale complexly built from a careful selection of 7 different malts. American grown hops harmoniously round out the wonderfully rich malts. Balanced without the bite."
            },
            {
                name: "50 Foot Jackrabbit",
                keywords: "ipa",
                style: "IPA",
                abv: 7,
                abvRank: "high",
                ibu: 70,
                ibuRank: "high",
                info: "BIG TASTE. BIG AROMA. YOU BET. But expect to be greeted by a surprising smoothness and a composed presence of tropical and citrus humulus lupulus. Only spotted in Texas, this IPA is our celebration of the most flavorful American grown hops."
            },
            {
                name: "Payne Pills",
                keywords: "pilsner",
                style: "Citrus Pilsner",
                abv: 5.5,
                abvRank: "medium",
                ibu: 31,
                ibuRank: "medium",
                info: "NO PRESCRIPTION NECESSARY. Traditional pilsner brewed with citrus-forward hops. This lager is crisp and refreshing."
            },
        ]
    },

    {
        name: "Steam Theory Brewing",
        info: "Over time you will see how we have blended hard technology with innovative ideas that date back to the Victorian era and leverage them in the modern day. Our “Theory” is that we can then blend those concepts with our own in a way that will bring together our brewery, bar, kitchen and overall look and feel. It will be an immersive environment where people can enjoy food and beer that are not only intertwined in themselves, but also with a goal of educating folks on where we came from as an industry as well as where it will take us in the future. We want to be a place of learning, enjoyment, surprise and wonderment. Whether it be the beers, food, cocktails or atmosphere - we will ensure there will always be a synergy of the culinary arts in a way that will intrigue the senses.",
        url: "https://steamtheorybrewing.com/our-mission",
        position: { lat: 32.778463, lng: -96.830002 },
        beers: [
            {
                name: "Equilibrium",
                keywords: "redamberale",
                style: "American Amber / Red",
                abv: 6.7,
                abvRank: "",
                ibu: 42,
                ibuRank: "",
                info: "Medium hop bitterness, flavor and aroma - balance between hop bitterness and malt sweetness."
            },
            {
                name: "Threat Level Midnight!",
                keywords: "stout",
                style: "American Stout",
                abv: 7.1,
                abvRank: "",
                ibu: 55,
                ibuRank: "",
                info: "Full bodied beer with flavors of coffee, chocolate and caramel and has notes of fruit, citrus and a touch of bitterness."
            },
            {
                name: "Things That Make You Go Mmmm",
                keywords: "paleale",
                style: "American Pale Ale",
                abv: 5.9,
                abvRank: "",
                ibu: 38,
                ibuRank: "",
                info: "This beer has its roots in the early craft beer movement. It is hopped with Cascade and Centennial lending it flavors of citrus and pine. There is just a hint of sweetness and a crisp dry finish."
            },
            {
                name: "Brutally Frank",
                keywords: "ipa",
                style: "IPA-Brut",
                abv: 7.7,
                abvRank: "",
                ibu: 22,
                ibuRank: "",
                info: "Dry hopped with notes of pineapple, passion fruit and sage."
            },
            {
                name: "The Summer of George",
                keywords: "other",
                style: "Cream Ale",
                abv: 4.8,
                abvRank: "",
                ibu: 25,
                ibuRank: "",
                info: "Light and refreshing ale with a hint of corn sweetness."
            },
            {
                name: "Hops Against Humanity",
                keywords: "ipa",
                style: "Dry Hopped IPA",
                abv: 7.3,
                abvRank: "",
                ibu: 75,
                ibuRank: "",
                info: "A West Coast IPA showcasing hops from bittering to dry hopping."
            },
            {
                name: "Monsters from the Id",
                keywords: "porter",
                style: "Imperial Baltic Porter",
                abv: 9,
                abvRank: "",
                ibu: 30,
                ibuRank: "",
                info: "This beer has flavors of chocolate, toffee, toasted marshmallows and graham crackers. It is deceptively smooth with just a hint of warmth in the finish."
            },
            {
                name: "Big Chungus",
                keywords: "paleale",
                //also a belgian!
                style: "Dry Hopped IPA",
                abv: 6.8,
                abvRank: "",
                ibu: 25,
                ibuRank: "",
                info: "This beer has notes of bready malt with just a hint of caramel. It has a touch of spice with a soft fruitiness and a dry finish."
            },
            {
                name: "Saint Louis Blanc",
                keywords: "farmhouseale",
               //also a belgian!
                style: "Saison Farmhouse Ale",
                abv: 7.5,
                abvRank: "",
                ibu: 27,
                ibuRank: "",
                info: "Belgian Style Saison brewed with pale, wheat and rye malt. It is hopped with German Hallertau Blanc hops. It has flavors white grapes and spice."
            },
            {
                name: "When the Wit Hits the Fan",
                           //also a belgian!
                keywords: "wheatbeer",
                style: "Witbier",
                abv: 5,
                abvRank: "",
                ibu: 16,
                ibuRank: "",
                info: "This Belgian style wheat beer is brewed with pilsner malt, unmalted wheat and a touch of oats. It has a hint of citrus and spice from sweet orange peel and coriander seed."
            },
            {
                name: "Unhinged",
                keywords: "ipa",
                style: "Imperial IPA",
                abv: 8.7,
                abvRank: "",
                ibu: 112,
                ibuRank: "",
                info: "An assertive IPA that has a well balanced blend of flavor and aroma hops with a strong backbone of malts."
            },
            {
                name: "Mind the Gap",
                keywords: "other",
                style: "English Brown Ale",
                abv: 5.4,
                abvRank: "",
                ibu: 18,
                ibuRank: "",
                info: "English Brown with traditional English malts, hops and yeast with notes of chocolate, hazelnut and toffee."
            },
            {
                name: "Everybody Knows",
                keywords: "other",
                style: "English Pub Ale",
                abv: 8,
                abvRank: "",
                ibu: 44,
                ibuRank: "",
                info: "Deep red English ale with notes of caramel and toffee and a hint of toasted malt. Kent Golding hops give it a fruity character."
            },
            {
                name: "The Brew Bohemians",
                keywords: "pilsner",
                style: "Czech Pilsner",
                abv: 6.2,
                abvRank: "",
                ibu: 41,
                ibuRank: "",
                info: "This Czech Pilsner is brewed with German Pilsner malt and Czech Saaz hops. It has a floral aroma with notes of spice and fresh mowed grass and a crisp finish."
            },
            {
                name: "Arseways",
                keywords: "other",
                style: "Irish Red Ale",
                abv: 5.5,
                abvRank: "",
                ibu: 30,
                ibuRank: "",
                info: "No information provided. You'll have to go check it out!"
            }
        ]
    },

    {
        //technically in Mckinney
        name: "Nine Band Brewing Company",
        info: "TTexas born and bred, the Nine-Band brewmaster brings his award-winning experience to every one of our carefully crafted styles, each made with the highest quality ingredients available for the ultimate taste experience.",
        url: "http://www.ninebandbrewing.com/beer/",
        position: { lat: 33.156278, lng: -96.682365 },
        beers: [
            {
                name: "Nine Band Pale Ale",
                keywords: "paleale",
                style: "Pale Ale",
                abv: 6,
                abvRank: "",
                ibu: 47,
                ibuRank: "",
                info: "The nine-banded armadillo is the unofficial state mascot of Texas, and the namesake and official mascot of Nine-Band Brewing Company. On hot days you can often see one on the side of the highway enjoying a cold one. Nine-Band Pale Ale™, our flagship brew, is made with premium Liberty hops, giving this easy drinking ale just a bit of a spicy, citrusy kick."
            },
            {
                name: "Cactus Cat Kolsch",
                keywords: "kolsch",
                style: "Classic German Kolsch",
                abv: 5.2,
                abvRank: "",
                ibu: 12,
                ibuRank: "",
                info: "Legend tells of the cactus cat, covered in its cactusy spines, slashing the prickly pear cactus to open up pools of juice. The fearsome feline returns at the next full moon to drink the now fermented concoction. The caterwauling of the drunken beast can be heard even over the howls of the wind. Our Cactus Cat Kölsch™ is made in the classic German manner, light and crisp with grassy and biscuity notes. Prost!"
            },
            {
                name: "Hoop Snake Hefeweizen",
                keywords: "other",
                style: "Hefeweizen",
                abv: 5.3,
                abvRank: "",
                ibu: 7,
                ibuRank: "",
                info: "According to the folks out west, the crafty hoop snake would circle up, bite its own tail, and roll out across the plains to the nearest saloon. Like the hoop snake, our Hoop Snake Hefeweizen™ has a tart bite of its own. And with hints of banana and cloves, this rich and creamy ale will soon become legendary in its own right."
            },
            {
                name: "Toad Choker Barley Wine",
                keywords: "other",
                style: "Barley Wine",
                abv: 10.6,
                abvRank: "",
                ibu: 87,
                ibuRank: "",
                info: "When the rainclouds boil up out west, and lightning makes the coyotes’ hair stand on end, we know we’re in for an all-powerful, gully-washing, toad-choker downpour. So too our thunderously bold and complex specialty brew, Toad Choker Barley Wine™, with its deep, earthy tones of coffee and caramel, will wash across your parched throat and rumble deep into your bones."
            },
            {
                name: "The Badge Honey Blonde",
                keywords: "other",
                style: "Honey Blonde",
                abv: 5.2,
                abvRank: "",
                ibu: 8,
                ibuRank: "",
                info: "From the time before Texas was a state, men donned badges to bring law to the west and establish peace and safety for settlers. Now police, fire, and EMS all have badges identifying them as servants for the public good. Here is our salute to them, with a light body and a hint of sweetness from local honey used to brew our honey blonde. “The Badge”, a beer for men and women of honor."
            },
            {
                name: "Blue Lacy Brown Ale",
                keywords: "other",
                style: "Brown Ale",
                abv: 6.1,
                abvRank: "",
                ibu: 23,
                ibuRank: "",
                info: "We didn’t make a blue beer, but a nice balanced brown ale is our tip of the hat to the energetic, dedicated, loyal breed that is the State Dog of Texas. What they live for and happen to be very good at is hunting, tracking and herding. Rumor has it these incredibly smart dogs like to lap up a bowl of “Blue Lacy Brown Ale” when they kick back and call it a day."
            },
            {
                name: "Hellwind IPA",
                keywords: "ipa",
                style: "West Coast IPA",
                abv: 7.6,
                abvRank: "",
                ibu: 63,
                ibuRank: "",
                info: "From the land where storms are born, comes the “Hellwind”. The vortex of air reaching from the ground to the clouds blends together two row and a light caramel malt with an ample amount of Cascade hops to give this “old school” style West Coast IPA a well-balanced flavor sure to calm the strongest winds."
            },
            {
                name: "28th State Stout",
                keywords: "stout",
                style: "Hefeweizen",
                abv: 5.6,
                abvRank: "",
                ibu: 23,
                ibuRank: "",
                info: "Offering up flavor as big as Texas, our brewers use oatmeal and flaked barley to give this brew a smooth creaminess and rich body. Adding a specialty malt for every flag that has flown above our soil, the dark roasted flavors highlighted by chocolate malt give this stout a taste as deep as our heritage."
            },
            {
                name: "Dubble Vizion Hazy IPA",
                keywords: "ipa",
                style: "Imperial IPA",
                abv: 6.3,
                abvRank: "",
                ibu: 28,
                ibuRank: "",
                info: `The ancient rolling plains formed by the sea floor long ago, give rise to mankind's legacy and a new dominant mammal wearing armor for protection from the sun's radiation.The Nine Banded armadillo sports unique glasses in an effort to see in color, allowing him to see into the rhizomes of all flowering hops. This vision, often referred to as "Dubble Vizion" by the futuristic mammalian brewers, gave them the ability to select the finest and fruitiest flowers. The Futuristic Mammalian Brewers used only the finest 2row, barley and wheat with a splash of oats to give their hazy creation the look of "the nectar of the gods".And it was good.`
            },
            {
                name: "13 Gold",
                keywords: "other",
                style: "Lager",
                abv: 4.3,
                abvRank: "",
                ibu: 8,
                ibuRank: "",
                info: `Coming straight down the middle is our American light Lager honoring Ivan "Pudge" Rodriguez's record 13 Gold Gloves for a catcher. This lager pours a light gold, mimicking the 13 Gold Glove trophies he has earned over his remarkable 21-year career. Enjoy this refreshing brew while you're behind home plate, tailgating at the ballpark, or lifting your trophy!`
            },
            {
                name: "June Bug Summer Wheat",
                keywords: "wheatbeer",
                style: "Summer Wheat Beer",
                abv: 5.3,
                abvRank: "",
                ibu: 14,
                ibuRank: "",
                info: "Come summer evenings on any back porch across Texas, the June bugs come calling. According to the bug experts, they’re attracted to the light. And the warm, citrusy glow of our June Bug Summer Wheat™. This light, crisp, refreshing brew is perfect on a warm summer evening, a hot summer day, or any other day for that matter."
            },
            {
                name: "Ghost Cow Oktoberfest",
                keywords: "other",
                style: "Märzenbier",
                abv: 5.9,
                abvRank: "",
                ibu: 18,
                ibuRank: "",
                info: "On the darkest night, on a desolate back road in South Texas, the ghost cow comes out to graze and make its stand smack dab in the middle of the road – a full-blown apparition on the center stripe. Our full-bodied, assertive Ghost Cow Oktoberfest™, a classic Märzenbier, pays a rich, malty tribute to this otherworldly bovine, lest it decide to haunt our street too."
            }
        ]
    },

    {
        name: "Peticolas Brewing Co",
        info: "We’re honest, friendly, down-to-earth brewers delivering world class passion in a glass.",
        url: "https://www.peticolasbrewing.com/beers",
        position: { lat: 32.7967768686869, lng: -96.8303188181818 },
        beers: [
            {
                name: "HipsterAle",
                keywords: "ipa",
                style: "Blonde ale",
                abv: 5.6,
                abvRank: "medium",
                ibu: 25,
                ibuRank: "medium",
                info: "HIPster Ale is a blonde ale that presents as a classic ‘light beer’ – straw like color beneath a clean white head of foam. And easy drinking is the name of the game for this one. Lemondrop and Cascade hops play a unique background role in both flavor and aroma – present, but intentionally less noticeable. The effervescence brings a refreshing character to the beer and balances out an ever so slight bready finish. You may think it, but it’s not macro beer.."
            },
            {
                name: "Velvet Hammer",
                keywords: "ipa",
                style: "Dark beer",
                abv: 9,
                abvRank: "high",
                ibu: 85,
                ibuRank: "very high",
                info: "The Hammer is an imperial red ale that appears as a dark, ruby reddish-brown ale beneath a sheath of protective off-white foam. It is malt-forward with elements of caramel and the sweetness of light brown sugar, balanced nicely by a combination of floral hops and a noticeable alcohol bite. It’s a sturdy brew with a smooth character which belies both an inner strength and a slightly full body, along with a moderate bitterness to round out the taste."
            },
            {
                name: "Golden Opportunity",
                keywords: "Kolsch",
                style: "light craft beer",
                abv: 4.6,
                abvRank: "medium",
                ibu: 27,
                ibuRank: "very high",
                info: "In the spirit of a true session beer we present the Golden Opportunity, a beer modeled after the classic styles of Koln, Germany, but which deliberately lacks the enhanced fruitiness of the typical American interpretation. Straw-like in color with a dense white head, this medium-bodied brew has a light, pleasant malt aroma with a hint of sweetness and faint bitterness. It is clean, well-balanced and suitably carbonated for a crisp, refreshing feel."
            },
            {
                name: "sit down or i'll sit you down",
                keywords: "ipa",
                style: "Dark Beer",
                abv: 10,
                abvRank: "Very high",
                ibu: 90,
                ibuRank: "very high",
                info: "As for the beer itself, the intent is to exhibit the fresh and bright character of the hops. We dry hopped it with over a pound of hops per barrel of beer. It’s gold in color and the floral ester aroma is high. The hop bitterness is high, but not at all harsh. The hop flavor is high, fresh, and lively. Yet with all of our beers, it’s all about balance and this one is no exception. The malt character is fairly high and provides a tremendously full mouthfeel. Finally, the alcohol in this beer is intentionally present (and delicious)."
            },
            {
                name: "Too Soon",
                keywords: "ipa",
                style: "Indiana Pale ale",
                abv: 10,
                abvRank: "Very high",
                ibu: 75,
                ibuRank: "high",
                info: "TOO SOON is an IP…A brewed with a ‘back to basics’ approach. Rather than formulate a recipe using the newest and trendiest methods, we used the traditional methods and techniques that are the foundation for some of our earlier beers (e.g., Velvet Hammer, Royal Scandal, Sit Down). Our typical base two row pale malt is accentuated with a minimal amount of light crystal malt and we turned to three of our most tried and true hops…Centennial, Cascade, and Amarillo. The brewhouse hop regimen for TOO SOON mirrors that of the earlier referenced beers and three are dry hopped in the same manner as well. Will this beer turn out as well as Hammer, Scandal, and Sit Down? Does the beer name answer the question?"
            },
            {
                name: "COME AND TAKE IT",
                keywords: "kolsch",
                style: "Dark Beer",
                abv: 5,
                abvRank: "medium",
                ibu: 30,
                ibuRank: "medium",
                info: "Our Koslch serves as the basis for ‘Come and Take It’, but the similarities between the two beers end there due to an aggressive use of cascade hops that completely change this beer’s character. Although we’ve added nearly a pound and half of Cascade per barrel to a Tettnang hopped beer, the execution and manner of the Cascade addition in a cohesive and seamless manner is what ‘Come and Take It’ is all about. Tettnang imparts spicy and earthy characteristics while also subtly contributing fruity, floral, citrus notes; whereas Cascade is primarily classified as a fruity floral hop with a hint of spice. Emphasizing Tettnang early and Cascade hops late results in huge fruity citrus notes that dominate both Come and Take It’s aroma and flavor. The more you drink it, the more you’ll enjoy it. Weighing in at 5% ABV, we trust you’ll find this one refreshing beer."
            },
            {
                name: "GOOD CALL",
                keywords: "ipa",
                style: "summer ale",
                abv: 6.3,
                abvRank: "medium",
                ibu: 41,
                ibuRank: "medium",
                info: "The blending of hops create aromas of lemon peel, citrus and a light breadiness. The combination of ginger and citrusy hops creates a crisp bite that quickly fades into a round sweetness.  As carbonation is released on the palate, you’ll experience flavors of orange and pineapple while ginger provides a gentle spice in the background."
            },
            {
                name: "DON’T THINK IT – WON’T HAPPEN",
                keywords: "ipa",
                style: "hazy ipa",
                abv: 7.5,
                abvRank: "medium",
                ibu: 5,
                ibuRank: "medium",
                info: "Don’t Think it – Won’t Happen rounds itself out when the beer’s pungent aroma pairs with the flavors that come through.  Medium/Low bitterness and a light acidity balance flavors reminiscent of the same tropical and citrus fruits that came through in the aroma.  Residual malt sweetness adds the final touch, and the ending perception is a glass of fresh squeezed juice."
            },
            {
                name: "GRIN & TONIC",
                keywords: "Other",
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




// function changeRanks(arr) {
//     for (let brewery of arr) {
//         for (let beer of brewery.beers) {
//             if (4 < abv < 7) {
//                 beer.abvRank = medium;
//             }

//         }
//     }
// }




$("#submitem").on("click", function () {
    event.preventDefault()

    breweriesDisplay.length = 0;
    displayBeers.empty()


    ibu = $("#ibu").val().trim();
    abv = $("#abv").val().trim();
    styleKeywords = $("#stylekeywords").val().trim();

    console.log(ibu)
    console.log(abv)
    console.log(styleKeywords)


    // city = $("#city").val().trim()
    // state = $("#state").val().trim()


    //give styles, abv, abu their user inputted values here


    for (let brewery of breweriesCollection) {
        for (let beer of brewery.beers) {

            if (((beer.ibuRank === ibu) || (ibu === "unimportant")) && ((beer.abvRank === abv) || (abv === "unimportant")) && ((beer.keywords === styleKeywords) || (styleKeywords === "unimportant"))) {


                if (!breweriesDisplay.includes(brewery)) {
                    breweriesDisplay.push(brewery)
                }

                // if (styleKeywords.every(function (element) {

                //     if (beer.keywords.includes(element)) {
                //         return true;
                //     }
                // })) 
                // {

            }
        }
    }


    console.log(breweriesDisplay)








    // console.log(city)
    // console.log(state)
    queryURL = `https://api.openbrewerydb.org/breweries?by_state=${state}&by_city=${city}&per_page=50`
    // console.log(queryURL)


    // // if (state) {
    // //     central = 
    // // }
    // // if (city) {

    // }


    initMap()

})



function initMap() {

    let central = { lat: 32.7767, lng: -96.7970 };

    let zoomlevel = 10;

    // if (city || state) {
    //     zoomlevel = 10;
    // } else {
    //     zoomlevel = 4;
    // }

    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: zoomlevel, center: central });









    if (abv || ibu) {





        // filter responses here using array of obs initialized outside into list of viable breweries

        // use data-value to help with later on click functions

        //Code to filter the map markers

        // create series of arrays, each modified by input search parameters, if they are found using Object.values, or just manually by property name, then push to the new array, finally display the new array under the div. 

        // Each div should be styled, have an identifying information data-name attribute, which can be used to bring up the information for the appropriate beers, after filtering these too

        for (let brewery of breweriesDisplay) {
            let location = brewery.position;
            console.log(location)
            let marker = new google.maps.Marker({
                position: location,
                map: map,
                title: brewery.name
            });

            marker.addListener("click", function () {
                displayBeers.empty()
                console.log("click successful")
                console.log(this.title)
                $(`<div class = "brewclick" data-name="${this.title}">A clickable list of all the beers for a given brewery will go here when this brewery is clicked on. This brewery is named ${this.title}</div>`).appendTo(displayBeers)

            })


        }




    }



}

$(document).on("click", ".brewclick", function () {

    console.log("hullo")
    console.log($(this).attr("data-name"))




    for (let brewery of breweriesDisplay) {

        if ($(this).attr("data-name") === brewery.name)

            for (let beer of brewery.beers) {

                if (((beer.ibuRank === ibu) || (ibu === "unimportant")) && ((beer.abvRank === abv) || (abv === "unimportant")) && ((beer.keywords === styleKeywords) || (styleKeywords === "unimportant"))) {
                    $("<div>").html(beer.name).appendTo($(".brewclick"))

                }


            }
    }
})


$.ajax({
    url: queryURL,
    method: "GET"
}).then(function (response) {
    console.log(response)
    console.log(response[7].latitude)
    console.log(response[7].longitude)
    console.log(response.length)
})

//find a way to get coordinates of state or city and set it to map center
//add identifying info to the map markers, then create a click handler to display the proper info
//create informational opbjects for all included breweries
//think on how to style/display info