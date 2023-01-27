import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
type Props = {}
const Sliderdiscover = (props: Props) => {
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
                        src="https://tourlib.net/statti_tourism/images/kurorty-karpat-bukovel.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://extremstyle.ua/storage/user_44/Screenshot_83.png"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://tengritravel.kz/userdata/news/2020/news_424046/thumb_m/photo_346492.jpeg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://ua.igotoworld.com/frontend/webcontent/websites/1/images/carousel/17571_800x600_7224_smal.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://businessvisit.com.ua/wp-content/uploads/2019/09/mayrhofen-avstriya.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="http://boden-see.org/wp-content/uploads/2015/11/cross-country-skiing-624246_1920.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://www.mandria.ua/wp-content/uploads/2018/10/bukovel.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://businessvisit.com.ua/wp-content/uploads/2015/08/ski-active.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://files.tpg.ua/pages/%D0%93%D0%BE%D1%80%D0%BD%D0%BE%D0%BB%D1%8B%D0%B6%D0%BD%D1%8B%D0%B5%20%D0%BA%D1%83%D1%80%D0%BE%D1%80%D1%82%D1%8B%20%D0%90%D0%B2%D1%81%D1%82%D1%80%D0%B8%D0%B8/29.jpg"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Sliderdiscover
