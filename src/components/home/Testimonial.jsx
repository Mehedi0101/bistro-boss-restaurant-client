import HeadingSection from "../shared/HeadingSection";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css';

const Testimonial = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
            .then(res => setReviews(res.data))
    }, [])

    return (
        <div className="max-w-screen-2xl mx-auto md:mt-20 mt-10 md:px-10 px-5">
            <HeadingSection subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"}></HeadingSection>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper mt-10"
            >
                {
                    reviews.map(review => <SwiperSlide key={review._id} className="flex flex-col items-center text-center">
                        <div>
                            <Rating className="mx-auto"
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                        </div>
                        <div  className="my-10">
                            <FaQuoteLeft className="mx-auto text-5xl" />
                        </div>
                        <div className="px-10 md:px-20 text-[#444444] mb-2">
                            {review.details}
                        </div>
                        <div className="text-[#CD9003] text-3xl font-medium">
                            {review.name}
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonial;