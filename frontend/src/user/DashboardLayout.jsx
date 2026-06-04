// import React, { useState, useEffect } from 'react';
// import { Outlet, NavLink, useLocation } from 'react-router-dom';
// import { Menu, X, Home, User, Image, Heart, Wallet, Settings, LogOut } from 'lucide-react';

// function DashboardLayout() {
//   const [sidebarOpen, setSidebarOpen] = useState(() => {
//     const saved = localStorage.getItem('sidebarOpen');
//     return saved !== null ? JSON.parse(saved) : true;
//   });

//   const location = useLocation();

//   useEffect(() => {
//     localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
//   }, [sidebarOpen]);

//   const getPageTitle = () => {
//     const path = location.pathname;
//     if (path === '/dashboard') return 'Dashboard';
//     if (path === '/dashboard/profile') return 'My Profile';
//     if (path === '/dashboard/nfts') return 'My NFTs';
//     if (path === '/dashboard/favorites') return 'Favorites';
//     if (path === '/dashboard/wallet') return 'Wallet';
//     if (path === '/dashboard/settings') return 'Settings';
//     return 'Dashboard';
//   };

//   const menuItems = [
//     { name: 'Dashboard', icon: Home, path: '/dashboard' },
//     { name: 'My Profile', icon: User, path: '/dashboard/profile' },
//     { name: 'My NFTs', icon: Image, path: '/dashboard/nfts' },
//     { name: 'Favorites', icon: Heart, path: '/dashboard/favorites' },
//     { name: 'Wallet', icon: Wallet, path: '/dashboard/wallet' },
//     { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#050816] text-white flex">
//       {/* Sidebar */}
//       <div
//         className={`bg-[#0b1330] border-r border-[#2d4fff]/30 fixed top-0 bottom-0 z-50 transition-transform duration-300 ease-out flex-shrink-0 overflow-y-auto
//           w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
//       >
//         <div className="p-6 flex items-center justify-between border-b border-[#2d4fff]/20 sticky top-0 bg-[#0b1330] z-10">
//           <div className="font-bold tracking-widest text-2xl">
//             PLAY<span className="text-[#5f7dff]">NFT</span>
//           </div>
//           <button
//             onClick={() => setSidebarOpen(false)}
//             className="lg:hidden text-[#8ea2ff] hover:text-white p-2 rounded-xl hover:bg-[#1a254f]"
//           >
//             <X size={24} />
//           </button>
//         </div>

//         <nav className="p-4">
//           <ul className="space-y-1">
//             {menuItems.map((item) => (
//               <li key={item.name}>
//                 <NavLink
//                   to={item.path}
//                   end={item.path === '/dashboard'}
//                   className={({ isActive }) =>
//                     `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-2xl transition-all ${
//                       isActive 
//                         ? 'bg-[#1a254f] text-white' 
//                         : 'text-[#8ea2ff] hover:bg-[#1a254f] hover:text-white'
//                     }`
//                   }
//                 >
//                   <item.icon size={20} />
//                   <span>{item.name}</span>
//                 </NavLink>
//               </li>
//             ))}
//           </ul>
//         </nav>

//         <div className="absolute bottom-6 px-4 w-full">
//           <a
//             href="/"
//             className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-[#1a254f] rounded-2xl transition-all"
//           >
//             <LogOut size={20} />
//             <span>Logout</span>
//           </a>
//         </div>
//       </div>

//       {/* Main Content Area */}
//       <div className="flex-1 flex flex-col min-h-screen w-full">
//         {/* Top Navbar - Fixed for mobile */}
//         <header className="bg-[#0b1330]/95 backdrop-blur-2xl border-b border-[#2d4fff]/30 px-4 sm:px-6 py-4 flex items-center justify-between 
//                           sticky top-0 z-40 shadow-2xl
//                           [-webkit-sticky]:top-0">   {/* Extra iOS support */}
//           <div className="flex items-center gap-4">
//             <button
//               onClick={() => setSidebarOpen(!sidebarOpen)}
//               className="text-[#8ea2ff] hover:text-white p-3 rounded-2xl hover:bg-[#1a254f] transition-all active:scale-95 lg:hidden"
//             >
//               <Menu size={26} />
//             </button>
//             <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
//           </div>

//           <div className="flex items-center gap-4">
//             <div className="text-right hidden sm:block">
//               <p className="text-sm font-medium">Alex Rivera</p>
//               <p className="text-xs text-[#8ea2ff]">0x742d...8d2</p>
//             </div>
//             <div className="w-9 h-9 bg-gradient-to-br from-[#5f7dff] to-[#8ea2ff] rounded-2xl flex items-center justify-center text-white font-bold text-sm">
//               AR
//             </div>
//           </div>
//         </header>

//         {/* Page Content - Scrolling Area */}
//         <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
//           <Outlet />
//         </main>
//       </div>

//       {/* Mobile Overlay */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/70 z-40 lg:hidden"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}
//     </div>
//   );
// }

// export default DashboardLayout;

