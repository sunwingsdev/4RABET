// import {
//   IoIosContact,
//   IoMdMenu,
//   IoIosArrowDown,
//   IoIosArrowForward,
//   IoMdHome,
// } from "react-icons/io";
// import { useState } from "react";
// import {
//   IoClose,
//   IoGameController,
//   IoLogoWechat,
//   IoSettingsSharp,
// } from "react-icons/io5"; // Close icon
// import { Link } from "react-router";
// import logo from "../../../assets/logo.png";
// import { FaAffiliatetheme, FaUsers } from "react-icons/fa";
// import { PiCashRegister } from "react-icons/pi";
// import { GiGamepadCross, GiRibbonMedal } from "react-icons/gi";
// import { SlGameController } from "react-icons/sl";
// import { BsBank, BsFront, BsPiggyBank, BsShop } from "react-icons/bs";

// const DashboardMobilMenu = ({ open, menuItems }) => {
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [openSubmenu, setOpenSubmenu] = useState(null); // Store the currently open submenu

//   // Toggle the sidebar
//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   // Close the sidebar
//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   // Toggle the submenu and close sidebar when a submenu item is clicked
//   const toggleSubmenu = (menu) => {
//     setOpenSubmenu(openSubmenu === menu ? null : menu); // If the clicked submenu is already open, close it; otherwise, open it
//   };

//   // Handle click on a submenu item (close the sidebar after selecting)
//   const handleSubmenuClick = () => {
//     closeSidebar();
//   };

//   const handleLogout = () => {
//     logOut();
//     addToast("Successfully logged out!", {
//       appearance: "success",
//       autoDismiss: true,
//     });
//   };

//   return (
//     <div>
//       <div
//         className={`bg-[#172437] p-4 fixed left-0 right-0 z-20 duration-300 ${
//           !open ? "md:ml-16" : "md:ml-64"
//         }`}
//       >
//         <div className="flex items-center justify-between">
//           <div className="">
//             <div className="md:hidden text-yellow-300" onClick={toggleSidebar}>
//               <IoMdMenu className="text-3xl sm:text-3xl" />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed inset-0 w-full h-screen overflow-y-auto backdrop-blur bg-black/40 z-30 md:hidden transform transition-transform duration-500 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex justify-between bg-[#172437]">
//           <div className="m-2 mb-6 mt-6 w-3/5">
//             <div className="rounded-lg">
//               <div className="flex items-center rounded-tl-lg rounded-tr-lg">
//                 <Link to={"/"}>
//                   <img className="w-44" src={logo} alt="" />
//                 </Link>
//                 <Link to={"/"}>
//                   <img
//                     className="w-7 rounded-md object-cover"
//                     src="https://ifrd.4rabetsite25.com/img/svgflags/BN.svg"
//                     alt=""
//                   />
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div
//             className="text-white cursor-pointer mt-1"
//             onClick={closeSidebar}
//           >
//             <IoClose size={36} />
//           </div>
//         </div>

//         {/* Menu Items with Fixed Icons and Dynamic Submenu */}
//         <div className="text-white bg-[#172437]">
//           {menuItems.map((item) => (
//             <div key={item.name}>
//               <div
//                 className={`py-2.5 px-4 flex items-center justify-between ${
//                   item.submenu.length > 0 ? "cursor-pointer" : ""
//                 }`}
//                 onClick={() =>
//                   item.submenu.length > 0 && toggleSubmenu(item.name)
//                 }
//               >
//                 <div className="flex items-center">
//                   {item.icon}
//                   <Link
//                     to={item.path}
//                     className="ml-2 block"
//                     onClick={handleSubmenuClick}
//                   >
//                     {item.name}
//                   </Link>
//                 </div>
//                 {item.submenu.length > 0 && (
//                   <div>
//                     {openSubmenu === item.name ? (
//                       <IoIosArrowDown size={20} />
//                     ) : (
//                       <IoIosArrowForward size={20} />
//                     )}
//                   </div>
//                 )}
//               </div>
//               {openSubmenu === item.name && (
//                 <div className="pl-4">
//                   {item.submenu.map((submenuItem) => (
//                     <div key={submenuItem.name} className="py-2.5 pl-6 text-sm">
//                       <Link
//                         to={submenuItem.path}
//                         className="block"
//                         onClick={handleSubmenuClick}
//                       >
//                         {submenuItem.name}
//                       </Link>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardMobilMenu;

