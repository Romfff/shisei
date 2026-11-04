"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Utensils, Coffee, Compass, Plane, ArrowRight } from "lucide-react";

export function Hero() {
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Pinned scroll animation: Cards peek out initially, then smoothly fan out into 4 directions
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start start", "end end"],
  });

  // 1. Left Card: Thức uống Shinsei
  const leftX = useTransform(scrollYProgress, [0, 0.85], ["-18vw", "-45vw"]);
  const leftRotate = useTransform(scrollYProgress, [0, 0.85], [-2, -6]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.25], [0.92, 1]);
  const leftScale = useTransform(scrollYProgress, [0, 0.85], [0.95, 1.02]);

  // 2. Right Card: Bao bì quà tặng Shinsei
  const rightX = useTransform(scrollYProgress, [0, 0.85], ["18vw", "45vw"]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.85], [2, 6]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.25], [0.92, 1]);
  const rightScale = useTransform(scrollYProgress, [0, 0.85], [0.95, 1.02]);

  // 3. Top-Right Card: Du lịch Golf Phú Sĩ
  const topY = useTransform(scrollYProgress, [0, 0.85], ["-6vh", "-28vh"]);
  const topX = useTransform(scrollYProgress, [0, 0.85], ["10vw", "24vw"]);
  const topRotate = useTransform(scrollYProgress, [0, 0.85], [1, 5]);
  const topOpacity = useTransform(scrollYProgress, [0, 0.3], [0.75, 0.98]);
  const topScale = useTransform(scrollYProgress, [0, 0.85], [0.9, 1.0]);

  // 4. Bottom-Left Card: Du lịch Trải nghiệm Kyoto
  const bottomY = useTransform(scrollYProgress, [0, 0.85], ["6vh", "28vh"]);
  const bottomX = useTransform(scrollYProgress, [0, 0.85], ["-10vw", "-24vw"]);
  const bottomRotate = useTransform(scrollYProgress, [0, 0.85], [-1, -5]);
  const bottomOpacity = useTransform(scrollYProgress, [0, 0.3], [0.75, 0.98]);
  const bottomScale = useTransform(scrollYProgress, [0, 0.85], [0.9, 1.0]);

  // 5. Center Card: Suất ăn Bento & Bếp 5S
  const centerScale = useTransform(scrollYProgress, [0, 0.85], [1, 1.1]);

  return (
    <section className="relative bg-[#fbf7ef] border-b border-black/10">
      
      {/* Top Banner Tag & Titles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-8">
        
        {/* Animated Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] font-semibold text-[#75182d] mb-3 bg-[#f1e2c8]/60 px-4 py-1.5 rounded-full border border-[#75182d]/20"
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

        {/* 3 Action Buttons: Bếp ăn, Đồ uống, Du lịch */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4"
        >
          <Link href="/bep-an-thuc-don" className="shushi-btn shushi-btn-primary shadow-sm">
            <span className="flex items-center gap-2">
              <Utensils className="w-4 h-4" />
              <span>Khám phá Bếp ăn · Thực đơn</span>
            </span>
          </Link>
          <Link href="/do-uong" className="shushi-btn shushi-btn-outline shadow-2xs">
            <span className="flex items-center gap-2">
              <Coffee className="w-4 h-4 text-[#75182d]" />
              <span>Menu Đồ uống & Kiosk Café</span>
            </span>
          </Link>
          <Link href="/du-lich" className="shushi-btn shushi-btn-outline shadow-2xs">
            <span className="flex items-center gap-2">
              <Plane className="w-4 h-4 text-[#75182d]" />
              <span>Dịch vụ Shinsei Travel</span>
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Pinned Scroll Track: 5 Cards fanning out into 4 directions */}
      <div ref={showcaseRef} className="relative h-[240vh] w-full">
        
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
          
          <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
            
            {/* Card 4 (Top-Right): Du lịch Golf PGA núi Phú Sĩ */}
            <motion.div
              style={{
                y: topY,
                x: topX,
                rotate: topRotate,
                opacity: topOpacity,
                scale: topScale,
              }}
              className="absolute w-[68vw] sm:w-[48vw] md:w-[38vw] lg:w-[32vw] max-w-[480px] aspect-[16/10] bg-[#222222] border border-black/30 shadow-2xl overflow-hidden z-10 group cursor-pointer"
            >
              <img
                src="/images/Golf/golf_3.jpg"
                alt="Shinsei Travel · Sân Golf PGA núi Phú Sĩ"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold block mb-0.5">
                  Shinsei Travel · Golf PGA
                </span>
                <p className="font-title text-base sm:text-lg font-light text-white leading-snug">
                  Sân golf đẳng cấp dưới chân núi Phú Sĩ
                </p>
              </div>
            </motion.div>

            {/* Card 5 (Bottom-Left): Du lịch Trải nghiệm & Văn hóa Kyoto */}
            <motion.div
              style={{
                y: bottomY,
                x: bottomX,
                rotate: bottomRotate,
                opacity: bottomOpacity,
                scale: bottomScale,
              }}
              className="absolute w-[68vw] sm:w-[48vw] md:w-[38vw] lg:w-[32vw] max-w-[480px] aspect-[16/10] bg-[#222222] border border-black/30 shadow-2xl overflow-hidden z-10 group cursor-pointer"
            >
              <img
                src="/images/Travel/travel_1.jpg"
                alt="Shinsei Travel · Cố đô Kyoto và Trà đạo Chado"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold block mb-0.5">
                  Shinsei Travel · Văn hóa & Ẩm thực
                </span>
                <p className="font-title text-base sm:text-lg font-light text-white leading-snug">
                  Cố đô Kyoto, trà đạo Chado và suối nước nóng Onsen
                </p>
              </div>
            </motion.div>

            {/* Card 1 (Left): Cốc & Thức uống thương hiệu Shinsei */}
            <motion.div
              style={{
                x: leftX,
                rotate: leftRotate,
                opacity: leftOpacity,
                scale: leftScale,
              }}
              className="absolute w-[82vw] sm:w-[62vw] md:w-[50vw] lg:w-[44vw] max-w-[660px] aspect-[16/10] bg-[#222222] border border-black/30 shadow-2xl overflow-hidden z-20 group cursor-pointer"
            >
              <img
                src="/images/shinsei-hero-cups.jpg"
                alt="Bộ cốc giữ nhiệt và thức uống thương hiệu Shinsei"
                className="w-full h-full object-cover object-center opacity-92 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold block mb-1">
                  Food & Coffee · Cốc và Thức uống Shinsei
                </span>
                <p className="font-title text-base sm:text-lg md:text-xl font-light text-white leading-snug">
                  Menu cà phê pha máy và thức uống nhận diện thương hiệu
                </p>
              </div>
            </motion.div>

            {/* Card 2 (Right): Hộp bánh quà tặng & Bao bì Shinsei */}
            <motion.div
              style={{
                x: rightX,
                rotate: rightRotate,
                opacity: rightOpacity,
                scale: rightScale,
              }}
              className="absolute w-[82vw] sm:w-[62vw] md:w-[50vw] lg:w-[44vw] max-w-[660px] aspect-[16/10] bg-[#222222] border border-black/30 shadow-2xl overflow-hidden z-20 group cursor-pointer"
            >
              <img
                src="/images/shinsei-hero-packaging.jpg"
                alt="Bao bì túi giấy và Hộp bánh quà tặng Shinsei"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"></div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10.5px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold block mb-1">
                  Bao bì và Nhận diện thương hiệu Shinsei
                </span>
                <p className="font-title text-base sm:text-lg md:text-xl font-light text-white leading-snug">
                  Hộp bánh cao cấp và bao bì đóng gói thân thiện môi trường
                </p>
              </div>
            </motion.div>

            {/* Card 3 (Center): Suất ăn Bento & Bếp 5S Shinsei (Z-index 30, stays on top) */}
            <motion.div
              style={{ scale: centerScale }}
              className="relative w-[86vw] sm:w-[66vw] md:w-[54vw] lg:w-[48vw] max-w-[750px] aspect-[16/10] bg-[#222222] border border-black/35 shadow-2xl overflow-hidden z-30 group"
            >
              <img
                src="/images/shinsei-hero-bento-kitchen.jpg"
                alt="Suất ăn bento dinh dưỡng và Bếp chế biến 5S Shinsei"
                className="w-full h-full object-cover object-center opacity-92 group-hover:scale-104 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Bottom Info: Clean, spacious layout */}
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
          <span>Shinsei Travel: Du lịch Y tế · Golf PGA · Trải nghiệm văn hóa</span>
          <span className="text-white">✦</span>
          <span>Tiêu chuẩn 5S Nhật Bản & HACCP</span>
          <span className="text-white">✦</span>
          <span>Hotline: 0981.365.391</span>
          <span className="text-white">✦</span>
        </div>
      </div>

    </section>
  );
}
