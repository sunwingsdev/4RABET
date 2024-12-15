import { Swiper, SwiperSlide } from "swiper/react";
import popularImg from "../../assets/images/icons/popular.png";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import Games from "../shared/Games";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef } from "react";

const PopularCategory = () => {
  const swiperRef = useRef(null); // Create a reference for Swiper instance

  // Array to render Games component 20 times
  const gamesArray = Array.from({ length: 20 }, (_, i) => i + 1);

  useEffect(() => {
    // Ensure navigation links are ready
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="w-[97.5rem]">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-row gap-2 mb-8">
          <img
            src={popularImg}
            className="w-6 h-6"
            alt="popular category image"
          />
          <h1 className="text-lg font-bold text-white">Popular</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="px-4 py-1 bg-[#152436] rounded-md">
            <p className="text-sm text-slate-400">114 Games</p>
          </div>
          {/* Custom Swiper Navigation */}
          <div className="flex flex-row items-center gap-2">
            <div className="custom-prev bg-[#152436] w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowBack className="text-slate-400 text-xl" />
            </div>
            <div className="custom-next bg-[#152436] w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowForward className="text-slate-400 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Component */}
      <div>
        <Swiper
          ref={swiperRef} // Attach ref to Swiper
          slidesPerView={7}
          grid={{
            rows: 2,
            fill: "col",
          }}
          spaceBetween={20}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          {/* Map over gamesArray to render Games component */}
          {gamesArray.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="text-white rounded-md text-center">
                <Games /> {/* Render the Games component */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PopularCategory;
