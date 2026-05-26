import React from 'react';
import { TrendingUp, Award, Users, Eye } from 'lucide-react';

function Dashboard() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Welcome Header */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-2">Good morning, Alex 👋</h2>
        <p className="text-[#8ea2ff] text-sm sm:text-base">Here's what's happening with your collection today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8ea2ff] text-xs sm:text-sm">Total NFTs</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">248</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5f7dff]/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Award size={24} className="sm:w-7 sm:h-7 text-[#5f7dff]" />
            </div>
          </div>
          <p className="text-green-400 text-xs sm:text-sm mt-3 sm:mt-4 flex items-center gap-1">
            <TrendingUp size={14} className="sm:w-4 sm:h-4" /> +12 this month
          </p>
        </div>

        <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8ea2ff] text-xs sm:text-sm">Portfolio Value</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">42.8 ETH</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5f7dff]/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl">
              💎
            </div>
          </div>
          <p className="text-green-400 text-xs sm:text-sm mt-3 sm:mt-4">+$8.2 ETH (+23.7%)</p>
        </div>

        <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8ea2ff] text-xs sm:text-sm">Floor Value</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">18.4 ETH</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5f7dff]/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl">
              📈
            </div>
          </div>
          <p className="text-[#8ea2ff] text-xs sm:text-sm mt-3 sm:mt-4">Avg. Floor Price</p>
        </div>

        <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8ea2ff] text-xs sm:text-sm">Watchlist</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">17</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5f7dff]/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Eye size={24} className="sm:w-7 sm:h-7 text-[#5f7dff]" />
            </div>
          </div>
          <p className="text-amber-400 text-xs sm:text-sm mt-3 sm:mt-4">3 new drops</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Recent Activity</h3>
        <div className="space-y-3 sm:space-y-4">
          {[
            { action: "Purchased", item: "Cosmic Dreamer #421", price: "2.45 ETH", time: "2 hours ago" },
            { action: "Sold", item: "Neon Samurai #89", price: "5.8 ETH", time: "Yesterday" },
            { action: "Received", item: "Airdrop: Eternal Bloom", price: "Free", time: "2 days ago" },
            { action: "Listed", item: "Pixel Goddess #12", price: "3.2 ETH", time: "3 days ago" },
          ].map((activity, i) => (
            <div key={i} className="flex items-center justify-between py-2 sm:py-3 border-b border-[#2d4fff]/20 last:border-0">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-[#1a254f] rounded-xl sm:rounded-2xl flex items-center justify-center text-base sm:text-xl">
                  {activity.action === "Purchased" ? "🛍️" : 
                   activity.action === "Sold" ? "💰" : "🎁"}
                </div>
                <div>
                  <p className="text-sm sm:text-base font-medium">{activity.action} <span className="text-[#8ea2ff] text-xs sm:text-sm">{activity.item}</span></p>
                  <p className="text-[10px] sm:text-xs text-[#8ea2ff]">{activity.time}</p>
                </div>
              </div>
              <p className="text-sm sm:text-base font-semibold text-right">{activity.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Collections Preview */}
      <div>
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h3 className="text-lg sm:text-xl font-semibold">My Collections</h3>
          <a href="/dashboard/nfts" className="text-[#5f7dff] hover:underline text-xs sm:text-sm">View All →</a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {["Eternal Bloom", "Cyber Legends", "Neon Abyss", "Astral Voyagers"].map((col, i) => (
            <div key={i} className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-[#5f7dff] transition-all group">
              <div className="h-32 sm:h-40 bg-gradient-to-br from-[#5f7dff]/20 to-[#8ea2ff]/10 flex items-center justify-center text-5xl sm:text-6xl">
                {i === 0 ? "🌸" : i === 1 ? "⚔️" : i === 2 ? "🌃" : "🪐"}
              </div>
              <div className="p-3 sm:p-4">
                <p className="text-sm sm:text-base font-semibold group-hover:text-[#5f7dff] transition">{col}</p>
                <p className="text-[10px] sm:text-xs text-[#8ea2ff]">12 Items • Floor: 0.8 ETH</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;