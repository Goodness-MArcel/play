import StatsCard from "./StatsCard";
import NFTCard from "./NFTCard";

function Hero() {
  return (
    <section className="relative z-10 flex items-center min-h-[85vh] text-white">
      <div className="container mx-auto">
        <div className="flex gap-8 items-center ">
          <div className="max-w-3xl flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            <p className="uppercase tracking-[0.3em] text-[#3BA3FF] mb-4 font-medium">
              The Future Of Creativity
            </p>

            <h1 className="text-5xl md:text-7xl heading font-black leading-tight">
              Discover, Collect and Sell Dope Arts and NFTs
            </h1>

            <p className="mt-6 text-gray-300 text-xl leading-relaxed max-w-2xl">
              Buy, sell, and explore rare NFTs while discovering the future of
              digital ownership and decentralized creativity.
            </p>

            <div className="flex gap-5 mt-10 justify-center md:justify-start">
              <button className="signup-btn">Discover</button>

              <button className="login-btn rounded-full">Create</button>
            </div>

            <StatsCard />
          </div>

          <div className="flex-shrink-0 h-auto justify-center items-center hidden lg:flex ml-38">
            <NFTCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
