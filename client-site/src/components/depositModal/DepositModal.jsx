import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
// import { FaFacebookMessenger } from "react-icons/fa6";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { IoCall } from "react-icons/io5";
// import { MdAttachEmail } from "react-icons/md";
import { Link } from "react-router";
import NagadModal from "../nagadModal/NagadModal";

const DepositModal = ({ closeDepositModal }) => {
  //   const [activeTabTop, setActiveTabTop] = useState("SUPPORT");
  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");

  const [isNagadModalOpen, setIsNagadModalOpen] = useState(false);

  const openNagadModal = () => setIsNagadModalOpen(true);
  const closeNagadModal = () => setIsNagadModalOpen(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-md bg-[#152234] rounded-lg shadow-md p-6 flex flex-col overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closeDepositModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
        >
          <FaTimes />
        </button>
        {/* Header */}
        <div className="flex justify-center items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex justify-center items-center text-white text-lg font-bold">
            BR
          </div>
          <h2 className="text-2xl font-semibold text-white">
            <span className="text-yellow-300">Bet</span>Rush
          </h2>
          <p className="text-2xl font-bold text-white">Deposit</p>
        </div>

        {/* Bottom Tabs */}
        <div className="mt-6">
          <div className="flex">
            <button
              onClick={() => setActiveTabBottom("MOBILE_BANKING")}
              className={`flex-1 py-2 font-semibold text-center rounded-l-md ${
                activeTabBottom === "MOBILE_BANKING"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-400 text-gray-200"
              }`}
            >
              MOBILE BANKING
            </button>
            <button
              onClick={() => setActiveTabBottom("BANK_TRANSFER")}
              className={`flex-1 py-2 font-semibold text-center rounded-r-md ${
                activeTabBottom === "BANK_TRANSFER"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-400 text-gray-200"
              }`}
            >
              BANK TRANSFER
            </button>
          </div>

          {/* Tab Content for Bottom Tabs */}
          <div className="mt-4">
            {activeTabBottom === "MOBILE_BANKING" ? (
              <div className="grid grid-cols-3 gap-2">
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/bkash.png"
                      alt=""
                    />
                  </div>
                </Link>
                <button onClick={openNagadModal}>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
                      alt=""
                    />
                  </div>
                </button>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/assets/template/images/rocket.png"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png"
                      alt=""
                    />
                  </div>
                </Link>
                <Link>
                  <div className="p-2 bg-gray-200 rounded-md text-center group">
                    <img
                      className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                      src="https://pay.hostbuybd.com/uploads/bank_logo/dbbl.png"
                      alt=""
                    />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Payment Button */}
        <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Pay
        </button>

        {/* Nagad In modal */}
        {isNagadModalOpen && <NagadModal closeNagadModal={closeNagadModal} />}

        {/* Top Tabs */}
        {/* <div className="mt-4 flex space-x-2">
          <button
            onClick={() => setActiveTabTop("SUPPORT")}
            className={`flex-1 py-2 text-center rounded-md ${
              activeTabTop === "SUPPORT"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Support
          </button>
          <button
            onClick={() => setActiveTabTop("FAQ")}
            className={`flex-1 py-2 text-center rounded-md ${
              activeTabTop === "FAQ"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTabTop("DETAILS")}
            className={`flex-1 py-2 text-center rounded-md ${
              activeTabTop === "DETAILS"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Details
          </button>
        </div> */}

        {/* Content for Top Tabs */}
        {/* <div className="mt-4">
          {activeTabTop === "SUPPORT" && (
            <div className="grid grid-cols-2 gap-2">
              <div className="flex gap-2 items-center text-gray-400 bg-[#d8d8d87e] py-2 px-3 rounded-lg">
                <IoCall size={25} className="text-blue-400" />
                <p className="text-sm">Click here to Call us for support.</p>
              </div>
              <div className="flex gap-2 items-center text-gray-400 bg-[#d8d8d87e] py-2 px-3 rounded-lg">
                <FaFacebookMessenger size={25} className="text-red-400" />
                <p className="text-sm">Click here for Messenger live chat.</p>
              </div>
              <div className="flex gap-2 items-center text-gray-400 bg-[#d8d8d87e] py-2 px-3 rounded-lg">
                <IoLogoWhatsapp size={25} className="text-lime-500" />
                <p className="text-sm">Click here for Whatsapp live support.</p>
              </div>
              <div className="flex gap-2 items-center text-gray-400 bg-[#d8d8d87e] py-2 px-3 rounded-lg">
                <MdAttachEmail size={25} className="text-gray-400" />
                <p className="text-sm">Click here to Email us for support.</p>
              </div>
            </div>
          )}
          {activeTabTop === "FAQ" && (
            <p className="text-gray-600"></p>
          )}
          {activeTabTop === "DETAILS" && (
            <p className="text-gray-600">Details content goes here...</p>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default DepositModal;
