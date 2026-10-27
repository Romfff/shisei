"use client";

import { useState } from "react";
import { ArrowUpRight, Check } from "lucide-react";

export function MealCalculator() {
  const [workers, setWorkers] = useState<number>(350);
  const [pricePerMeal, setPricePerMeal] = useState<number>(32000);
  const [shifts, setShifts] = useState<number>(1);
  const [workingDays, setWorkingDays] = useState<number>(26);

  const dailyMeals = workers * shifts;
  const dailyCost = dailyMeals * pricePerMeal;
  const monthlyCost = dailyCost * workingDays;

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat("vi-VN").format(amount) + " đ";
  };

  return (
    <section id="calculator" className="py-24 bg-[#f5ece4] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#e94222] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e94222]"></span>
            <span>Công cụ hoạch định B2B · 予算計画</span>
          </div>
          <h2 className="font-title text-4xl sm:text-5xl font-light text-[#0d1717] tracking-tight leading-[1.05]">
            Ước tính ngân sách suất ăn theo quy mô nhà máy.
          </h2>
          <p className="text-sm sm:text-base text-[#3a3a3a]/80 mt-4 leading-relaxed font-normal">
            Hỗ trợ phòng Nhân sự và bộ phận Mua hàng dự trù chi phí chính xác, 
            tối ưu hóa khẩu phần mà vẫn đảm bảo phúc lợi sức khỏe tốt nhất cho người lao động.
          </p>
        </div>

        {/* Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#fff9f3] p-8 sm:p-10 border border-black/10 space-y-8">
            
            {/* Workers Slider */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717]">
                  Số lượng người ăn mỗi ca
                </label>
                <span className="font-title text-3xl font-light text-[#e94222]">
                  {workers.toLocaleString("vi-VN")} <span className="text-xs font-sans text-[#3a3a3a]">người</span>
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="3000"
                step="50"
                value={workers}
                onChange={(e) => setWorkers(Number(e.target.value))}
                className="w-full h-1.5 bg-black/15 appearance-none cursor-pointer accent-[#e94222]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#0d1717]/50 mt-2">
                <span>50</span>
                <span>500</span>
                <span>1.500</span>
                <span>3.000 người</span>
              </div>
            </div>

            {/* Price Tiers */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-3">
                Mức đơn giá dự kiến / suất
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {[28000, 32000, 38000, 45000, 60000].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setPricePerMeal(tier)}
                    className={`py-3 px-2 text-center text-xs font-mono font-bold tracking-wider transition-all cursor-pointer border ${
                      pricePerMeal === tier
                        ? "bg-[#0d1717] text-white border-[#0d1717]"
                        : "bg-white text-[#0d1717] border-black/15 hover:border-black/50"
                    }`}
                  >
                    {tier / 1000}k
                  </button>
                ))}
              </div>
            </div>

            {/* Shifts and Days */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-2">
                  Số ca phục vụ trong ngày
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[1, 2, 3].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setShifts(s)}
                      className={`py-2.5 text-xs font-mono font-bold border transition-all cursor-pointer ${
                        shifts === s
                          ? "bg-[#e94222] text-white border-[#e94222]"
                          : "bg-white text-[#0d1717] border-black/15 hover:bg-stone-50"
                      }`}
                    >
                      {s} ca
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#0d1717] mb-2">
                  Số ngày làm việc / tháng
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[24, 26, 30].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setWorkingDays(d)}
                      className={`py-2.5 text-xs font-mono font-bold border transition-all cursor-pointer ${
                        workingDays === d
                          ? "bg-[#e94222] text-white border-[#e94222]"
                          : "bg-white text-[#0d1717] border-black/15 hover:bg-stone-50"
                      }`}
                    >
                      {d} ngày
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 text-xs text-[#3a3a3a]/75 space-y-1">
              <div className="font-semibold text-[#0d1717]">Đã bao gồm trong chi phí trọn gói:</div>
              <div>Khay inox SUS 304, thùng bảo ôn giữ nhiệt, phí vận chuyển và nhân viên phục vụ chia phần tại chỗ.</div>
            </div>

          </div>

          {/* Result Card: Dark Shushi FZ style (5 cols) */}
          <div className="lg:col-span-5 bg-[#0d1717] text-white p-8 sm:p-10 border border-black/20 flex flex-col justify-between">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-widest text-stone-400">
                  Dự trù ngân sách tháng
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 bg-white/10 text-emerald-300">
                  Chưa gồm VAT
                </span>
              </div>

              <div>
                <div className="font-title text-3xl sm:text-4xl font-light text-[#e94222] tracking-tight">
                  {formatVND(monthlyCost)}
                </div>
                <div className="text-xs text-stone-400 mt-1 font-mono">
                  Chi phí mỗi ngày: {formatVND(dailyCost)}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/10 text-xs text-stone-300">
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-stone-400">Tổng suất ăn mỗi ngày:</span>
                  <span className="font-bold text-white font-mono">{dailyMeals.toLocaleString("vi-VN")} suất</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-stone-400">Đơn giá mỗi suất:</span>
                  <span className="font-bold text-white font-mono">{formatVND(pricePerMeal)}</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/5">
                  <span className="text-stone-400">Mô hình đề xuất:</span>
                  <span className="font-semibold text-emerald-400">
                    {workers >= 500 ? "Nấu trực tiếp tại nhà máy / Xe bảo ôn" : "Giao khay giữ nhiệt 65°C"}
                  </span>
                </div>
              </div>

            </div>

            <div className="pt-8">
              <a href="#trial-tasting" className="shushi-btn shushi-btn-primary w-full text-center">
                <span>Nhận báo giá chính thức & Nếm thử</span>
              </a>
              <p className="text-[11px] text-center text-stone-400 mt-2 font-mono">
                Shisei Food mang mẫu cơm tận nơi cho hội đồng công ty thẩm định
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
