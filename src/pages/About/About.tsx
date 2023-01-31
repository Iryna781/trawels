import { Typography } from '@mui/material'
import HeaderAll from '../../container/HeaderAll/HeaderAll'
import './About.css'

type Props = {}
const About = (props: Props) => {
    return (
        <>
            <HeaderAll />
            <div className="back4">ABOUT US</div>
            <Typography variant="h5" align="center">
                Why Choose Us?
            </Typography>
            <p className="about-text">
                These popular destinations have a lot to offer
            </p>
            <div className="why">
                <div>
                    <div className="why-first"></div>
                    <p>Best price guarante</p>
                </div>
                <div>
                    <div className="why-second"></div>
                    <p>Easy Booking</p>
                </div>
                <div>
                    <div className="why-third"></div>
                    <p>Customer Service 24h</p>
                </div>
            </div>
            <div className="why-content">
                <div className="left-why">
                    <p className="why-title">About Time To Travel</p>
                    <p>
                        We are a Time To Travel team. We have been successfully
                        creating trips for more than 20 years! With us you can
                        find a trip for every taste from snowy peaks to hot
                        beaches! Any continent and country will be available
                        with us. Join us and gain unforgettable impressions and
                        emotions along with Time To Travel!
                    </p>
                </div>
                <div>
                    <img
                        src="https://s.grenka.ua/promo/review/2018/06.2018/chemodany/easy-jet-tricks-03.png"
                        alt=""
                    />
                </div>
            </div>
            <Typography variant="h5" align="center">
                Our Teams
            </Typography>
            <div className="foto">
                <div className="manager">
                    <img
                        src="https://st2.depositphotos.com/3994509/7223/i/600/depositphotos_72239429-stock-photo-business-coach-conducts-training.jpg"
                        alt=""
                    />
                    <p>Manager: Sofia</p>
                </div>
                <div className="manager">
                    <img
                        src="https://st.depositphotos.com/1011382/2839/i/600/depositphotos_28393887-stock-photo-self-assured-businesman.jpg"
                        alt=""
                    />
                    <p>Manager: George</p>
                </div>
                <div className="manager">
                    <img
                        src="https://img.freepik.com/premium-photo/girl-manager-in-workplace-writes-in-a-notebook-talking-on-the-phone-while-sitting_8119-1324.jpg"
                        alt=""
                    />
                    <p>Manager: Penelopa</p>
                </div>
            </div>
        </>
    )
}
export default About
