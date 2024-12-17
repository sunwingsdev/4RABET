const MobileMenu = () => {
  return (
    <div>
      <div className="fixed bottom-0 left-0 w-full bg-[#0f1b2b] border-t border-gray-200 lg:hidden z-50">
        <div className="grid grid-cols-6 text-center py-1">
          {/* Menu Item 1 */}
          <div className="flex flex-col items-center text-xs font-semibold text-[#a9c6ed] hover:text-white duration-300 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 56 56"
              fill="none"
              className="icon"
              data-v-689b0a1c=""
            >
              <g filter="" data-v-689b0a1c="">
                <path
                  d="M24.4444 20H22.6667C22.3166 20.0001 21.97 20.0693 21.6468 20.2037C21.3235 20.338 21.03 20.535 20.7831 20.7831C20.535 21.03 20.338 21.3235 20.2037 21.6468C20.0693 21.97 20.0001 22.3166 20 22.6667V24.4444C20 25.1778 20.2996 25.8444 20.7831 26.328C21.03 26.5762 21.3235 26.7731 21.6468 26.9075C21.97 27.0419 22.3166 27.111 22.6667 27.1111H24.4444C24.7945 27.111 25.1411 27.0419 25.4643 26.9075C25.7876 26.7731 26.0811 26.5762 26.328 26.328C26.5762 26.0811 26.7731 25.7876 26.9075 25.4643C27.0419 25.1411 27.111 24.7945 27.1111 24.4444V22.6667C27.111 22.3166 27.0419 21.97 26.9075 21.6468C26.7731 21.3235 26.5762 21.03 26.328 20.7831C26.0811 20.535 25.7876 20.338 25.4643 20.2037C25.1411 20.0693 24.7945 20.0001 24.4444 20ZM33.3333 20H31.5556C31.2055 20.0001 30.8589 20.0693 30.5356 20.2037C30.2124 20.338 29.9189 20.535 29.672 20.7831C29.4238 21.03 29.2269 21.3235 29.0925 21.6468C28.9581 21.97 28.889 22.3166 28.8889 22.6667V24.4444C28.8889 25.1778 29.1884 25.8444 29.672 26.328C29.9189 26.5762 30.2124 26.7731 30.5356 26.9075C30.8589 27.0419 31.2055 27.111 31.5556 27.1111H33.3333C33.6834 27.111 34.03 27.0419 34.3532 26.9075C34.6764 26.7731 34.97 26.5762 35.2169 26.328C35.4651 26.0811 35.662 25.7876 35.7964 25.4643C35.9308 25.1411 35.9999 24.7945 36 24.4444V22.6667C35.9999 22.3166 35.9308 21.97 35.7964 21.6468C35.662 21.3235 35.4651 21.03 35.2169 20.7831C34.97 20.535 34.6764 20.338 34.3532 20.2037C34.03 20.0693 33.6834 20.0001 33.3333 20ZM24.4444 28.8889H22.6667C22.3166 28.889 21.97 28.9581 21.6468 29.0925C21.3235 29.2269 21.03 29.4238 20.7831 29.672C20.535 29.9189 20.338 30.2124 20.2037 30.5356C20.0693 30.8589 20.0001 31.2055 20 31.5556V33.3333C20 34.0667 20.2996 34.7333 20.7831 35.2169C21.03 35.4651 21.3235 35.662 21.6468 35.7964C21.97 35.9308 22.3166 35.9999 22.6667 36H24.4444C24.7945 35.9999 25.1411 35.9308 25.4643 35.7964C25.7876 35.662 26.0811 35.4651 26.328 35.2169C26.5762 34.97 26.7731 34.6764 26.9075 34.3532C27.0419 34.03 27.111 33.6834 27.1111 33.3333V31.5556C27.111 31.2055 27.0419 30.8589 26.9075 30.5356C26.7731 30.2124 26.5762 29.9189 26.328 29.672C26.0811 29.4238 25.7876 29.2269 25.4643 29.0925C25.1411 28.9581 24.7945 28.889 24.4444 28.8889ZM33.3333 28.8889H31.5556C31.2055 28.889 30.8589 28.9581 30.5356 29.0925C30.2124 29.2269 29.9189 29.4238 29.672 29.672C29.4238 29.9189 29.2269 30.2124 29.0925 30.5356C28.9581 30.8589 28.889 31.2055 28.8889 31.5556V33.3333C28.8889 34.0667 29.1884 34.7333 29.672 35.2169C29.9189 35.4651 30.2124 35.662 30.5356 35.7964C30.8589 35.9308 31.2055 35.9999 31.5556 36H33.3333C33.6834 35.9999 34.03 35.9308 34.3532 35.7964C34.6764 35.662 34.97 35.4651 35.2169 35.2169C35.4651 34.97 35.662 34.6764 35.7964 34.3532C35.9308 34.03 35.9999 33.6834 36 33.3333V31.5556C35.9999 31.2055 35.9308 30.8589 35.7964 30.5356C35.662 30.2124 35.4651 29.9189 35.2169 29.672C34.97 29.4238 34.6764 29.2269 34.3532 29.0925C34.03 28.9581 33.6834 28.889 33.3333 28.8889Z"
                  fill="#A9C6ED"
                  data-v-689b0a1c=""
                ></path>
              </g>
            </svg>
            <span className="text-xs mb-2">Main</span>
            <p className="w-8 h-1 hover:text-white border-b-2 border-white"></p>
          </div>

          {/* Menu Item 2 */}
          <div className="flex flex-col items-center text-sm font-semibold text-[#a9c6ed] duration-300 cursor-pointer">
            <svg
              className="w-6 h-6 mt-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c1.656 0 3-1.344 3-3S13.656 2 12 2s-3 1.344-3 3 1.344 3 3 3zm0 1c-2.761 0-5 2.239-5 5v4h10v-4c0-2.761-2.239-5-5-5z"
              />
            </svg>
            <span className="text-xs mb-2">Live</span>
            <p className="w-8 h-1 hover:text-white border-b-2 border-white"></p>
          </div>

          {/* Menu Item 3 */}
          <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 10H5m14 4H5m14 4H5"
              />
            </svg>
            <span className="text-xs mt-1">Casino</span>
          </div>

          {/* Menu Item 4 */}
          <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h2m4 0h2m4 0h2m4 0h2M3 10h18M3 15h18M3 20h18"
              />
            </svg>
            <span className="text-xs mt-1">Live Dealers</span>
          </div>

          {/* Menu Item 5 */}
          <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h11M9 21V3m-6 18V7m10 0V5m8 6v7m-2-2h-4m4-2h-4m4-2h-4"
              />
            </svg>
            <span className="text-xs mt-1">Aviator</span>
          </div>

          {/* Menu Item 6 */}
          <div className="flex flex-col items-center text-gray-600 hover:text-blue-500 cursor-pointer">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            <span className="text-xs mt-1">Bonuses</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
