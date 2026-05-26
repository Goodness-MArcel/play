import React from 'react';
import { Settings, Copy, Mail, MapPin, Calendar, Link as LinkIcon, Users, Award, Eye, TrendingUp, Edit2 } from 'lucide-react';

function MyProfile() {
  return (
    <div className="space-y-6 sm:space-y-8 overflow-hidden">
      {/* Profile Header */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8">
        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
          {/* Avatar Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative">
              <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#5f7dff] to-[#8ea2ff] rounded-3xl flex items-center justify-center text-4xl sm:text-5xl">
                👨‍🎨
              </div>
              <button className="absolute bottom-0 right-0 bg-[#5f7dff] p-1.5 sm:p-2 rounded-xl hover:bg-[#4a68e0] transition-colors">
                <Edit2 size={14} className="sm:w-4 sm:h-4 text-white" />
              </button>
            </div>
            <button className="mt-4 text-[#5f7dff] text-xs sm:text-sm hover:underline">Change Avatar</button>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Alex Morgan</h1>
                  <span className="px-2 py-1 bg-[#5f7dff]/10 text-[#5f7dff] text-xs sm:text-sm rounded-full">Verified Collector</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-[#8ea2ff] text-sm sm:text-base">@alexmorgan</span>
                  <button className="text-[#8ea2ff] hover:text-[#5f7dff] transition">
                    <Copy size={14} className="sm:w-4 sm:h-4" />
                  </button>
                </div>
                <p className="text-[#8ea2ff] text-sm sm:text-base mt-3 max-w-2xl">
                  Digital art collector & NFT enthusiast. Exploring the intersection of art and blockchain since 2021.
                </p>
              </div>
              <button className="px-4 py-2 bg-[#5f7dff] hover:bg-[#4a68e0] rounded-xl text-white text-sm sm:text-base font-medium transition-colors flex items-center gap-2">
                <Settings size={16} className="sm:w-4 sm:h-4" /> Edit Profile
              </button>
            </div>

            {/* Contact Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 pt-6 border-t border-[#2d4fff]/20">
              <div className="flex items-center gap-2 text-[#8ea2ff] text-xs sm:text-sm">
                <Mail size={14} className="sm:w-4 sm:h-4" /> alex.morgan@example.com
              </div>
              <div className="flex items-center gap-2 text-[#8ea2ff] text-xs sm:text-sm">
                <MapPin size={14} className="sm:w-4 sm:h-4" /> New York, USA
              </div>
              <div className="flex items-center gap-2 text-[#8ea2ff] text-xs sm:text-sm">
                <Calendar size={14} className="sm:w-4 sm:h-4" /> Joined March 2022
              </div>
              <div className="flex items-center gap-2 text-[#8ea2ff] text-xs sm:text-sm">
                <LinkIcon size={14} className="sm:w-4 sm:h-4" /> alexmorgan.art
              </div>
            </div>
          </div>
        </div>
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
              <p className="text-[#8ea2ff] text-xs sm:text-sm">Total Volume</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">127.5 ETH</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5f7dff]/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-xl sm:text-2xl">
              💰
            </div>
          </div>
          <p className="text-green-400 text-xs sm:text-sm mt-3 sm:mt-4">All-time sales</p>
        </div>

        <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8ea2ff] text-xs sm:text-sm">Followers</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">2,847</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5f7dff]/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Users size={24} className="sm:w-7 sm:h-7 text-[#5f7dff]" />
            </div>
          </div>
          <p className="text-[#8ea2ff] text-xs sm:text-sm mt-3 sm:mt-4">+184 this week</p>
        </div>

        <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#8ea2ff] text-xs sm:text-sm">Profile Views</p>
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">15.2K</p>
            </div>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5f7dff]/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
              <Eye size={24} className="sm:w-7 sm:h-7 text-[#5f7dff]" />
            </div>
          </div>
          <p className="text-amber-400 text-xs sm:text-sm mt-3 sm:mt-4">This month</p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="border-b border-[#2d4fff]/20 px-4 sm:px-6">
          <div className="flex gap-4 sm:gap-6 overflow-x-auto">
            {["Collection", "Created", "Favorites", "Activity"].map((tab, i) => (
              <button
                key={i}
                className={`px-2 py-3 sm:py-4 text-sm sm:text-base font-medium transition-colors whitespace-nowrap ${
                  i === 0
                    ? "text-[#5f7dff] border-b-2 border-[#5f7dff]"
                    : "text-[#8ea2ff] hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* NFT Grid - Collection Tab */}
        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[
              { name: "Cosmic Dreamer", id: "#421", price: "2.45 ETH", image: "🌌" },
              { name: "Neon Samurai", id: "#89", price: "5.8 ETH", image: "⚔️" },
              { name: "Pixel Goddess", id: "#12", price: "3.2 ETH", image: "👸" },
              { name: "Eternal Bloom", id: "#56", price: "1.8 ETH", image: "🌸" },
              { name: "Cyber Legends", id: "#234", price: "4.2 ETH", image: "🤖" },
              { name: "Neon Abyss", id: "#77", price: "2.9 ETH", image: "🌃" },
              { name: "Astral Voyagers", id: "#101", price: "6.1 ETH", image: "🪐" },
              { name: "Digital Dreams", id: "#88", price: "1.5 ETH", image: "✨" },
            ].map((nft, i) => (
              <div
                key={i}
                className="bg-[#0a1030] border border-[#2d4fff]/30 rounded-xl sm:rounded-2xl overflow-hidden hover:border-[#5f7dff] transition-all cursor-pointer group"
              >
                <div className="h-32 sm:h-40 bg-gradient-to-br from-[#5f7dff]/20 to-[#8ea2ff]/10 flex items-center justify-center text-5xl sm:text-6xl">
                  {nft.image}
                </div>
                <div className="p-3 sm:p-4">
                  <p className="text-sm sm:text-base font-semibold group-hover:text-[#5f7dff] transition">
                    {nft.name} <span className="text-[#8ea2ff] text-xs sm:text-sm">{nft.id}</span>
                  </p>
                  <p className="text-xs sm:text-sm text-[#5f7dff] mt-2 font-medium">{nft.price}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-6 sm:mt-8">
            <button className="px-6 py-2 sm:px-8 sm:py-3 border border-[#2d4fff]/50 hover:border-[#5f7dff] rounded-xl text-[#8ea2ff] hover:text-white text-sm sm:text-base transition-colors">
              View All Collection →
            </button>
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Recent Achievements 🏆</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {[
            { title: "Early Adopter", desc: "Joined in 2022", icon: "🚀" },
            { title: "Collection Master", desc: "Own 200+ NFTs", icon: "👑" },
            { title: "Top Collector", desc: "Top 5% collectors", icon: "💎" },
          ].map((achievement, i) => (
            <div key={i} className="flex items-center gap-3 p-3 sm:p-4 bg-[#0a1030] rounded-xl sm:rounded-2xl border border-[#2d4fff]/20">
              <div className="text-3xl sm:text-4xl">{achievement.icon}</div>
              <div>
                <p className="text-sm sm:text-base font-semibold">{achievement.title}</p>
                <p className="text-[10px] sm:text-xs text-[#8ea2ff]">{achievement.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyProfile;