"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function BentoPhilosophy() {
  const pillars = [
    {
      num: "01",
      kanji: "衛生",
      title: "Bếp một chiều 5S",
      subtitle: "Ngăn nhiễm khuẩn chéo triệt để",
      desc: "Phân chia vật lý nghiêm ngặt giữa khu thô, khu sơ chế sục ozon, bếp nấu áp suất cao và phòng chia suất vô trùng có đèn UV.",
      metric: "100%",
      metricLabel: "Phân khu độc lập",
    },
    {
      num: "02",
      kanji: "新鮮",
      title: "Kiểm định 04:00 Sáng",
      subtitle: "Nguồn nguyên liệu tươi trong ngày",
      desc: "Rau củ từ nhà vườn VietGAP Đà Lạt, thịt cá có tem kiểm dịch thú y. Tuyệt đối không lưu trữ nguyên liệu quá 24 giờ trong kho lạnh.",
      metric: "VietGAP",
      metricLabel: "Nguồn gốc minh bạch",
    },
    {
      num: "03",
      kanji: "食育",
      title: "Dinh dưỡng Shokuiku",
      subtitle: "Khoa học năng lượng theo ca kíp",
      desc: "Tính toán calo chính xác: Bổ sung khoáng chất cho lao động nặng, tăng cường chất xơ thanh đạm cho khối văn phòng và chuyên gia.",
      metric: "28 Ngày",
      metricLabel: "Không trùng lặp món",
    },
    {
      num: "04",
      kanji: "保温",
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
            <span>Triết lý vận hành Nhật Bản · 食の哲学</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-title text-2xl sm:text-3xl md:text-4xl text-[#0d1717] font-light leading-snug tracking-tight"
          >
            Dù phục vụ công nhân dây chuyền nặng, khối văn phòng kỹ thuật hay các chuyên gia nước ngoài, mỗi suất ăn đều được chế biến với kỷ luật nghiêm ngặt nhất. Nơi tiêu chuẩn an toàn thực phẩm song hành cùng vị ngon trọn vẹn.
          </motion.h3>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="font-title italic text-sm text-[#0d1717]/50 mt-4 tracking-widest"
          >
            安全と美味しさ · Uy tín từ sự chuẩn mực
          </motion.div>
        </div>

        {/* 4 Pillars Grid (Shushi FZ Excellence Grid with Framer Motion Stagger) */}
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
                {/* Number & Kanji header */}
                <div className="flex items-center justify-between pb-6 border-b border-black/10 mb-6">
                  <span className="font-mono text-2xl font-light text-[#0d1717]/40 group-hover:text-[#e94222] transition-colors">
                    {item.num}
                  </span>
                  <span className="font-title text-sm font-semibold tracking-widest text-[#0d1717]/60">
                    {item.kanji}
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
