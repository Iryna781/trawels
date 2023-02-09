type HomeProps ={
    id: number  
    image: string
    title: string
    text: string
    category?: string 
}
const homeArray: HomeProps[] = [
    {
        id:1,
        image: "/images/snow.jpg",
        title: "The Top 10 Sky Resorts In North America",
        text: "If you are looking to have the big-name ski resort experience without breaking the bank, Breckenridge is for you! With plentiful accommodation options at varied prices and endless shopping, dining and drinking spots, Breck can suit all budgets. In terms of the skiing, it is an awesome mountain to ride with close to 200 trails for all abilities and North America is highest lift! Whistler-Blackcomb, the largest ski resort in North America, ticks all the boxes for the ultimate ski holiday experience. You will be skiing for days exploring over 200 runs across two mountains that total 8,172 acres of skiable terrain! There is terrain to accommodate all levels as well as inbounds backcountry, bowls, glaciers, tree trails and five terrain parks! Vail has one of the most expensive walk-up lift tickets in the country and the town can feel slightly contrived compared to authentic towns like Breckenridge. Nonetheless, its infinite dining options, lodging, apres-ski activities and heated sidewalks make it a must-visit ski destination! Aspen rules the après-ski scene with endless dining and nightlife options! Its upscale reputation does come with a price tag, especially if you are looking for ski-in/ski-out accommodation. Traditional skiers can enjoy the mountain all to themselves, as those pesky snowboarders are not allowed at Alta! An expert paradise, Jackson Hole is known for the most continuous vertical in the US! One of Colorado well kept secrets, Telluride is located in a western town full of character. The difficulty in accessing Telluride comes at the benefit of keeping the crowds away and being a great place for beginners to learn on the wide, uncrowded runs. Squaw Valley is a favorite amongst the advanced, with wildly extreme terrain. The base village has tons of lodging, dining and shopping choices, but the convenient location from the Bay area draws big crowds. If luxury and pampering is what you are after, look no further than Beaver Creek! As Colorado newest resort, visitors can enjoy expertly groomed runs and efficient lift systems. With rustic western charm and almost no crowds, Steamboat is a must-visit among the larger US resorts. What makes this resort unique is having some of the best glade skiing in Colorado, and tree runs for all abilities! ",
        category: "winter",
        
    },
    {
        id:2,
        image: "/images/sea.jpg",
        title: "Best Beaches in the World",
        text: "Measuring only 6 miles long and less than 3 miles wide, Bora Bora is packed with stunning beaches, green jungles and ritzy resorts featuring overwater bungalows. Matira Beach is ideal for sunbathing and strolling along sandy shores, while the beach at the Four Seasons Resort Bora Bora is where you should head for Mount Otemanu views and calm water. Snorkeling and shark-feeding excursions are also available if you enjoy adventurous pursuits. Boasting 333 islands, resplendent resorts, sparkling waters and endless stretches of pristine sand, Fiji is the perfect spot for paradise-seeking beachgoers. Travelers who want to snorkel while on vacation should set their sights on Taveuni's diverse coral reefs. Tahiti should be high on your list if you like your beaches paired with gourmet French cuisine. The largest of French Polynesian's islands is known for offering top-notch fare, verdant jungles, lavish resorts and sandy shores. The Maldives is unlike any beach destination you'll experience. This tropical paradise is made up of approximately 1,200 islands and each beach is more beautiful than the last. If you're looking for a taste of Hawaii's beautiful beaches without the crowds on Oahu, retreat to Maui. The island boasts impressive beaches both big and small, adult- and family-friendly, as well as the black sand shores at Wai'anapanapa State Park. ",
        category: "sea",
        
    },
    {
        id:3,
        image: "/images/city.jpg",
        title: "Holidays in Europe",
        text: "France has fans all over the world due to its tasty Bordeaux wines, great cheese, the Eiffel tower, severe Normandy castles and world-class fashion. Its beautiful Riviera beaches, whine valleys, deep forests, historic towns and ancient chateaus. There is nothing like drinking a bottle of wine with fresh croissant on Seine river bank or taking a day trip to the French countryside. France has so much to see and do, and will never leave your disappointed. Check out more in our France destination guides. Finland is the land of Santa Claus, Northern Lights, mountains, waterfalls and all kind of different sceneries! The place is perfect for the outdoors activities lovers such as skiing, reindeer riding, husky ride or Northern lights hunding on a snowmobile. Finland is perfect in every season, however the best time to explore this great destination is winter. Amazing food, romantic countryside and wine that can't be found anywhere else on the planet, make Italy a top destination to add in your bucket list. You will fall in love with more and more with every visit.Tuscany vineyards, Florentine architecture, the Imperial Rome, or the laid back nature of Amalfi Coast and breathtaking Venice canals, all make it a must-visit place. Spain is a true land of siesta which affects the daily routine of locals and tourists from all over the world where everything runs slowly and staying up late. No one cares about anything and people just enjoy life there, that is why tours to Spain is a pure fun! The land of Vikings and amazing fjords like nowhere else, Norway is so amazingly beautiful that you should definitely include into your travel bucket list. The Norwegians are wonderful and welcoming people; everyone speaks fluent English, and the nature attractions should not be ignored in any case. There is nothing like sailing around the fjords in the north onboard of a Hurtigruten ship.",
        category: "city",
    },
]
export default homeArray