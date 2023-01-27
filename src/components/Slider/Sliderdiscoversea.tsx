import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
type Props = {}
const Sliderdiscoversea = (props: Props) => {
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
                        src="https://www.topkurortov.com/wp-content/uploads/2015/08/Ibica.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://tripmydream.cc/travelhub/blog/img/54/gallery_1431506067_591338184_fit.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://turizm.world/wp-content/uploads/2021/12/plyaj-sarigerme.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://cdn.getyourguide.com/img/tour/5af89c53bf1b4.jpeg/146.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://www.i-susanin.com/files/images/blog/c9e/c9eb8fcf84f9ec1da888.JPG.webp"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://extremesport-bg.com/wp-content/uploads/2022/08/parasailing-wongamat-pattaya.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://static2.ideal.es/www/multimedia/201708/06/media/cortadas/114962956-kwNI--624x416@Ideal.jpg"
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://media.istockphoto.com/id/532028422/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%B5%D1%81%D1%87%D0%B0%D0%BD%D1%8B%D0%B9-%D0%B7%D0%B0%D0%BC%D0%BE%D0%BA-%D0%BD%D0%B0-%D0%BF%D0%BB%D1%8F%D0%B6%D0%B5.jpg?s=612x612&w=0&k=20&c=z3SgeWZGNOZXjSCOjeP5U6YTFCZbjtYwD4qL2GL1vOQ="
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide className="slid">
                    <img
                        src="https://vjoy.cc/wp-content/uploads/2019/11/semya-na-more.jpg"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
export default Sliderdiscoversea
