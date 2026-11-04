"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function BentoPhilosophy() {
  const { isJa } = useLanguage();

  const pillars = isJa
    ? [
        {
          num: "01",
          badge: "衛生",
          title: "5S基準 1方向動線厨房",
          subtitle: "交差汚染の徹底防止",
          desc: "検収・下処理・オゾン殺菌・加熱調理・紫外線殺菌クリーンルームでの盛り付けまで、物理的ゾーニングを徹底。",
          metric: "100%",
          metricLabel: "独立動線管理",
        },
        {
          num: "02",
          badge: "新鮮",
          title: "早朝4時の検収検査",
          subtitle: "当日入荷の新鮮食材",
          desc: "提携農場の厳選野菜と検疫済み精肉・鮮魚。冷凍長期保管を行わず、毎朝仕入れた新鮮な食材のみを使用します。",
          metric: "VietGAP",
          metricLabel: "産地透明性",
        },
        {
          num: "03",
          badge: "食育",
          title: "食育栄養バランス",
          subtitle: "シフト・職種別のカロリー計算",
          desc: "管理栄養士が現場の労働負荷に合わせて緻密に設計。デスクワークには食物繊維豊富でヘルシーな献立をご提案。",
          metric: "28日",
          metricLabel: "重複なしローテーション",
        },
        {
          num: "04",
          badge: "保温",
          title: "65℃以上の適温保温",
          subtitle: "作りたての温かさをキープ",
          desc: "SUS304ステンレストレイを多層断熱ボックスに格納し、専用保温車両にて提供直前まで出来立ての温度を維持。",
          metric: "65℃以上",
          metricLabel: "喫食時推奨温度",
        },
      ]
    : [
        {
          num: "01",
          badge: "VỆ SINH",
          title: "Bếp một chiều 5S",
          subtitle: "Ngăn nhiễm khuẩn chéo triệt để",
          desc: "Phân chia vật lý nghiêm ngặt giữa khu thô, khu sơ chế sục ozon, bếp nấu áp suất cao và phòng chia suất vô trùng có đèn UV.",
          metric: "100%",
          metricLabel: "Phân khu độc lập",
        },
        {
          num: "02",
          badge: "TƯƠI MỚI",
          title: "Kiểm định 04:00 Sáng",
          subtitle: "Nguồn nguyên liệu tươi trong ngày",
          desc: "Rau củ từ nhà vườn VietGAP Đà Lạt, thịt cá có tem kiểm dịch thú y. Tuyệt đối không lưu trữ nguyên liệu quá 24 giờ trong kho lạnh.",
          metric: "VietGAP",
          metricLabel: "Nguồn gốc minh bạch",
        },
        {
          num: "03",
          badge: "DINH DƯỠNG",
          title: "Dinh dưỡng Shokuiku",
          subtitle: "Khoa học năng lượng theo ca kíp",
          desc: "Tính toán calo chính xác: Bổ sung khoáng chất cho lao động nặng, tăng cường chất xơ thanh đạm cho khối văn phòng và chuyên gia.",
          metric: "28 Ngày",
          metricLabel: "Không trùng lặp món",
        },
        {
          num: "04",
          badge: "BẢO ÔN",
          title: "Bảo ôn trên 65°C",
          subtitle: "Giữ trọn độ nóng sốt tự nhiên",
          desc: "Khay inox SUS 304 đặt trong thùng bảo ôn giữ nhiệt đa tầng, vận chuyển bằng xe chuyên dụng đến căng-tin nhà máy trong bán kính 35km.",
          metric: "> 65°C",
          metricLabel: "Nhiệt độ tại bàn ăn",
        },
      ];

  return (
    <section id="about" className="py-24 bg-[#fff9f3] border-b border-black/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#e94222] mb-4"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#e94222]"></span>
            <span>{isJa ? "SHINSEIの運営哲学" : "Triết lý vận hành Shinsei"}</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-title text-2xl sm:text-3xl md:text-4xl text-[#0d1717] font-light leading-snug tracking-tight"
          >
            {isJa
              ? "工場の製造ラインを支える皆様から、オフィス勤務の皆様、海外の専門家まで、すべての食事を最も厳格な規律のもとで調理します。安全性と美味しさが共存する給食をお届けします。"
              : "Dù phục vụ công nhân dây chuyền nặng, khối văn phòng kỹ thuật hay các chuyên gia nước ngoài, mỗi suất ăn đều được chế biến với kỷ luật nghiêm ngặt nhất. Nơi tiêu chuẩn an toàn thực phẩm song hành cùng vị ngon trọn vẹn."}
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-title italic text-sm text-[#0d1717]/50 mt-4 tracking-widest"
          >
            {isJa ? "安全と美味しさ · 規律から生まれる確かな信頼" : "An toàn & Thơm ngon · Uy tín từ sự chuẩn mực"}
          </motion.div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              whileHover={{ y: -6 }}
              className="group bg-[#f5ece4] p-8 border border-black/10 hover:border-[#0d1717] transition-all duration-300 relative flex flex-col justify-between shadow-sm hover:shadow-md cursor-default"
            >
              <div>
                {/* Number & Badge header */}
                <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-6">
                  <span className="font-mono text-2xl font-light text-[#0d1717]/40 group-hover:text-[#e94222] transition-colors">
                    {item.num}
                  </span>
                  <span className="font-title text-xs font-semibold tracking-widest text-[#e94222] bg-white px-2 py-0.5 rounded">
                    {item.badge}
                  </span>
                </div>

                <h4 className="font-title text-xl font-normal text-[#0d1717] tracking-tight mb-1">
                  {item.title}
                </h4>
                <div className="text-xs uppercase tracking-wider font-semibold text-[#e94222] mb-4">
                  {item.subtitle}
                </div>

                <p className="text-sm text-[#3a3a3a]/80 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Metric */}
              <div className="pt-8 mt-6 border-t border-black/10 flex items-baseline justify-between">
                <div>
                  <div className="font-title text-2xl font-bold text-[#0d1717]">
                    {item.metric}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider text-[#3a3a3a]/60">
                    {item.metricLabel}
                  </div>
                </div>

                <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#0d1717] group-hover:bg-[#e94222] group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
