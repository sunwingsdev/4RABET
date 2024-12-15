import { Outlet } from "react-router";
import TopBarMenu from "../components/home/menu/TopBarMenu";
import LeftSitBarMenu from "../components/home/menu/LeftSitBarMenu";
import RightSitBarMenu from "../components/home/menu/RightSitBarMenu";

const MainLayout = () => {
  return (
    <div className="bg-[#152234] h-screen overflow-hidden">
      {/* টপবার */}
      <div className="fixed top-0 z-50 w-full">
        <TopBarMenu />
      </div>

      {/* লেফট সাইডবার */}
      <div className="fixed left-0 z-10">
        <div className="w-60 h-screen bg-[#0d1827] border-r border-[#293b55]">
          <LeftSitBarMenu />
        </div>
      </div>

      {/* আউটলেট (মেইন কন্টেন্ট) */}
      <div className="ml-60 mr-16 pt-20 h-screen overflow-y-auto bg-red-800">
        <Outlet />
      </div>

      {/* রাইট সাইডবার */}
      <div className="fixed right-0 z-50">
        <div className="w-16 h-screen bg-[#182539] border-l border-[#293b55]">
          <RightSitBarMenu />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
