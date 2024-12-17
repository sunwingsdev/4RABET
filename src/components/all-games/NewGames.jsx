import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import newGamesImg from "../../assets/menu/4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect, useRef } from "react";
import Games from "../shared/Games";
import aviatorImg from "../../assets/images/aviator.jpeg";
import superAceImg from "../../assets/popular/2.jpg";
import funkyTimeImg from "../../assets/popular/3.jpg";
import fortuneGemsImg from "../../assets/popular/4.jpg";
import superBurningWinsImg from "../../assets/popular/5.jpg";
import dragonpearlsImg from "../../assets/popular/6.jpg";
import dreamCatcherImg from "../../assets/popular/7.jpg";
import coinVolcanoImg from "../../assets/popular/8.jpg";
import luckyNekoImg from "../../assets/popular/9.jpg";
import bonusManiaImg from "../../assets/popular/10.jpg";
import sunOfEgyptImg from "../../assets/popular/11.jpg";

const NewGames = () => {
  const swiperRef2 = useRef(null);
  useEffect(() => {
    // Ensure navigation links are ready
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.navigation.update();
    }
  }, []);
  const newGames = [
    { id: 1, img: aviatorImg, title: "Aviator" },
    { id: 2, img: superAceImg, title: "Super Ace" },
    { id: 3, img: funkyTimeImg, title: "Funky Time" },
    { id: 4, img: fortuneGemsImg, title: "Fortune Gems" },
    { id: 5, img: superBurningWinsImg, title: "Super Burning Wins" },
    { id: 6, img: dragonpearlsImg, title: "Dragon Pearls" },
    { id: 7, img: dreamCatcherImg, title: "Dream Catcher" },
    { id: 8, img: coinVolcanoImg, title: "Coin Volcano" },
    { id: 9, img: luckyNekoImg, title: "Lucky Neko" },
    { id: 10, img: bonusManiaImg, title: "Bonus Mania" },
    { id: 11, img: sunOfEgyptImg, title: "Sun Of Egypt" },
    { id: 12, img: sunOfEgyptImg, title: "Sun Of Egypt" },
    { id: 13, img: sunOfEgyptImg, title: "Sun Of Egypt" },
    { id: 14, img: sunOfEgyptImg, title: "Sun Of Egypt" },
    { id: 15, img: sunOfEgyptImg, title: "Sun Of Egypt" },
    { id: 16, img: sunOfEgyptImg, title: "Sun Of Egypt" },
    { id: 17, img: sunOfEgyptImg, title: "Sun Of Egypt" },
    { id: 18, img: sunOfEgyptImg, title: "Sun Of Egypt" },
    { id: 19, img: sunOfEgyptImg, title: "Sun Of Egypt" },
    { id: 20, img: sunOfEgyptImg, title: "Sun Of Egypt" },
  ];
  return (
    <div className="w-[97.5rem] bg-gradient-to-b from-[#0e192a] to-[#091222]">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between  py-4">
        <div className="flex flex-row items-center gap-1">
          <img
            src={newGamesImg}
            className="w-10 h-10"
            alt="new game category image"
          />
          <h1 className="text-lg font-bold text-white">New Games</h1>
        </div>
        <div className="flex flex-row items-center gap-2">
          <div className="px-4 py-1 bg-[#152436] rounded-md">
            <p className="text-sm text-slate-400">204 Games</p>
          </div>
          {/* Custom Swiper Navigation */}
          <div className="flex flex-row items-center gap-2">
            <div className="newGame-prev bg-[#152436] w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowBack className="text-slate-400 text-xl" />
            </div>
            <div className="newGame-next bg-[#152436] w-8 h-8 rounded-md flex items-center justify-center cursor-pointer">
              <IoIosArrowForward className="text-slate-400 text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Swiper Component */}
      <div>
        <Swiper
          ref={swiperRef2} // Attach ref to Swiper
          slidesPerView={7}
          spaceBetween={20}
          navigation={{
            prevEl: ".newGame-prev",
            nextEl: ".newGame-next",
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          {/* Map over popularGames to render Games component */}
          {newGames.map((game) => (
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

export default NewGames;
