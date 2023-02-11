import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import './NewsSlider.css'

type Props = {}
const NewsSlider = (props: Props) => {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src="/images/frame1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/frame2.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/frame3.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/frame4.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/frame5.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/frame6.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/frame7.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/frame8.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/frame9.jpg" alt="" />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default NewsSlider
