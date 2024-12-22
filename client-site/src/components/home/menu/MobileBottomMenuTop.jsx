import { Link } from "react-router";

const MobileBottomMenuTop = ({ img, title, link }) => {
  return (
    <div>
      <Link to={link}>
        <div className="text-center w-full text-xs font-bold text-white py-2 px-3 rounded-md duration-300">
          <img className="size-6 m-auto" src={img} alt="" />
          <p className="mt-1 whitespace-nowrap text-center">{title}</p>
        </div>
      </Link>
    </div>
  );
};

export default MobileBottomMenuTop;
