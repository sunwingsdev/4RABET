import { Swiper, SwiperSlide } from "swiper/react";
import popularImg from "../../assets/images/icons/popular.png";
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
import coinStrikeImg from "../../assets/popular/12.jpg";
import beachLife from "../../assets/popular/13.jpg";
import sugarRush from "../../assets/popular/14.jpg";
import cricketCrash from "../../assets/popular/15.jpg";
import sweetBonanza from "../../assets/popular/16.jpg";
import chickyRun from "../../assets/popular/17.jpg";
import balloon from "../../assets/popular/18.jpg";
import headsTails from "../../assets/popular/19.jpg";
import chance from "../../assets/popular/20.jpg";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Navigation } from "swiper/modules";
import Games from "../shared/Games";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef } from "react";

const PopularCategory = () => {
  const swiperRef = useRef(null); // Create a reference for Swiper instance

  useEffect(() => {
    // Ensure navigation links are ready
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  const popularGames = [
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
    { id: 12, img: coinStrikeImg, title: "Coin Strike" },
    { id: 13, img: beachLife, title: "Beach Life" },
    { id: 14, img: sugarRush, title: "Sugar Rush" },
    { id: 15, img: cricketCrash, title: "Cricket Crash" },
    { id: 16, img: sweetBonanza, title: "Sweet Bonanza" },
    { id: 17, img: chickyRun, title: "Chicky Run" },
    { id: 18, img: balloon, title: "Balloon" },
    { id: 19, img: headsTails, title: "Heads Tails" },
    { id: 20, img: chance, title: "Chance" },
  ];

  return (
    <div className="w-full lg:pr-16 2xl:pr-0 bg-gradient-to-b from-[#0e192a] to-[#091222]">
      {/* Header Section */}
      <div className="flex flex-row items-center justify-between py-4">
        <div className="flex flex-row items-center gap-1">
          <img
            src={popularImg}
            className="w-10 h-10"
            alt="popular category image"
          />
          <h1 className="text-lg font-bold text-white">Popular</h1>
        </div>
        <div className="flex flex-row items-center gap-2 2xl:pr-16">
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
          grid={{
            rows: 2,
            fill: "col",
          }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          modules={[Grid, Navigation]}
          className="mySwiper"
        >
          {/* Map over popularGames to render Games component */}
          {popularGames.map((game) => (
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

export default PopularCategory;
