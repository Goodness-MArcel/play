import React, { useState } from "react";
import {
  Search,
  Grid,
  List,
  Upload,
  X,
  Image as ImageIcon,
} from "lucide-react";

function MyNFTs() {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [showUploadModal, setShowUploadModal] = useState(false);

  const nfts = [
    {
      id: "#421",
      name: "Cosmic Dreamer",
      collection: "Eternal Bloom",
      price: "2.45 ETH",
      image: "🌌",
      status: "Owned",
    },
    {
      id: "#89",
      name: "Neon Samurai",
      collection: "Cyber Legends",
      price: "5.8 ETH",
      image: "⚔️",
      status: "Listed",
    },
    {
      id: "#12",
      name: "Pixel Goddess",
      collection: "Astral Voyagers",
      price: "3.2 ETH",
      image: "👸",
      status: "Owned",
    },
    {
      id: "#56",
      name: "Eternal Bloom",
      collection: "Eternal Bloom",
      price: "1.8 ETH",
      image: "🌸",
      status: "Owned",
    },
  ];

  const filteredNFTs = nfts.filter(
    (nft) =>
      nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      nft.collection.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[#8ea2ff] mt-1">You own {nfts.length} NFTs</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 bg-[#5f7dff] hover:bg-[#4a68e0] px-5 py-3 rounded-2xl text-white font-medium transition-all active:scale-95"
          >
            <Upload size={20} />
            <span>Upload NFT</span>
          </button>

          <div className="flex gap-1 bg-[#0b1330] border border-[#2d4fff]/40 rounded-2xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2.5 rounded-xl transition ${viewMode === "grid" ? "bg-[#1a254f] text-white" : "text-[#8ea2ff]"}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2.5 rounded-xl transition ${viewMode === "list" ? "bg-[#1a254f] text-white" : "text-[#8ea2ff]"}`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-4 top-3.5 text-[#8ea2ff]" size={20} />
        <input
          type="text"
          placeholder="Search your NFTs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-[#0b1330] border border-[#2d4fff]/40 rounded-2xl pl-11 py-3 w-full text-sm focus:outline-none focus:border-[#5f7dff]"
        />
      </div>

      {/* NFT Grid */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredNFTs.map((nft) => (
            <div
              key={nft.id}
              className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl overflow-hidden hover:border-[#5f7dff] transition-all group cursor-pointer"
            >
              <div className="h-44 sm:h-52 bg-gradient-to-br from-[#5f7dff]/10 to-[#8ea2ff]/10 flex items-center justify-center text-6xl">
                {nft.image}
              </div>
              <div className="p-4">
                <p className="font-semibold text-base group-hover:text-[#5f7dff] transition line-clamp-1">
                  {nft.name}
                </p>
                <p className="text-[#8ea2ff] text-xs mt-0.5">
                  {nft.collection}
                </p>
                <div className="flex justify-between items-center mt-4">
                  <p className="text-[#5f7dff] font-medium">{nft.price}</p>
                  <span
                    className={`text-xs px-3 py-1 rounded-full ${
                      nft.status === "Listed"
                        ? "bg-yellow-500/10 text-yellow-400"
                        : "bg-green-500/10 text-green-400"
                    }`}
                  >
                    {nft.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* ==================== LIST VIEW ==================== */
        <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2d4fff]/20 text-left text-[#8ea2ff] text-sm">
                <th className="p-5 font-medium">NFT</th>
                {/* <th className="p-5 font-medium">Collection</th> */}
                <th className="p-5 font-medium">Price</th>
                <th className="p-5 font-medium">Status</th>
                <th className="p-5 w-20"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2d4fff]/10">
              {filteredNFTs.map((nft) => (
                <tr
                  key={nft.id}
                  className="hover:bg-[#1a254f]/50 transition group"
                >
                  <td className="p-3.5 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#5f7dff]/10 to-[#8ea2ff]/10 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0">
                      {nft.image}
                    </div>
                    <div>
                      <p className="text-xs   font-semibold group-hover:text-[#5f7dff] transition">
                        {nft.name}
                      </p>
                      {/* <p className="text-xs text-[#8ea2ff]">{nft.id}</p> */}
                    </div>
                  </td>
                  {/* <td className="p-3.5 text-[#8ea2ff]">{nft.collection}</td> */}
                  <td className="text-xs text-nowrap p-3.5 font-medium text-[#5f7dff]">
                    {nft.price}
                  </td>
                  <td className="p-3.5 text-xs">
                    <span
                      className={`text-xs px-4 py-1.5 rounded-full ${
                        nft.status === "Listed"
                          ? "bg-yellow-500/10 text-yellow-400"
                          : "bg-green-500/10 text-green-400"
                      }`}
                    >
                      {nft.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    {/* <button className="text-[#5f7dff] hover:text-white opacity-0 group-hover:opacity-100 transition">
                      View
                    </button> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Upload NFT Modal - Optimized for Mobile */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0b1330] border border-[#2d4fff]/40 rounded-3xl w-full max-w-lg max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#2d4fff]/20">
              <h3 className="text-xl sm:text-2xl font-semibold">
                Upload New NFT
              </h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-[#8ea2ff] hover:text-white p-1"
              >
                <X size={26} />
              </button>
            </div>

            {/* Modal Body - Smaller fonts on mobile */}
            <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-[#2d4fff]/50 rounded-2xl h-52 sm:h-64 flex flex-col items-center justify-center hover:border-[#5f7dff] transition cursor-pointer">
                <ImageIcon size={40} className="text-[#5f7dff] mb-3" />
                <p className="text-base sm:text-lg font-medium text-center">
                  Drag & Drop or Click to Upload
                </p>
                <p className="text-[#8ea2ff] text-xs sm:text-sm mt-1 text-center">
                  PNG, JPG, GIF, WEBP up to 100MB
                </p>
              </div>

              {/* Form Fields */}
              <div className="space-y-5">
                <div>
                  <label className="block text-[#8ea2ff] text-sm mb-1.5">
                    NFT Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Cosmic Dreamer #421"
                    className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#5f7dff]"
                  />
                </div>

                <div>
                  <label className="block text-[#8ea2ff] text-sm mb-1.5">
                    Description
                  </label>
                  <textarea
                    placeholder="Describe your NFT..."
                    rows={3}
                    className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#5f7dff]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-1.5">
                      Price (ETH)
                    </label>
                    <input
                      type="text"
                      placeholder="0.00"
                      className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#5f7dff]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-1.5">
                      Collection
                    </label>
                    <select className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-4 py-3 text-sm sm:text-base focus:outline-none focus:border-[#5f7dff]">
                      <option>Eternal Bloom</option>
                      <option>Cyber Legends</option>
                      <option>Astral Voyagers</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="p-5 border-t border-[#2d4fff]/20 flex gap-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 py-3.5 border border-[#2d4fff]/40 rounded-2xl hover:bg-[#1a254f] transition text-sm sm:text-base"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("🎉 NFT uploaded successfully! (Demo)");
                  setShowUploadModal(false);
                }}
                className="flex-1 py-3.5 bg-gradient-to-r from-[#5f7dff] to-[#8ea2ff] rounded-2xl font-semibold hover:scale-105 transition text-sm sm:text-base"
              >
                Upload NFT
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyNFTs;
