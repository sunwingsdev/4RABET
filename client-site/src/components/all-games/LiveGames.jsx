import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import liveGamesImg from "../../assets/menu/5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import Games from "../shared/Games";
import { gamesData } from "../shared/GamesData";

const LiveGames = () => {
  const swiperRef3 = useRef(null);
  useEffect(() => {
    // Ensure navigation links are ready
    if (swiperRef3.current && swiperRef3.current.swiper) {
      swiperRef3.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="w-full lg:pr-16 2xl:pr-0 bg-gradient-to-b from-[#0e192a] to-[#091222]">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between  py-4">
        <div className="flex flex-row items-center gap-1">
          <img
            src={liveGamesImg}
            className="w-10 h-10"
            alt="new game category image"
          />
          <h1 className="text-lg font-bold text-white">Live Games</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="px-4 py-1 bg-[#152436] rounded-md">
            <p className="text-sm text-slate-400">98 Games</p>
          </div>
          {/* Custom Swiper Navigation */}
          <div className="flex flex-row items-center gap-2">
            <div className="liveGame-prev bg-[#152436] w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowBack className="text-slate-400 text-xl" />
            </div>
            <div className="liveGame-next bg-[#152436] w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowForward className="text-slate-400 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Component */}
      <div>
        <Swiper
          ref={swiperRef3} // Attach ref to Swiper
          breakpoints={{
            320: {
              slidesPerView: 2, // 320px বা ছোট স্ক্রিনে 2 স্লাইড দেখাবে
            },
            640: {
              slidesPerView: 3, // 640px স্ক্রিনে 3 স্লাইড দেখাবে
            },
            1024: {
              slidesPerView: 4, // 1024px স্ক্রিনে 5 স্লাইড দেখাবে
            },
            1280: {
              slidesPerView: 5, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
            },
            1536: {
              slidesPerView: 7, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
            },
            1920: {
              slidesPerView: 9, // 1280px স্ক্রিনে 7 স্লাইড দেখাবে
            },
          }}
          spaceBetween={20}
          navigation={{
            prevEl: ".liveGame-prev",
            nextEl: ".liveGame-next",
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

export default LiveGames;
