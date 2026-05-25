import React from "react";
// import { Twitter, MessageCircle } from "lucide-react"; // or use heroicons / your icon library

function Footer() {
  return (
    <footer className="w-full bg-[#050816] border-t border-[#2d4fff]/30 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Left Column - Logo & Description */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4"> 
              <span className="text-white text-3xl font-bold tracking-wider" style={{ fontFamily: "Redhawk" }}>
                PLAY NFT
              </span>
            </div>

            <p className="text-[#8ea2ff] text-[15px] leading-relaxed max-w-md">
              The World's Largest Digital Marketplace for crypto collections and
              non fungible tokens (NFTs) buy, sell and discover exclusive digital
              assets.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 bg-[#0b1330] hover:bg-[#1a254f] border border-[#2d4fff]/40 rounded-2xl flex items-center justify-center text-[#8ea2ff] hover:text-white transition-all"
              >
                {/* <Twitter size={20} /> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#0b1330] hover:bg-[#1a254f] border border-[#2d4fff]/40 rounded-2xl flex items-center justify-center text-[#8ea2ff] hover:text-white transition-all"
              >
                {/* <Instagram size={20} /> */}
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#0b1330] hover:bg-[#1a254f] border border-[#2d4fff]/40 rounded-2xl flex items-center justify-center text-[#8ea2ff] hover:text-white transition-all"
              >
                {/* <MessageCircle size={20} /> */}
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-6">
            {/* Explore */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Explore</h4>
              <ul className="space-y-3 text-[#8ea2ff] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Art</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Photography</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Music</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Games</a></li>
              </ul>
            </div>

            {/* My Account */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">My Account</h4>
              <ul className="space-y-3 text-[#8ea2ff] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">My Profile</a></li>
                <li><a href="#" className="hover:text-white transition-colors">My Collections</a></li>
                <li><a href="#" className="hover:text-white transition-colors">My Favorites</a></li>
                <li><a href="#" className="hover:text-white transition-colors">My Account Settings</a></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3 text-[#8ea2ff] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Suggestions</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Newsletters</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-lg">Company</h4>
              <ul className="space-y-3 text-[#8ea2ff] text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Ranking</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Activity</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-[#2d4fff]/20 text-center text-[#8ea2ff]/70 text-sm">
          © 2026 PLAY NFT. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;