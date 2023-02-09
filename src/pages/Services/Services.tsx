import { Typography } from '@mui/material'
import HeaderAll from '../../container/HeaderAll/HeaderAll'
import './Services.css'
import ServicesButtonItem from './ServicesButtonItem'
type Props = {}
const Services = (props: Props) => {
    return (
        <>
            <HeaderAll />
            <div className="back2">SERVICE</div>
            <p>BENEFITS</p>
            <Typography variant="h5" align="center">
                OUR SERVICE
            </Typography>
            <div className="btn-service">
                <ServicesButtonItem to="/snow">
                    winter vacation
                </ServicesButtonItem>
                <ServicesButtonItem to="/sea">sea vacation</ServicesButtonItem>
                <ServicesButtonItem to="/city">city rest</ServicesButtonItem>
            </div>
            <div className="img1">
                <div className="climbing">
                    <img src="/images/climbing.jpg" alt="" />
                    <h3>CLIMBING</h3>
                </div>
                <div className="ski">
                    <img src="/images/ski.jpg" alt="" />
                    <h3>SKI</h3>
                </div>
            </div>
            <div className="img2">
                <div className="diving">
                    <img src="/images/diving.jpg" alt="" />
                    <h3>DIVING</h3>
                </div>
                <div className="beach">
                    <img src="/images/beach.jpeg" alt="" />
                    <h3>ON THE BEACH</h3>
                </div>
            </div>
            <div className="img3">
                <div className="tours">
                    <img src="/images/tours.jpg" alt="" />
                    <h3>TOURS</h3>
                </div>
                <div className="leisure">
                    <img src="/images/leisure.jpg" alt="" />
                    <h3>LEISURE</h3>
                </div>
            </div>
        </>
    )
}
export default Services