import React, { useState, useEffect } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Home, User, Image, Heart, Wallet, Settings, LogOut, UserCircle } from 'lucide-react';

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(() => {
    const saved = localStorage.getItem('sidebarOpen');
    return saved !== null ? JSON.parse(saved) : true;
  });

  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  const location = useLocation();

  // Save sidebar state
  useEffect(() => {
    localStorage.setItem('sidebarOpen', JSON.stringify(sidebarOpen));
  }, [sidebarOpen]);

  // Close sidebar on route change (especially important for mobile)
  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [location.pathname]);

  const getPageTitle = () => {
    const path = location.pathname;
    if (path === '/dashboard') return 'Dashboard';
    if (path === '/dashboard/profile') return 'My Profile';
    if (path === '/dashboard/nfts') return 'My NFTs';
    if (path === '/dashboard/favorites') return 'Favorites';
    if (path === '/dashboard/wallet') return 'Wallet';
    if (path === '/dashboard/settings') return 'Settings';
    return 'Dashboard';
  };

  const menuItems = [
    { name: 'Dashboard', icon: Home, path: '/dashboard' },
    { name: 'My Profile', icon: User, path: '/dashboard/profile' },
    { name: 'My NFTs', icon: Image, path: '/dashboard/nfts' },
    { name: 'Favorites', icon: Heart, path: '/dashboard/favorites' },
    { name: 'Wallet', icon: Wallet, path: '/dashboard/wallet' },
    { name: 'Settings', icon: Settings, path: '/dashboard/settings' },
  ];

  // Close profile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setShowProfileDropdown(false);
    if (showProfileDropdown) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [showProfileDropdown]);

  return (
    <div className="min-h-screen bg-[#050816] text-white flex">
      {/* Sidebar */}
      <div
        className={`bg-[#0b1330] border-r border-[#2d4fff]/30 fixed top-0 bottom-0 z-50 transition-transform duration-300 ease-out flex-shrink-0 overflow-y-auto
          w-64 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="p-6 flex items-center justify-between border-b border-[#2d4fff]/20 sticky top-0 bg-[#0b1330] z-10">
          <div className="font-bold tracking-widest text-2xl">
            PLAY<span className="text-[#5f7dff]">NFT</span>
          </div>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden text-[#8ea2ff] hover:text-white p-2 rounded-xl hover:bg-[#1a254f]"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="p-4">
          <ul className="space-y-1">
            {menuItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  end={item.path === '/dashboard'}
                  onClick={() => {
                    // Close sidebar on mobile when link is clicked
                    if (window.innerWidth < 1024) {
                      setSidebarOpen(false);
                    }
                  }}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-2xl transition-all ${
                      isActive 
                        ? 'bg-[#1a254f] text-white' 
                        : 'text-[#8ea2ff] hover:bg-[#1a254f] hover:text-white'
                    }`
                  }
                >
                  <item.icon size={20} />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="absolute bottom-6 px-4 w-full">
          <a
            href="/"
            className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-[#1a254f] rounded-2xl transition-all"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </a>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen w-full">
        {/* Top Navbar */}
        <header className="bg-[#0b1330]/95 backdrop-blur-2xl border-b border-[#2d4fff]/30 px-4 sm:px-6 py-4 flex items-center justify-between sticky top-0 z-40 shadow-2xl">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-[#8ea2ff] hover:text-white p-3 rounded-2xl hover:bg-[#1a254f] transition-all active:scale-95 lg:hidden"
            >
              <Menu size={26} />
            </button>
            <h1 className="text-xl font-semibold">{getPageTitle()}</h1>
          </div>

          {/* Profile Section */}
          <div className="flex items-center gap-4 relative">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">Alex Rivera</p>
              <p className="text-xs text-[#8ea2ff]">0x742d...8d2</p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowProfileDropdown(!showProfileDropdown);
              }}
              className="w-9 h-9 bg-gradient-to-br from-[#5f7dff] to-[#8ea2ff] rounded-2xl flex items-center justify-center text-white font-bold text-sm hover:scale-105 transition-all active:scale-95 focus:outline-none"
            >
              AR
            </button>

            {/* Mobile Profile Dropdown */}
            {showProfileDropdown && (
              <div className="absolute right-0 top-14 w-56 bg-[#0b1330] border border-[#2d4fff]/40 rounded-2xl shadow-2xl py-2 z-50 sm:hidden">
                <div className="px-4 py-3 border-b border-[#2d4fff]/20">
                  <p className="font-medium">Alex Rivera</p>
                  <p className="text-xs text-[#8ea2ff] truncate">0x742d...8d2</p>
                </div>

                <button
                  onClick={() => {
                    setShowProfileDropdown(false);
                    window.location.href = '/dashboard/profile';
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#1a254f] transition-all text-left"
                >
                  <UserCircle size={20} className="text-[#8ea2ff]" />
                  <span>View Profile</span>
                </button>

                <button
                  onClick={() => {
                    setShowProfileDropdown(false);
                    alert("✅ Logged out successfully!");
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 text-sm hover:bg-[#1a254f] transition-all text-left text-red-400"
                >
                  <LogOut size={20} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}

export default DashboardLayout;