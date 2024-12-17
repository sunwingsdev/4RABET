import { Link } from "react-router";
import logo from "../../../assets/logo.svg";
import flag from "../../../assets/EN.svg";
import { topMenu } from "../../MenuItems";
import { useState } from "react";
import { FaTimes } from "react-icons/fa"; // Close Icon Import
import { FcGoogle } from "react-icons/fc"; // Google Icon Import
import { MdOutlineMailOutline, MdPhoneAndroid } from "react-icons/md";

const TopBarMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("email");

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

      {/* Sign In modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="text-white bg-[#152234] w-[900px] h-[700px] rounded-lg shadow-lg flex overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-[#59647a] text-2xl hover:text-blue-600 duration-300"
            >
              <FaTimes />
            </button>

            {/* Left Section - Image */}
            <div className="w-1/2">
              <img
                className="w-full h-full object-cover"
                src="https://ifrd.4rabetsite25.com/img/registration-modal-HI.webp"
                alt=""
              />
            </div>

            {/* Right Section - Tabs and Sign In Form */}
            <div className="w-1/2 p-8 flex flex-col">
              <h2 className="text-2xl font-semibold mb-6 text-center text-white">
                LOGIN
              </h2>

              {/* Tabs */}
              <div className="flex gap-3 mb-4">
                <button
                  className={`flex justify-center items-center gap-2 w-1/2 text-center py-2 font-semibold bg-[#1c2d44] rounded-lg ${
                    activeTab === "email"
                      ? "bg-blue-600 text-white rounded-lg"
                      : "text-[#59647a]"
                  }`}
                  onClick={() => setActiveTab("email")}
                >
                  <MdOutlineMailOutline size={28} />
                  Email
                </button>
                <button
                  className={`flex justify-center items-center gap-2 w-1/2 text-center py-2 font-semibold bg-[#1c2d44] rounded-lg ${
                    activeTab === "phone"
                      ? "bg-blue-600 text-white rounded-lg"
                      : "text-[#59647a]"
                  }`}
                  onClick={() => setActiveTab("phone")}
                >
                  <MdPhoneAndroid size={28} />
                  Phone
                </button>
              </div>

              {/* Form Content */}
              {activeTab === "email" && (
                <form className="flex flex-col">
                  <input
                    type="email"
                    className="w-full mb-4 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none focus:ring-0"
                    placeholder="Email"
                  />
                  <input
                    type="password"
                    className="w-full mb-2 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none focus:ring-0"
                    placeholder="Password"
                  />
                  <div className="text-center mb-40">
                    <p className="text-sm font-semibold text-[#5c7391]">
                      Don’t remember?{" "}
                      <Link className="text-white text-base font-medium underline">
                        Recover a password
                      </Link>
                    </p>
                  </div>
                  <div className="text-center mb-2">
                    <p className="text-sm font-semibold text-[#5c7391]">
                      Don{"'"}t have an account?
                    </p>
                    <Link>
                      <p className="text-sm font-semibold underline">Sign in</p>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-sm font-bold bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 duration-300"
                  >
                    SIGN IN
                  </button>
                </form>
              )}

              {activeTab === "phone" && (
                <form className="flex flex-col">
                  <input
                    type="number"
                    className="w-full mb-4 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none focus:ring-0"
                    placeholder="Phone Number"
                  />
                  <input
                    type="password"
                    className="w-full mb-6 px-5 py-3 bg-[#1c2d44] rounded-lg focus:outline-none focus:ring-0"
                    placeholder="Password"
                  />
                  <div className="text-center mb-40">
                    <p className="text-sm font-semibold text-[#5c7391]">
                      Don’t remember?{" "}
                      <Link className="text-white text-base font-medium underline">
                        Recover a password
                      </Link>
                    </p>
                  </div>
                  <div className="text-center mb-2">
                    <p className="text-sm font-semibold text-[#5c7391]">
                      Don{"'"}t have an account?
                    </p>
                    <Link>
                      <p className="text-sm font-semibold underline">Sign in</p>
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full text-sm font-bold bg-blue-500 text-white py-3 rounded-2xl hover:bg-blue-600 duration-300"
                  >
                    SIGN IN
                  </button>
                </form>
              )}

              {/* or */}
              <div className="flex justify-center items-center gap-2 mt-5">
                <p className="w-full h-1 border-b border-[#2d3949]"></p>
                <p className="text-sm font-bold text-white">OR</p>
                <p className="w-full h-1 border-b border-[#2d3949]"></p>
              </div>

              {/* Google Login */}
              <button className="flex items-center gap-20 mt-5 text-sm font-bold bg-blue-500 hover:bg-blue-600 text-white p-1 rounded-3xl duration-300">
                <div className="text-start p-2 bg-white rounded-full">
                  <FcGoogle className="text-xl" />
                </div>
                <p className="">Continue with Google</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopBarMenu;
