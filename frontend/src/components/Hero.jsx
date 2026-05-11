import StatsCard from "./StatsCard";
import NFTCard from "./NFTCard";

function Hero() {
  return (
    <section className="relative z-10 flex items-center min-h-screen text-white px-4 sm:px-6 lg:px-10 py-16 overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-14 lg:gap-20">
          {/* LEFT CONTENT */}
          <div className="max-w-3xl flex-1 text-center lg:text-left flex flex-col items-center lg:items-start">
            <p className="uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[#3BA3FF] mb-3 sm:mb-4 font-medium text-xs sm:text-sm md:text-base">
              The Future Of Creativity
            </p>

            <h1 className="heading font-black leading-tight text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
              Discover, Collect and Sell Dope Arts and NFTs
            </h1>

            <p className="mt-5 sm:mt-6 text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
              Buy, sell, and explore rare NFTs while discovering the future of
              digital ownership and decentralized creativity.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 mt-8 sm:mt-10 w-full sm:w-auto">
              <button className="signup-btn w-full sm:w-auto px-8 py-3">
                Discover
              </button>

              <button className="login-btn rounded-full w-full sm:w-auto px-8 py-3">
                Create
              </button>
            </div>

            {/* STATS */}
            <div className="mt-10 w-full flex justify-center lg:justify-start">
              <StatsCard />
            </div>
          </div>

          <div className="hidden lg:flex lg:w-auto justify-center items-center">
            <div className="lg:scale-110">
              <NFTCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
