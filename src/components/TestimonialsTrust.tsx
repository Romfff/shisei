"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react";

export function TestimonialsTrust() {
  const industrialParks = [
    "KCN VSIP I & II (Bình Dương)",
    "KCN Sóng Thần 2 & 3",
    "KCN Amata (Đồng Nai)",
    "KCN Long Đức",
    "KCN Tân Bình & Vĩnh Lộc",
    "Khu Công Nghệ Cao (SHTP)",
  ];

  const testimonials = [
    {
      company: "Công ty TNHH Sản xuất Linh kiện Cơ điện (FDI Nhật Bản)",
      location: "KCN VSIP II, Bình Dương",
      role: "Trưởng phòng Hành chính & Nhân sự",
      quote:
        "Trước đây công nhân thường phàn nàn về cơm nguội và món ăn lặp lại. Chuyển sang Shisei Food được 8 tháng, tỷ lệ hài lòng đạt trên 94%. Điều làm ban giám đốc Nhật Bản an tâm nhất là hồ sơ lưu mẫu và kết quả xét nghiệm vi sinh luôn được gửi định kỳ rất minh bạch.",
    },
    {
      company: "Tập đoàn Dệt may & Da giày xuất khẩu",
      location: "KCN Sóng Thần, Bình Dương",
      role: "Chủ tịch Công đoàn cơ sở",
      quote:
        "Với quy mô hơn 1.200 công nhân ăn cùng một ca, việc đảm bảo đủ cơm canh nóng và không bị chậm trễ là áp lực rất lớn. Đội ngũ giao vận của Shisei chưa từng trễ ca kíp nào, món canh luôn nóng hổi và vị nêm nếm rất vừa với khẩu vị cả ba miền.",
    },
    {
      company: "Hệ thống Trường Liên cấp Quốc tế",
      location: "Quận 7, TP.HCM",
      role: "Quản lý Vận hành Bán trú",
      quote:
        "Thực đơn dành cho học sinh đòi hỏi sự cẩn trọng cao độ về dinh dưỡng và an toàn. Shisei Food hỗ trợ thiết kế khẩu phần đa dạng rau củ, hạn chế dầu mỡ và đồ chế biến sẵn, phụ huynh rất yên tâm khi đến kiểm tra đột xuất bếp ăn.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="clients" className="py-24 bg-[#0d1717] text-white border-b border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Shushi FZ Testimonial Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-12 border-b border-white/10">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] font-bold text-[#e94222] mb-3"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#e94222]"></span>
              <span>Đánh giá từ đối tác · 信頼の声</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-title text-4xl sm:text-5xl font-light text-white tracking-tight leading-[1.05]"
            >
              Sự hài lòng của người lao động là thước đo chuẩn xác nhất.
            </motion.h2>
          </div>

          {/* Slider Prev / Next Controls (Shushi FZ style) */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-[#0d1717] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full border border-white/20 hover:border-white hover:bg-white hover:text-[#0d1717] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Industrial Parks Strip in dark theme */}
        <div className="mb-14 p-6 bg-white/5 border border-white/10">
          <p className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-4">
            Đang phục vụ liên tục tại các cụm công nghiệp trọng điểm:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 text-xs font-medium text-stone-200">
            {industrialParks.map((park, pIdx) => (
              <div
                key={pIdx}
                className="p-3 bg-white/5 border border-white/10 flex items-center gap-2"
              >
                <Building2 className="w-3.5 h-3.5 text-[#e94222] shrink-0" />
                <span className="truncate">{park}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Testimonial Slider Display */}
        <div className="relative min-h-[260px] bg-white/5 border border-white/10 p-8 sm:p-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -25 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="max-w-4xl"
            >
              <Quote className="w-10 h-10 text-[#e94222] mb-6 opacity-85" />
              
              <p className="font-title text-xl sm:text-2xl md:text-3xl font-light text-white/95 leading-relaxed italic mb-8">
                &ldquo;{testimonials[currentSlide].quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-title text-base sm:text-lg font-normal text-white">
                    {testimonials[currentSlide].role}
                  </div>
                  <div className="text-xs text-[#e94222] mt-0.5 font-medium">
                    {testimonials[currentSlide].company}
                  </div>
                </div>
                <div className="text-xs text-stone-400 font-mono">
                  {testimonials[currentSlide].location}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center gap-2 mt-8 sm:mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-1.5 transition-all cursor-pointer ${
                  currentSlide === idx ? "w-8 bg-[#e94222]" : "w-2 bg-white/20"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