import { useState, useRef, useEffect, useContext } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import { useToasts } from "react-toast-notifications";
import { IoIosArrowDown, IoIosArrowForward, IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { FaRegCircle, FaTimes } from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { AuthContext } from "../../../providers/AuthProvider";

const DashboardMobileMenu = ({ open, menuItems }) => {
  const { user } = useContext(AuthContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null); // Store the currently open submenu
  const dashboardSidebarRef = useRef(null);
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const location = useLocation(); // Access current route

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dashboardSidebarRef.current &&
        !dashboardSidebarRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false); // Sidebar বন্ধ হবে
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setIsSidebarOpen]);

  // const logo = homeControls?.find(
  //   (control) => control.category === "logo" && control.isSelected
  // );

  // Toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Toggle the submenu and close sidebar when a submenu item is clicked
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  const handleMenuClick = (menu) => {
    if (!user) {
      addToast("Please login to access this page", {
        appearance: "error",
        autoDismiss: true,
      });
    } else if (menu?.path && !menu?.submenu) {
      navigate(menu?.path);
      closeSidebar();
    } else if (menu?.submenu) {
      return;
    } else {
      setIsModalOpen(true);
    }
  };

  const handleSubmenuClick = (submenu) => {
    if (!user) {
      addToast("Please login to access this page", {
        appearance: "error",
        autoDismiss: true,
      });
    }
    if (submenu?.path) {
      navigate(submenu?.path);
      closeSidebar();
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div>
        <div
          className={`bg-[#222222] p-4 fixed left-0 right-0 z-20 duration-300 ${
            !open ? "md:ml-16" : "md:ml-64"
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="">
              <div
                className="md:hidden text-yellow-300"
                onClick={toggleSidebar}
              >
                <IoMdMenu className="text-3xl sm:text-3xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          ref={dashboardSidebarRef}
          className={`fixed inset-0 w-[70%] sm:w-1/2 h-screen overflow-y-auto backdrop-blur bg-black/40 z-30 md:hidden transform transition-transform duration-500 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex justify-between bg-[#222222]">
            <div className="py-2 ps-4">
              {/* {isLoading ? (
                <div className="w-32 h-10 bg-gray-300 animate-pulse rounded"></div>
              ) : ( */}
              <img src={logo} className="w-28" alt="" />
              {/* )} */}
            </div>
            <div
              className="text-white cursor-pointer mt-1"
              onClick={closeSidebar}
            >
              <IoClose size={36} />
            </div>
          </div>

          {/* Menu Items with Fixed Icons and Dynamic Submenu */}
          <div className="text-white bg-[#222222] font-bold">
            {menuItems?.map((item) => {
              const isActive = location.pathname === item?.path;
              return (
                <div
                  key={item?.name}
                  className={`py-1 flex flex-col items-start gap-2 border-b border-gray-700 duration-300 ${
                    isActive ? "bg-red-600" : "hover:bg-red-600"
                  }`}
                >
                  <div
                    className={`px-4 py-2.5 flex items-center justify-between w-full ${
                      item?.submenu?.length > 0 ? "cursor-pointer" : ""
                    }`}
                    onClick={() =>
                      item?.submenu?.length > 0 && toggleSubmenu(item?.name)
                    }
                  >
                    <div
                      onClick={() => handleMenuClick(item)}
                      className="inline-flex items-center gap-3 w-full"
                    >
                      {item.icon} {item.name}
                    </div>
                    {item?.submenu?.length > 0 && (
                      <div>
                        {openSubmenu === item?.name ? (
                          <IoIosArrowDown size={20} />
                        ) : (
                          <IoIosArrowForward size={20} />
                        )}
                      </div>
                    )}
                  </div>
                  {openSubmenu === item?.name && (
                    <div className="bg-red-600 w-full">
                      {item?.submenu?.map((submenuItem) => {
                        const isSubmenuActive =
                          location.pathname === submenuItem?.path;
                        return (
                          <div
                            onClick={() => handleSubmenuClick(submenuItem)}
                            key={submenuItem?.name}
                            className={`pl-8 py-3 flex flex-col gap-2 ${
                              isSubmenuActive ? "bg-red-500" : ""
                            }`}
                          >
                            <Link
                              to={submenuItem?.path}
                              className="flex flex-row items-center gap-2"
                            >
                              <FaRegCircle
                                size={16}
                                className={`${
                                  isSubmenuActive
                                    ? "text-white"
                                    : "text-yellow-300"
                                }`}
                              />
                              {submenuItem?.name}
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Modal */}
      {/* <OppsModal
        title="Opps!!"
        isOpen={isModalOpen}
        onOpenChange={() => setIsModalOpen(false)}
      >
        <p>Please contact your developer team to connect API!!!</p>
      </OppsModal> */}

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="text-white px-4 py-8 bg-[#152234] rounded-lg shadow-lg flex overflow-hidden relative">
            {/* Close Button */}
            <button
              onClick={()=>setIsModalOpen(false)}
              className="absolute top-2 md:top-4 right-2 md:right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
            >
              <FaTimes />
            </button>
            <p>Please contact your developer team to connect API!!!</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardMobileMenu;
