import React from "react";

const categories = [
  {
    id: 1,
    name: "Abstract",
    count: 30,
    images: [
      "https://picsum.photos/id/1015/300/300",
      "https://picsum.photos/id/102/300/300",
      "https://picsum.photos/id/1033/300/300",
      "https://picsum.photos/id/1049/300/300",
    ],
  },
  {
    id: 2,
    name: "3D Art",
    count: 45,
    images: [
      "https://picsum.photos/id/106/300/300",
      "https://picsum.photos/id/1074/300/300",
      "https://picsum.photos/id/133/300/300",
      "https://picsum.photos/id/201/300/300",
    ],
  },
  {
    id: 3,
    name: "Modern Art",
    count: 19,
    images: [
      "https://picsum.photos/id/1018/300/300",
      "https://picsum.photos/id/160/300/300",
      "https://picsum.photos/id/163/300/300",
      "https://picsum.photos/id/201/300/300",
    ],
  },
  {
    id: 4,
    name: "Game",
    count: 20,
    images: [
      "https://picsum.photos/id/180/300/300",
      "https://picsum.photos/id/201/300/300",
      "https://picsum.photos/id/251/300/300",
      "https://picsum.photos/id/367/300/300",
    ],
  },
  {
    id: 5,
    name: "Graffiti",
    count: 30,
    images: [
      "https://picsum.photos/id/1016/300/300",
      "https://picsum.photos/id/133/300/300",
      "https://picsum.photos/id/201/300/300",
      "https://picsum.photos/id/251/300/300",
    ],
  },
  {
    id: 6,
    name: "Watercolor",
    count: 40,
    images: [
      "https://picsum.photos/id/1015/300/300",
      "https://picsum.photos/id/106/300/300",
      "https://picsum.photos/id/160/300/300",
      "https://picsum.photos/id/367/300/300",
    ],
  },
];

function ExploreArtworks() {
  return (
    <section className="w-full bg-[#050816] py-16 px-4 overflow-hidden relative">
      {/* Background gradient overlay similar to the image */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0a1433] to-[#050816] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Title */}
        <div className="flex justify-center mb-12">
          <h2 className="text-white text-3xl md:text-5xl font-bold tracking-wide" style={{ fontFamily: "Redhawk" }}>
            Explore Artworks
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-[#0b1330] border border-[#2d4fff]/40 rounded-3xl overflow-hidden hover:border-[#5f7dff] hover:shadow-[0_0_40px_rgba(93,125,255,0.3)] transition-all duration-300 cursor-pointer"
            >
              {/* Image Collage */}
              <div className="grid grid-cols-2 gap-1 p-3 bg-black/40">
                {category.images.map((img, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-2xl overflow-hidden border border-white/10"
                  >
                    <img
                      src={img}
                      alt={`${category.name} artwork ${idx + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                ))}
              </div>

              {/* Category Label */}
              <div className="absolute bottom-4 left-4 bg-[#1a254f] text-white text-sm px-4 py-1.5 rounded-2xl flex items-center gap-2 border border-[#5f7dff]/30">
                <span className="font-semibold">{category.name}</span>
                <span className="text-[#8ea2ff] font-medium">
                  {category.count} Items
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Join Us Banner - matching the image's rounded purple/blue button area */}
        <div className="mt-16 mx-auto max-w-3xl overflow-hidden rounded-tl-[30%] rounded-br-[30%]" style={{ fontFamily: "Redhawk"}}>
          <div className="bg-gradient-to-r from-[#1e2a5e] via-[#2a3b7f] to-[#1e2a5e] rounded-[40px] p-10 text-center border border-[#5f7dff]/30 shadow-xl">
            <h3 className="text-white text-2xl md:text-3xl font-semibold mb-3 tracking-wide">
              Join Us to Create Sell and
              <br />
              Collect NFTs Digital Art
            </h3>
            <button className="mt-6 px-8 py-3.5 bg-gradient-to-r from-[#5f7dff] to-[#8ea2ff] hover:from-[#7a8fff] hover:to-[#a3b8ff] text-white font-semibold rounded-2xl text-lg transition-all duration-300 active:scale-95 shadow-lg shadow-[#5f7dff]/50">
              Join Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExploreArtworks;