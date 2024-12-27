import { leftSideMenuTop } from "../MenuItems";
import MobileBottomMenuTop from "../home/menu/MobileBottomMenuTop";

const ScrollContent = () => {
  return (
    <div>
      <div className="flex justify-center overflow-x-auto space-x-8 md:w-screen h-20 mx-auto">
        {leftSideMenuTop?.map((menuBottom) => (
          <MobileBottomMenuTop
            key={menuBottom.id}
            title={menuBottom.label}
            img={menuBottom.Icon}
            link={menuBottom.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollContent;
