"use client";

export default function BeybladeEventPage() {
  const prizes = [
    { code: "UX-15", name: "UX-15 鮫殺狂鱗套組" },
    { code: "CX-11", name: "CX-11 帝王威能套組" },
    { code: "BX-48-02", name: "BX-48-02隨機加強包確認款 " },
  ];

  return (
    <main className="min-h-screen py-16 bg-stone-50 text-stone-800">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        
        {/* 主標題區 */}
        <div className="text-center mb-10">
          <span className="inline-block bg-amber-500 text-white text-sm font-extrabold px-4 py-1 rounded-full shadow-md mb-3 tracking-wide">
            🏆 古今中外童玩 戰鬥陀螺爭霸賽
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
            古今中外童玩X 萬聖節陀螺爭霸賽
          </h1>
          <p className="text-stone-500 mt-3 text-lg font-medium">
            熱血對決・公平競技・爭奪豪華獎品池
          </p>
        </div>

        {/* 核心資訊卡 */}
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white shadow-xl mb-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-stone-200">
            <div className="flex items-center space-x-4 bg-stone-50 p-4 rounded-2xl">
              <span className="text-3xl">📅</span>
              <div>
                <p className="text-xs text-stone-400 font-bold">比賽日期</p>
                <p className="text-xl font-black text-[#009944]">10 月 31日ㄅ17：30檢錄18：00準時開賽</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-stone-50 p-4 rounded-2xl">
              <span className="text-3xl">👦</span>
              <div>
                <p className="text-xs text-stone-400 font-bold">參賽資格</p>
                <p className="text-xl font-black text-amber-600">16 歲含以下限定</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6 border-b border-stone-200">
            <div className="flex items-center space-x-4 bg-stone-50 p-4 rounded-2xl">
              <span className="text-3xl">💰</span>
              <div>
                <p className="text-xs text-stone-400 font-bold">活動報名費</p>
                <p className="text-xl font-black text-stone-800">NT$ 150 / 人</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 bg-stone-50 p-4 rounded-2xl">
              <span className="text-3xl">👥</span>
              <div>
                <p className="text-xs text-stone-400 font-bold">人數限制</p>
                <p className="text-xl font-black text-stone-800">
                  16 人成賽 <span className="text-sm font-normal text-stone-500">(上限 24 人)</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 p-5 rounded-2xl">
            <p className="text-xs text-stone-400 font-bold mb-1">📍 比賽地點</p>
            <p className="text-lg font-bold text-stone-900">古今中外童玩</p>
            <p className="text-stone-600 mt-1">新北市三峽區民權街 90 號</p>
            <a 
              href="https://maps.google.com/?q=新北市三峽區民權街90號" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block mt-3 text-sm font-bold text-[#009944] hover:underline"
            >
              開啟 Google 地圖導航 →
            </a>
          </div>
        </div>

        {/* 獎品池專區 */}
        <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-3xl p-6 sm:p-8 shadow-xl mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-black tracking-tight">🎁 豪華獎品池</h2>
            <span className="text-xs bg-white/20 px-3 py-1 rounded-full font-bold">
              冠亞軍以名次優先挑選
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {prizes.map((prize, idx) => (
              <div key={idx} className="bg-white/10 backdrop-blur-sm p-4 rounded-2xl border border-white/20 text-center">
                <span className="text-xs text-amber-200 font-bold block mb-1">獎項</span>
                <p className="text-xl font-black">{prize.code}</p>
                <p className="text-xs text-white/80 mt-1">{prize.name}</p>
              </div>
            ))}
          </div>

          <p className="text-xs text-amber-100 mt-5 text-center">
            ※ 賽事結束後，冠軍先選一項，亞軍依序挑選剩餘獎品。
          </p>
        </div>

        {/* 賽事規章 */}
        <div className="bg-red-50 border border-red-200 rounded-3xl p-6 sm:p-8 mb-8">
          <h2 className="text-xl font-black text-red-700 flex items-center gap-2 mb-4">
            <span>🚫</span> 嚴禁事項與禁用名單
          </h2>
          <ul className="space-y-3 text-red-900 font-medium text-sm sm:text-base">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>特別禁限配件：</strong>禁止使用「神杖」、「時鐘」、「銀狼」。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>正版檢驗：</strong>全面禁止使用任何盜版、仿冒陀螺與零件。</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold">✕</span>
              <span><strong>改裝規範：</strong>嚴禁任何非法加工、打磨、配重等違規改裝行為。</span>
            </li>
          </ul>
        </div>

        {/* 報名按鈕 */}
        <div className="text-center pt-2">
          <a
            href="https://line.me"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-block bg-[#009944] text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-lg hover:bg-[#007a37] transition-all transform active:scale-95"
          >
            前往預約報名（額滿截止）
          </a>
          <p className="text-xs text-stone-400 mt-4">名額有限，16 人成賽，上限 24 人額滿為止</p>
        </div>

      </div>
    </main>
  );
}
