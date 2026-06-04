// NFTDetailModal.jsx
import React from 'react';
import { X, Heart, Share2, ShoppingCart, ExternalLink } from 'lucide-react';

function NFTDetailModal({ nft, isOpen, onClose }) {
  if (!isOpen || !nft) return null;

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-xl z-[200] flex items-center justify-center p-4">
      <div className="bg-[#0b1330] border border-[#2d4fff]/40 rounded-3xl w-full max-w-2xl max-h-[95vh] overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#2d4fff]/20">
          <div>
            <h2 className="text-2xl font-bold">{nft.name}</h2>
            <p className="text-[#8ea2ff] text-sm">{nft.id} • {nft.collection || "Eternal Bloom"}</p>
          </div>
          <button
            onClick={onClose}
            className="p-3 hover:bg-[#1a254f] rounded-2xl transition"
          >
            <X size={28} />
          </button>
        </div>

        {/* Image / Visual */}
        <div className="p-6 flex justify-center bg-gradient-to-br from-[#5f7dff]/5 to-[#8ea2ff]/5">
          <div className="text-[180px] md:text-[220px] transition-transform hover:scale-105">
            {nft.emoji}
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto flex-1">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-[#8ea2ff] text-sm">Current Price</p>
              <p className="text-4xl font-bold text-[#5f7dff]">{nft.price}</p>
            </div>
            <div className="text-right">
              <p className="text-green-400 text-sm">Owned by you</p>
              <p className="text-xs text-[#8ea2ff]">Floor Price • 1.8 ETH</p>
            </div>
          </div>

          <div>
            <p className="text-[#8ea2ff] text-sm mb-2">Description</p>
            <p className="text-white leading-relaxed">
              A mesmerizing digital artwork that captures the essence of the cosmos. 
              Part of the exclusive Eternal Bloom collection.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <button className="py-4 bg-white text-black font-semibold rounded-2xl flex items-center justify-center gap-2 hover:bg-gray-200 transition">
              <ShoppingCart size={20} />
              Buy Now
            </button>
            <button className="py-4 border border-[#2d4fff]/50 hover:border-[#5f7dff] rounded-2xl flex items-center justify-center gap-2 transition">
              <Heart size={20} />
              Add to Favorites
            </button>
          </div>

          <div className="flex gap-3 text-sm">
            <button className="flex-1 py-3 border border-[#2d4fff]/40 rounded-2xl hover:bg-[#1a254f] transition flex items-center justify-center gap-2">
              <Share2 size={18} />
              Share
            </button>
            <button className="flex-1 py-3 border border-[#2d4fff]/40 rounded-2xl hover:bg-[#1a254f] transition flex items-center justify-center gap-2">
              <ExternalLink size={18} />
              View on OpenSea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NFTDetailModal;