import './Slider.css'
import first from '../../assets/s.jpg'
import second from '../../assets/ss.jpg'
import third from '../../assets/sss.jpg'
type Props = {}
const Slider = (props: Props) => {
    return (
        <>
            <div className="slider">
                <div
                    className="minislider"
                    style={{ backgroundImage: `url(${first})` }}
                >
                    Slider 1
                </div>
                <div
                    className="minislider"
                    style={{ backgroundImage: `url(${second})` }}
                >
                    Slider 2
                </div>
                <div
                    className="minislider"
                    style={{ backgroundImage: `url(${third})` }}
                >
                    Slider 3
                </div>
            </div>
        </>
    )
}
export default Slider
