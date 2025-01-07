import React from 'react';

function AdventureWB() {
  return (
    <section
      id="adventure"
      className="relative w-full min-h-screen flex items-center justify-center text-center bg-cover bg-center bg-no-repeat bg-black"
      style={{ backgroundImage: `url(/img/light-sketch.png)` }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center items-center">
        {/* Header Image */}
        <div className="flex items-center justify-center mt-12">
          <img
            src="/img/Adventure.png"
            alt="Adventure"
            className="w-auto h-auto max-w-[200px] sm:max-w-[300px] md:max-w-[400px] lg:max-w-[500px] xl:max-w-[600px] object-contain"
            data-animate="fade"
          />
        </div>

        {/* Grid for brainchild adventures */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10 p-6" data-animate="fade">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/icons/checkroom.svg" alt="Icon 1" className="h-12 w-12" />
            </div>
            <h3 className="text-lg font-extrabold	 mb-2 font-stylishHeading text-gray-900">Ready to Wear</h3>
            <p className="text-gray-700">
              Ready to wear, ready to stand out. Bold apparel, always in stock, always daring!
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/icons/tag.svg" alt="Icon 2" className="h-12 w-12" />
            </div>
            <h3 className="text-lg font-extrabold mb-2 font-stylishHeading text-black">Branded & Custom Hoodies/Tees</h3>
            <p className="text-gray-700">
              From street-valid to personalized designs, our hoodies and tees are made to match your bold lifestyle.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/icons/two_wheeler.svg" alt="Icon 3" className="h-12 w-12" />
            </div>
            <h3 className="text-lg font-bold mb-2 font-stylishHeading text-gray-900">Custom Wraps</h3>
            <p className="text-gray-700">
              Transform your ride into a masterpiece with our unique and durable custom wraps.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
            <div className="flex justify-center mb-4">
              <img src="/assets/icons/sports_motorsports.svg" alt="Icon 4" className="h-12 w-12" />
            </div>
            <h3 className="text-lg font-bold mb-2 font-stylishHeading text-gray-900">Bike Gears</h3>
            <p className="text-gray-700">
              From sleek gear to adventure essentials, we equip you to conquer every challenge in style.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AdventureWB;
