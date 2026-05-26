import React from 'react';
import { Copy, ArrowUpRight, ArrowDownRight, RefreshCw, Plus } from 'lucide-react';

function Wallet() {
  const transactions = [
    { type: "Received", amount: "+2.45 ETH", from: "0x8f3...a9d2", time: "2 hours ago", status: "success" },
    { type: "Sent", amount: "-0.80 ETH", from: "0x71c...f3e1", time: "Yesterday", status: "success" },
    { type: "Received", amount: "+1.20 ETH", from: "OpenSea", time: "3 days ago", status: "success" },
    { type: "Sent", amount: "-3.50 ETH", from: "0x44a...b7c9", time: "5 days ago", status: "success" },
  ];

  return (
    <div className="space-y-6">
      {/* Wallet Header */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <p className="text-[#8ea2ff] text-sm">Connected Wallet</p>
            <div className="flex items-center gap-3 mt-2">
              <p className="font-mono text-lg md:text-xl break-all">0x742d35Cc6634C0532925a3b8D7F5a8f3e8d2</p>
              <button className="text-[#8ea2ff] hover:text-white transition">
                <Copy size={20} />
              </button>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-[#8ea2ff] text-sm">Total Balance</p>
            <p className="text-4xl md:text-5xl font-bold mt-1">42.85 ETH</p>
            <p className="text-green-400 text-sm mt-1">$112,340.25 USD</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          <button className="flex flex-col items-center gap-2 bg-[#1a254f] hover:bg-[#5f7dff] hover:text-white p-4 rounded-2xl transition-all">
            <ArrowUpRight size={24} />
            <span className="text-sm font-medium">Send</span>
          </button>
          <button className="flex flex-col items-center gap-2 bg-[#1a254f] hover:bg-[#5f7dff] hover:text-white p-4 rounded-2xl transition-all">
            <ArrowDownRight size={24} />
            <span className="text-sm font-medium">Receive</span>
          </button>
          <button className="flex flex-col items-center gap-2 bg-[#1a254f] hover:bg-[#5f7dff] hover:text-white p-4 rounded-2xl transition-all">
            <RefreshCw size={24} />
            <span className="text-sm font-medium">Swap</span>
          </button>
          <button className="flex flex-col items-center gap-2 bg-[#5f7dff] text-white p-4 rounded-2xl transition-all">
            <Plus size={24} />
            <span className="text-sm font-medium">Buy ETH</span>
          </button>
        </div>
      </div>

      {/* Portfolio Breakdown */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl p-6 md:p-8">
        <h3 className="text-xl font-semibold mb-6">Portfolio Breakdown</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="text-center">
            <p className="text-4xl font-bold text-[#5f7dff]">38.2 ETH</p>
            <p className="text-[#8ea2ff] mt-1">ETH Balance</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold">4.65 ETH</p>
            <p className="text-[#8ea2ff] mt-1">NFT Value</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-amber-400">0.00 ETH</p>
            <p className="text-[#8ea2ff] mt-1">Pending</p>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-semibold">Recent Transactions</h3>
          <a href="#" className="text-[#5f7dff] hover:underline text-sm">View All</a>
        </div>

        <div className="space-y-4">
          {transactions.map((tx, i) => (
            <div key={i} className="flex items-center justify-between py-4 border-b border-[#2d4fff]/20 last:border-0">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${tx.type === "Received" ? "bg-green-500/10" : "bg-red-500/10"}`}>
                  {tx.type === "Received" ? "↓" : "↑"}
                </div>
                <div>
                  <p className="font-medium">{tx.type}</p>
                  <p className="text-xs text-[#8ea2ff]">{tx.from}</p>
                </div>
              </div>

              <div className="text-right">
                <p className={`font-semibold ${tx.amount.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                  {tx.amount}
                </p>
                <p className="text-xs text-[#8ea2ff]">{tx.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Wallet;