import Sliderdiscoversnow from '../Slider/Sliderdiscoversnow'
import './Discovertext.css'
type Props = {}
const Discovertext = (props: Props) => {
    return (
        <>
            <div className="first">
                <div className="first-slider">
                    <Sliderdiscoversnow />
                </div>
                <div className="first-text">
                    <p className="title-text">Breckenridge Ski Resort </p>
                    <p className="text-1">
                        Known for: Breckenridge is one of the most popular ski
                        resorts in Colorado with a world-renown ski town
                    </p>
                    <p className="text-1">
                        Highlights: Breckenridge has tons of activities besides
                        skiing such as dog-sledding and snowmobiling Experience
                        the unforgettable nightlife in this vibrant
                    </p>
                    <p className="title-text">Whistler Blackcomb</p>
                    <p className="text-1">
                        Known for: Largest ski resort in North America with the
                        ultimate ski village
                    </p>
                    <p className="text-1">
                        Highlights: Massive variety of incredible terrain Easy
                        to access from Vancouver Full of amenities and après ski
                        to keep everyone well entertained
                    </p>
                    <p className="title-text"> Vail Ski Resort</p>
                    <p className="text-1">
                        Known for: Vail is world-famous for its extensive
                        terrain, legendary back bowls and top notch guest
                        experience
                    </p>
                    <p className="text-1">
                        Highlights: Vail boasts the largest ski area in Colorado
                        giving skiers generous terrain choice Vail is charming
                        ski town offers endless dining and shopping options
                    </p>
                </div>
            </div>
            <div className="text-first">
                <p className="title-text">Aspen Snowmass Ski Resort</p>
                <p className="text-1">
                    Known for: Aspen has four distinctive ski areas on one lift
                    ticket clustered around a famous Colorado ski town
                </p>
                <p className="text-1">
                    Highlights: Upscale and lively Colorado town with tons of
                    food and shopping Access to four ski areas on one lift
                    ticket
                </p>
                <p className="title-text">Alta</p>
                <p className="text-1">
                    Known for: Old school skiers-only mountain with access to
                    Snowbird on the AltaBird pass
                </p>
                <p className="text-1">
                    Highlights: World-class extreme terrain Compact base area is
                    easy to navigate
                </p>
            </div>
        </>
    )
}
export default Discovertext
