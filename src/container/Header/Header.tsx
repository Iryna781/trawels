import Menu from '../../components/Menu/Menu'
import './Header.css'
// import background from 'assets/See.png'

type Props = {}
const Header = (props: Props) => {
    return (
        <div
            className="head"
            // style={{
            //     backgroundImage: `url(${background})`,
            // }}
        >
            <Menu />
            <h3 className="title">Explore the world with a smile</h3>
            <p className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum,
                repellat. Quidem provident vitae veritatis animi deserunt
                voluptatem, rerum officia ad ullam natus enim, pariatur
                excepturi laudantium praesentium deleniti exercitationem itaque.
            </p>
        </div>
    )
}
export default Header
