import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { Link } from "react-router";

const NagadModal = ({ closeNagadModal }) => {
  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="w-full max-w-md bg-[#152234] rounded-lg shadow-md p-6 flex flex-col overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closeNagadModal}
          className="absolute top-2 md:top-4 right-2 md:right-4 text-[#59647a] text-lg hover:text-blue-600 duration-300"
        >
          <FaTimes />
        </button>
        {/* Header */}
        <div className="flex items-center space-x-3">
          <img
            className="w-32 m-auto"
            src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
            alt=""
          />
        </div>

        <div className="flex gap-2">
          <div className="w-3/4 text-white bg-[#1936447e] py-2 px-3 rounded-lg">
            <h2 className="text-lg font-semibold">Hasan Islam</h2>
            <p className="text-sm">ID : fkvogeikvoaeif454</p>
          </div>
          <div className="w-1/4 text-center text-[#d4d4d4] bg-[#1936447e] py-2 px-3 rounded-lg">
            <h2 className="text-lg font-semibold">
              9000 <span className="">BDT</span>
            </h2>
          </div>
        </div>
        <div className="text-[#f3f3f3] text-base rounded-md py-2 px-3 mt-4">
          <ul>
            <li className="list-decimal">
              Go to your NAGAD Mobile Menu by dialing: *167# or Open NAGAD App.
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
              <span className="text-white font-bold">Transaction ID</span>
              {'"'} in the upper box and press{" "}
              <span className="text-white font-bold">VERIFY</span>
              {'"'}
            </li>
          </ul>
        </div>

        {/* Payment Button */}
        <button className="mt-6 w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 duration-300">
          Deposit
        </button>
      </div>
    </div>
  );
};

export default NagadModal;
