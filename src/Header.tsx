import './Header.css'
type Props = {}
const Header = (props: Props) => {
    return (
        <>
            <div className="head">
                <div className="navbar">
                    <div className="logo">travelaja</div>
                    <div className="menu">
                        <p className="menu-1">Home</p>
                        <p className="menu-2">Discover</p>
                        <p className="menu-3">Services</p>
                        <p className="menu-4">News</p>
                        <p className="menu-5">About Us</p>
                        <p className="menu-6">Contact</p>
                    </div>
                </div>
                <div className="title">Explore the world with a smile</div>
                <p className="text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Ipsum, repellat. Quidem provident vitae veritatis animi
                    deserunt voluptatem, rerum officia ad ullam natus enim,
                    pariatur excepturi laudantium praesentium deleniti
                    exercitationem itaque.
                </p>
            </div>
        </>
    )
}
export default Header
