"use client";

import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Navbar } from "@/components/Navbar";
import { ContactShinsei } from "@/components/ContactShinsei";
import { Footer } from "@/components/Footer";
import { Calculator, CheckCircle2 } from "lucide-react";

export default function DuToanChiPhiPage() {
  const { isJa } = useLanguage();

  const [quantity, setQuantity] = useState(250);
  const [pricePerMeal, setPricePerMeal] = useState(35000);
  const [daysPerMonth, setDaysPerMonth] = useState(26);
  const [includeCoffee, setIncludeCoffee] = useState(false);
  const [includeSnack, setIncludeSnack] = useState(false);
  const [includeDelivery, setIncludeDelivery] = useState(false);

  // Calculation logic
  const coffeeCostPerDay = includeCoffee ? quantity * 15000 : 0;
  const snackCostPerDay = includeSnack ? quantity * 10000 : 0;
  const deliveryCostPerDay = includeDelivery ? 400000 : 0;

  const mealCostPerDay = quantity * pricePerMeal;
  const totalCostPerDay = mealCostPerDay + coffeeCostPerDay + snackCostPerDay + deliveryCostPerDay;
  const totalCostPerMonth = totalCostPerDay * daysPerMonth;

  // Breakdown percentages
  const ingredientCost = Math.round(totalCostPerMonth * 0.65);
  const laborCost = Math.round(totalCostPerMonth * 0.20);
  const safetyOpsCost = Math.round(totalCostPerMonth * 0.10);
  const mgmtCost = Math.round(totalCostPerMonth * 0.05);

  const formatVND = (num: number) => {
    return new Intl.NumberFormat("vi-VN").format(num) + " đ";
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf7ef] text-[#222222]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-28 bg-[#75182d] text-[#f1e2c8] overflow-hidden">
          <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#f1e2c8] bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15 mb-6">
              <Calculator className="w-3.5 h-3.5" />
              <span>{isJa ? "B2B 費用シミュレーション" : "Dự Toán Ngân Sách B2B"}</span>
            </div>

            <h1 className="font-title text-4xl sm:text-5xl lg:text-6xl font-light text-white leading-[1.08]">
              {isJa ? "給食 & 社員食堂 費用シミュレーター" : "Công Cụ Tính Toán Ngân Sách Suất Ăn & Dịch Vụ Ẩm Thực"}
            </h1>

            <p className="text-base sm:text-lg text-[#f1e2c8]/85 font-normal leading-relaxed mt-4">
              {isJa
                ? "工場、学校、オフィス向けの概算費用を瞬時に算出。日本式5S基準に則った透明なコスト内訳をご確認いただけます。"
                : "Ước tính nhanh chi phí thực tế cho nhà máy, trường học và tòa nhà văn phòng. Minh bạch cơ cấu chi phí chuẩn 5S Nhật Bản."}
            </p>
          </div>
        </section>

        {/* Calculator Interactive Section */}
        <section className="py-24 bg-white border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Form: Controls (7 cols) */}
              <div className="lg:col-span-7 bg-[#fbf7ef] p-8 sm:p-12 border border-[#75182d]/20 shadow-sm space-y-8">
                <div>
                  <h3 className="font-title text-2xl font-light text-[#222222] mb-1">
                    {isJa ? "給食条件の入力" : "Thông Số Dự Toán Của Doanh Nghiệp"}
                  </h3>
                  <p className="text-xs text-[#222222]/70 font-mono">
                    {isJa ? "食数やオプションを変更すると、リアルタイムで見積金額が更新されます。" : "Điều chỉnh số lượng và tùy chọn để xem dự toán tương ứng theo thời gian thực."}
                  </p>
                </div>

                {/* 1. Số lượng suất ăn/ngày */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-mono uppercase tracking-wider font-bold text-[#222222]">
                      {isJa ? "1. 1日あたりの給食数：" : "1. Số lượng suất ăn mỗi ngày:"}
                    </label>
                    <span className="font-mono text-xl font-bold text-[#75182d]">
                      {quantity} <span className="text-xs font-normal text-[#222222]/70">{isJa ? "食/日" : "suất/ngày"}</span>
                    </span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    step="25"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full accent-[#75182d] h-2 bg-stone-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-[#222222]/50 mt-1">
                    <span>{isJa ? "50食" : "50 suất"}</span>
                    <span>{isJa ? "500食" : "500 suất"}</span>
                    <span>{isJa ? "1,000食" : "1.000 suất"}</span>
                    <span>{isJa ? "2,000食以上" : "2.000+ suất"}</span>
                  </div>
                </div>

                {/* 2. Đơn giá mỗi suất ăn */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-3">
                    {isJa ? "2. 1食あたりの想定予算単価：" : "2. Mức giá suất ăn dự kiến:"}
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { price: 30000, label: "30.000đ", note: isJa ? "標準" : "Tiêu chuẩn" },
                      { price: 35000, label: "35.000đ", note: isJa ? "アドバンス" : "Nâng cao" },
                      { price: 40000, label: "40.000đ", note: isJa ? "プレミアム" : "Chất lượng" },
                      { price: 50000, label: "50.000đ", note: isJa ? "和食弁当" : "Bento Nhật" },
                    ].map((item) => (
                      <button
                        key={item.price}
                        type="button"
                        onClick={() => setPricePerMeal(item.price)}
                        className={`p-3 border text-center transition-all cursor-pointer ${
                          pricePerMeal === item.price
                            ? "bg-[#75182d] text-white border-[#75182d] shadow-sm font-bold"
                            : "bg-white text-[#222222] border-black/15 hover:border-[#75182d]"
                        }`}
                      >
                        <div className="font-mono text-base font-bold">{item.label}</div>
                        <div className={`text-[10px] mt-0.5 ${pricePerMeal === item.price ? "text-white/80" : "text-[#222222]/60"}`}>
                          {item.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Số ngày phục vụ trong tháng */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-3">
                    {isJa ? "3. 月間稼働日数：" : "3. Số ngày phục vụ mỗi tháng:"}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { days: 22, label: isJa ? "22日間" : "22 ngày", note: isJa ? "月〜金（週休2日）" : "Thứ 2 - Thứ 6" },
                      { days: 26, label: isJa ? "26日間" : "26 ngày", note: isJa ? "月〜土（通常工場）" : "Thứ 2 - Thứ 7" },
                      { days: 30, label: isJa ? "30日間" : "30 ngày", note: isJa ? "24/7 年中無休シフト" : "Ca kíp 24/7" },
                    ].map((item) => (
                      <button
                        key={item.days}
                        type="button"
                        onClick={() => setDaysPerMonth(item.days)}
                        className={`p-3 border text-center transition-all cursor-pointer ${
                          daysPerMonth === item.days
                            ? "bg-[#75182d] text-white border-[#75182d] shadow-sm font-bold"
                            : "bg-white text-[#222222] border-black/15 hover:border-[#75182d]"
                        }`}
                      >
                        <div className="font-mono text-sm font-bold">{item.label}</div>
                        <div className={`text-[10px] mt-0.5 ${daysPerMonth === item.days ? "text-white/80" : "text-[#222222]/60"}`}>
                          {item.note}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 4. Dịch vụ cộng thêm */}
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider font-bold text-[#222222] mb-3">
                    {isJa ? "4. 追加オプションサービス（任意）：" : "4. Dịch vụ tiện ích cộng thêm (Tùy chọn):"}
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center gap-3 p-3 bg-white border border-black/10 cursor-pointer hover:border-[#75182d]">
                      <input
                        type="checkbox"
                        checked={includeCoffee}
                        onChange={(e) => setIncludeCoffee(e.target.checked)}
                        className="w-4 h-4 accent-[#75182d]"
                      />
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-[#222222]">
                          {isJa
                            ? "SHINSEI カフェ & ドリンクサービス (+15.000đ / 名 / 日)"
                            : "Đồ uống & Cà phê pha máy Shinsei (+15.000đ / người / ngày)"}
                        </div>
                        <div className="text-[11px] text-[#222222]/60">
                          {isJa
                            ? "本格エスプレッソ、宇治抹茶ラテ、フルーツティーの現地提供。"
                            : "Phục vụ cà phê pha máy Ý, trà matcha, trà trái cây tươi tại chỗ."}
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-white border border-black/10 cursor-pointer hover:border-[#75182d]">
                      <input
                        type="checkbox"
                        checked={includeSnack}
                        onChange={(e) => setIncludeSnack(e.target.checked)}
                        className="w-4 h-4 accent-[#75182d]"
                      />
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-[#222222]">
                          {isJa
                            ? "午後のおやつ・間食補給 (+10.000đ / 食)"
                            : "Bữa phụ xế chiều dinh dưỡng (+10.000đ / suất)"}
                        </div>
                        <div className="text-[11px] text-[#222222]/60">
                          {isJa
                            ? "焼きたてパン、ヨーグルト、蓮の実ぜんざい、季節の果物。"
                            : "Bánh ngọt tươi, sữa chua, chè hạt sen hoặc hoa quả thanh mát giữa ca."}
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center gap-3 p-3 bg-white border border-black/10 cursor-pointer hover:border-[#75182d]">
                      <input
                        type="checkbox"
                        checked={includeDelivery}
                        onChange={(e) => setIncludeDelivery(e.target.checked)}
                        className="w-4 h-4 accent-[#75182d]"
                      />
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-[#222222]">
                          {isJa
                            ? "自社専用 保温配送便 (+400.000đ / 日)"
                            : "Xe bán tải bảo ôn giữ ấm giao tận nơi (+400.000đ / ngày)"}
                        </div>
                        <div className="text-[11px] text-[#222222]/60">
                          {isJa
                            ? "現地厨房がない事業所向け。定温コンテナにて適温配送。"
                            : "Áp dụng cho đơn vị không tổ chức bếp nấu tại chỗ, giao đúng giờ theo ca."}
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

              </div>

              {/* Right: Results Summary (5 cols) */}
              <div className="lg:col-span-5 bg-[#75182d] text-white p-8 sm:p-10 shadow-xl border border-black/20 sticky top-28 space-y-6">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold block mb-1">
                    {isJa ? "試算結果サマリー" : "Kết Quả Dự Toán Ngân Sách"}
                  </span>
                  <h4 className="font-title text-2xl font-light text-white">
                    {isJa ? "概算月額総予算" : "Chi Phí Ước Tính Tổng Thể"}
                  </h4>
                </div>

                <div className="py-4 border-y border-white/15 space-y-3">
                  <div>
                    <span className="text-xs text-[#f1e2c8]/80 block font-mono">
                      {isJa ? "1ヶ月あたりの総予算：" : "Tổng ngân sách mỗi tháng:"}
                    </span>
                    <div className="font-mono text-3xl sm:text-4xl font-light text-[#f1e2c8] tracking-tight mt-1">
                      {formatVND(totalCostPerMonth)}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs font-mono">
                    <div>
                      <span className="text-[#f1e2c8]/70 block">{isJa ? "1日あたり：" : "Mỗi ngày:"}</span>
                      <strong className="text-white text-sm">{formatVND(totalCostPerDay)}</strong>
                    </div>
                    <div>
                      <span className="text-[#f1e2c8]/70 block">{isJa ? "試算規模：" : "Quy mô:"}</span>
                      <strong className="text-white text-sm">
                        {quantity} {isJa ? "名" : "người"} × {daysPerMonth} {isJa ? "日" : "ngày"}
                      </strong>
                    </div>
                  </div>
                </div>

                {/* Phân bổ ngân sách minh bạch */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#f1e2c8] font-bold block">
                    {isJa ? "日本式5S基準 コスト構成内訳：" : "Cơ cấu chi phí minh bạch chuẩn 5S:"}
                  </span>
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-[#f1e2c8]/90 font-mono mb-1">
                        <span>{isJa ? "65% 安全な食材・原材料費：" : "65% Thực phẩm sạch & Nguyên liệu:"}</span>
                        <span>{formatVND(ingredientCost)}</span>
                      </div>
                      <div className="w-full bg-black/30 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#f1e2c8] h-full w-[65%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[#f1e2c8]/90 font-mono mb-1">
                        <span>{isJa ? "20% 調理人件費・労務管理：" : "20% Nhân công & Chế biến:"}</span>
                        <span>{formatVND(laborCost)}</span>
                      </div>
                      <div className="w-full bg-black/30 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#f1e2c8]/80 h-full w-[20%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[#f1e2c8]/90 font-mono mb-1">
                        <span>{isJa ? "10% 厨房運営 & 衛生管理費：" : "10% Vận hành & ATVSTP:"}</span>
                        <span>{formatVND(safetyOpsCost)}</span>
                      </div>
                      <div className="w-full bg-black/30 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#f1e2c8]/60 h-full w-[10%]"></div>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[#f1e2c8]/90 font-mono mb-1">
                        <span>{isJa ? "5% 管理費・5Sカイゼン活動：" : "5% Quản lý & Cải tiến 5S:"}</span>
                        <span>{formatVND(mgmtCost)}</span>
                      </div>
                      <div className="w-full bg-black/30 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-[#f1e2c8]/40 h-full w-[5%]"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <a
                    href="#contact"
                    className="shushi-btn !bg-white !text-[#75182d] hover:!bg-[#f1e2c8] w-full text-center shadow-lg block"
                  >
                    <span>{isJa ? "正式なお見積り・試算書を請求" : "Yêu cầu gửi bảng chào giá chính thức"}</span>
                  </a>
                  <p className="text-[11px] text-[#f1e2c8]/70 text-center font-mono mt-2">
                    {isJa ? "※ お見積りはVATおよび定期細菌検査費用を含みます" : "* Báo giá đã bao gồm VAT và kiểm nghiệm vi sinh định kỳ"}
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* So sánh giá trị: Mô hình truyền thống vs Shinsei 5S */}
        <section className="py-24 bg-[#fbf7ef] border-b border-black/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#75182d] font-bold block mb-2">
                {isJa ? "費用対効果の比較" : "So Sánh Hiệu Quả"}
              </span>
              <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222]">
                {isJa ? "日本式5S給食によるコスト最適化" : "Tối Ưu Ngân Sách Với Chuẩn 5S Nhật Bản"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 border border-black/10">
                <div className="text-sm font-mono uppercase tracking-wider text-stone-500 font-bold mb-4 pb-2 border-b border-black/10">
                  {isJa ? "自前調理・従来型給食モデル" : "Tự Nấu Hoặc Cơ Sở Truyền Thống"}
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#222222]/70">
                  <p className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{isJa ? "食材のロスや労務費の増加をコントロールしにくい。" : "Khó kiểm soát thất thoát nguyên liệu và chi phí nhân công tăng theo thời gian."}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{isJa ? "単調なメニューが続き、従業員の満足度低下を招く。" : "Thực đơn lặp lại gây chán ngán, nhân sự khiếu nại chất lượng bữa ăn."}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{isJa ? "検食保管や外部検査体制の欠如による食中毒リスクの懸念。" : "Nguy cơ ngộ độc thực phẩm cao do thiếu quy trình lưu mẫu và kiểm nghiệm độc lập."}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-red-500 font-bold">✕</span>
                    <span>{isJa ? "衛生許可手続きや法的責任を企業自らが負う負担。" : "Doanh nghiệp phải tự lo giấy phép ATVSTP và đối diện rủi ro pháp lý."}</span>
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 border-2 border-[#75182d] shadow-sm">
                <div className="text-sm font-mono uppercase tracking-wider text-[#75182d] font-bold mb-4 pb-2 border-b border-[#75182d]/20">
                  {isJa ? "SHINSEI 5S 給食ソリューション" : "Giải Pháp Bếp Ăn Shinsei 5S"}
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-[#222222]">
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                    <span>{isJa ? "明確な定額頭割りコストで、余計なロスや追加費用ゼロ。" : "Chi phí cố định rõ ràng theo đầu người, không rủi ro thất thoát lãng phí."}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                    <span>{isJa ? "30日サイクル多彩な献立で、従業員満足度95%以上を維持。" : "Thực đơn 30 ngày phong phú, tỷ lệ hài lòng nhân sự cam kết trên 95%."}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                    <span>{isJa ? "24時間検食保管と国立検査機関での定期的細菌検査を実施。" : "Lưu mẫu 24h và kiểm nghiệm vi sinh tại Viện ATVSTP Quốc gia định kỳ."}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                    <span>{isJa ? "SHINSEIが食品安全と賠償責任保険を100%包括担保。" : "Shinsei chịu 100% trách nhiệm bảo hiểm pháp lý và an toàn thực phẩm."}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <ContactShinsei />
      </main>

      <Footer />
    </div>
  );
}
