import React from "react";

const sellers = [
  {
    id: 1,
    name: "Leighton Kramer",
    amount: "276.7 Eth",
    image: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Haylie Arcand",
    amount: "345.6 Eth",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Bowen Higgins",
    amount: "323.7 Eth",
    image: "https://i.pravatar.cc/150?img=14",
  },
  {
    id: 4,
    name: "Saige Fuentes",
    amount: "347.7 Eth",
    image: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: 5,
    name: "Sophie Mcloin",
    amount: "230.6 Eth",
    image: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: 6,
    name: "Jeremy Burch",
    amount: "267.9 Eth",
    image: "https://i.pravatar.cc/150?img=18",
  },
  {
    id: 7,
    name: "Amelie Griffith",
    amount: "334.1 Eth",
    image: "https://i.pravatar.cc/150?img=24",
  },
  {
    id: 8,
    name: "Isabela Hart",
    amount: "289.1 Eth",
    image: "https://i.pravatar.cc/150?img=28",
  },
  {
    id: 9,
    name: "Diego Bentley",
    amount: "290.7 Eth",
    image: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 10,
    name: "Daisy Arnold",
    amount: "265.4 Eth",
    image: "https://i.pravatar.cc/150?img=48",
  },
];

function TopSellers() {
  return (
    <section className="w-full bg-[#050816] py-16 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="flex justify-center mb-12">
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-wide" style={{ fontFamily: "Redhawk" }}>
            Top Sellers
          </h2>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid grid-cols-5 gap-5">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="group relative bg-[#0b1330] border border-[#2d4fff]/40 rounded-2xl px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:border-[#5f7dff] hover:shadow-[0_0_30px_rgba(70,90,255,0.35)]"
            >
              {/* Avatar */}
              <div className="relative">
                <img
                  src={seller.image}
                  alt={seller.name}
                  className="w-14 h-14 rounded-xl object-cover border-2 border-[#5f7dff]"
                />

                <div className="absolute inset-0 rounded-xl bg-[#5f7dff]/10 group-hover:bg-[#5f7dff]/20 transition-all duration-300"></div>
              </div>

              {/* Info */}
              <div>
                <h3 className="text-white font-semibold text-sm leading-tight">
                  {seller.name}
                </h3>

                <p className="text-[#8ea2ff] text-sm mt-1">
                  {seller.amount}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory">
          {sellers.map((seller) => (
            <div
              key={seller.id}
              className="min-w-[240px] snap-center bg-[#0b1330] border border-[#2d4fff]/40 rounded-2xl p-4 flex items-center gap-4"
            >
              <img
                src={seller.image}
                alt={seller.name}
                className="w-16 h-16 rounded-2xl object-cover border-2 border-[#5f7dff]"
              />

              <div>
                <h3 className="text-white font-semibold text-base">
                  {seller.name}
                </h3>
                
                <p className="text-[#8ea2ff] mt-1 text-sm">
                  {seller.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopSellers;