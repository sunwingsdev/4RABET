import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
// import { FaFacebookMessenger } from "react-icons/fa6";
// import { IoLogoWhatsapp } from "react-icons/io";
// import { IoCall } from "react-icons/io5";
// import { MdAttachEmail } from "react-icons/md";
import { Link } from "react-router";
import NagadModal from "../nagadModal/NagadModal";

import { HiArrowLongLeft } from "react-icons/hi2";
import { AuthContext } from "../../providers/AuthProvider";
import { useGetUserByEmailQuery } from "../../redux/features/allApis/usersApi/usersApi";

const DepositModal = ({ closeDepositModal }) => {
  const { user } = useContext(AuthContext);
  const { data: singleUser } = useGetUserByEmailQuery(user?.email);
  console.log("si U", singleUser);
  //   const [activeTabTop, setActiveTabTop] = useState("SUPPORT");
  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");

  const [isNagadContentOpen, setIsNagadContentOpen] = useState(false);
  const [isRocketContentOpen, setIsRocketContentOpen] = useState(false);

  const openNagadContent = () => setIsNagadContentOpen(true);
  const backNagadContent = () => setIsNagadContentOpen(false);

  const openRocketContent = () => setIsRocketContentOpen(true);
  const backRocketContent = () => setIsRocketContentOpen(false);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-md bg-[#152234] rounded-lg shadow-md flex flex-col overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closeDepositModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
        >
          <FaTimes />
        </button>

        {/* Show Header and Bottom Tabs only if Nagad Modal is not open */}
        {!isNagadContentOpen && !isRocketContentOpen && (
          <div className="p-6">
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
                    <button onClick={openNagadContent}>
                      <div className="p-2 bg-gray-200 rounded-md text-center group">
                        <img
                          className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                          src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
                          alt=""
                        />
                      </div>
                    </button>
                    <button onClick={openRocketContent}>
                      <div className="p-2 bg-gray-200 rounded-md text-center group">
                        <img
                          className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                          src="https://pay.hostbuybd.com/assets/template/images/rocket.png"
                          alt=""
                        />
                      </div>
                    </button>
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
            {/* <button className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Pay
            </button> */}
          </div>
        )}

        {/* Nagad In Modal */}
        {isNagadContentOpen && (
          <div className=" bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-full max-w-md bg-[#152234] rounded-lg shadow-md p-6 flex flex-col overflow-hidden relative">
              {/* Close Button */}
              <button
                onClick={backNagadContent}
                className="absolute top-2 md:top-4 left-2 md:left-2 px-4 py-1 rounded-md text-slate-500 hover:text-red-500 text-lg duration-300 flex items-center justify-center"
              >
                <HiArrowLongLeft className="text-2xl" />
              </button>

              {/* Nagad Content */}
              <div className="flex items-center space-x-3">
                <img
                  className="w-32 m-auto"
                  src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
                  alt=""
                />
              </div>

              <div className="flex gap-2">
                <div className="w-3/4 text-white bg-[#ee3c42] py-2 px-3 rounded-lg">
                  <h2 className="text-xl font-semibold">Hasan Islam</h2>
                  <p className="text-sm">Mobile : 01700000000</p>
                </div>
                <div className="w-1/4 text-center text-white bg-[#ee3c42] py-2 px-3 rounded-lg">
                  <div className="text-xl font-semibold flex flex-col items-center justify-center">
                    <span className="">9000</span>{" "}
                    <span className="text-base leading-3 font-normal">BDT</span>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div className="grid grid-cols-3 gap-2">
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                </div>
              </div>

              {/* Form */}
              <form action="">
                <input
                  type="text"
                  className="w-full my-2 px-5 py-3 bg-[#152234] border-2 border-gray-400 rounded-lg focus:outline-none placeholder-gray-400 text-white"
                  placeholder="Sender Account Number"
                  required
                />
                <input
                  type="text"
                  className="w-full my-2 px-5 py-3 bg-[#152234] border-2 border-gray-400 rounded-lg focus:outline-none placeholder-gray-400 text-white"
                  placeholder="Transaction ID"
                  required
                />
                {/* Instructions */}
                <div className="text-[#f3f3f3] bg-[#ee3c42] text-base rounded-md py-4 pl-6 pr-3 mt-2">
                  <ul>
                    <li className="list-decimal">
                      Go to your NAGAD Mobile Menu by dialing: *167# or Open
                      NAGAD App.
                    </li>
                    <li className="list-decimal mt-1">
                      Choose: {'"'}
                      <Link className="text-white font-bold">Send Money</Link>
                      {'"'}
                    </li>
                    <li className="list-decimal mt-1">
                      Enter the Receiver Account Number: {'"'}
                      <Link className="text-white font-bold">01700000000</Link>
                      {'"'}
                    </li>
                    <li className="list-decimal mt-1">
                      Enter the amount: {'"'}
                      <span className="text-white font-bold">1634</span>
                      {'"'}
                    </li>
                    <li className="list-decimal mt-1">
                      Now enter your NAGAD Mobile Menu PIN to confirm.
                    </li>
                    <li className="list-decimal mt-1">
                      Done! You will receive a confirmation message from NAGAD
                    </li>
                    <li className="list-decimal mt-1">
                      Put the {'"'}
                      <span className="text-white font-bold">
                        Transaction ID
                      </span>
                      {'"'} in the upper box and press{" "}
                      <span className="text-white font-bold">VERIFY</span>
                      {'"'}
                    </li>
                  </ul>
                </div>
                {/* Deposit Button */}
                <button
                  type="submit"
                  className="mt-6 w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all ease-in-out duration-500 uppercase font-bold"
                >
                  Deposit Now
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Rocket Modal */}
        {isRocketContentOpen && (
          <div className=" bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="w-full max-w-md bg-[#152234] rounded-lg shadow-md p-6 flex flex-col overflow-hidden relative">
              {/* Close Button */}
              <button
                onClick={backRocketContent}
                className="absolute top-2 md:top-4 left-2 md:left-2 px-4 py-1 rounded-md text-slate-500 hover:text-[#8a288f] text-lg duration-300 flex items-center justify-center"
              >
                <HiArrowLongLeft className="text-2xl" />
              </button>

              {/* Rocket Content */}
              <div className="flex items-center space-x-3">
                <img
                  className="w-32 m-auto"
                  src="https://pay.hostbuybd.com/assets/template/images/rocket.png"
                  alt=""
                />
              </div>

              <div className="flex gap-2">
                <div className="w-3/4 text-white bg-[#8a288f] py-2 px-3 rounded-lg">
                  <h2 className="text-xl font-semibold">Hasan Islam</h2>
                  <p className="text-sm">Mobile : 01700000000</p>
                </div>
                <div className="w-1/4 text-center text-white bg-[#8a288f] py-2 px-3 rounded-lg">
                  <div className="text-xl font-semibold flex flex-col items-center justify-center">
                    <span className="">9000</span>{" "}
                    <span className="text-base leading-3 font-normal">BDT</span>
                  </div>
                </div>
              </div>

              <div className="my-4">
                <div className="grid grid-cols-3 gap-2">
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                  <p className="py-2 px-4 text-center text-lg font-bold text-gray-600 bg-slate-200 hover:bg-slate-300 duration-300 rounded-md border border-dashed">
                    400 BDT
                  </p>
                </div>
              </div>

              {/* Form */}
              <form action="">
                <input
                  type="text"
                  className="w-full my-2 px-5 py-3 bg-[#152234] border-2 border-gray-400 rounded-lg focus:outline-none placeholder-gray-400 text-white"
                  placeholder="Sender Account Number"
                  required
                />
                <input
                  type="text"
                  className="w-full my-2 px-5 py-3 bg-[#152234] border-2 border-gray-400 rounded-lg focus:outline-none placeholder-gray-400 text-white"
                  placeholder="Transaction ID"
                  required
                />
                {/* Instructions */}
                <div className="text-[#f3f3f3] bg-[#8a288f] text-base rounded-md py-4 pl-6 pr-3 mt-2">
                  <ul>
                    <li className="list-decimal">
                      Go to your Rocket Mobile Menu by dialing: *322# or Open
                      Rocket App.
                    </li>
                    <li className="list-decimal mt-1">
                      Choose: {'"'}
                      <Link className="text-white font-bold">Send Money</Link>
                      {'"'}
                    </li>
                    <li className="list-decimal mt-1">
                      Enter the Receiver Account Number: {'"'}
                      <Link className="text-white font-bold">01700000001</Link>
                      {'"'}
                    </li>
                    <li className="list-decimal mt-1">
                      Enter the amount: {'"'}
                      <span className="text-white font-bold">1634</span>
                      {'"'}
                    </li>
                    <li className="list-decimal mt-1">
                      Now enter your Rocket Mobile Menu PIN to confirm.
                    </li>
                    <li className="list-decimal mt-1">
                      Done! You will receive a confirmation message from Rocket
                    </li>
                    <li className="list-decimal mt-1">
                      Put the {'"'}
                      <span className="text-white font-bold">
                        Transaction ID
                      </span>
                      {'"'} in the upper box and press{" "}
                      <span className="text-white font-bold">VERIFY</span>
                      {'"'}
                    </li>
                  </ul>
                </div>
                {/* Deposit Button */}
                <button
                  type="submit"
                  className="mt-6 w-full py-2 bg-[#8a288f] text-white rounded-md hover:bg-[#6f2074] transition-all ease-in-out duration-500 uppercase font-bold"
                >
                  Deposit Now
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositModal;
