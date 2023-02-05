import Sliderdiscoversea from '../Slider/Sliderdiscoversea'
import './Discovertext.css'
type Props = {}
const Discovertextsea = (props: Props) => {
    return (
        <>
            <div className="first">
                <div className="first-text">
                    <p className="title-text">Bora Bora </p>
                    <p className="text-1">
                        This French Polynesian island is small but mighty. Bora
                        Bora is packed with stunning beaches, green jungles and
                        ritzy resorts featuring overwater bungalows. Matira
                        Beach is ideal for sunbathing and strolling along sandy
                        shores, while the beach at the Four Seasons Resort Bora
                        Bora is where you should head for Mount Otemanu views
                        and calm water.
                    </p>
                    <p className="title-text">Fiji</p>
                    <p className="text-1">
                        Boasting 333 islands, resplendent resorts, sparkling
                        waters and endless stretches of pristine sand. Travelers
                        who want to snorkel while on vacation should set their
                        sights on Taveuni's diverse coral reefs. Meanwhile,
                        those pining for the tropical beaches featured in the
                        movie "Cast Away" and multiple seasons of the TV show
                        "Survivor" can catch a ferry from Port Denarau and head
                        directly to one of the 20 islands that make up the
                        Mamanuca Islands.
                    </p>
                </div>
                <div className="first-slider">
                    <Sliderdiscoversea />
                </div>
            </div>
            <div className="text-second">
                <p className="title-text"> Mauritius</p>
                <p className="text-1">
                    This scenic African island, which sits east of Madagascar,
                    offers a multitude of beaches worth prioritizing. Visitors
                    say the island's west coast is where you'll find the best
                    strips of shoreline, including Flic en Flac and Le Morne
                    beaches, which feature beautiful white sand and superb
                    vantage points for sunsets.
                </p>
                <p className="title-text">Tahiti</p>
                <p className="text-1">
                    Tahiti should be high on your list if you like your beaches
                    paired with gourmet French cuisine. The largest of French
                    Polynesian's islands is known for offering top-notch fare,
                    verdant jungles, lavish resorts and sandy shores. The
                    smaller section of Tahiti (known as Tahiti Iti) is more
                    secluded than the larger Tahiti Nui, but both are worth
                    seeing. Check out Papenoo Beach on Tahiti Nui for excellent
                    surfing conditions and more breathing room.
                </p>
                <p className="title-text">Maldives</p>
                <p className="text-1">
                    The Maldives is unlike any beach destination you'll
                    experience. This tropical paradise is made up of
                    approximately 1,200 islands and each beach is more beautiful
                    than the last. You'll likely stick to the island where your
                    resort is, but you can expect pearlescent sands, towering
                    palm trees, incredibly blue waters and surreal sunsets
                    wherever you choose to lay down your towel.
                </p>
            </div>
        </>
    )
}
export default Discovertextsea
