
//// BEGINNING OF DOCUMENT ASKS IF YOU ARE 21 //

$(document).ready(function () {
    $('#old-enough').hide();
    $('#sorry').hide();
    $('#footer').hide();
    $('#results').hide();

});



/// CLICK EVENTS FOR 21 JUMBOTRON
// CLICK FUNCTION FOR WHEN NO IS CLICKED
//CLICK FUNCTION FOR WHEN YES IS CLICKED -- Jumbotron disappears, and rest of the pages reappear
$('#yesButton').on('click', function () {
    $('#legal-age').hide();
    $('#sorry').hide();
    $('#old-enough').show();
    $('#footer').show();
    $('#results').hide();


});

$('#noButton').on('click', function () {
    $('#legal-age').hide();
    $('#old-enough').hide();
    $('#sorry').show();
    $('#footer').hide();
    $('#results').hide();



});


///////////////////////////////////////////////////////////////////
//can ask for user i.d. here, and use it for central


// let city = "Dallas";
// let state = "Texas";
let styleKeywords;
let abv;
let ibu;
let queryURL = `https://api.openbrewerydb.org/breweries?by_state=texas&by_city=dallas&per_page=50`
let displayBeers = $("#displaybeers");
let beersList = $("#beerslist")
let breweriesDisplay = [];
let brewClicked = false;

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
        info: "We want to be a place of learning, enjoyment, surprise and wonderment. Whether it be the beers, food, cocktails or atmosphere - we will ensure there will always be a synergy of the culinary arts in a way that will intrigue the senses.",
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
        info: "Texas born and bred, the Nine-Band brewmaster brings his award-winning experience to every one of our carefully crafted styles, each made with the highest quality ingredients available for the ultimate taste experience.",
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
        //technically in Plano
        name: "Unlawful Assembly Brewing Company",
        info: "WELCOME TO UNLAWFUL ASSEMBLY BREWING CO. When we share a pint, we share memories, and we make new ones. We discover new music, new foods and new friends. We celebrate and we instigate. Unlawful Assembly was founded to promote the assembly of people, ingredients, and ideas—because great things happen when we get together over a great beer.",
        url: "https://www.unlawfulassembly.com/taproom/",
        position: { lat: 33.086425, lng: -96.825665 },
        beers: [
            {
                name: "The Bandit",
                keywords: "ipa",
                style: "Brut IPA",
                abv: 7,
                abvRank: "",
                ibu: 20,
                ibuRank: "",
                info: "Our rendition of this California original uses a traditional ale yeast to create a crisp and refreshing version of this emerging IPA style. Dryhopped with Lemondrop, this beer has a citrusy, spicy, and mint-like flavor and aroma that finishes extremely dry on the palate due to its light nature."
            },
            {
                name: "Double Justice",
                keywords: "ipa",
                style: "Imperial IPA",
                abv: 9.9,
                abvRank: "",
                ibu: 77,
                ibuRank: "",
                info: "This Imperial IPA has a slightly malty caramel flavor balanced by Amarillo, Mosaic, Citra, and Denali hops."
            },
            {
                name: "The Antagonist",
                keywords: "other",
                style: "Amber Lager",
                abv: 5.2,
                abvRank: "",
                ibu: 22,
                ibuRank: "",
                info: "Amber Lager - a medium-bodied lager with a toasty / caramel-like malt character. Dominated by a sweet malt flavor with medium hop bitterness followed by a dry finish. Traditional Marzen style."
            },
            {
                name: "Blind Justice",
                keywords: "ipa",
                style: "West Coast IPA",
                abv: 7,
                abvRank: "",
                ibu: 65,
                ibuRank: "",
                info: "Dry Hopped - West Coast style resinous & citrus character; huge hop aroma bursting with notes of citrus and tropical fruits. The malt character is understated, and finishes dry to let the layered hop flavors and aromas take center stage. Hops - Bravo for earthy spice character, Centennial for pine notes, Citra for citrus zest and Cascade for floral aroma are layered throughout the brewing process."
            },
            {
                name: "Public Dissent",
                keywords: "paleale",
                style: "American Pale Ale ",
                abv: 5.5,
                abvRank: "",
                ibu: 45,
                ibuRank: "",
                info: "Refreshingly crisp, grapefruit, and piney hop notes all share the floor in unison. Caramel undertones help this American pale ale stand against the mainstream"
            },
            {
                name: "Smoke Screen",
                keywords: "other",
                style: "American Smoke Brown Ale",
                abv: 5.7,
                abvRank: "",
                ibu: 25,
                ibuRank: "",
                info: "The unique flavor of this ale comes from the use of mesquite flour during the brew. Notes of cinnamon, tobacco, vanilla, and smokiness accents the nutty and caramel character from the malt."
            },
            {
                name: "Peacemonger",
                keywords: "pilsner",
                style: "Continental Pilsner",
                abv: 5.2,
                abvRank: "",
                ibu: 30,
                ibuRank: "",
                info: "Classic continental pilsner pulling influences from Europe; Flavor - Malty, biscuit sweetness is smooth, light-bodied, solid, and slightly sweet. The lemony, floral, spicy hops accent the clean malt bill nicely, and the high carbonation makes everything pop just a little. Finishes with just enough bitterness to make you want another drink"
            },
            {
                name: "Deviant Behavior",
                keywords: "wheatbeer",
                //also a belgian
                style: "Hefeweizen",
                abv: 5.3,
                abvRank: "",
                ibu: 14,
                ibuRank: "",
                info: "A refreshing unfiltered wheat beer, spicy aroma and flavor compliments the orange peel, Indian coriander, and Belgian malt."
            },
            {
                name: "Rebel Faction",
                keywords: "farmhouseale",
                style: "Traditional Wallonia Belgian Saison",
                abv: 6.3,
                abvRank: "",
                ibu: 28,
                ibuRank: "",
                info: `The aroma is floral, herbal, savory and fruity with lemon and pear. Citric acid sharp and gritty in flavor with a solid resinous, cedar hop flavor and the familiar musty character.`
            },
            {
                name: "Idol Time",
                keywords: "wheatbeer",
                style: "Passion Fruit Pineapple Wheat",
                abv: 5.3,
                abvRank: "",
                ibu: 15,
                ibuRank: "",
                info: `In this unfiltered wheat ale, fermented with tart tropical fruits, we celebrate the times we can’t remember and the friends we won’t forget.`
            },
            {
                name: "Idol Time 2",
                keywords: "other",
                style: "Agave Lime Golden Ale",
                abv: 5.4,
                abvRank: "",
                ibu: 12,
                ibuRank: "",
                info: "Agave nectar is added in the kettle to create a distinctive sweetness that is accentuated by lime in this crisp refreshing golden ale."
            },
            {
                name: "Black Sheep",
                keywords: "stout",
                style: "Oatmeal Stout",
                abv: 5.9,
                abvRank: "",
                ibu: 18,
                ibuRank: "",
                info: "This stout uses generous amounts of flaked oats and dark malt to create a rich creamy mouthfeel with roast, chocolate, coffee, and caramel flavors"
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
    },

    {
        name: "On Rotation",
        info: "On Rotation’s “craft beer laboratory” feel was designed to appeal to all levels of craft beer enthusiast, from the experienced craft beer drinker or homebrewer to those just starting their journey into craft beer.",
        url: "https://on-rotation.com",
        position: { lat: 32.8109335, lng: -96.731396 },
        beers: [
            {
                name: "Jalapeno Saison",
                keywords: "Saison",
                style: "Chili Saison",
                abv: 8.1,
                abvRank: "high",
                ibu: 25,
                ibuRank: "medium",
                info: "Never fear. The spice is here. This dry, chili saison's bark is worse than its bite with a strong jalapeño nose balanced by a tortilla chip breadiness and a dry finish."
            },


            {
                name: "Cafe Au Lait",
                keywords: ["stout"],
                style: "Chicory Coffee Milk",
                abv: 6.6,
                abvRank: "medium",
                ibu: 45,
                ibuRank: "medium",
                info: "Based on a New Orleans café au lait, this milk stout is big on black coffee flavor with a pleasant bitterness from subtle, spicy hops and a generous addition of cold brew coffee and chicory."
            },
            {
                name: "Zero Poms Given",
                keywords: ["ipa"],
                style: "American",
                abv: 6,
                abvRank: "medium",
                ibu: 0,
                ibuRank: "low",
                info: "Brewed with no hops in the boil, this zero IBU IPA dry hopped with Vic Secret and Huell Melon fermented on a very aggressive yeast strain known for a honey-like aroma and notes of overripe mango. "

            },
            {
                name: "Heimdall's Vision",
                keywords: ["ipa"],
                style: "New England",
                abv: 8,
                abvRank: "high",
                ibu: 19,
                ibuRank: "low",
                info: "This all-seeing protector of a hazy IPA features Citra, Huell Melon, and Pacifica hops, which impart notes of citrus, lime, honeydew melon, and strawberry."
            },
            {
                name: "Bigger Bam Boom",
                keywords: ["stout"],
                style: "Rye Whiskey Barrel-Aged Imperial Brown Sugar Oatmeal",
                abv: 11.8,
                abvRank: "very high",
                ibu: 36,
                ibuRank: "medium",
                info: "Aged for more than 10 months in a rye whiskey barrel, this bigger, badder batch of Big Bam Boom is a real maneater."
            },
            {
                name: "Hot to Coco",
                keywords: ["American Porter"],
                style: "American Porter with Coconut & Chipotle Peppers",
                abv: 6.4,
                abvRank: "low",
                ibu: 39,
                ibuRank: "medium",
                info: "Infused with toasted coconut and dried chipotle peppers, this American porter plays both sides of the sweet and spicy."
            },
            {
                name: "I Understand NOTHING",
                keywords: ["ipa"],
                style: "sour",
                abv: 6.7,
                abvRank: "low",
                ibu: 31,
                ibuRank: "medium",
                info: "Michael Scott doesn't get this beer. Light in body and with Citra hops in the boil, we added lactose (milk sugar) to this mixed culture sour IPA to add a subtly sweet, smooth quality."

            },
            {
                name: "Belgain Conspiracy",
                keywords: ["pale ale"],
                style: "belgian",
                abv: 7.6,
                abvRank: "high",
                ibu: 26,
                ibuRank: "medium",
                info: "Naruto run, don't walk, to this beer. Copper in color with an aromatic and simple grain base, this Belgian pale ale features a prominent malt backbone with a light dose of Idaho #7 hops, which provide a nice citrus character with some background earthiness."
            },
            {
                name: "Last Stand of the Warriors Three",
                keywords: ["ipa"],
                style: "new england",
                abv: 8,
                abvRank: "high",
                ibu: 19,
                ibuRank: "low",
                info: "Brewed in honor of Asgardians Fandral, Hogun, and Volstagg, this hazy IPA, like its sister brew Heimdall's Vision, features Citra, Huell Melon, and Pacifica hops"
            },
            {
                name: "I Woke Up Like This ",
                keywords: ["Witbier"],
                style: "Witbier",
                abv: 8,
                abvRank: "high",
                ibu: 11,
                ibuRank: "low",
                info: "Roll out of bed and enjoy this Mimosa Wit. Brewed with primarily wheat and all Citra hops, it's weighty in body with a major citrus note."
            },
            {
                name: "Raspberry Tart",
                keywords: "other",
                style: "Sour Saison with Raspberry",
                abv: 8.8,
                abvRank: "high",
                ibu: 33,
                ibuRank: "medium",
                info: "This wheat-heavy saison is kettle-soured to crisp, tart perfection then hopped exclusively with Belma hops and fermented on a clean, French saison yeast."
            },

            {
                name: "Never Jaded",
                keywords: ["Dry-Hopped Saison"],
                style: "Dry-Hopped Saison",
                abv: 7.9,
                abvRank: "high",
                ibu: 24,
                ibuRank: "medium",
                info: "Dry hopped exclusively with New Zealand Pacific Jade hops, known for their soft, subtle bitterness, this light and crisp saison is full of fresh lemon with a pleasant bready aroma and a dry, citrus twist to the finish."

            },

            {
                name: "Cryo Treatment ",
                keywords: ["ipa"],
                style: "Imperial / Double",
                abv: 9.6,
                abvRank: "high",
                ibu: 101,
                ibuRank: "very high",
                info: "With 101 IBUs, this dry-hopped double IPA featuring Simcoe, Ekuanot, Sticklebract, and Simcoe Cryo hops will put ice in your veins. "

            }]

    },

    {
        name: "Community Beer Co.",
        info: `For centuries, beer has brought people together, transcending identity or class. We at Community we believe that it can be a integral part of influencing
        local culture and creating memorable experiences.
        We strive to create the highest quality craft brews we can,
        while creating an environment where our community can gather
        to enjoy good company and great beer together.`,
        url: "https://www.communitybeer.com/",
        position: { lat: 32.7917789589184, lng: -96.8165879157057 },
        beers: [
            {
                name: "Citrus Slice ",
                keywords: "ipa",
                style: "India Pale Ale w/ Citrus Peel",
                abv: 7,
                abvRank: "high",
                ibu: 50,
                ibuRank: "medium",
                info: "We've taken premium Citra hops and expertly blended them with fresh lemon & orange peel.  This results in an explosively delicious citrus-forward India Pale Ale bursting with tropical flavors & aromas."
            },
            {
                name: "Mosaic IPA",
                keywords: "ipa",
                style: "India Pale Ale",
                abv: 8.6,
                abvRank: "high",
                ibu: 85,
                ibuRank: "high",
                info: "Mosaic IPA is an extremely well-balanced brew that showcases its unique hop aroma and flavor.​ This beer gets its name from a new hop variety named “Mosaic,” which is predominantly where the immense, raw hop aroma and flavor is derived."
            },
            {
                name: "Texas Lager",
                keywords: "lager",
                style: "Texas Lager",
                abv: 4,
                abvRank: "low",
                ibu: 12,
                ibuRank: "low",
                info: "his crisp, light-bodied lager was specially brewed for all Texans to enjoy. "
            },
            {
                name: "Public Ale",
                keywords: "paleale",
                style: "Extra Special Bitter",
                abv: 5.5,
                abvRank: "medium",
                ibu: 38,
                ibuRank: "medium",
                info: "Public Ale's name is an ode to a sessionable style that not only has been commonly found in English public houses for centuries, but can be enjoyed today by everyone within our Community."
            },
            {
                name: "Community Witbier",
                keywords: "belgian",
                style: "Belgian Style While Ale ",
                abv: 5.2,
                abvRank: "medium",
                ibu: 18,
                ibuRank: "low",
                info: "We brew it traditionally using unmalted wheat as our base and lightly spice the kettle with freshly ground sweet and bitter orange peel and coriander seed. "
            },
            {
                name: "Silly Gose",
                keywords: "other",
                style: "Fruited Gose",
                abv: 5,
                abvRank: "medium",
                ibu: 1,
                ibuRank: "low",
                info: "It's a 1,000 year old German- style sour wheat ale brewed with sea salt and coriander."
            },

            {
                name: "Turn Up the Jams",
                keywords: "ipa",
                style: "American styled IPA",
                abv: 6.2,
                abvRank: "medium",
                ibu: 33,
                ibuRank: "medium",
                info: "Slightly tart & totally groovy IPA loaded with citrus and berry characteristics thanks to a far out amount of American & New Zealand hops."
            },
            {
                name: "Berliner Berry",
                keywords: "other",
                style: "Fruited Sour",
                abv: 3.5,
                abvRank: "low",
                ibu: 5,
                ibuRank: "low",
                info: "The result is a vibrant ruby-colored beer that's beautifully complex and simply refreshing.  It's a new take on an old-world beer style and a perfect companion to kicking off summertime beer drinking in Texas!"
            },
            {
                name: "Yessir",
                keywords: "paleale",
                style: "Fruited Sour",
                abv: 5.2,
                abvRank: "medium",
                ibu: 32,
                ibuRank: "medium",
                info: "ositively pale and refreshing with a deliciously unique hop character showcasing Eureka, Lemondrop and Citra hops.  This is our take on classic American-style Pale Ales but with brand new, intriguing hop varieties that stand out from the crowd."
            },
            {
                name: "Snicker Doodle Ale",
                keywords: "paleale",
                style: "English styled pale ale.",
                abv: 5.2,
                abvRank: "medium",
                ibu: 15,
                ibuRank: "low",
                info: "We use heirloom English Marris Otter malted barley to lend a distinctly bready and crackery malt-forward flavor.  Finally we infuse freshly pureed vanilla beans and whole cinnamon sticks into the brew to create an amazing blend of flavors and aromas that will leave you craving that next bite...er sip!"
            },
            {
                name: "Legion",
                keywords: "stout",
                style: "Russian Imperial Stout",
                abv: 9.9,
                abvRank: "high",
                ibu: 70,
                ibuRank: "high",
                info: "Lacking the intensely bitter, burnt character of many stouts, we think it’s roasty in all the right places, with a velvety mouthfeel and smooth finish."
            },
            {
                name: "Funnel Cake Ale",
                keywords: "paleale",
                style: "English Summer Ale",
                abv: 4.2,
                abvRank: "low",
                ibu: 15,
                ibuRank: "low",
                info: "This ale won the Big Tex Choice Awards competition for Most Creative entry!"
            },
            {
                name: "HAPPINESS COMES FROM WITHIN (CORE BEER)",
                keywords: "ipa",
                style: "hazey ipa",
                abv: 6.7,
                abvRank: "medium",
                ibu: 30,
                ibuRank: "medium",
                info: "Soft mouthfeel with a nice OJ acidity on the back end. Tropical and easy to drink. For the Hazebois."
            },
            {
                name: "CERVEZA OSCURA (CORE BEER)",
                keywords: "Lager",
                style: "Mexican Dark Lager",
                abv: 4.7,
                abvRank: "medium",
                ibu: 16,
                ibuRank: "low",
                info: "The candied sugar thrown in gives this a subtle sweet note that brings back memories of beaches, bonfires, and micheladas."
            },
            {
                name: "BASKET CATCH",
                keywords: "Pale Ale",
                style: "Dry Hopped American Pale Ale",
                abv: 4.7,
                abvRank: "medium",
                ibu: 16,
                ibuRank: "low",
                info: "not available"

            },
            {
                name: "FOREIGN EXPORT STOUT (CORE BEER)",
                keywords: "Stout",
                style: "Oatmean Extra Stout",
                abv: 6.6,
                abvRank: "medium",
                ibu: 43,
                ibuRank: "low",
                info: "A complex black ale reminiscent of dark chocolate covered espresso beans & currants. Built on dark and caramel barley males with fruity American hops & a hint of licorice root."
            },
            {
                name: "GIVEN TO RYE",
                keywords: "Brown Ale",
                style: "American Rye Brown Ale",
                abv: 4.9,
                abvRank: "medium",
                ibu: 45,
                ibuRank: "low",
                info: "Malty, rye forward, brown ale with notes of coffee, tobacco and dark brown sugar. Slightly boozy with long, dry finish."
            },
            {
                name: "TIBRADDEN STOUT",
                keywords: "Stout",
                style: "Stout-Irish Dry ",
                abv: 8.8,
                abvRank: "high",
                ibu: 30,
                ibuRank: "low",
                info: "Dry Rye Stout with Czech hops aged in whiskey casks."
            },
            {
                name: "RIGHT IN MY WHEELHOUSE",
                keywords: "Pilsner",
                style: "Tropical Style Pilsner",
                abv: 4.5,
                abvRank: "low",
                ibu: 30,
                ibuRank: "low",
                info: "not available"
            },
            {
                name: "RISKY CLIQUE",
                keywords: "Ale",
                style: "Dry Hopped Sour Ale",
                abv: 7,
                abvRank: "high",
                ibu: 15,
                ibuRank: "low",
                info: "not available"
            },
            {
                name: "AGAVE WHEAT",
                keywords: "Pale Ale",
                style: "Dry Hopped American Pale Ale",
                abv: 5.8,
                abvRank: "medium",
                ibu: 15,
                ibuRank: "low",
                info: "Summer's almost here so we made the perfect hot weather wheat ale."
            },
            {
                name: "THE PIPER AT THE GATES OF DAWN",
                keywords: "Ale",
                style: "Coffee Scotch Ale",
                abv: 7,
                abvRank: "high",
                ibu: 24,
                ibuRank: "low",
                info: "One of our highest rated beers of all time, malty and roasted coffee notes dominate with a lingering copper finish."
            },
            {
                name: "PRIVATE SNACKS: 4TH ANNIVERSARY",
                keywords: "Stout",
                style: "Golden Imperial Stout",
                abv: 11,
                abvRank: "high",
                ibu: 45,
                ibuRank: "medium",
                info: "Wow. 4 years. What do we say except thank you?! A flip on a traditional imperial stout, sweet and stocky."
            },
            {
                name: "SOMETHING SEXY",
                keywords: "Stout",
                style: "Stout",
                abv: 8,
                abvRank: "high",
                ibu: 54,
                ibuRank: "high",
                info: "Brewed in collaboration with Driveway Brewing, the winner of our 2017 Homebrew Contest ramped up for a 15bbl system. Sweet, silky, romantic."
            },
            {
                name: "WATCHFUL PROTECTOR",
                keywords: "Stout",
                style: "Stout",
                abv: 15.5,
                abvRank: "very high",
                ibu: 88,
                ibuRank: "very high",
                info: "Triple reiterated mashed We Own The Night - Coffee Oatmeal Molasses Imperial Stout aged in 1 Lone Elm Wheat Whiskey Barrel"
            },
            {
                name: "ORDINARY BITTER",
                keywords: "Pale Ale",
                style: "Dry Hopped American Pale Ale",
                abv: 4.1,
                abvRank: "low",
                ibu: 25,
                ibuRank: "medium",
                info: "A British classic using East Kent Golding hops, malt forward and lean. Perfect for a pint with the boys."
            },
            {
                name: "MAJOR FROG",
                keywords: "ipa",
                style: "Green Bullet Double IPA",
                abv: 10,
                abvRank: "high",
                ibu: 90,
                ibuRank: "very high",
                info: "Major Frog is our Double IPA category, a bump up in ABV and sometimes in IBUs from the Army of Frogs category."
            },
            {
                name: "LOVE CULT",
                keywords: "Pale Ale",
                style: "Pale Ale New England",
                abv: 4.7,
                abvRank: "low",
                ibu: 30,
                ibuRank: "medium",
                info: "not available"
            },
            {
                name: "ORTHODOX IMPOSTER",
                keywords: "Belgian Blonde",
                style: "Belgian Blonde",
                abv: 6.2,
                abvRank: "low",
                ibu: 37,
                ibuRank: "medium",
                info: "Abbey style Belgian Single brewed with American Pale Ale, American 2 Row, American White Wheat & German Dark Wheat malts, Cane Sugar, Styrian Bobek, Czech Kazbeck & Apollo hops,House Belgian Yeast Blend"
            },
            {
                name: "WE ARE YOUR OVERLORDS",
                keywords: "Pale Ale",
                style: "Dry Hopped American Pale Ale",
                abv: 11.4,
                abvRank: "very high",
                ibu: 70,
                ibuRank: "high",
                info: "It was the origin for the American Brown Ale style."
            },
            {
                name: "MAIN ST. KOLSCH",
                keywords: "Kolsch",
                style: "Kolsch",
                abv: 4.9,
                abvRank: "low",
                ibu: 24,
                ibuRank: "medium",
                info: "Golden, malty and refreshing."
            },
            {
                name: "APPALLINGLY IRONIC OUTCOME",
                keywords: "Golden Ale",
                style: "Belgian Strong Golden Ale ",
                abv: 10,
                abvRank: "high",
                ibu: 26,
                ibuRank: "medium",
                info: "Idle Playthings aged in Chardonnay barrels for 6 months."
            },
            {
                name: "DAYSHINE SUNDREAM",
                keywords: "Belgian Wit ",
                style: "Belgian Wit w/Candied Ginger ",
                abv: 5.8,
                abvRank: "low",
                ibu: 21,
                ibuRank: "medium",
                info: "As light as it is refreshing, the candied ginger adds a slight spice that cuts the full mouthfeel caused by the wheat malts."

            },
            {
                name: "IDLE PLAYTHINGS",
                keywords: "Belgian Golden Strong",
                style: "Belgian Golden Strong",
                abv: 8.5,
                abvRank: "high",
                ibu: 26,
                ibuRank: "medium",
                info: "Sweet tropical fruits, bright and refreshing."
            },

            {
                name: "GEISTBIER",
                keywords: "Altbier",
                style: "Altbier",
                abv: 10.6,
                abvRank: "high",
                ibu: 52,
                ibuRank: "high",
                info: "Our Fruhlingzeit Altbier aged in Witherspoon bourbon barrels. The most fitting beer to mark 10 years since our brewmaster first started washing kegs and cleaning draft lines at Morgan Street Brewing."
            },
            {
                name: "FROG IPA",
                keywords: "ipa",
                style: "smash ipa",
                abv: 6 - 8,
                abvRank: "high",
                ibu: 50 - 99,
                ibuRank: "high",
                info: "Our rotating single hop IPA series. Check at the brewery for the hop of the moment!"
            },
            {
                name: "BEÓR TUNNE",
                keywords: "Ale",
                style: "Olde Ale",
                abv: 10,
                abvRank: "high",
                ibu: 40,
                ibuRank: "medium",
                info: "Malty, Earthy, red wine, wood and funky nose. Big malt flavor, dark fruit, rustic bread, earthy funk flavor."
            },
            {
                name: "MEMORY HOLE",
                keywords: "Barleywine",
                style: "American Barleywine",
                abv: 10.9,
                abvRank: "high",
                ibu: 85,
                ibuRank: "high",
                info: "Generous toffee and estery fruit sweetness on the nose. The first taste is a sublime mix of earthy oak and sharp citrusy bitterness, wrapped together in a slightly warm alcohol burn. The oak is a lingering friend: refusing to leave after the party but helps you clean up so it's okay by you. A true American take on the English strong ale."
            },
            {
                name: "GOLDEN LADDER",
                keywords: "Lager",
                style: "Apple Brandy-barrel aged Mega Helles Lager",
                abv: 14.4,
                abvRank: "very high",
                ibu: 30,
                ibuRank: "medium",
                info: "Our barrel-aged version of Welcome to Helles, we took an already absurdly good beer and took it up a notch. Sweet and malty blend like it should, with a spicy orchard note."
            },
            {
                name: "SPEARMINT OF DESTINY",
                keywords: "Stout",
                style: "Stout",
                abv: 9.1,
                abvRank: "high",
                ibu: 43,
                ibuRank: "medium",
                info: "Tastes like frolicking through an orchard of mint on a dark chocolate night."
            },
            {
                name: "DARTH LAMBICUS",
                keywords: "Ale",
                style: "Oak Bourbon Barrel Aged Belgian Dark Fruited Strong Ale",
                abv: 8.8,
                abvRank: "high",
                ibu: 31,
                ibuRank: "medium",
                info: "AA bold Belgian dark strong ale with tart cherry puree, you'll notice the sweet bourbon sting make way for a mellow dark plum and cherry aftertaste. "
            },

            {
                name: "HAMMER OF THE GODS",
                keywords: "Pale Ale",
                style: "Dry Hopped American Pale Ale",
                abv: 11.1,
                abvRank: "very high",
                ibu: 65,
                ibuRank: "high",
                info: "An Imperial Wheat Porter aged in Woodford Reserve and Stranahan's barrels. Unlike most barrel-aged offerings, Hammer of the Gods was designed from the ground up to be whiskey barrel aged. The inclusion of wheat adds a soft pie-crust character to a big, milk-chocolaty wake up call for your mouth."


            }]


    },

    // Pelticolas Brewing company--
    // small brewpub--
    // The malai Kitchen--
    // Westlake Brewing Company bad site
    // White Rock Alehouse & Brewery--

    {
        name: "Small Brewpub",
        info: `We have a 5bbl brewery that was built from the ground up out of repourposed dairy tanks by Aaron and Primo, (the brewers). Our approach is a little more old fashioned than most, it's very manual and hands-on but that's how we prefer it. Our recipe book is large and taps are always changing. We're not afraid to use wild yeast and bacteria when it suits us and our barrel program is always fun and exciting.`,
        url: "http://smallbrewpub.com/menus/small-beers.html",
        position: { lat: 32.7433945, lng: -96.8291827 },
        beers: [

            {
                name: `Black Pepper Pils`,
                keywords: `pilsner`,
                style: `95% German Pilsner and 5% British Rye`,
                ibu: `N/A`,
                abv: 5.5,
                info: `A crisp and slightly spicy base of 95% German Bohemian Pilsner and 5% British Rye. Spiced in boil six different botanicals. Fermented with a dry English yeast strain.`
            },

            {
                name: `OAK CLIFF ALE`,
                keywords: `paleale`,
                style: `Lil Blonde and Lil English pale`,
                ibu: `N/A`,
                abv: 5.5,
                info: `A little bit of a blonde and a little bit of a English pale, very easy drinking.`
            },

            {
                name: `UNDERDOG IPA`,
                keywords: `ipa`,
                style: `IPA`,
                ibu: `N/A`,
                abv: 7.2,
                info: `High on flavor and aroma low on bitterness, hop bill includes columbus, el dorado, zythos, azaca, green bullet and mosaic lupulin powder, it's a litty hazy.`
            },

            {
                name: `HOSTEL CEREAL`,
                keywords: `ipa`,
                style: `Tart Ale`,
                ibu: `N/A`,
                abv: 8,
                info: `By guest brewer Barrett Tillman of Blackman Brewing, a tart ale inspired by gypsy brewer Barrett Tillmans travels, with his own blend of yeast and bacteria`
            },

            {
                name: `BYZANTIUM 4th Anniversary (2018)`,
                keywords: `other`,
                style: `English Strong Dark Ale`,
                ibu: `N/A`,
                abv: 11,
                info: `Our 4th anniversary release, an english strong dark ale conditioned on driedorganic turkish figs, rich and earthy`
            },

            {
                name: `HAZELNATOR`,
                keywords: `ipa`,
                style: `Hazy IPA`,
                ibu: `N/A`,
                abv: 8,
                info: `A IPA of the hazy variety, inspired by the new england craze sweeping the nation. el dorado & lotus hops, 40% oats. JUICE.`
            }

        ]
    },


    {
        name: "White Rock Alehouse & Brewery",
        info: "WELCOME TO WHITE ROCK ALEHOUSE & BREWERY, LOCATED IN DALLAS’ PICTURESQUE WHITE ROCK LAKE AREA. FOUNDED BY DALLAS RESIDENTS WHO CARE ABOUT CRAFT BEER, OUR CASUAL PATIO AND BEER GARDEN PROVIDE THE PERFECT LOCATION FOR A LITTLE BIT OF REST AND RELAXATION.",
        url: "https://www.whiterockalehouse.com/our-beer/",
        position: { lat: 32.8136816, lng: -96.7324404 },
        beers: [

            {
                name: `BIG THICKET`,
                keywords: `ipa`,
                style: "",
                ibu: 17,
                abv: 5.2,
                info: `USING A SIMPLE MALT BILL OF GERMAN PILSNER WITH A TOUCH OF WHEAT, THIS EXCEPTIONALLY SMOOTH BLONDE ALE IS CRISP, LIGHT AND EASY-DRINKING. WITH NOTES OF HONEY FROM THE MALT AND A HINT OF FLORAL HOP FLAVORS FROM LATE ADDITIONS OF CASCADE, THIS IS THE PERFECT BEER FOR A SUMMER AFTERNOON ON THE PORCH.`
            },

            {
                name: `IPO IPA`,
                keywords: `ipa`,
                style: `NEW ENGLAND STYLE IPA `,
                ibu: 50,
                abv: 6.8,
                info: `THE EIGTH ROUND OF OUR ROTATING NEW ENGLAND-STYLE IPA IS SIMPLY THE BEST VERSION YET.  A SILKY SMOOTH BODY AND PLENTY OF HAZE IS CREATED BY A HEAVY DOZE OF OATS AND WHEAT. WITH A PERFECTLY ROUNDED BITTERNESS AND A SWEET MALT PROFILE, THIS BEER IS INCREDIBLY REFRESHING. THIS BATCH IS 3X DRY-HOPPED WITH STRATA, MOSAIC, IDAHO 7 AND SABRO HOPS.  IT'S PRETTY MUCH A HOP FRUIT SMOOTHIE.  EXPECT BIG AROMAS OF PASSION FRUIT, MANGO AND CANDIED PINEAPPLE.`
            },

            {
                name: `WHITE ROCK IPA`,
                keywords: `ipa`,
                style: `IPA`,
                ibu: 60,
                abv: 7.4,
                info: `THIS IPA IS A BIT DIFFERENT FROM OUR IPO IPA IN THAT IT IS MORE OF A WEST COAST STYLE IPA. WE USE THREE OF OUR FAVORITE HOPS (SIMCOE, CITRA AND AMARILLO) IN THE WHIRLPOOL AND A HUGE DRY HOP OF THE SAME VARIETIES CREATING A FLAVOR BURST OF RIPE STONEFRUIT, PINE AND FRESH ORANGES. THE BITTERNESS, AS WITH ALL OF OUR BEERS, IS KEPT QUITE LOW FOR THE STYLE SO THAT YOU CAN DRINK MORE THAN ONE WITHOUT OVERWHELMING YOUR PALATE. THERE IS A VERY LIGHT MALT BACKBONE TO KEEP THIS BEER IN BALANCE, BUT IN THE END IT'S ALL ABOUT THE HOPS BABY.`
            },

            {
                name: `URBAN PARAKEET`,
                keywords: `ipa`,
                style: `AMERICAN IPA`,
                ibu: 40,
                abv: 6.7,
                info: `A MODERN TAKE ON THE CLASSIC AMERICAN STYLE. WE USE A BASE OF PALE AND MUNICH MALTS WITH A BIT OF HONEY MALT FOR LIGHT SWEETNESS. THE POP OF FRUIT-FORWARD AMERICAN HOPS COMES FROM DRY HOP ADDITIONS OF MOSAIC AND SIMCOE. WE GET STRONG NOTES OF CITRUS FRUIT AND PINE THAT ARE SUPPORTED BY JUST ENOUGH BITTERNESS TO BALANCE OUT THE MALT SWEETNESS.`
            },

            {
                name: `DAVE'S PERFECT PILS`,
                keywords: `pilsner`,
                style: `CZECH STYLE PILSNER`,
                ibu: 24,
                abv: 4.8,
                info: `THIS IS A CLASSIC CZECH STYLE PILSNER USING CZECH PILSNER MALT AND CZECH SAAZ HOPS.  IT IS CRISP WITH LIGHT BREADY MALT NOTES THAT ARE BALANCED BY THE FLORAL HOPS.`
            },

            {
                name: `CAPSIZED KAYAK HONEY WHEAT ALE`,
                keywords: "other",
                style: `Honey Wheat Ale`,
                ibu: 20,
                abv: 7.8,
                info: `WE USED 10 LBS PER BARREL OF LOCAL  HONEY, FRESH ZEST OF LEMON AND ORANGE, WHOLE CHAMOMILE FLOWERS, AND INDIAN CORIANDER TO CREATE A TRULY UNIQUE BEER. THERE ISN'T ANYTHING QUITE LIKE IT. IT'S FLORAL, CITRUSY, AND VERY LIGHTLY SWEET WITH TOP NOTES OF HONEY AND ORANGE ZEST. SHE'S VERY SMOOTH AND A REAL CROWD PLEASER, BUT BE CAREFUL...DRINK TOO MANY AND YOU MIGHT TUMP YOUR KAYAK.`
            },

            {
                name: `BONNIE BARGE`,
                keywords: `other`,
                style: `Brown Ale`,
                ibu: 20,
                abv: 5.6,
                info: `WE PARTNERED WITH OUR FRIENDS AT WHITE ROCK COFFEE TO BRING YOU THIS COMPLEX, DELIGHTFUL ENGLISHSTYLE BROWN ALE. USING MARIS OTTER AS THE BASE MALT, THIS BREW HAS NOTES REMINISCENT OF GRAHAM CRACKERS. CARAMEL AND CHOCOLATE MALTS ADD SLIGHT SWEETNESS, COCOA FLAVORS AND A RICH MALT CHARACTER. THE COFFEE IS OF ETHIOPIAN DESCENT AND IMPARTS NOTES OF CRANBERRIES, BLUEBERRIES AND ROASTED NUTS THAT PLAY WELL WITH THE SLIGHTLY FRUITY ENGLISH YEAST CHARACTER. THIS IS A TRULY UNIQUE BEER THAT WILL KEEP YOU BUZZED IN MORE WAYS THAN ONE.`
            },

            {
                name: `WEIZ ASS BASS`,
                keywords: `wheatbeer`,
                style: `GERMAN STYLE HEFEWEIZEN`,
                ibu: 13,
                abv: 4.8,
                info: `OUR TAKE ON THIS CLASSIC WHEAT BEER STYLE REMAINS TRUE TO FORM. A BALANCE OF BANANA AND CLOVE ESTERS ARE FORMED BY THE YEAST DURING FERMENTATION ALONG WITH CITRUSY NOTES OF FRESH APRICOT. WE USED A TON OF WHEAT WHICH LEAVES THE BODY EXTREMELY SMOOTH AND GIVES NOTES OF FRESHLY BAKED BREAD IN THE BACKGROUND. LOW BITTERNESS AND A LIGHT FLAVOR PROFILE MAKE THIS THE PERFECT BEER FOR SUMMER.`
            },

            {
                name: `PILOT SERIES: BELGIAN BRUT `,
                keywords: `belgian`,
                style: `Belgian Brut`,
                ibu: 25,
                abv: 10.5,
                info: `THIS IS A SMASH BEER, MEANING SINGLE MALT AND SINGLE HOP. WHILE GERMAN PILSNER MALT LENDS A SUBTLE HONEY LIKE SWEETNESS, A NEW AMERICAN HOP CALLED LORAL SHINES THROUGH WITH A VIBRANT FLORAL AROMA AND FLAVORS OF LEMONGRASS. IT'S NAMED "BRUT" BECAUSE WE USED A SPECIAL ENZYME THAT DRIES OUT THE BEER COMPLETELY TO ZERO RESIDUAL SUGAR. DRY, CRISP, AND BRIGHT WITH A LIGHT BELGIAN SPICE CHARACTER.`
            }

        ]
    },


    {
        name: "On-Rotations",
        info: "On Rotation is a hybrid concept of brewery and taproom, featuring our own brand of explosively experimental beers on a 40-tap wall with a large selection of guest taps. Every tap on our board is a “rotator,” which means we replace it with something new when it runs out, and we choose the best and most interesting brews we can to balance out our selection, local and abroad.",
        url: "https://on-rotation.com/on-tap/",
        position: { lat: 32.8110079, lng: -96.7335214 },
        beers: [

            {
                name: `Jalapeno Saison`,
                keywords: `other`,
                style: `Chili Saison`,
                abv: 8.1,
                abvRank: "high",
                ibu: 25,
                ibuRank: "medium",
                info: `Never fear. The spice is here. This dry, "chili" saison's bark is worse than its bite with a strong jalapeÒo nose balanced by a tortilla chip breadiness and a dry finish. The slight heat provides the rich experience of a jalapeÒo, hopefully without sending you running for a glass of milk.`
            },

            {
                name: `Tangerine Cream`,
                keywords: `other`,
                style: `Cream Ale with Tangerines`,
                abv: 6.7,
                abvRank: "high",
                ibu: 16,
                ibuRank: "medium",
                info: `This smooth cream ale bursts with sweet citrus "Dreamsicle" flavor thanks to a hefty helping of tangerines and hints of vanilla. It's incredibly easy-drinking and just a dreamy beer all around.`
            },

            {
                name: `Fire Pils `,
                keywords: `pilsner`,
                style: `German Pilsner`,
                abv: 5.8,
                abvRank: "high",
                ibu: 24,
                ibuRank: "medium",
                info: `This simple, clean pilsner takes its name from the firework, believed to be invented by the Chinese. A Chinese document from 1040 demonstrated how to craft a "fire pill" from gunpowder and paper. The loud "bang" produced by this "pill" was supposed to scare off evil spirits. And this pilsner will certainly scare off a bad time. Delightfully refreshing, this beer is best enjoyed on a hot Texas evening under the stars (or the fireworks). It's light and crisp with just a touch of bitterness at the end of each sip to keep you coming back for more.`
            },

            {
                name: `Cafe Au Lait `,
                keywords: `stout`,
                style: `Chicory Coffee Milk Stout`,
                abv: 6.6,
                abvRank: "high",
                ibu: 45,
                ibuRank: "medium",
                info: `Based on a New Orleans cafÈ au lait, this milk stout is big on black coffee flavor with a pleasant bitterness from subtle, spicy hops and a generous addition of cold brew coffee and chicory.`
            },

            {
                name: `Heimdall's Vision`,
                keywords: `ipa`,
                style: `New England IPA`,
                abv: 8,
                abvRank: "high",
                ibu: 19,
                ibuRank: "low",
                info: `This all-seeing protector of a hazy IPA features Citra, Huell Melon, and Pacifica hops, which impart notes of citrus, lime, honeydew melon, and strawberry. Fermenting on Hornindal Kveik yeast, aromas of fresh pineapple, mango, and tangerine add even more Bifrost magic to each sip.`
            },

            {
                name: `Raspberry Tart`,
                keywords: `other`,
                style: `Sour Saison with Raspberries`,
                abv: 8.8,
                abvRank: "high",
                ibu: 33,
                ibuRank: "medium",
                info: `This wheat-heavy saison is kettle-soured to crisp, tart perfection then hopped exclusively with Belma hops and fermented on a clean, French saison yeast. Dosed with raspberry puree, this dry, fruity treat pours with a beautiful, red hue, Belma driven aromas of strawberry, melon, and grapefruit, and a berry tart finish.`
            },

            {
                name: `Never Jaded`,
                keywords: `other`,
                style: `Dry-Hopped Saison`,
                abv: 7.9,
                abvRank: "high",
                ibu: 24,
                ibuRank: "medium",
                info: `Dry hopped exclusively with New Zealand Pacific Jade hops, known for their soft, subtle bitterness, this light and crisp saison is full of fresh lemon with a pleasant bready aroma and a dry, citrus twist to the finish. Hop aromas of spicy black pepper blend with the slight saison spice throughout. Never jaded, this beer is a perfect example of our love of saisons and how they interact with hops.`
            },

            {
                name: `Cryo Treatment`,
                keywords: `ipa`,
                style: `Imperial IPA`,
                abv: 9.6,
                abvRank: "high",
                ibu: 101,
                ibuRank: "medium",
                info: `With 101 IBUs, this dry-hopped double IPA featuring Simcoe, Ekuanot, Sticklebract, and Simcoe Cryo hops will put ice in your veins. Heavy on the late additions, the hops bring out notes of pine, lemon, cedar, passion fruit, berry, papaya, and earthy citrus and are supported by a hint of sweetness and a smooth bitterness. This fountain of youth will get your blood pumping again like no low IBU IPA can do.`
            },

            {
                name: `I Woke Up Like This`,
                keywords: "wheatbeer",
                style: `Witbier`,
                abv: 8,
                abvRank: "high",
                ibu: 11,
                ibuRank: "medium",
                info: `Roll out of bed and enjoy this "Mimosa Wit." Brewed with primarily wheat and all Citra hops, it's weighty in body with a major citrus note. A heavy-handed pour of fresh-pressed orange juice completes this mimosa package. It's hard to imagine people have to put themselves together in the morning, you know? Some of us just glow.`
            },

            {
                name: `Bigger Bam Boom`,
                keywords: `stout`,
                style: `Rye Whiskey Barrel-Aged Imperial Brown Sugar Oatmeal Stout`,
                abv: 11.8,
                abvRank: "high",
                ibu: 36,
                ibuRank: "medium",
                info: `Aged for more than 10 months in a rye whiskey barrel, this bigger, badder batch of Big Bam Boom is a real maneater. It's "hauling oats" viscous with a rich caramel from the brown sugar and a layer of vanilla. The rye, whiskey, and oak undertones come through more prominently as it warms. Watch out boy, she'll chew you up.`
            },

            {
                name: `Hot to Coco`,
                keywords: `porter`,
                style: `American Porter with Coconut & Chipotle Peppers`,
                abv: 6.4,
                abvRank: "high",
                ibu: 39,
                ibuRank: "medium",
                info: `Infused with toasted coconut and dried chipotle peppers, this American porter plays both sides of the sweet and spicy. Roasted notes of coffee and chocolate greet you on the first sip followed by a coconut sweetness before a little kick of chipotle spice that tickles the palate.`
            },

            {
                name: `I Understand Nothing!`,
                keywords: `ipa`,
                style: `Sour IPA`,
                abv: 6.7,
                abvRank: "high",
                ibu: 31,
                ibuRank: "medium",
                info: `Michael Scott doesn't get this beer. Light in body and with Citra hops in the boil, we added lactose (milk sugar) to this mixed culture sour IPA to add a subtly sweet, smooth quality. A dry hop of Mandarina Bavaria amps up the orange factor as well. It'll change the way you think about sours and IPAs. I literally don't know what I wrote here. I understand nothing...`
            },

            {
                name: `Last Stand of the Warriors Three`,
                keywords: `ipa`,
                style: `New England IPA`,
                abv: 8,
                abvRank: "high",
                ibu: 19,
                ibuRank: "low",
                info: `Brewed in honor of Asgardians Fandral, Hogun, and Volstagg, this hazy IPA, like its sister brew Heimdall's Vision, features Citra, Huell Melon, and Pacifica hops. Fruity citrus and lime with background aromas of honeydew and strawberry give way to the influence of Voss Kveik yeast, a strain known for powerful orange-citrus aromas and supercharging fruity hop notes.`
            }
        ]
    },
    {
        name: "Lakewood Brewing",
        info: "",
        url: "https://www.communitybeer.com/",
        position: { lat: 32.7917789589184, lng: -96.8165879157057 },
        beers: [


            {
                name: `The Temptress `,
                keywords: `stout`,
                style: `Imperial Milk Stout`,
                abv: 9.1,
                abvRank: "high",
                ibu: 21,
                ibuRank: "low",
                info: `Va-va-voom! The Temptress is seduction in a glass. Curvy in all the right places, this Imperial Milk Stout pours with a thick, milk chocolate head. Chocolate and caramel malt give it a rich and complex body while the lower carbonation gives the beer a silky mouth feel. Sheís voluptuous, with a soft alcohol warmth that grows deeper with every sip. Take your time with her and sheíll reward you.`
            },

            {
                name: `Lakewood IPA`,
                keywords: `ipa`,
                style: `American IPA`,
                abv: 7,
                abvRank: "high",
                ibu: 29,
                ibuRank: "medium",
                info: `All hail the glorious hop! This luminary of lupulin packs a wallop of flavor and aroma in a tiny package. Our intense love for these little flowers is why we created a highly drinkable beer that perfectly showcases their incredible versatility. Rather than brew a bitter bomb, our balanced American India Pale Ale bursts with tropical flavors like grapefruit, papaya, and tangerine from a blend of Mosaic, Citra, Mandarina Bavaria, and Bravo hops. This everyday IPA is bold without being brash.`
            },

            {
                name: `All Call`,
                keywords: `kolsch`,
                style: `Kolsch`,
                abv: 5.2,
                abvRank: "high",
                ibu: 43,
                ibuRank: "medium",
                info: `If you stop by our taproom, chances are you'll run into the law. That's because we've become a favorite all call destination for our community's finest, local police and firefighters, when they're out of uniform. Naturally, they inspired a beer fit for heroes. All Call Kˆlsch is refreshingly light, courageous, and serves as a summons for both new and veteran craft beer drinkers alike. It's a beer that brings people together. A portion of the proceeds of All Call benefits the Guns & Hoses Foundation of North Texas, a non-profit organization providing aid to families of fallen first responders.`
            },

            {
                name: `Lakewood Lager`,
                keywords: `lager`,
                style: `Vienna-Style Lager`,
                abv: 4.6,
                abvRank: "medium",
                ibu: 63,
                ibuRank: "medium",
                info: `Lakewood is more than a place. It's a state of mind. Old blends with new. Traditions hook up with fresh ideas. It's the same with our Lakewood Lager. We've taken old world Vienna-Style lager and reintroduced it to beer lovers. Subtle caramel aromas, a coppery pour and a light malty sweetness paired with noble hop bitterness set this beer apart. In with the old, in with the new.`
            },

            {
                name: `Lemonale`,
                keywords: `ale`,
                style: `Golden Ale with Lemons`,
                abv: 4.7,
                abvRank: "medium",
                ibu: 42,
                ibuRank: "medium",
                info: `Here's a little something from our brighter side. This refreshing ale, crafted with a twist of lemon, loves any shindig, from beach to brunch to dive bar. Life's great, squeeze it!`
            }

        ]
    },

    {
        name: "Deep Ellum Brewing Co",
        info: "PROUD TO BE THE FIRST CRAFT BREWERY IN DALLAS, WE’RE DEEP ELLUM. SINCE OPENING OUR DOORS IN 2011, WE’VE BECOME AS WELL KNOWN FOR OUR INNOVATIVE BREWING AND EXCEPTIONAL QUALITY AS WE HAVE FOR OUR HEALTHY DISDAIN FOR THE STATUS QUO.",
        url: "http://www.deepellumbrewing.com",
        position: { lat: 32.7806273333333, lng: -96.7815684545455 },
        beers: [{
            name: "Dallas Blonde",
            keywords: "wheatbeer",
            style: "American Blonde",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info: "In a town famous for its bottled blondes, we’ve reset the bar. This shimmering, golden ale combines citrusy and floral American hops with Pale, Vienna and Wheat malts. It’s a beautifully balanced, sessionable brew. Guaranteed to deliver more fun—go blonde."
        },
        {
            name: "Deep Ellum IPA",
            keywords: "ipa",
            style: "Light",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info: "For an IPA to bear our hometown name, it better be potent. So we loaded it with our favorite American hops for a bitter punch. And with some over-the-top tropical fruit, citrus, pine and floral aromas and flavors, you’ve got one big Texas IPA, deserving of the Deep Ellum name."
        },
        {
            name: "Deep Ellum Lager",
            keywords: "wildale",
            style: "Throwback American",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info: "Our throwback to great show beer. Inspired by soft pilsner malt, we use rye malt for flavor and spice it up with hops from the Czech Republic. Distinct light body, earthy, and floral aroma that will leave you thirsting for an encore."
        },
        {
            name: "Local Legend",
            keywords: "stout",
            style: "Sweet Milk",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info: "A sessionable Sweet Milk Stout, Local Legend is the perfect balance of roasted barley and milk sugar for a subtly sweet, silky brew. This Legend is definitely one for the books."
        },
        {
            name: "Dream Cruiser",
            keywords: "paleale",
            style: "Double Rye",
            abv: "N/A",
            abvRank: "high",
            ibu: "N/A",
            ibuRank: "medium",
            info: "Citrusy, piney, floral and fruity hops are at least a third of the reason we got ourselves into this whole brewing adventure. We’ve taken the IPA to its Event Horizon. Get the picture? It’s hoppy!"
        }]

    },
    {
        name: "Four Corners Brewing Co",
        info: "We've always considered ourselves to be on a craft beer journey. In 2009, we were compelled to take our journey to a new level with the launch of Four Corners Brewing Company.",
        url: "http://www.fcbrewing.com",
        position: { lat: 32.7793491, lng: -96.830624167423 },
        beers: [{
            name: "El Grito",
            keywords: "wildale",
            style: "Light",
            abv: 4.4,
            abvRank: "low",
            ibu: 20,
            ibuRank: "low",
            info: "A classic blend of Pilsner malt and flaked corn provide a light, earthy body to the brew. "
        },
        {
            name: "Local BUzz",
            keywords: "wildale",
            style: "Honey Rye Golden",
            abv: 5.2,
            abvRank: "medium",
            ibu: 20,
            ibuRank: "low",
            info: "A crisp and delicious Golden Ale brewed with honey. Refreshing taste is what the buzz is all about. ¡Salud!"
        },
        {
            name: "El Chingon",
            keywords: "paleale",
            style: "American",
            abv: 7.3,
            abvRank: "high",
            ibu: 72,
            ibuRank: "high",
            info: "This IPA is brewed with a chingo-blend of American hops, balanced with Munich malt AND dry-hopped para más intensidad."
        }]

    },
    {
        name: "Noble Rey Brewing Company",
        info: "Or out of Chris Rigoulot's parents garage years ago, whichever sounds cooler & less depressing. Noble Rey Brewing was formed all the way back in 2012, when the founder, Chris Rigoulot, had an idea to start a brewery where he could make the beers the way he wanted to, where his employees wouldn’t just be a number, and where creativity would be rewarded. ",
        url: "http://www.noblereybrewing.com",
        position: { lat: 32.7999840454545, lng: -96.8395214545454 },
        beers: [{
            name: "Off The Leash",
            keywords: "wildale",
            style: "Texas Red",
            abv: 6.0,
            abvRank: "medium",
            ibu: 23,
            ibuRank: "medium",
            info: "This shamefully good Texas Red Ale is brewed with no restraint. Malty and robust with a perfect balance of hop flavor and aroma, our red finishes smooth and easy!"
        },
        {
            name: "Sex In A Canoe",
            keywords: "stout",
            style: "American Light",
            abv: 4.2,
            abvRank: "medium",
            ibu: 8,
            ibuRank: "low",
            info: "If you have made love in a canoe, then you know it is done really close to water…this American Light Lager is meant for one thing and one thing only — to crush, and crush often while still drinking a flavorful craft lager."
        },
        {
            name: "Tactical Combat Firefighter",
            keywords: "ipa",
            style: "American IPA",
            abv: 6.2,
            abvRank: "medium",
            ibu: 70,
            ibuRank: "high",
            info: "Tactical Combat Firefighter is everything we love in an IPA, little bit of NE, little bit of West Coast, a whole lot of Noble Rey. This DDH IPA is smooth and crushable, packed with hoppy goodness for the Texas heat while staying full bodied."
        },
        {
            name: "Golden Ray",
            keywords: "wheatbeer",
            style: "American Wheat",
            abv: 6.0,
            abvRank: "medium",
            ibu: 30,
            ibuRank: "medium",
            info: "Golden Rey is brewed with 35% wheat which makes for a creamy mouthful that carries a punch of orange and tropical flavors."
        },
        {
            name: "Baracus",
            keywords: "wildale",
            style: "Brown",
            abv: 6.1,
            abvRank: "medium",
            ibu: 30,
            ibuRank: "medium",
            info: "Our American Brown Ale with a robust mix of roasted malt flavor and full body."
        }]
    },
    {
        name: "Oak Highlands Brewery",
        info: "Oak Highlands Brewery has a 2,200-square foot production area with new floors that are sloped to drains.",
        url: "http://www.ohbrewery.com",
        position: { lat: 32.8901451, lng: -96.7067664 },
        beers: [{
            name: "Allgood",
            keywords: "kolsch",
            style: "German Kolsch",
            abv: 5.8,
            abvRank: "medium",
            ibu: 22,
            ibuRank: "medium",
            info: "Golden in color, light in body, and full in flavor."
        },
        {
            name: "Derelic IPA",
            keywords: "paleale",
            style: "American IPA",
            abv: 6.1,
            abvRank: "medium",
            ibu: 56,
            ibuRank: "high",
            info: "Strong citrus hop aroma and flavor without an overly bitter taste."
        },
        {
            name: "DFDub",
            keywords: "wheatbear",
            style: "German Dunkelweizen (dark wheat)",
            abv: 7.1,
            abvRank: "high",
            ibu: 13,
            ibuRank: "low",
            info: "Heavy banana and clove aromas. A dark, slightly cloudy beer with a fresh crisp taste."
        },
        {
            name: "Freaky Deaky",
            keywords: "belgium",
            style: "Belgium Triple",
            abv: 10.0,
            abvRank: "high",
            ibu: 45,
            ibuRank: "medium",
            info: "Light in color and brewed with a larger amount of American hops than a traditional tripel."
        },
        {
            name: "Golden Mustache",
            keywords: "wheatbeer",
            style: "German Dortmunder",
            abv: 5.5,
            abvRank: "medium",
            ibu: 26,
            ibuRank: "medium",
            info: "Originated in Dortmund Germany, this lager is crisp, clear, and easy drinking."
        }]

    }]







