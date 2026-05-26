import React, { useState } from 'react';
import { Search, Grid, List, Upload, X, Image as ImageIcon } from 'lucide-react';

function MyNFTs() {
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');
  const [showUploadModal, setShowUploadModal] = useState(false);

  const nfts = [
    { id: "#421", name: "Cosmic Dreamer", collection: "Eternal Bloom", price: "2.45 ETH", image: "🌌", status: "Owned" },
    { id: "#89", name: "Neon Samurai", collection: "Cyber Legends", price: "5.8 ETH", image: "⚔️", status: "Listed" },
    { id: "#12", name: "Pixel Goddess", collection: "Astral Voyagers", price: "3.2 ETH", image: "👸", status: "Owned" },
    { id: "#56", name: "Eternal Bloom", collection: "Eternal Bloom", price: "1.8 ETH", image: "🌸", status: "Owned" },
  ];

  const filteredNFTs = nfts.filter(nft =>
    nft.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nft.collection.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold">My NFTs</h2>
          <p className="text-[#8ea2ff] mt-1">You own {nfts.length} NFTs</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Upload Button */}
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 bg-[#5f7dff] hover:bg-[#4a68e0] px-5 py-3 rounded-2xl text-white font-medium transition-all active:scale-95"
          >
            <Upload size={20} />
            <span>Upload NFT</span>
          </button>

          {/* View Toggle */}
          <div className="flex gap-1 bg-[#0b1330] border border-[#2d4fff]/40 rounded-2xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-xl transition ${viewMode === 'grid' ? 'bg-[#1a254f] text-white' : 'text-[#8ea2ff]'}`}
            >
              <Grid size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-xl transition ${viewMode === 'list' ? 'bg-[#1a254f] text-white' : 'text-[#8ea2ff]'}`}
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
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {filteredNFTs.map((nft) => (
          <div key={nft.id} className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl overflow-hidden hover:border-[#5f7dff] transition-all group cursor-pointer">
            <div className="h-44 sm:h-52 bg-gradient-to-br from-[#5f7dff]/10 to-[#8ea2ff]/10 flex items-center justify-center text-6xl">
              {nft.image}
            </div>
            <div className="p-4">
              <p className="font-semibold text-base group-hover:text-[#5f7dff] transition line-clamp-1">
                {nft.name}
              </p>
              <p className="text-[#8ea2ff] text-xs mt-0.5">{nft.collection}</p>
              <div className="flex justify-between items-center mt-4">
                <p className="text-[#5f7dff] font-medium">{nft.price}</p>
                <span className={`text-xs px-3 py-1 rounded-full ${
                  nft.status === 'Listed' ? 'bg-yellow-500/10 text-yellow-400' : 'bg-green-500/10 text-green-400'
                }`}>
                  {nft.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload NFT Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-xl z-[100] flex items-center justify-center p-4">
          <div className="bg-[#0b1330] border border-[#2d4fff]/40 rounded-3xl w-full max-w-lg">
            <div className="flex items-center justify-between p-6 border-b border-[#2d4fff]/20">
              <h3 className="text-2xl font-semibold">Upload New NFT</h3>
              <button onClick={() => setShowUploadModal(false)} className="text-[#8ea2ff] hover:text-white">
                <X size={28} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Upload Area */}
              <div className="border-2 border-dashed border-[#2d4fff]/50 rounded-2xl h-64 flex flex-col items-center justify-center hover:border-[#5f7dff] transition cursor-pointer">
                <ImageIcon size={48} className="text-[#5f7dff] mb-4" />
                <p className="text-lg font-medium">Drag & Drop or Click to Upload</p>
                <p className="text-[#8ea2ff] text-sm mt-1">PNG, JPG, GIF, WEBP up to 100MB</p>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="block text-[#8ea2ff] text-sm mb-2">NFT Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Cosmic Dreamer #421"
                    className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-3 focus:outline-none focus:border-[#5f7dff]"
                  />
                </div>

                <div>
                  <label className="block text-[#8ea2ff] text-sm mb-2">Description</label>
                  <textarea
                    placeholder="Describe your NFT..."
                    rows={3}
                    className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-3 focus:outline-none focus:border-[#5f7dff]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-2">Price (ETH)</label>
                    <input
                      type="text"
                      placeholder="0.00"
                      className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-3 focus:outline-none focus:border-[#5f7dff]"
                    />
                  </div>
                  <div>
                    <label className="block text-[#8ea2ff] text-sm mb-2">Collection</label>
                    <select className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-3 focus:outline-none focus:border-[#5f7dff]">
                      <option>Eternal Bloom</option>
                      <option>Cyber Legends</option>
                      <option>Astral Voyagers</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-[#2d4fff]/20 flex gap-3">
              <button
                onClick={() => setShowUploadModal(false)}
                className="flex-1 py-3 border border-[#2d4fff]/40 rounded-2xl hover:bg-[#1a254f] transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert("🎉 NFT uploaded successfully! (Demo)");
                  setShowUploadModal(false);
                }}
                className="flex-1 py-3 bg-gradient-to-r from-[#5f7dff] to-[#8ea2ff] rounded-2xl font-semibold hover:scale-105 transition"
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