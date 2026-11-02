"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Utensils, Plane, Sparkles } from "lucide-react";

export function Hero() {
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Pinned scroll animation: Left and Right cards peek out initially, then fan out full screen
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start start", "end end"],
  });

  const leftX = useTransform(scrollYProgress, [0, 0.85], ["-12vw", "-34vw"]);
  const leftRotate = useTransform(scrollYProgress, [0, 0.85], [-2, -5]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.3], [0.88, 1]);
  const leftScale = useTransform(scrollYProgress, [0, 0.85], [0.92, 1.05]);

  const rightX = useTransform(scrollYProgress, [0, 0.85], ["12vw", "34vw"]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.85], [2, 5]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.3], [0.88, 1]);
  const rightScale = useTransform(scrollYProgress, [0, 0.85], [0.92, 1.05]);

  const centerScale = useTransform(scrollYProgress, [0, 0.85], [0.98, 1.15]);

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

        {/* Massive Display Title */}
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

      {/* Pinned Scroll Track: 3 Images peek out then fan out to full screen */}
      <div ref={showcaseRef} className="relative h-[220vh] w-full">
        
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
          
          <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
            
            {/* Left Card: Cơm hộp Bento & Quầy Café Shinsei */}
            <motion.div
              style={{
                x: leftX,
                rotate: leftRotate,
                opacity: leftOpacity,
                scale: leftScale,
              }}
              className="absolute w-[80vw] sm:w-[48vw] md:w-[38vw] lg:w-[34vw] aspect-[16/10] bg-[#222222] border border-black/25 shadow-2xl overflow-hidden z-10 group cursor-pointer"
            >
              <img
                src="/images/food-coffee.jpg"
                alt="Quầy Café và căng tin tổng hợp Shinsei"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-semibold block">
                  Food & Coffee · Căng tin tổng hợp
                </span>
                <p className="font-title text-base lg:text-xl font-light text-white mt-1">
                  Vận hành quầy cà phê & bếp ăn tập thể chuyên nghiệp
                </p>
              </div>
            </motion.div>

            {/* Center Card: Suất ăn khay chuẩn Nhật Shinsei */}
            <motion.div
              style={{ scale: centerScale }}
              className="relative w-[85vw] sm:w-[52vw] md:w-[42vw] lg:w-[38vw] aspect-[16/10] bg-[#222222] border border-black/30 shadow-2xl overflow-hidden z-20 group"
            >
              <img
                src="/images/food-takeaway.jpg"
                alt="Suất ăn công nghiệp và bento Shinsei"
                className="w-full h-full object-cover object-center opacity-90 group-hover:scale-104 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div className="max-w-md">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold">
                    Công ty Cổ phần Thương Mại Shinsei
                  </span>
                  <p className="font-title text-xl sm:text-2xl font-light text-white mt-1 leading-snug">
                    Suất ăn dinh dưỡng, an toàn tuyệt đối theo tiêu chuẩn 5S Nhật Bản.
                  </p>
                </div>

                <div className="flex items-center gap-5 text-xs text-stone-200">
                  <div className="border-l border-white/30 pl-3">
                    <div className="font-bold text-white text-base font-mono">10.000+</div>
                    <div className="text-[10px] text-[#f1e2c8] uppercase tracking-wider">Suất / ngày</div>
                  </div>
                  <div className="border-l border-white/30 pl-3">
                    <div className="font-bold text-white text-base font-mono">HACCP · 5S</div>
                    <div className="text-[10px] text-[#f1e2c8] uppercase tracking-wider">Tiêu chuẩn</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Shinsei Travel (Du lịch y tế, Golf, Trải nghiệm Nhật Bản) */}
            <motion.div
              style={{
                x: rightX,
                rotate: rightRotate,
                opacity: rightOpacity,
                scale: rightScale,
              }}
              className="absolute w-[80vw] sm:w-[48vw] md:w-[38vw] lg:w-[34vw] aspect-[16/10] bg-[#222222] border border-black/25 shadow-2xl overflow-hidden z-10 group cursor-pointer"
            >
              <img
                src="/images/travel-golf.jpg"
                alt="Shinsei Travel - Du lịch Golf và Y tế Nhật Bản"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-semibold block">
                  Shinsei Travel · Du lịch cao cấp
                </span>
                <p className="font-title text-base lg:text-xl font-light text-white mt-1">
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
