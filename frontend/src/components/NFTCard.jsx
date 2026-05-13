import pic1 from "../assets/pic3.png";

function NFTCard() {
  return (
    <div
      className="relative w-[420px] rounded-3xl h-[650px]  overflow-hidden  backdrop-blur-xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(109,59,255,0.18) 0%, rgba(10,10,31,0.1) 100%)",
      }}
    >

      {/* IMAGE */}
      <div className="p-4">
        <img
          src={pic1}
          alt="NFT Artwork"
          className="w-full h-[520px] object-cover rounded-2xl"
        />
      </div>

      {/* BOTTOM INFO */}
      <div
        className="absolute bottom-4 left-4 right-4 rounded-2xl p-4 "
        style={{
          background:
            "linear-gradient(135deg, rgba(109,59,255,0.35) 0%, rgba(59,163,255,0.18) 100%)",
          backdropFilter: "blur(16px)",
        }}
      >

        <div className="flex items-center justify-between">

          {/* LEFT */}
          <div>
            <p className="text-gray-300 text-sm">
              Ending in:
            </p>

            <h3 className="text-white font-bold text-lg mt-1">
              1h 20m 30s
            </h3>
          </div>

          {/* RIGHT */}
          <div className="text-right">
            <p className="text-gray-300 text-sm">
              Highest Bid
            </p>

            <h3 className="text-white font-bold text-lg mt-1">
              32.4 ETH
            </h3>
          </div>

        </div>

        {/* BUTTONS */}
        <div className="flex gap-3 mt-4">

          <button className="flex-1 py-2 rounded-full text-white border border-white/10 bg-white/5 hover:bg-white/10 transition">
            Place a Bid
          </button>

          <button className="flex-1 py-2 rounded-full text-white bg-gradient-to-r from-[#3BA3FF] to-[#6D3BFF] hover:opacity-90 transition">
            Purchase
          </button>

        </div>

      </div>

    </div>
  );
}

export default NFTCard;