import React from 'react';
import { Heart, Trash2, Share2 } from 'lucide-react';

function Favorites() {
  const favorites = [
    { 
      id: "#421", 
      name: "Cosmic Dreamer", 
      collection: "Eternal Bloom", 
      price: "2.45 ETH", 
      image: "🌌",
      floor: "1.8 ETH"
    },
    { 
      id: "#89", 
      name: "Neon Samurai", 
      collection: "Cyber Legends", 
      price: "5.8 ETH", 
      image: "⚔️",
      floor: "4.2 ETH"
    },
    { 
      id: "#12", 
      name: "Pixel Goddess", 
      collection: "Astral Voyagers", 
      price: "3.2 ETH", 
      image: "👸",
      floor: "2.9 ETH"
    },
    { 
      id: "#56", 
      name: "Eternal Bloom", 
      collection: "Eternal Bloom", 
      price: "1.8 ETH", 
      image: "🌸",
      floor: "1.5 ETH"
    },
    { 
      id: "#234", 
      name: "Cyber Ronin", 
      collection: "Cyber Legends", 
      price: "4.2 ETH", 
      image: "🤖",
      floor: "3.8 ETH"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-semibold">Favorites</h2>
          <p className="text-[#8ea2ff] mt-1">{favorites.length} items saved</p>
        </div>
        <button className="text-red-400 hover:text-red-500 flex items-center gap-2 text-sm">
          <Trash2 size={18} />
          Clear All
        </button>
      </div>

      {/* Favorites Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {favorites.map((nft) => (
          <div
            key={nft.id}
            className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl overflow-hidden hover:border-[#5f7dff] transition-all group relative"
          >
            {/* Heart Icon */}
            <button className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-red-500 p-2 rounded-full transition-all">
              <Heart size={18} className="text-red-500 fill-red-500" />
            </button>

            <div className="h-44 sm:h-52 bg-gradient-to-br from-[#5f7dff]/10 to-[#8ea2ff]/10 flex items-center justify-center text-6xl">
              {nft.image}
            </div>

            <div className="p-4">
              <p className="font-semibold text-base group-hover:text-[#5f7dff] transition line-clamp-1">
                {nft.name}
              </p>
              <p className="text-[#8ea2ff] text-xs mt-0.5">{nft.collection}</p>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-[#5f7dff] font-medium">{nft.price}</p>
                  <p className="text-xs text-[#8ea2ff]">Floor: {nft.floor}</p>
                </div>
                <button className="text-[#8ea2ff] hover:text-white transition">
                  <Share2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State (if no favorites) */}
      {favorites.length === 0 && (
        <div className="text-center py-20">
          <Heart size={60} className="mx-auto text-[#8ea2ff]/30 mb-4" />
          <p className="text-xl text-[#8ea2ff]">No favorites yet</p>
          <p className="text-sm mt-2">Start adding NFTs you love!</p>
        </div>
      )}
    </div>
  );
}

export default Favorites;