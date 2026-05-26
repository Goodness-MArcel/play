import React, { useState, useEffect } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { Menu, X, Home, User, Image, Heart, Wallet, Settings, LogOut } from 'lucide-react';

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'My Profile', icon: User, path: '/dashboard/profile' },
    { name: 'My NFTs', icon: Image, path: '/dashboard/nfts' },
    { name: 'Favorites', icon: Heart, path: '/dashboard/favorites' },
    { name: 'Wallet', icon: Wallet, path: '/dashboard/wallet' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white flex">
      {/* Sidebar */}
      <div
        className={`bg-[#0b1330] border-r border-[#2d4fff]/30 fixed top-0 h-screen z-50 transition-all duration-300 flex-shrink-0 overflow-y-auto
          ${sidebarOpen ? 'w-64' : 'w-0 lg:w-20'} 
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Sidebar Header */}
        <div className="p-6 flex items-center justify-between border-b border-[#2d4fff]/20 sticky top-0 bg-[#0b1330] z-10">
          <div className={`font-bold tracking-widest transition-all ${sidebarOpen ? 'text-2xl' : 'text-xl'}`}>
            PLAY<span className="text-[#5f7dff]">NFT</span>
          </div>
          
          {/* X Button - Visible on ALL screens when sidebar is open */}
          {sidebarOpen && (
            <button
              onClick={() => setSidebarOpen(false)}
              className="text-[#8ea2ff] hover:text-white p-2 rounded-xl hover:bg-[#1a254f] transition"
            >
              <X size={24} />
            </button>
          )}
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-2xl transition-all ${
                      isActive ? 'bg-[#1a254f] text-white' : 'text-[#8ea2ff] hover:bg-[#1a254f] hover:text-white'
                    }`
                  }
                >
                  <item.icon size={20} />
                  {sidebarOpen && <span>{item.name}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout */}
        <div className="absolute bottom-6 px-4 w-full">
          <a
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-[#1a254f] rounded-2xl transition-all"
          >
            <LogOut size={20} />
            {sidebarOpen && <span>Logout</span>}
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Navbar */}
        <header className="bg-[#0b1330] border-b border-[#2d4fff]/30 px-6 py-4 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-[#8ea2ff] hover:text-white p-3 rounded-2xl hover:bg-[#1a254f] transition-all active:scale-95"
            >
              <Menu size={26} />
            </button>

            <h1 className="text-xl font-semibold">Dashboard</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">Alex Rivera</p>
              <p className="text-xs text-[#8ea2ff]">0x742d...8d2</p>
            </div>
            <div className="w-9 h-9 bg-gradient-to-br from-[#5f7dff] to-[#8ea2ff] rounded-2xl flex items-center justify-center text-white font-bold text-sm">
              AR
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 lg:hidden z-40"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default DashboardLayout;