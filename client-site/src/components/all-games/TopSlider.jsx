import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";

const TopSlider = () => {
  return (
    <div className="w-dvw max-w-[100%] overflow-hidden rounded-md relative mx-auto">
      <Swiper
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <img className="h-auto w-full" src={image1} alt="Slide 1" />
        </SwiperSlide>
        {/* Slide 2 */}
        <SwiperSlide>
          <img className="h-auto w-full" src={image2} alt="Slide 2" />
        </SwiperSlide>
        {/* Slide 3 */}
        <SwiperSlide>
          <img className="h-auto w-full" src={image3} alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopSlider;
