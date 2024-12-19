import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import fastGamesImg from "../../assets/menu/9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import Games from "../shared/Games";
import { gamesData } from "../shared/GamesData";

const FastGames = () => {
  const swiperRef8 = useRef(null);
  useEffect(() => {
    // Ensure navigation links are ready
    if (swiperRef8.current && swiperRef8.current.swiper) {
      swiperRef8.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="w-full lg:pr-16 2xl:pr-0 bg-gradient-to-b from-[#0e192a] to-[#091222]">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between  py-4">
        <div className="flex flex-row items-center gap-1 2xl:pr-16">
          <img
            src={fastGamesImg}
            className="w-10 h-10"
            alt="new game category image"
          />
          <h1 className="text-lg font-bold text-white">Fast Games</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="px-4 py-1 bg-[#152436] rounded-md">
            <p className="text-sm text-slate-400">234 Games</p>
          </div>
          {/* Custom Swiper Navigation */}
          <div className="flex flex-row items-center gap-2">
            <div className="fast-prev bg-[#152436] w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowBack className="text-slate-400 text-xl" />
            </div>
            <div className="fast-next bg-[#152436] w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowForward className="text-slate-400 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Component */}
      <div>
        <Swiper
          ref={swiperRef8} // Attach ref to Swiper
          breakpoints={{
            640: {
              slidesPerView: 4, // 640px স্ক্রিনে 3 স্লাইড দেখাবে
              spaceBetween: 12,
            },
            1280: {
              slidesPerView: 5, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
              spaceBetween: 20,
            },
            1536: {
              slidesPerView: 7, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
            },
            1920: {
              slidesPerView: 9, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
            },
          }}
          slidesPerView={2.5}
          spaceBetween={8}
          navigation={{
            prevEl: ".fast-prev",
            nextEl: ".fast-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* Map over popularGames to render Games component */}
          {gamesData.map((game) => (
            <SwiperSlide key={game.id}>
              <div className="text-white rounded-md text-center">
                <Games img={game.img} title={game.title} /> {/* Pass props */}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FastGames;
