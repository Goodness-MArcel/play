
import StatsCard from "./StatsCard";
import NFTCard from "./NFTCard";

function Hero() {
  return (
    <section className="relative z-10 flex items-center min-h-[85vh] text-white">
      <div className="container mx-auto px-4">
        <div className="flex gap-8 items-center">
          <div className="max-w-3xl flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            <p className="uppercase tracking-[0.25em] text-[#3BA3FF] mb-4 font-medium text-sm md:text-base">
              The Future Of Creativity
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl heading font-black leading-[1.1] tracking-tighter">
              Discover, Collect And Sell Dope Arts And NFTs
            </h1>

            <p className="mt-6 text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl">
              Buy, sell, and explore rare NFTs while discovering the future of
              digital ownership and decentralized creativity.
            </p>

            <div className="flex gap-4 sm:gap-5 mt-8 md:mt-10 justify-center md:justify-start">
              <button className="signup-btn text-base md:text-lg px-6 py-3">
                Discover
              </button>

              <button className="login-btn rounded-full text-base md:text-lg px-6 py-3">
                Create
              </button>
            </div>

            <StatsCard />
          </div>

          <div className="flex-shrink-0 h-auto justify-center items-center hidden lg:flex ml-38 lg:ml-12">
            <NFTCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;