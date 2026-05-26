import React from 'react';
import { Settings, Copy, Mail, MapPin, Calendar, Link as LinkIcon, Users, Award, Eye, TrendingUp, Edit2 } from 'lucide-react';

function MyProfile() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 md:space-y-8">
      {/* Profile Header */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl overflow-hidden">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8">
            {/* Avatar */}
            <div className="flex flex-col items-center md:items-start flex-shrink-0">
              <div className="relative">
                <div className="w-28 h-28 md:w-32 md:h-32 bg-gradient-to-br from-[#5f7dff] to-[#8ea2ff] rounded-3xl flex items-center justify-center text-5xl shadow-xl">
                  👨‍🎨
                </div>
                <button className="absolute -bottom-1 -right-1 bg-[#5f7dff] p-2 rounded-xl hover:bg-[#4a68e0] transition-all">
                  <Edit2 size={18} className="text-white" />
                </button>
              </div>
              <button className="mt-4 text-[#5f7dff] text-sm hover:underline">Change Avatar</button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-3xl md:text-4xl font-bold">Alex Morgan</h1>
                    <span className="px-3 py-1 bg-[#5f7dff]/10 text-[#5f7dff] text-sm rounded-full font-medium">Verified</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-[#8ea2ff]">@alexmorgan</span>
                    <button className="text-[#8ea2ff] hover:text-white transition">
                      <Copy size={18} />
                    </button>
                  </div>
                  <p className="text-[#8ea2ff] mt-3 leading-relaxed">
                    Digital art collector & NFT enthusiast. Passionate about 3D worlds and generative art.
                  </p>
                </div>

                <button className="px-5 py-2.5 bg-[#5f7dff] hover:bg-[#4a68e0] rounded-2xl text-white font-medium flex items-center gap-2 transition self-start">
                  <Settings size={18} />
                  Edit Profile
                </button>
              </div>

              {/* Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-6 border-t border-[#2d4fff]/20">
                <div className="flex items-center gap-3 text-[#8ea2ff]">
                  <Mail size={20} />
                  <span>alex@example.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#8ea2ff]">
                  <MapPin size={20} />
                  <span>New York, USA</span>
                </div>
                <div className="flex items-center gap-3 text-[#8ea2ff]">
                  <Calendar size={20} />
                  <span>Joined March 2022</span>
                </div>
                <div className="flex items-center gap-3 text-[#8ea2ff]">
                  <LinkIcon size={20} />
                  <span>alexmorgan.art</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: "Total NFTs", value: "248", change: "+12 this month", icon: <Award size={28} />, color: "text-[#5f7dff]" },
          { label: "Total Volume", value: "127.5 ETH", change: "All-time sales", icon: "💰" },
          { label: "Followers", value: "2.8K", change: "+184 this week", icon: <Users size={28} />, color: "text-[#5f7dff]" },
          { label: "Profile Views", value: "15.2K", change: "This month", icon: <Eye size={28} />, color: "text-amber-400" },
        ].map((stat, i) => (
          <div key={i} className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl p-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-[#8ea2ff] text-sm">{stat.label}</p>
                <p className="text-4xl font-bold mt-3">{stat.value}</p>
              </div>
              <div className={`w-12 h-12 bg-[#5f7dff]/10 rounded-2xl flex items-center justify-center ${stat.color || ''}`}>
                {stat.icon}
              </div>
            </div>
            <p className="text-green-400 text-sm mt-4">{stat.change}</p>
          </div>
        ))}
      </div>

      {/* Tabs & Collection */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl overflow-hidden">
        <div className="border-b border-[#2d4fff]/20 px-6">
          <div className="flex gap-6 overflow-x-auto">
            {["Collection", "Created", "Favorites", "Activity"].map((tab, i) => (
              <button
                key={i}
                className={`py-5 font-medium whitespace-nowrap border-b-2 transition-all ${
                  i === 0 
                    ? "text-white border-[#5f7dff]" 
                    : "text-[#8ea2ff] border-transparent hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* NFT Grid */}
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              { name: "Cosmic Dreamer", id: "#421", price: "2.45 ETH", emoji: "🌌" },
              { name: "Neon Samurai", id: "#89", price: "5.8 ETH", emoji: "⚔️" },
              { name: "Pixel Goddess", id: "#12", price: "3.2 ETH", emoji: "👸" },
              { name: "Eternal Bloom", id: "#56", price: "1.8 ETH", emoji: "🌸" },
            ].map((nft, i) => (
              <div key={i} className="bg-[#0a1030] border border-[#2d4fff]/30 rounded-2xl overflow-hidden hover:border-[#5f7dff] transition group cursor-pointer">
                <div className="h-48 flex items-center justify-center text-6xl bg-gradient-to-br from-[#5f7dff]/10 to-[#8ea2ff]/10">
                  {nft.emoji}
                </div>
                <div className="p-4">
                  <p className="font-semibold group-hover:text-[#5f7dff] transition">{nft.name}</p>
                  <p className="text-[#8ea2ff] text-sm">{nft.id}</p>
                  <p className="text-[#5f7dff] font-medium mt-2">{nft.price}</p>
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