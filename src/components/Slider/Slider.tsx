import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'
import s from '../../assets/s.jpg'
import ss from '../../assets/ss.jpg'
import sss from '../../assets/sss.jpg'
import t from '../../assets/t.jpg'
import tt from '../../assets/tt.jpg'
import ttt from '../../assets/ttt.jpg'
import b from '../../assets/b.jpg'
import bb from '../../assets/bb.jpg'
import bbb from '../../assets/bbb.jpg'
import { Typography } from '@mui/material'
type Props = {}
const Slider = (props: Props) => {
    return (
        <>
            <Typography variant="h4" align="center" sx={{ marginTop: '50px' }}>
                The Most Popular Places For Vacation
            </Typography>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                style={{ margin: `50px auto`, width: 1170, height: 300 }}
            >
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${s})`,
                        backgroundPosition: `center`,
                        borderRadius: `10px`,
                    }}
                ></SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${b})`,
                        backgroundPosition: `center`,
                        borderRadius: `10px`,
                        textAlign: `right`,
                    }}
                ></SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${t})`,
                        backgroundPosition: `center`,
                        borderRadius: `10px`,
                    }}
                ></SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${ss})`,
                        backgroundPosition: `center`,
                        borderRadius: `10px`,
                    }}
                ></SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${bb})`,
                        backgroundPosition: `center`,
                        borderRadius: `10px`,
                    }}
                ></SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${tt})`,
                        backgroundPosition: `center`,
                        borderRadius: `10px`,
                    }}
                ></SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${sss})`,
                        backgroundPosition: `center`,
                        borderRadius: `10px`,
                    }}
                ></SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${bbb})`,
                        backgroundPosition: `center`,
                        borderRadius: `10px`,
                    }}
                ></SwiperSlide>
                <SwiperSlide
                    style={{
                        backgroundImage: `url(${ttt})`,
                        backgroundPosition: `center`,
                        borderRadius: `10px`,
                    }}
                ></SwiperSlide>
            </Swiper>
        </>
    )
}
export default Slider
