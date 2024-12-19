import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { FiPlusCircle } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Link } from "react-router";
import GoogleSignIn from "./GoogleSignIn";

const RegistrationModal = ({ closeRegistrationModal, currencies, offers }) => {
  const { createUser } = useContext(AuthContext); // Using context for Firebase Auth
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [selectedCurrency, setSelectedCurrency] = useState(currencies[0]);
  const [selectedOffer, setSelectedOffer] = useState(offers[0]);
  const [showPromoInput, setShowPromoInput] = useState(false);
  const [promoCode, setPromoCode] = useState("");

  const handleApplyPromoCode = () => {
    // Handle promo code application logic here
    console.log("Promo Code Applied:", promoCode);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Firebase create user with email and password
      const userCredential = await createUser(email, password);
      const user = userCredential.user;

      // Save user data to MongoDB
      const userData = {
        email,
        phone,
        currency: selectedCurrency.label,
        offer: selectedOffer.label,
        promoCode,
      };

      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}/api/users`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await response.json();
      console.log(data);

      // Close modal after successful registration
      closeRegistrationModal();
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="text-white bg-[#152234] w-[900px] h-[700px] rounded-lg shadow-lg flex overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={closeRegistrationModal}
          className="absolute top-4 right-4 text-[#59647a] text-2xl hover:text-blue-600 duration-300"
        >
          <FaTimes />
        </button>

        {/* Modal Content */}
        <div className="w-1/2">
          <img
            className="w-full h-full object-cover"
            src="https://ifrd.4rabetsite25.com/img/registration-modal-HI.webp"
            alt="Register"
          />
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <div className="flex items-center gap-4 bg-[#212d43] rounded-xl mb-4">
            <div className="bg-[#ffb131] px-1 rounded-xl">
              <img
                className="w-16"
                src="https://ifrd.4rabetsite25.com/img/gifs/gift.png"
                alt=""
              />
            </div>
            <p className="text-base font-bold text-[#ffb131]">
              6000 BDT ON FIRST <br /> DEPOSIT
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
            />
            <input
              type="number"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-5 py-2 bg-[#1c2d44] rounded-lg focus:outline-none"
            />
            {/* Currency section */}
            <div className="relative mb-4">
              <select
                value={selectedCurrency.label}
                onChange={(e) => {
                  const selected = currencies.find(
                    (currency) => currency.label === e.target.value
                  );
                  setSelectedCurrency(selected);
                }}
                className="w-full bg-[#1c2d44] text-white px-4 py-2 rounded-lg border border-[#283548] focus:outline-none"
              >
                {currencies.map((currency) => (
                  <option
                    key={currency.label}
                    value={currency.label}
                    className="flex items-center"
                  >
                    {currency.symbol} - {currency.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Promo Code Section */}
            <div className="mt-4 mb-4">
              {!showPromoInput ? (
                <button
                  onClick={() => setShowPromoInput(true)}
                  className="text-sm font-bold text-blue-400 hover:text-blue-600 duration-300 flex flex-row items-center gap-2"
                >
                  <FiPlusCircle />{" "}
                  <span className="text-white">I have a promo code</span>
                </button>
              ) : (
                <div className="relative flex items-center w-full mt-2">
                  {/* Promo Code Input */}
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Add promo code here"
                    className="w-full px-4 py-2 bg-[#1c2d44] rounded-lg text-gray-400 focus:outline-none"
                  />

                  {/* Apply Button */}
                  <button
                    onClick={handleApplyPromoCode}
                    className="absolute right-0 px-5 py-2 bg-[#283548] text-white font-bold rounded-lg duration-300"
                  >
                    APPLY
                  </button>
                </div>
              )}
            </div>

            {/* Offer Section */}
            <div className="relative mb-4">
              <select
                value={selectedOffer.label}
                onChange={(e) => {
                  const selected = offers.find(
                    (offer) => offer.label === e.target.value
                  );
                  setSelectedOffer(selected);
                }}
                className="w-full bg-[#1c2d44] text-white px-4 py-2 rounded-lg border border-[#283548] focus:outline-none"
              >
                {offers.map((offer) => (
                  <option
                    key={offer.label}
                    value={offer.label}
                    className="flex items-center"
                  >
                    {offer.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="w-full text-sm font-bold bg-blue-500 text-white py-3 rounded-full hover:bg-blue-600 duration-300"
            >
              SIGN UP
            </button>
          </form>
          {/* or */}
          <div className="flex justify-center items-center gap-2 mt-3">
            <p className="w-full h-1 border-b border-[#2d3949]"></p>
            <p className="text-sm font-bold text-white">OR</p>
            <p className="w-full h-1 border-b border-[#2d3949]"></p>
          </div>

          {/* Google Login */}
          <GoogleSignIn closeRegistrationModal={closeRegistrationModal} />

          <div className="text-center mt-6 mb-2 flex flex-row items-center gap-2">
            <input type="checkbox" checked />
            <p className="text-[13px] font-semibold text-[#5c7391]">
              I confirm all the{" "}
              <Link className="text-white text-xs underline">
                Terms of user agreement
              </Link>{" "}
              and that I am over 18
            </p>
          </div>

          <p className=" text-center text-sm font-semibold text-[#5c7391]">
            Already registered?{" "}
            <Link className="text-white text-base underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationModal;
