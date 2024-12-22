import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { HiArrowLongLeft } from "react-icons/hi2";
import { AuthContext } from "../../providers/AuthProvider";
import { useGetUserByEmailQuery } from "../../redux/features/allApis/usersApi/usersApi";

const DepositModal = ({ closeDepositModal }) => {
  const { user } = useContext(AuthContext);
  const { data: singleUser } = useGetUserByEmailQuery(user?.email);

  const [activeTabBottom, setActiveTabBottom] = useState("MOBILE_BANKING");
  const [step, setStep] = useState(1); // Step tracker
  const [paymentMethod, setPaymentMethod] = useState(null); // To track the selected method
  const [depositAmount, setDepositAmount] = useState(""); // Track deposit amount
  const [senderNumber, setSenderNumber] = useState(""); // Track sender account number
  const [transactionId, setTransactionId] = useState(""); // Track transaction ID

  // Step navigation handlers
  const goNextStep = () => setStep((prevStep) => prevStep + 1);
  const goPreviousStep = () => setStep((prevStep) => prevStep - 1);

  const selectPaymentMethod = (method) => {
    setPaymentMethod(method);
    goNextStep();
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log({
      paymentMethod,
      depositAmount,
      senderNumber,
      transactionId,
    });
    closeDepositModal(); // Close the modal after submission
  };

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

        {/* Step 1: Select Payment Method */}
        {step === 1 && (
          <div className="p-6">
            <div className="flex justify-center items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-indigo-500 flex justify-center items-center text-white text-lg font-bold">
                BR
              </div>
              <h2 className="text-2xl font-semibold text-white">
                <span className="text-yellow-300">Bet</span>Rush
              </h2>
              <p className="text-2xl font-bold text-white">Deposit</p>
            </div>
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
              <div className="mt-4">
                {activeTabBottom === "MOBILE_BANKING" ? (
                  <div className="grid grid-cols-3 gap-2">
                    <button onClick={() => selectPaymentMethod("bKash")}>
                      <div className="p-2 bg-gray-200 rounded-md text-center group">
                        <img
                          className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                          src="https://pay.hostbuybd.com/assets/template/images/bkash.png"
                          alt="bKash"
                        />
                      </div>
                    </button>
                    <button onClick={() => selectPaymentMethod("Nagad")}>
                      <div className="p-2 bg-gray-200 rounded-md text-center group">
                        <img
                          className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                          src="https://pay.hostbuybd.com/assets/template/images/nagad.png"
                          alt="Nagad"
                        />
                      </div>
                    </button>
                    <button onClick={() => selectPaymentMethod("Rocket")}>
                      <div className="p-2 bg-gray-200 rounded-md text-center group">
                        <img
                          className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                          src="https://pay.hostbuybd.com/assets/template/images/rocket.png"
                          alt="Rocket"
                        />
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 gap-2">
                    <button onClick={() => selectPaymentMethod("IBBL")}>
                      <div className="p-2 bg-gray-200 rounded-md text-center group">
                        <img
                          className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                          src="https://pay.hostbuybd.com/uploads/bank_logo/ibbl.png"
                          alt="IBBL"
                        />
                      </div>
                    </button>
                    <button onClick={() => selectPaymentMethod("DBBL")}>
                      <div className="p-2 bg-gray-200 rounded-md text-center group">
                        <img
                          className="w-20 m-auto transform transition-transform duration-300 group-hover:scale-110"
                          src="https://pay.hostbuybd.com/uploads/bank_logo/dbbl.png"
                          alt="DBBL"
                        />
                      </div>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Enter Deposit Amount */}
        {step === 2 && (
          <div className="p-6">
            <button
              onClick={goPreviousStep}
              className="absolute top-2 left-2 text-white text-xl"
            >
              <HiArrowLongLeft />
            </button>
            <div className="text-center">
              <h2 className="text-2xl text-white font-semibold">
                Enter Deposit Amount
              </h2>
              <p className="text-gray-400 mt-2">
                Provide the amount you wish to deposit via {paymentMethod}.
              </p>
            </div>
            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="number"
                placeholder="Enter Amount"
                value={depositAmount}
                onChange={(e) => setDepositAmount(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-400 bg-[#152234] text-white focus:outline-none placeholder-gray-400"
                required
              />
              <button
                type="button"
                onClick={goNextStep}
                className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Next
              </button>
            </form>
          </div>
        )}

        {/* Step 3: Enter Payment Details */}
        {step === 3 && (
          <div className="p-6">
            <button
              onClick={goPreviousStep}
              className="absolute top-2 left-2 text-white text-xl"
            >
              <HiArrowLongLeft />
            </button>
            <div className="text-center">
              <h2 className="text-2xl text-white font-semibold">
                {paymentMethod} Payment
              </h2>
              <p className="text-gray-400 mt-2">
                Enter your account number and transaction ID.
              </p>
            </div>
            <form className="mt-4" onSubmit={handlePaymentSubmit}>
              <input
                type="text"
                placeholder="Sender Account Number"
                value={senderNumber}
                onChange={(e) => setSenderNumber(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-gray-400 bg-[#152234] text-white focus:outline-none placeholder-gray-400"
                required
              />
              <input
                type="text"
                placeholder="Transaction ID"
                value={transactionId}
                onChange={(e) => setTransactionId(e.target.value)}
                className="w-full px-4 py-2 mt-4 rounded-lg border border-gray-400 bg-[#152234] text-white focus:outline-none placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="mt-6 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Pay
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default DepositModal;
