import React from 'react';
import { Settings, Copy, Mail, MapPin, Calendar, Link as LinkIcon, Users, Award, Eye, TrendingUp, Edit2 } from 'lucide-react';

function MyProfile() {
  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Profile Header */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="p-5 sm:p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex flex-col items-center md:items-start flex-shrink-0">
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-[#5f7dff] to-[#8ea2ff] rounded-3xl flex items-center justify-center text-5xl shadow-xl">
                  👨‍🎨
                </div>
                <button className="absolute -bottom-1 -right-1 bg-[#5f7dff] p-2 rounded-xl hover:bg-[#4a68e0] transition">
                  <Edit2 size={18} className="text-white" />
                </button>
              </div>
              <button className="mt-3 text-[#5f7dff] text-sm hover:underline">Change Avatar</button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center justify-center md:justify-start gap-3">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Alex Morgan</h1>
                    <span className="px-3 py-1 bg-[#5f7dff]/10 text-[#5f7dff] text-xs rounded-full font-medium">Verified</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start gap-2 mt-2">
                    <span className="text-[#8ea2ff]">@alexmorgan</span>
                    <button className="text-[#8ea2ff] hover:text-white">
                      <Copy size={18} />
                    </button>
                  </div>
                  <p className="text-[#8ea2ff] mt-3 text-sm md:text-base leading-relaxed">
                    Digital art collector & NFT enthusiast.
                  </p>
                </div>

                <button className="px-5 py-2.5 bg-[#5f7dff] hover:bg-[#4a68e0] rounded-2xl text-white font-medium flex items-center gap-2 self-center md:self-start">
                  <Settings size={18} />
                  Edit Profile
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#2d4fff]/20 text-sm">
                <div className="flex items-center gap-3 text-[#8ea2ff]">
                  <Mail size={18} />
                  <span className="truncate">alex@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#8ea2ff]">
                  <MapPin size={18} />
                  <span>New York, USA</span>
                </div>
                <div className="flex items-center gap-3 text-[#8ea2ff]">
                  <Calendar size={18} />
                  <span>Joined March 2022</span>
                </div>
                <div className="flex items-center gap-3 text-[#8ea2ff]">
                  <LinkIcon size={18} />
                  <span>alexmorgan.art</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards - Matching Dashboard Width */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {[
          { label: "Total NFTs", value: "248", change: "+12 this month", icon: <Award size={26} /> },
          { label: "Total Volume", value: "127.5 ETH", change: "All-time sales", icon: "💰" },
          { label: "Followers", value: "2.8K", change: "+184 this week", icon: <Users size={26} /> },
          { label: "Profile Views", value: "15.2K", change: "This month", icon: <Eye size={26} /> },
        ].map((stat, i) => (
          <div key={i} className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#8ea2ff] text-xs sm:text-sm">{stat.label}</p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold mt-1 sm:mt-2">{stat.value}</p>
              </div>
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5f7dff]/10 rounded-xl sm:rounded-2xl flex items-center justify-center">
                {stat.icon}
              </div>
            </div>
            <p className="text-green-400 text-xs sm:text-sm mt-3 sm:mt-4">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Collection Section - Matching Dashboard Style */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="border-b border-[#2d4fff]/20 px-4 sm:px-6">
          <div className="flex gap-6 overflow-x-auto pb-1">
            {["Collection", "Created", "Favorites", "Activity"].map((tab, i) => (
              <button
                key={i}
                className={`py-4 font-medium whitespace-nowrap border-b-2 transition-all ${
                  i === 0 ? "text-white border-[#5f7dff]" : "text-[#8ea2ff] border-transparent hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { name: "Cosmic Dreamer", id: "#421", price: "2.45 ETH", emoji: "🌌" },
              { name: "Neon Samurai", id: "#89", price: "5.8 ETH", emoji: "⚔️" },
              { name: "Pixel Goddess", id: "#12", price: "3.2 ETH", emoji: "👸" },
              { name: "Eternal Bloom", id: "#56", price: "1.8 ETH", emoji: "🌸" },
            ].map((nft, i) => (
              <div
                key={i}
                className="bg-[#0a1030] border border-[#2d4fff]/30 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-[#5f7dff] transition group cursor-pointer"
              >
                <div className="h-40 sm:h-44 md:h-48 flex items-center justify-center text-5xl sm:text-6xl bg-gradient-to-br from-[#5f7dff]/10 to-[#8ea2ff]/10">
                  {nft.emoji}
                </div>
                <div className="p-3 sm:p-4">
                  <p className="font-semibold text-sm sm:text-base group-hover:text-[#5f7dff] transition line-clamp-1">
                    {nft.name}
                  </p>
                  <p className="text-[#8ea2ff] text-xs mt-0.5">{nft.id}</p>
                  <p className="text-[#5f7dff] font-medium mt-2 text-sm">{nft.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;