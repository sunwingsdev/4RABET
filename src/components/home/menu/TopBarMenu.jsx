import { Link } from "react-router";
import logo from "../../../assets/logo.svg";
import flag from "../../../assets/EN.svg";
import { topMenu } from "../../MenuItems";
import { useState } from "react";

const TopBarMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="flex justify-between items-center gap-10 bg-[#18263AE6] border-b border-[#293b55]">
      <div className="flex items-center gap-16">
        <div className="pl-3 flex items-center gap-2">
          <Link to={"/"}>
            <img className="w-44" src={logo} alt="" />
          </Link>
          <Link to={"/"}>
            <img
              className="w-7 rounded-md object-cover"
              src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex gap-6 text-white font-bold text-base">
          {topMenu.map((menu) => (
            <Link key={menu.id} to={menu.link}>
              <p className="py-4 border-b-2 hover:text-[#1976d2] border-[#18263AE6] hover:border-[#1976d2] duration-300">
                {menu.label}
              </p>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 text-white pl-6 border-l border-[#293b55]">
          <Link onClick={openModal}>
            <p className="text-sm font-bold px-6 py-2 rounded-full bg-[#2B81D6] hover:bg-[#4ba2f8] duration-300">
              SIGN IN
            </p>
          </Link>
          <Link>
            <p className="text-sm font-bold px-6 py-2 rounded-full bg-[#F44336] hover:bg-[#cf4137] duration-300">
              REGISTRATION
            </p>
          </Link>
        </div>

        <div className="text-white border-l border-[#293b55]">
          <Link>
            <img
              className="p-4 px-5 w-16 h-14 rounded-full object-cover"
              src={flag}
              alt=""
            />
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="text-white bg-[#152234] w-[900px] h-[700px] rounded-lg shadow-lg flex overflow-hidden">
            {/* Left Section - Image */}
            <div className="">
              <img
                className="w-full h-full object-cover"
                src="https://ifrd.4rabetsite25.com/img/registration-modal-HI.webp"
                alt=""
              />
              {/* Replace with your image URL */}
            </div>

            {/* Right Section - Sign In Form */}
            <div className="w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                >
                  Sign In
                </button>
              </form>
              <button
                onClick={closeModal}
                className="mt-4 text-blue-500 hover:underline text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBarMenu;