// function changeRanks(arr) {
//     for (let brewery of arr) {
//         for (let beer of brewery.beers) {
//             if (abv < )
//             if (4 < beer.abv < 7) {
//                 beer.abvRank = "medium";
//             } else if (7 <)

//         }
//     }
// }














// ABV: low: up to and including 4%
// medium: up to 7%
//     high: 7-10%
//     Very high: above 10%

// IBU Scale: 	low: >=20
//         medium: 21 - 50
//     high: 51-80
//     Very High: Above 80







// ABV: low: up to and including 4%
// medium: up to 7%
//     high: 7-10%
//     Very high: above 10%

// IBU Scale: 	low: >=20
//         medium: 21 - 50
//     high: 51-80
//     Very High: Above 80


$("#submitem").on("click", function () {
    event.preventDefault()
    $('#results').show();


    brewClicked = false;
    breweriesDisplay.length = 0;
    displayBeers.empty()


    ibu = $("#ibu").val().trim();
    abv = $("#abv").val().trim();
    styleKeywords = $("#stylekeywords").val().trim();

    // console.log(ibu)
    // console.log(abv)
    // console.log(styleKeywords)


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


    // console.log(breweriesDisplay)








    // console.log(city)
    // console.log(state)
    // queryURL = `https://api.openbrewerydb.org/breweries?by_state=${state}&by_city=${city}&per_page=50`
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

    let zoomlevel = 8;

    // if (city || state) {
    //     zoomlevel = 10;
    // } else {
    //     zoomlevel = 4;
    // }

    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: zoomlevel, center: central });



    service = new google.maps.places.PlacesService(map);





    if (abv || ibu) {

        // filter responses here using array of obs initialized outside into list of viable breweries

        // use data-value to help with later on click functions

        //Code to filter the map markers

        // create series of arrays, each modified by input search parameters, if they are found using Object.values, or just manually by property name, then push to the new array, finally display the new array under the div. 

        // Each div should be styled, have an identifying information data-name attribute, which can be used to bring up the information for the appropriate beers, after filtering these too

        // for (let brewery of breweriesDisplay)



        //to prevent exceeding requests limit, I'll bet there's a better way to do this?




        console.log(breweriesDisplay.length)
        let countUp = 0
        function makeAll() {

            for (i = countUp; i < countUp + 5; i++) {
                if (i < breweriesDisplay.length) {
                    makeMap()
                }

            }

            countUp += 5;
            console.log(countUp)

            if (countUp < breweriesDisplay.length) {
                setTimeout(makeAll, 1750)
            } else {
                return 1;
            }


        }

        makeAll()


        // setTimeout(() => console.log("Hold Up"))




        function makeMap() {

            let brewery = breweriesDisplay[i];

            console.log(brewery)

            let location = brewery.position;

            let marker = new google.maps.Marker({
                position: location,
                map: map,
                title: brewery.name,
            });



            //googleplaces call
            console.log(brewery.name)
            let request = {
                query: brewery.name,
                fields: ["photo", "rating", "formatted_address"],
                locationBias: { radius: 50, center: central }
            };


            service.findPlaceFromQuery(request, function (results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    console.log(results)
                    marker.dataFromPlaces = results;
                    //   for (var i = 0; i < results.length; i++) {
                    //     // createMarker(results[i]);
                    //     console.log(results[0].place_id)
                    //     console.log(results)
                    //   }

                    //   map.setCenter(results[0].geometry.location);
                } else {
                    console.log(status)
                    return 0;
                }


                //add inside if 

                // let requestDetailed = {
                //     placeId: results[0].place_id,
                //     fields: ['geometry', "photo", "formatted_address", "formatted_phone_number", "rating"]
                //     // fields: ['geometry', "photo", "formatted_address", "formatted_phone_number", "rating"]
                //     // fields: ['geometry', "opening_hours", "photo", "formatted_address", "formatted_phone_number", "icon", "rating", "review", "user_ratings_total","price_level", "website" ]
                // }

                // service.getDetails(requestDetailed, function (place, status) {
                //     if (status == google.maps.places.PlacesServiceStatus.OK) {
                //         // console.log(place)
                //         // console.log(place.geometry.location.lat())
                //         // console.log(place.rating)
                //         marker.dataFromPlaces = place;
                //         console.log(marker.dataFromPlaces)
                //     } else {
                //         console.log("oh no...")
                //         console.log(status)
                //     }

                // })

            });


            // console.log(storedResults)
            console.log(marker.dataFromPlaces)
            // console.log(location)




            marker.addListener("click", function () {
                displayBeers.empty()
                // buildIWContent(this.dataFromPlaces);
                console.log("click successful")
                console.log(this.title)
                brewClicked = false;
                // if ((this).dataFromPlaces.photos[0] !== undefined)
                // let firstPhoto = this.dataFromPlaces.photos[0].getUrl()
                // console.log(this.dataFromPlaces.photos[0].getUrl())




                let imgSrc;
                // let priceLevel;
                let brewAddress;
                let rating;

                console.log(this.dataFromPlaces)
                if (this.dataFromPlaces) {
                    console.log(this.dataFromPlaces)
                    imgSrc = (this.dataFromPlaces[0].photos[0].getUrl())
                    // priceLevel = this.dataFromPlaces.formatted_phone_number
                    brewAddress = this.dataFromPlaces[0].formatted_address
                    rating = this.dataFromPlaces[0].rating
                } else {
                    console.log("boom")
                }

                $(`<div id = "first" class="card" style="width: 18rem;"></div>`).appendTo(displayBeers)
                $(`<img id= "second" src="${(imgSrc || "https://s19316.pcdn.co/wp-content/uploads/2019/03/DSC09507-600px-600x338.jpg")}" class="card-img-top" alt="Sorry-No Posted 
                Pictures">`).appendTo($("#first"))
                $(`<div id="third" class="card-body"></div>`).insertAfter($("#second"))
                $(`<h5 id="fourth" class="card-title">${brewery.name}</h5>`).appendTo($("#third"))
                $(`<p class="card-text">${brewery.info}</p>`).appendTo($("#third"))
                $(`<p class="card-text"><b>Rating</b>: ${(rating + "/5 stars" || "Sorry, no rating listed.")}</p>`).appendTo($("#third"))
                $(`<p class="card-text"><b>Address</b>: ${(brewAddress || "Sorry, no address listed")}</p>`).appendTo($("#third"))
                $(`<a target="_blank" href="${brewery.url}" class="btn btn-primary">Check Out Their Website!</a>`).appendTo($("#third"))
                $(`<button id="addmargin" data-name="${brewery.name}" class="btn btn-info brewclick">Show Matching Beers!</button>`).appendTo($("#third"))





                // $(`<div class = "brewclick" data-name="${this.title}">A clickable list of all the beers for a given brewery will go here when this brewery is clicked on. This brewery is named ${this.title} This brewery's rating is ${this.dataFromPlaces.rating}</div>`).appendTo(displayBeers)

            })


        }




    }



}

