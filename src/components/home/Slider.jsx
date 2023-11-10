import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import bannerImg1 from "../../assets/slider/01.jpg";
import bannerImg2 from "../../assets/slider/02.jpg";
import bannerImg3 from "../../assets/slider/03.png";
import bannerImg4 from "../../assets/slider/04.jpg";
import bannerImg5 from "../../assets/slider/05.png";
import bannerImg6 from "../../assets/slider/06.png";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Slider = () => {
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
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg1})` }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg2})` }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg3})` }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg4})` }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg5})` }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: `url(${bannerImg6})` }}>
                        <div className="hero-overlay bg-opacity-0"></div>
                        <div className="hero-content text-center text-neutral-content">

                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Slider;