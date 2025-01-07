import React from "react";

const Perks = () => {
  return (
    <section className="perks-section bg-transparent py-10" id="perks">
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-2 mb-2 p-6"
        data-animate="fade"
      >
        {/* Premium Apparels Card */}
        <div className="flex flex-row items-center bg-red-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Gif Container */}
          <div className="flex items-center justify-center mr-4 w-[40%] max-w-[120px] h-auto">
            <img
              src="/img/singlet.gif"
              alt="Premium Apparels"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-lg font-extrabold text-gray-800 mb-2 font-rubik">
              Premium Apparels
            </h3>
            <p className="text-white text-sm">
              The strength of a community is measured by the collaboration among
              its members.
            </p>
          </div>
        </div>

        {/* Authentic Items Card */}
        <div className="flex flex-row items-center bg-yellow-400 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Gif Container */}
          <div className="flex items-center justify-center mr-4 w-[40%] max-w-[120px] h-auto">
            <img
              src="/img/original.png"
              alt="Authentic Items"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-lg font-extrabold text-gray-800 mb-2 font-rubik">
              Authentic Items
            </h3>
            <p className="text-black text-sm">
              The strength of a community is measured by the collaboration among
              its members.
            </p>
          </div>
        </div>

        {/* Swift Delivery Card */}
        <div className="flex flex-row items-center bg-blue-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Gif Container */}
          <div className="flex items-center justify-center mr-4 w-[40%] max-w-[120px] h-auto">
            <img
              src="/img/delivery-truck.gif"
              alt="Swift Delivery"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-lg font-extrabold text-gray-800 mb-2 font-rubik">Swift Delivery</h3>
            <p className="text-white text-sm">
              The strength of a community is measured by the collaboration among
              its members.
            </p>
          </div>
        </div>

        {/* Secure Payment Card */}
        <div className="flex flex-row items-center bg-red-500 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          {/* Gif Container */}
          <div className="flex items-center justify-center mr-4 w-[40%] max-w-[120px] h-auto">
            <img
              src="/img/approved.gif"
              alt="Secure Payment"
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Text Content */}
          <div className="text-center sm:text-left flex-1">
            <h3 className="text-lg font-extrabold text-gray-800 mb-2 font-rubik">
              Secure Payment
            </h3>
            <p className="text-white text-sm">
              The strength of a community is measured by the collaboration among
              its members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perks;
