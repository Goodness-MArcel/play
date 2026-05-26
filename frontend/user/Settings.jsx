import React, { useState } from 'react';
import { Save, Bell, Shield, Wallet, User, Moon, Globe } from 'lucide-react';

function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    marketing: false,
  });

  return (
    <div className="max-w-3xl space-y-8">
      <h2 className="text-3xl font-semibold">Settings</h2>

      {/* Profile Settings */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <User size={24} className="text-[#5f7dff]" />
          <h3 className="text-xl font-semibold">Profile Information</h3>
        </div>

        <div className="space-y-5">
          <div>
            <label className="block text-[#8ea2ff] text-sm mb-2">Display Name</label>
            <input
              type="text"
              defaultValue="Alex Morgan"
              className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-3 focus:outline-none focus:border-[#5f7dff]"
            />
          </div>

          <div>
            <label className="block text-[#8ea2ff] text-sm mb-2">Bio</label>
            <textarea
              defaultValue="Digital art collector & NFT enthusiast."
              rows={3}
              className="w-full bg-[#050816] border border-[#2d4fff]/40 rounded-2xl px-5 py-3 focus:outline-none focus:border-[#5f7dff]"
            />
          </div>

          <button className="mt-4 flex items-center gap-2 bg-[#5f7dff] hover:bg-[#4a68e0] px-6 py-3 rounded-2xl text-white font-medium transition">
            <Save size={18} />
            Save Changes
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Bell size={24} className="text-[#5f7dff]" />
          <h3 className="text-xl font-semibold">Notifications</h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Email Notifications</p>
              <p className="text-sm text-[#8ea2ff]">Receive updates about your NFTs</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.email}
              onChange={() => setNotifications(prev => ({ ...prev, email: !prev.email }))}
              className="w-5 h-5 accent-[#5f7dff]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Push Notifications</p>
              <p className="text-sm text-[#8ea2ff]">Get notified on your device</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.push}
              onChange={() => setNotifications(prev => ({ ...prev, push: !prev.push }))}
              className="w-5 h-5 accent-[#5f7dff]"
            />
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Marketing Emails</p>
              <p className="text-sm text-[#8ea2ff]">Promotions and new drops</p>
            </div>
            <input
              type="checkbox"
              checked={notifications.marketing}
              onChange={() => setNotifications(prev => ({ ...prev, marketing: !prev.marketing }))}
              className="w-5 h-5 accent-[#5f7dff]"
            />
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl p-6 md:p-8">
        <div className="flex items-center gap-3 mb-6">
          <Shield size={24} className="text-[#5f7dff]" />
          <h3 className="text-xl font-semibold">Security</h3>
        </div>

        <div className="space-y-4">
          <button className="w-full flex items-center justify-between p-4 bg-[#1a254f] hover:bg-[#2a3b7f] rounded-2xl transition text-left">
            <div>
              <p className="font-medium">Change Password</p>
              <p className="text-sm text-[#8ea2ff]">Last changed 3 months ago</p>
            </div>
            <span className="text-[#5f7dff]">→</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-[#1a254f] hover:bg-[#2a3b7f] rounded-2xl transition text-left">
            <div>
              <p className="font-medium">Connected Wallets</p>
              <p className="text-sm text-[#8ea2ff]">MetaMask • 0x742d...8d2</p>
            </div>
            <span className="text-[#5f7dff]">→</span>
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-[#0b1330] border border-red-500/30 rounded-3xl p-6 md:p-8">
        <h3 className="text-red-400 text-lg font-semibold mb-4">Danger Zone</h3>
        <button className="text-red-400 hover:text-red-500 font-medium transition">
          Delete Account
        </button>
      </div>
    </div>
  );
}

export default Settings;