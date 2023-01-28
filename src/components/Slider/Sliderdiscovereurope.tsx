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
                        src="https://e-finland.ru/media/images/stories/images/stories/img_9/parvoo_big.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://e-finland.ru/media/images/stories/images/stories/img_9/parikalla_big.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://media-1obl-ru.storage.yandexcloud.net/resize_cache/817886/e71ad92e8a086fd0ad26a63a20c0e003/iblock/c3a/c3a75250909f561217c3fbb2c6933717.jpg"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Sliderdiscovereurope
