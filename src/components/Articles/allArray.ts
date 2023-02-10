type AllProps ={
    id: number  
    image: string
    title: string
    text: string
    category?: string 
}
const allArray: AllProps[] = [
    {
        id:1,
        image: "/images/boy.webp",
        title: "Climbing",
        text: "We have programs for everyone ranging from those who want a fun initial climbing experience, to those seeking serious expedition skills appropriate for the most demanding high altitude climbs. We also offer solid professional training course. Our small groups and low student-to-instructor ratio help us meet individual expectations, and help our guests to progress as quickly as their ambition and ability allow. No previous experience is required for any of these courses.",
        category: "winter vacation",
        
    },
    {
        id:2,
        image: "/images/girl.jpg",
        title: "Ski",
        text: "For those who enjoy an active vacation, we have lots of suggestions in the United States of America. Use our Travel Guide as a source of inspiration for planning your next adventure and browse through descriptions and route details of the most beautiful ski tours.Our low guide to guest ratios give us the freedom to accommodate individual goals and expectations. Custom trips and private guiding are available. Visit us for a backcountry ski trip you will not forget!",
        category: "winter vacation",
        
    },
    {
        id:3,
        image: "/images/fish.jpg",
        title: "Diving",
        text: "Experience the thrill of the underwater world on a scuba diving tour. Don your scuba gear and sail off to the Underwater Museum to see hundreds of marine species living in the artificial reefs. Dive into the azure waters on this full-day small-group scuba diving or snorkeling excursion from Side, including lunch, hotel transfers and two dives.  Suitable for complete beginners, you will receive full instruction, then have plenty of chance to practice your new-found skills as you float past underwater caves,colourful coral and schools of tropical fish. Each diver is paired with a crew member to make sure you have a safe experience in the water.",
        category: "sea vacation",
    },
    {
        id:4,
        image: "/images/ball.jpg",
        title: "On the beach",
        text: "Whether your personal beach style is rustic and remote or well equipped and lively, our tours offer a glimpse of some of the most beautiful beaches in the world. Swim in the calm waves, dine in a thatched gazebo under the palm trees, or hire an outrigger for a water excursion.  From the usually empty beach, silky sand descends quietly into aquamarine waters whose shallow waters extend about half a mile offshore to a beach where locals sunbathe, stroll and play volleyball, and vendors sell everything from ice cream and shrimp skewers to ice-cold beer.",
        category: "sea vacation",
    },
    {
        id:5,
        image: "/images/Italy.jpg",
        title: "Tours",
        text: "City tours with Time to travel formula are a comfortable and simple proposal for visiting cities. The tours take place in Red double-decker buses, where on board you will find a multilingual commentary that will explain the history and curiosities of  the city and what you can see along the way. The buses follow predetermined routes through the main tourist attractions with stops along the way near museums and the most important points of interest in the city. The  formula allows you to get on and off whenever you wish, always with the same ticket; tickets are valid for more hours, depending on the city you choose you can find tickets valid for 24, 48 or 72 hours. With this service you have an excellent overview of the city and its attractions that you can visit independently according to your preferences and your times, having an overview without the stress of having to organize yourself with the movements to reach the various points of interest.",
        category: "city rest",
    },
    {
        id:6,
        image: "/images/club.jpg",
        title: "Leisure",
        text: "Are you tired of walking, constant activity and just want to rest? We can offer you a leisure tour. You have a choice of accommodations - hotels or lonely lodges in the area. Spas, bathhouses, hot springs, private beaches, bars and cafes are available. And all this on one territory, a few steps from each other. You can also order a separate transport, which will accompany you all the time. And if you suddenly feel like partying, every night we hold theme parties with free admission and the best drinks and playlists.",
        category: "city rest",
    },

]
export default allArray