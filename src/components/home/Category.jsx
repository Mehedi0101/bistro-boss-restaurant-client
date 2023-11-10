import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import category1 from "../../assets/category/slide1.jpg";
import category2 from "../../assets/category/slide2.jpg";
import category3 from "../../assets/category/slide3.jpg";
import category4 from "../../assets/category/slide4.jpg";
import HeadingSection from '../shared/HeadingSection';


const Category = () => {
    return (
        <div className="max-w-screen-2xl mx-auto md:mt-20 mt-10 px-5 md:px-10">
            <HeadingSection subHeading={"From 11:00am to 10:00pm"} heading={"ORDER ONLINE"}></HeadingSection>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mt-10"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img className='pb-10 w-full' src={category1} alt="" />
                        <p className='absolute bottom-10 lg:bottom-20 w-full text-center cinzel text-xs md:text-2xl lg:text-3xl text-white'>SALAD</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img className='pb-10 w-full' src={category2} alt="" />
                        <p className='absolute bottom-10 lg:bottom-20 w-full text-center cinzel text-xs md:text-2xl lg:text-3xl text-white'>PIZZAS</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img className='pb-10 w-full' src={category3} alt="" />
                        <p className='absolute bottom-10 lg:bottom-20 w-full text-center cinzel text-xs md:text-2xl lg:text-3xl text-white'>SOUPS</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img className='pb-10 w-full' src={category4} alt="" />
                        <p className='absolute bottom-10 lg:bottom-20 w-full text-center cinzel text-xs md:text-2xl lg:text-3xl text-white'>DESERTS</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='relative'>
                        <img className='pb-10 w-full' src={category1} alt="" />
                        <p className='absolute bottom-10 lg:bottom-20 w-full text-center cinzel text-xs md:text-2xl lg:text-3xl text-white'>SALAD</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;