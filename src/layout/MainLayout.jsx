import { Outlet } from "react-router";
import TopBarMenu from "../components/home/menu/TopBarMenu";
import LeftSitBarMenu from "../components/home/menu/LeftSitBarMenu";
import RightSitBarMenu from "../components/home/menu/RightSitBarMenu";

const MainLayout = () => {
  return (
    <div className="bg-[#152234]">
      {/* <Menu /> */}
      <div className="fixed top-0 z-50 w-full">
        <TopBarMenu />
      </div>
      <div className="flex">
        <div className="fixed left-0 z-10">
          <div className="w-60 h-screen overflow-y-auto scrollbar-hide bg-[#0d1827] border-r border-[#293b55]">
            <LeftSitBarMenu />
          </div>
        </div>
        <div className="pt-20 pr-20 pl-64">
          <Outlet />
        </div>
        <div className="fixed right-0 z-10">
          <div className="w-16 h-screen overflow-y-auto scrollbar-hide bg-[#182539] border-l border-[#293b55]">
            <RightSitBarMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