$(document).on("click", ".brewclick", function () {



    if (brewClicked === false) {
        brewClicked = true;


        $("#indicators").empty()
        beersList.empty()
        event.preventDefault()

        console.log("hullo")
        console.log($(this).attr("data-name"))






        for (let brewery of breweriesDisplay) {

            let counter = 0;



            if ($(this).attr("data-name") === brewery.name)

                for (let beer of brewery.beers) {

                    if (((beer.ibuRank === ibu) || (ibu === "unimportant")) && ((beer.abvRank === abv) || (abv === "unimportant")) && ((beer.keywords === styleKeywords) || (styleKeywords === "unimportant"))) {

                        console.log(beer)

                        if (counter === 0) {
                            $(`<li data-target="#beeroptions" class="active" data-slide-to="${counter}"></li>`).appendTo($("#indicators"))
                        } else {
                            $(`<li data-target="#beeroptions" data-slide-to="${counter}"></li>`).appendTo($("#indicators"))
                        }

                        if (counter === 0) {
                            $(`<div id = "${counter}" class="carousel-item active"></div>`).appendTo(beersList)
                        } else {
                            $(`<div id = "${counter}" class="carousel-item"></div>`).appendTo(beersList)
                        }
                        // $("#one").appendTo(beersList)
                        $(`<img class="d-block w-100" src="https://ak7.picdn.net/shutterstock/videos/28193857/thumb/1.jpg" alt="Oh No! Where's the beer?">`).appendTo($(`#${counter}`))
                        $(`<div id="${counter - 100}" class="carousel-caption d-none d-md-block"></div>`).appendTo($(`#${counter}`))
                        $(`<h5>${beer.style}</h5>`).appendTo($(`#${counter - 100}`))
                        $(`<p id="smallify">${beer.info}</p>`).appendTo($(`#${counter - 100}`))

                        counter++;




                        //         <div class="carousel-item active">
                        // <img class="d-block w-100" src=".../800x400?auto=yes&bg=777&fg=555&text=First slide"
                        //   alt="Oh No! Where's the beer?">
                        // <div class="carousel-caption d-none d-md-block">
                        //   <h5>...</h5>
                        //   <p>...</p>
                        // </div>
                        // $(`<div>`).html(beer.name).insertAfter((beersList))
                        // $(`<btn class="btn btn.block">`).html(beer.name).insertAfter($(".brewclick"))

                    }


                }
        }
    }
})


// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     console.log(response)
//     console.log(response[7].latitude)
//     console.log(response[7].longitude)
//     console.log(response.length)
// })

//find a way to get coordinates of state or city and set it to map center
//add identifying info to the map markers, then create a click handler to display the proper info
//create informational opbjects for all included breweries
//think on how to style/display info