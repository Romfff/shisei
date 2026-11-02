"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Utensils, Plane } from "lucide-react";

export function Hero() {
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Pinned scroll animation: Left and Right cards peek out initially, then smoothly slide out full width
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start start", "end end"],
  });

  // Pre-peek: -24vw and +24vw initially, expanding to -46vw and +46vw for full-screen showcase
  const leftX = useTransform(scrollYProgress, [0, 0.85], ["-24vw", "-46vw"]);
  const leftRotate = useTransform(scrollYProgress, [0, 0.85], [-3, -6]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.25], [0.92, 1]);
  const leftScale = useTransform(scrollYProgress, [0, 0.85], [0.96, 1.04]);

  const rightX = useTransform(scrollYProgress, [0, 0.85], ["24vw", "46vw"]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.85], [3, 6]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.25], [0.92, 1]);
  const rightScale = useTransform(scrollYProgress, [0, 0.85], [0.96, 1.04]);

  const centerScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.12]);

  return (
    <section className="relative bg-[#fbf7ef] border-b border-black/10">
      
      {/* Top Banner Tag & Titles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-8">
        
        {/* Animated Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] font-semibold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-4 py-1.5 rounded-full border border-[#75182d]/20"
        >
          <span>株式会社 SHINSEI</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]/40"></span>
          <span>Food & Coffee · Travel</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]/40"></span>
          <span>5S 日本基準</span>
        </motion.div>

        {/* Display Title */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-title text-5xl sm:text-7xl md:text-8xl lg:text-[105px] font-light uppercase tracking-[-0.03em] text-[#75182d] leading-[0.92] max-w-6xl mx-auto my-2"
          >
            Shinsei
          </motion.h1>
        </div>

        {/* Subtitle from Official Brochure */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="font-title italic text-xl sm:text-2xl md:text-3xl text-[#222222]/85 font-normal tracking-wide max-w-3xl mx-auto mt-3 mb-8"
        >
          An tâm trong từng bữa ăn · Tận tâm trong từng trải nghiệm.
        </motion.h2>

        {/* Action pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <a href="#food-coffee" className="shushi-btn shushi-btn-primary">
            <span className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              <span>Khám phá Food & Coffee</span>
            </span>
          </a>
          <a href="#travel" className="shushi-btn shushi-btn-outline">
            <span className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-[#75182d]" />
              <span>Dịch vụ Shinsei Travel</span>
            </span>
          </a>
        </motion.div>
      </div>

      {/* Pinned Scroll Track: 3 Extra Large Authentic Images with perfectly legible typography */}
      <div ref={showcaseRef} className="relative h-[220vh] w-full">
        
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
          
          <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
            
            {/* Left Card: Shinsei Café & Căng tin tổng hợp */}
            <motion.div
              style={{
                x: leftX,
                rotate: leftRotate,
                opacity: leftOpacity,
                scale: leftScale,
              }}
              className="absolute w-[84vw] sm:w-[64vw] md:w-[54vw] lg:w-[48vw] max-w-[720px] aspect-[16/10] bg-[#222222] border border-black/30 shadow-2xl overflow-hidden z-10 group cursor-pointer"
            >
              <img
                src="/images/shinsei-staff-coffee.jpg"
                alt="Đội ngũ nhân viên quầy Café và căng tin Shinsei"
                className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold block mb-1">
                  Food & Coffee · Căng tin tổng hợp
                </span>
                <p className="font-title text-lg sm:text-xl md:text-2xl font-light text-white leading-snug">
                  Vận hành quầy cà phê & căng tin chuyên nghiệp
                </p>
              </div>
            </motion.div>

            {/* Center Card: Khay cơm Makunouchi chuẩn Nhật Bản */}
            <motion.div
              style={{ scale: centerScale }}
              className="relative w-[88vw] sm:w-[68vw] md:w-[58vw] lg:w-[52vw] max-w-[800px] aspect-[16/10] bg-[#222222] border border-black/35 shadow-2xl overflow-hidden z-20 group"
            >
              <img
                src="/images/japan-popular-meal.jpg"
                alt="Khay cơm Bento Makunouchi truyền thống Nhật Bản Shinsei"
                className="w-full h-full object-cover object-center opacity-92 group-hover:scale-104 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Bottom Info: Clean, spacious layout with no text overflow */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div className="max-w-lg">
                  <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold block mb-1">
                    Công ty Cổ phần Thương Mại Shinsei
                  </span>
                  <p className="font-title text-xl sm:text-2xl md:text-3xl font-light text-white leading-snug">
                    Suất ăn dinh dưỡng, an toàn tuyệt đối theo tiêu chuẩn 5S Nhật Bản.
                  </p>
                </div>

                <div className="flex items-center gap-4 text-xs text-stone-200 shrink-0">
                  <div className="border-l border-white/30 pl-3">
                    <div className="font-bold text-white text-base sm:text-lg font-mono">10.000+</div>
                    <div className="text-[10px] text-[#f1e2c8] uppercase tracking-wider">Suất / ngày</div>
                  </div>
                  <div className="border-l border-white/30 pl-3">
                    <div className="font-bold text-white text-base sm:text-lg font-mono">5S · HACCP</div>
                    <div className="text-[10px] text-[#f1e2c8] uppercase tracking-wider">Tiêu chuẩn</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Shinsei Travel - Sân Golf & Trải nghiệm Nhật Bản */}
            <motion.div
              style={{
                x: rightX,
                rotate: rightRotate,
                opacity: rightOpacity,
                scale: rightScale,
              }}
              className="absolute w-[84vw] sm:w-[64vw] md:w-[54vw] lg:w-[48vw] max-w-[720px] aspect-[16/10] bg-[#222222] border border-black/30 shadow-2xl overflow-hidden z-10 group cursor-pointer"
            >
              <img
                src="/images/japan-golf-course.jpg"
                alt="Shinsei Travel - Sân Golf tiêu chuẩn quốc tế tại Nhật Bản"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold block mb-1">
                  Shinsei Travel · Du lịch cao cấp
                </span>
                <p className="font-title text-lg sm:text-xl md:text-2xl font-light text-white leading-snug">
                  Du lịch y tế, du lịch golf & hành trình trải nghiệm chuyên sâu
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Marquee Ticker */}
      <div className="py-4 bg-[#75182d] text-[#f1e2c8] overflow-hidden whitespace-nowrap border-y border-white/10 select-none">
        <div className="animate-marquee flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em]">
          <span>~ Công ty Cổ phần Thương Mại Shinsei</span>
          <span className="text-white">✦</span>
          <span>Suất ăn công nghiệp: 30k – 35k – 40k</span>
          <span className="text-white">✦</span>
          <span>Suất ăn phổ thông: 35k – 40k – 45k – 50k</span>
          <span className="text-white">✦</span>
          <span>Suất ăn cao cấp: 60k – 80k – 100k – 120k</span>
          <span className="text-white">✦</span>
          <span>Đặt tiệc bàn 6 – 8 – 10 người (từ 120k/người)</span>
          <span className="text-white">✦</span>
          <span>Shinsei Travel: Du lịch y tế · Du lịch Golf · Trải nghiệm</span>
          <span className="text-white">✦</span>
          <span>Vận hành bếp 5S chuẩn Nhật Bản</span>
          <span className="text-white">✦</span>
          {/* Duplicate loop */}
          <span>~ Công ty Cổ phần Thương Mại Shinsei</span>
          <span className="text-white">✦</span>
          <span>Suất ăn công nghiệp: 30k – 35k – 40k</span>
          <span className="text-white">✦</span>
          <span>Suất ăn phổ thông: 35k – 40k – 45k – 50k</span>
          <span className="text-white">✦</span>
          <span>Suất ăn cao cấp: 60k – 80k – 100k – 120k</span>
          <span className="text-white">✦</span>
          <span>Đặt tiệc bàn 6 – 8 – 10 người (từ 120k/người)</span>
          <span className="text-white">✦</span>
          <span>Shinsei Travel: Du lịch y tế · Du lịch Golf · Trải nghiệm</span>
          <span className="text-white">✦</span>
          <span>Vận hành bếp 5S chuẩn Nhật Bản</span>
          <span className="text-white">✦</span>
        </div>
      </div>

    </section>
  );
}
