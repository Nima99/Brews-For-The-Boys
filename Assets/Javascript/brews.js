
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

// let city;
// let state;
let styleKeywords;
let abv;
let ibu;
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
    },

    { name: "On Rotation",
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
    {   name: "Hot to Coco",
        keywords: ["American Porter"],
        style: "American Porter with Coconut & Chipotle Peppers",
        abv: 6.4,
        abvRank: "low",
        ibu: 39,
        ibuRank: "medium",
        info: "Infused with toasted coconut and dried chipotle peppers, this American porter plays both sides of the sweet and spicy."
    },
    {   name: "I Understand NOTHING",
        keywords: ["ipa"],
        style: "sour",
        abv: 6.7,
        abvRank: "low",
        ibu: 31,
        ibuRank: "medium",
        info: "Michael Scott doesn't get this beer. Light in body and with Citra hops in the boil, we added lactose (milk sugar) to this mixed culture sour IPA to add a subtly sweet, smooth quality."
    
    },
    {   name: "Belgain Conspiracy",
        keywords: ["pale ale"],
        style: "belgian",
        abv:7.6,
        abvRank: "high",
        ibu: 26,
        ibuRank: "medium",
        info: "Naruto run, don't walk, to this beer. Copper in color with an aromatic and simple grain base, this Belgian pale ale features a prominent malt backbone with a light dose of Idaho #7 hops, which provide a nice citrus character with some background earthiness."
    },
    {   name: "Last Stand of the Warriors Three",
        keywords: ["ipa"],
        style: "new england",
        abv:8,
        abvRank: "high",
        ibu: 19,
        ibuRank: "low",
        info:"Brewed in honor of Asgardians Fandral, Hogun, and Volstagg, this hazy IPA, like its sister brew Heimdall's Vision, features Citra, Huell Melon, and Pacifica hops"
},
{       
        name: "I Woke Up Like This ",
        keywords: ["Witbier"],
        style: "Witbier",
        abv:8,
        abvRank: "high",
        ibu: 11,
        ibuRank: "low",
        info: "Roll out of bed and enjoy this Mimosa Wit. Brewed with primarily wheat and all Citra hops, it's weighty in body with a major citrus note."
},
{       
       name: "Raspberry Tart",
       keywords: ["Sour Saison"],
       style: "Sour Saison with Raspberry",
       abv:8.8,
       abvRank: "high",
       ibu: 33,
       ibuRank: "medium",
       info: "This wheat-heavy saison is kettle-soured to crisp, tart perfection then hopped exclusively with Belma hops and fermented on a clean, French saison yeast."
},

{ 
    name: "Never Jaded",
    keywords: ["Dry-Hopped Saison"],
    style: "Dry-Hopped Saison",
    abv:7.9,
    abvRank: "high",
    ibu:24,
    ibuRank: "medium",
    info:"Dry hopped exclusively with New Zealand Pacific Jade hops, known for their soft, subtle bitterness, this light and crisp saison is full of fresh lemon with a pleasant bready aroma and a dry, citrus twist to the finish."

},

{ 
    name: "Cryo Treatment ",
    keywords: ["ipa"],
    style: "Imperial / Double",
    abv:9.6,
    abvRank: "high",
    ibu: 101,
    ibuRank: "very high",
    info:"With 101 IBUs, this dry-hopped double IPA featuring Simcoe, Ekuanot, Sticklebract, and Simcoe Cryo hops will put ice in your veins. "

}]

},

{
name: "Braindead Brewing",
info: "",
url: "http://braindeadbrewing.com/",
position: { lat: 32.7838067, lng: -96.7854202 },
beers: [
    {
        name: "Gritz",
        keywords: "blonde ale",
        style: "Pre-prohibition Cream Ale ",
        abv: 4.4,
        abvRank: "low",
        ibu: 23,
        ibuRank: "medium",
        info: "An approachable yet obscure light blonde ale style descended from old world golden lagers."
    },
    {
        name: "HONEY LAGER (CORE BEER)",
        keywords: "American Lager",
        style: " American Lager with Texas Wildflower Honey ",
        abv: 5.6,
        abvRank: "medium",
        ibu: 25,
        ibuRank: "medium",
        info: "Started from the bottom fermentation, now we're here. The ultimate warm weather beer, pairs well with everything."

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
        info:"Wow. 4 years. What do we say except thank you?! A flip on a traditional imperial stout, sweet and stocky."
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
        abv:15.5,
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
        info:"Major Frog is our Double IPA category, a bump up in ABV and sometimes in IBUs from the Army of Frogs category."
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
        info:"Abbey style Belgian Single brewed with American Pale Ale, American 2 Row, American White Wheat & German Dark Wheat malts, Cane Sugar, Styrian Bobek, Czech Kazbeck & Apollo hops,House Belgian Yeast Blend"
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
        info:"Golden, malty and refreshing."
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
        abv: 6-8,
        abvRank: "high",
        ibu: 50-99,
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


    }]



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

            if (beer.ibuRank === ibu && beer.abvRank === abv && styleKeywords === beer.keywords) {
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

    let central = { lat: 39.8283, lng: -98.5795 };

    let zoomlevel = 4;

    // if (city || state) {
    //     zoomlevel = 10;
    // } else {
    //     zoomlevel = 4;
    // }

    let map = new google.maps.Map(
        document.getElementById('map'), { zoom: zoomlevel, center: central });







    if (abv || ibu) {

        // $.ajax({
        //     url: queryURL,
        //     method: "GET"
        // }).then(function (response) {
        //     console.log(response)
        //     console.log(response[7].latitude)
        //     console.log(response[7].longitude)
        //     console.log(response.length)



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
                //why wont this work? Find a way to empty all child nodes from a div, but not the text in the div itself, though current method works
                displayBeers.empty()
                console.log("click successful")
                console.log(this.title)
                $(`<div class = "brewclick" data-name="${this.title}">A clickable list of all the beers for a given brewery will go here when this brewery is clicked on. This brewery is named ${this.title}</div>`).appendTo(displayBeers)

            })


        }




    }



}


//find a way to get coordinates of state or city and set it to map center
//add identifying info to the map markers, then create a click handler to display the proper info
//create informational opbjects for all included breweries
//think on how to style/display info