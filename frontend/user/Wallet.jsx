function Wallet() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6">Wallet</h2>
      <div className="bg-[#0b1330] border border-[#2d4fff]/30 rounded-3xl p-8 max-w-md">
        <p className="text-sm text-[#8ea2ff] mb-2">Connected Wallet</p>
        <p className="font-mono text-lg">0x742d35Cc6634C0532925a3b8D7F5a8f3e8d2</p>
        <p className="text-4xl font-bold mt-6">8.42 ETH</p>
      </div>
    </div>
  );
}

export default Wallet;