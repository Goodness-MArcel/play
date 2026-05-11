function StatsCard() {
  return (
    <div className="flex flex-col gap-8 mt-14 w-110">

      {/* STATS BOX */}
      <div
        className="flex justify-center items-center gap-10 px-8 py-4 rounded-2xl border border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(109,59,255,0.35) 0%, rgba(59,163,255,0.25) 100%)",
          backdropFilter: "blur(12px)",
        }}
      >
        {/* ART WORKS */}
        <div>
          <h2 className="text-3xl heading font-bold text-white">27k +</h2>
          <p className="text-gray-300 text-sm mt-1">Art works</p>
        </div>

        {/* AUCTIONS */}
        <div>
          <h2 className="text-3xl heading font-bold text-white">20k +</h2>
          <p className="text-gray-300 text-sm mt-1">Auctions</p>
        </div>

        {/* ARTISTS */}
        <div>
          <h2 className="text-3xl heading font-bold text-white">7k +</h2>
          <p className="text-gray-300 text-sm mt-1">Artists</p>
        </div>
      </div>

      {/* USERS */}
      <div className="flex items-center gap-4">

        {/* AVATARS */}
        <div className="flex -space-x-4">

          <img
            src="https://i.pravatar.cc/100?img=1"
            alt=""
            className="w-14 h-14 rounded-full border-2 border-[#0A0A1F]"
          />

          <img
            src="https://i.pravatar.cc/100?img=2"
            alt=""
            className="w-14 h-14 rounded-full border-2 border-[#0A0A1F]"
          />

          <img
            src="https://i.pravatar.cc/100?img=3"
            alt=""
            className="w-14 h-14 rounded-full border-2 border-[#0A0A1F]"
          />

          <img
            src="https://i.pravatar.cc/100?img=4"
            alt=""
            className="w-14 h-14 rounded-full border-2 border-[#0A0A1F]"
          />

        </div>

        {/* USER COUNT */}
        <div className="flex flex-col border-l border-white pl-4">
          <h2 className="text-3xl font-bold heading text-white">40k +</h2>
          <p className="text-gray-300 text-sm">Active Users</p>
        </div>

      </div>

    </div>
  );
}

export default StatsCard;