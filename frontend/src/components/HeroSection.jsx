const HeroSection = () => {
    return (
        <section id="home" className="relative w-full h-screen flex items-center justify-center text-center text-white">
            {/* Overlay with custom background color */}
            <div className="absolute inset-0 bg-[#f1f1f1] opacity-60"></div> {/* Replace with your design's background color */}

            {/* Hoodie Image */}
            <div className="absolute inset-0 flex items-center justify-center z-0">
                <img src="/img/hoodie.png" alt="Hoodie" className="w-2/3 md:w-1/2 object-cover opacity-70" />
            </div>

            {/* Hero Content */}
            <div className="relative z-10 px-6 md:px-12 space-y-6 mt-40 md:mt-20">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-red-600 font-rubik">
                    Sturdy Brainchild
                </h1>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-sub-heading-font">
                    Born from Vision, Crafted for You
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold font-sub-heading-font">
                    Premium Hoodies, Tees, Ski Masks & Bike Gears
                </h2>
                <a href="#shop" className="bg-red-500 text-base sm:text-lg md:text-xl lg:text-2xl text-white py-3 px-8 rounded-lg mt-6 inline-block hover:bg-red-600 transition-all duration-300 font-rubik">
                    Explore
                </a>
            </div>
        </section>
    );
};

export default HeroSection;
