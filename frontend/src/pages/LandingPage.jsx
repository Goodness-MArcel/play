import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";

import  SponsorsCarousel from "../components/Sponsor.jsx";
import TopSellers from "../components/TopSellers.jsx";
import NFTCarousel from "../components/TreandingNft.jsx";


function LandingPage() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{
        background: `
          linear-gradient(
            135deg,
            #1A0F3D 0%,
            #0A0A1F 50%,
            #000000 100%
          )
        `,
      }}
    >

      {/* TOP LEFT BLUE GLOW */}
      <div className="absolute left-0 top-0 h-[26rem] w-[76.5rem] bg-gradient-to-r from-[#3BA3FF] via-[#0A0A1F] to-transparent blur-3xl opacity-80"></div>

      {/* BOTTOM RIGHT PURPLE/BLUE GLOW */}
      <div className="absolute right-0 bottom-0 h-[26rem] w-[76.5rem] bg-gradient-to-l from-[#3BA3FF] via-[#0A0A1F] to-transparent blur-3xl opacity-80"></div>

      {/* CENTER SOFT LIGHT */}
      <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 bg-[#3BA3FF]/10 blur-[120px] rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <SponsorsCarousel />
        
        <NFTCarousel />
        <TopSellers />
      </div>

    </section>
  );
}

export default LandingPage;