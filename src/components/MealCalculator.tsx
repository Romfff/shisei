"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function MealCalculator() {
  const [workers, setWorkers] = useState<number>(350);
  const [pricePerMeal, setPricePerMeal] = useState<number>(35000);
  const [shifts, setShifts] = useState<number>(1);
  const [workingDays, setWorkingDays] = useState<number>(26);

  const dailyMeals = workers * shifts;
  const dailyCost = dailyMeals * pricePerMeal;
  const monthlyCost = dailyCost * workingDays;

  const formatVND = (amount: number) => {
    return new Intl.NumberFormat("vi-VN").format(amount) + " đ";
  };

  return (
    <section id="calculator" className="py-24 bg-[#fbf7ef] border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
            <span>Công cụ hoạch định B2B · Shinsei Food</span>
          </div>
          <h2 className="font-title text-4xl sm:text-5xl font-light text-[#222222] tracking-tight leading-[1.05]">
            Ước tính ngân sách suất ăn theo quy mô nhà máy.
          </h2>
          <p className="text-sm sm:text-base text-[#222222]/80 mt-4 leading-relaxed font-normal">
            Hỗ trợ phòng Nhân sự và bộ phận Mua hàng dự trù chi phí chính xác, tối ưu hóa khẩu phần mà vẫn đảm bảo phúc lợi sức khỏe tốt nhất cho người lao động.
          </p>
        </div>

        {/* Body Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Controls (7 cols) */}
          <div className="lg:col-span-7 bg-[#ffffff] p-8 sm:p-10 border border-black/10 space-y-8 shadow-sm">
            
            {/* Workers Slider */}
            <div>
              <div className="flex items-baseline justify-between mb-3">
                <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#222222]">
                  Số lượng người ăn mỗi ca
                </label>
                <span className="font-title text-3xl font-light text-[#75182d]">
                  {workers.toLocaleString("vi-VN")} <span className="text-xs font-sans text-[#222222]">người</span>
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="3000"
                step="50"
                value={workers}
                onChange={(e) => setWorkers(Number(e.target.value))}
                className="w-full h-1.5 bg-black/15 appearance-none cursor-pointer accent-[#75182d]"
              />
              <div className="flex justify-between text-[11px] font-mono text-[#222222]/50 mt-2">
                <span>50</span>
                <span>500</span>
                <span>1.500</span>
                <span>3.000 người</span>
              </div>
            </div>

            {/* Price Tiers based on Shinsei options */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-3">
                Mức đơn giá dự kiến / suất (30k – 35k – 40k – 45k – 50k – 80k)
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[30000, 35000, 40000, 45000, 50000, 80000].map((tier) => (
                  <button
                    key={tier}
                    type="button"
                    onClick={() => setPricePerMeal(tier)}
                    className={`py-3 px-2 text-center text-xs font-mono font-bold tracking-wider transition-all cursor-pointer border ${
                      pricePerMeal === tier
                        ? "bg-[#75182d] text-white border-[#75182d]"
                        : "bg-white text-[#222222] border-black/15 hover:border-[#75182d]"
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
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-2">
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
                          ? "bg-[#75182d] text-white border-[#75182d]"
                          : "bg-white text-[#222222] border-black/15 hover:bg-stone-50"
                      }`}
                    >
                      {s} ca
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-2">
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
                          ? "bg-[#75182d] text-white border-[#75182d]"
                          : "bg-white text-[#222222] border-black/15 hover:bg-stone-50"
                      }`}
                    >
                      {d} ngày
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-black/10 text-xs text-[#222222]/75 space-y-1">
              <div className="font-semibold text-[#222222]">Đã bao gồm trong chi phí trọn gói của Shinsei:</div>
              <div>Khay inox SUS 304, thùng bảo ôn giữ nhiệt trên 65°C, nhân sự phục vụ tại chỗ và bảo hiểm an toàn thực phẩm.</div>
            </div>

          </div>

          {/* Result Card: Wine / Beige Tone (5 cols) */}
          <div className="lg:col-span-5 bg-[#75182d] text-white p-8 sm:p-10 border border-black/20 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/15">
                <span className="text-xs font-mono uppercase tracking-widest text-[#f1e2c8]">
                  Dự trù ngân sách tháng
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 bg-white/10 text-[#f1e2c8] border border-white/20">
                  Chưa gồm VAT
                </span>
              </div>

              <div>
                <div className="font-title text-3xl sm:text-4xl font-light text-[#f1e2c8] tracking-tight">
                  {formatVND(monthlyCost)}
                </div>
                <div className="text-xs text-stone-200 mt-1 font-mono">
                  Chi phí mỗi ngày: {formatVND(dailyCost)}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-white/15 text-xs text-stone-200">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-stone-300">Tổng suất ăn mỗi ngày:</span>
                  <span className="font-bold text-white font-mono">{dailyMeals.toLocaleString("vi-VN")} suất</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-stone-300">Đơn giá áp dụng:</span>
                  <span className="font-bold text-[#f1e2c8] font-mono">{formatVND(pricePerMeal)} / suất</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-stone-300">Mô hình vận hành:</span>
                  <span className="font-semibold text-white">
                    {workers >= 500 ? "Nấu trực tiếp tại cơ sở / Căng tin trọn gói" : "Giao khay bento giữ nhiệt"}
                  </span>
                </div>
              </div>

            </div>

            <div className="pt-8">
              <a href="#contact" className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#f1e2c8] hover:bg-white text-[#75182d] font-bold text-xs uppercase tracking-wider transition-colors shadow-md">
                <span>Nhận bảng báo giá & Thực đơn chi tiết</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <p className="text-[11px] text-center text-stone-300 mt-2.5 font-mono">
                Shinsei cử chuyên viên mang mẫu cơm đến tận nơi thẩm định
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
