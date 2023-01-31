import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
type Props = {}
const Sliderdiscovereurope = (props: Props) => {
    return (
        <>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className="slid">
                    <img
                        src="https://turizm.world/wp-content/uploads/2018/07/dostoprimechatelnosti-francii.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://touristam.com/wp-content/uploads/2019/01/norvegiya-7.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://www.tripzaza.com/ru/destinations/wp-content/uploads/2018/02/18-The_Northern_lights-e1518242269960.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://www.tripzaza.com/ru/destinations/wp-content/uploads/2017/04/Italy-9-The-Grand-Canal-in-Venice-e1492908547833.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://turvopros.com/wp-content/uploads/2016/04/Batlo.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://34travel.me/media/posts/5817092c50c73-1.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://tsikaviy-svit.com/upload/images/%D0%A4%D1%96%D0%BD%D0%BB%D1%8F%D0%BD%D0%B4%D1%96%D1%8F1.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://velvetescape.com/wp-content/uploads/2012/03/IMG_2775-640x480.jpeg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://agrolait.com.ua/wp-content/uploads/populyarnie-osennie-napravleniya-2F88B5A.jpg"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Sliderdiscovereurope
