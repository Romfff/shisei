"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Hero() {
  const showcaseRef = useRef<HTMLDivElement>(null);

  // Pinned scroll animation: As you scroll through 220vh, the 3 images fan out to 100vw full screen
  const { scrollYProgress } = useScroll({
    target: showcaseRef,
    offset: ["start start", "end end"],
  });

  // Pinned scroll animation: Left and Right cards peek out initially (-12vw / +12vw), then fan out to full screen (-34vw / +34vw)
  const leftX = useTransform(scrollYProgress, [0, 0.85], ["-12vw", "-34vw"]);
  const leftRotate = useTransform(scrollYProgress, [0, 0.85], [-2, -5]);
  const leftOpacity = useTransform(scrollYProgress, [0, 0.3], [0.88, 1]);
  const leftScale = useTransform(scrollYProgress, [0, 0.85], [0.92, 1.05]);

  const rightX = useTransform(scrollYProgress, [0, 0.85], ["12vw", "34vw"]);
  const rightRotate = useTransform(scrollYProgress, [0, 0.85], [2, 5]);
  const rightOpacity = useTransform(scrollYProgress, [0, 0.3], [0.88, 1]);
  const rightScale = useTransform(scrollYProgress, [0, 0.85], [0.92, 1.05]);

  // Center Card: Expands and scales smoothly in center
  const centerScale = useTransform(scrollYProgress, [0, 0.85], [0.98, 1.15]);

  return (
    <section className="relative bg-[#f5ece4] border-b border-black/10">
      
      {/* Top Banner Tag & Titles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-8">
        
        {/* Animated Tag Pill */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-semibold text-[#e94222] mb-3"
        >
          <span>給食</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0d1717]/30"></span>
          <span>Bếp ăn công nghiệp chuẩn Nhật</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#0d1717]/30"></span>
          <span>姿勢</span>
        </motion.div>

        {/* Massive Display Title (Fraunces serif) */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-title text-5xl sm:text-7xl md:text-8xl lg:text-[105px] font-light uppercase tracking-[-0.03em] text-[#0d1717] leading-[0.92] max-w-6xl mx-auto my-2"
          >
            Shisei Food
          </motion.h1>
        </div>

        {/* Subtitle in elegant italic serif */}
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
          className="font-title italic text-xl sm:text-2xl md:text-3xl text-[#0d1717]/75 font-normal tracking-wide max-w-3xl mx-auto mt-3 mb-8"
        >
          Chất lượng trong từng suất ăn · Uy tín trong từng hợp tác.
        </motion.h2>

        {/* Action pills */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4"
        >
          <a href="#trial-tasting" className="shushi-btn shushi-btn-primary">
            <span>Đăng ký nếm thử tại nhà máy</span>
          </a>
          <a href="#menus" className="shushi-btn shushi-btn-outline">
            <span>Khám phá thực đơn 4 tuần</span>
          </a>
        </motion.div>
      </div>

      {/* Pinned Scroll Track: 3 Images fan out to FULL SCREEN (100vw) */}
      <div ref={showcaseRef} className="relative h-[220vh] w-full">
        
        {/* Sticky viewport container (stays locked on screen while scrolling) */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden pointer-events-none">
          
          <div className="relative w-full h-full flex items-center justify-center pointer-events-auto">
            
            {/* Left Card: Không gian nhà hàng ẩm thực Nhật Bản sang trọng (Fans out to left full screen) */}
            <motion.div
              style={{
                x: leftX,
                rotate: leftRotate,
                opacity: leftOpacity,
                scale: leftScale,
              }}
              className="absolute w-[80vw] sm:w-[48vw] md:w-[38vw] lg:w-[34vw] aspect-[16/10] bg-[#0d1717] border border-black/25 shadow-2xl overflow-hidden z-10 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=1400&auto=format&fit=crop"
                alt="Không gian ẩm thực Nhật Bản sang trọng"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e94222] font-semibold block">
                  和の美学 · Phong vị Nhật Bản
                </span>
                <p className="font-title text-base lg:text-xl font-light text-white mt-1">
                  Tiêu chuẩn dịch vụ & không gian ẩm thực chuyên nghiệp
                </p>
              </div>
            </motion.div>

            {/* Center Card: Bento & Ẩm thực Nhật Bản Thượng Hạng (NO 5S white badge as requested) */}
            <motion.div
              style={{ scale: centerScale }}
              className="relative w-[85vw] sm:w-[52vw] md:w-[42vw] lg:w-[38vw] aspect-[16/10] bg-[#0d1717] border border-black/30 shadow-2xl overflow-hidden z-20 group"
            >
              <img
                src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=1600&auto=format&fit=crop"
                alt="Suất ăn công nghiệp Bento chuẩn Nhật Bản Shisei Food"
                className="w-full h-full object-cover object-center opacity-90 group-hover:scale-104 transition-transform duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              {/* Bottom text: Minimal & Elegant */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white">
                <div className="max-w-md">
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e94222] font-bold">
                    食でつながる 健やかな未来へ
                  </span>
                  <p className="font-title text-xl sm:text-2xl font-light text-white mt-1 leading-snug">
                    Suất ăn dinh dưỡng nóng sốt, cân bằng calo và an toàn tuyệt đối.
                  </p>
                </div>

                <div className="flex items-center gap-5 text-xs text-stone-200">
                  <div className="border-l border-white/30 pl-3">
                    <div className="font-bold text-white text-base font-mono">18.000+</div>
                    <div className="text-[10px] text-stone-400 uppercase tracking-wider">Suất / ngày</div>
                  </div>
                  <div className="border-l border-white/30 pl-3">
                    <div className="font-bold text-white text-base font-mono">&gt; 65°C</div>
                    <div className="text-[10px] text-stone-400 uppercase tracking-wider">Tại bàn ăn</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Card: Bento cá hồi nướng & Dinh dưỡng Shokuiku (Fans out to right full screen) */}
            <motion.div
              style={{
                x: rightX,
                rotate: rightRotate,
                opacity: rightOpacity,
                scale: rightScale,
              }}
              className="absolute w-[80vw] sm:w-[48vw] md:w-[38vw] lg:w-[34vw] aspect-[16/10] bg-[#0d1717] border border-black/25 shadow-2xl overflow-hidden z-10 group cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=1400&auto=format&fit=crop"
                alt="Cơm trưa bento dinh dưỡng Shokuiku Nhật Bản"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#e94222] font-semibold block">
                  食育 · Shokuiku Dinh Dưỡng
                </span>
                <p className="font-title text-base lg:text-xl font-light text-white mt-1">
                  Cân bằng năng lượng theo calo từng ca làm việc
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Marquee Ticker (Iconic Shushi FZ style) - Rolls in immediately after the scroll animation */}
      <div className="py-4 bg-[#0d1717] text-[#f5ece4] overflow-hidden whitespace-nowrap border-y border-white/10 select-none">
        <div className="animate-marquee flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.2em]">
          <span>~ Vệ sinh an toàn thực phẩm HACCP</span>
          <span className="text-[#e94222]">✦</span>
          <span>Thực đơn xoay vòng 4 tuần không trùng lặp</span>
          <span className="text-[#e94222]">✦</span>
          <span>100% Nguyên liệu kiểm định VietGAP mỗi sáng</span>
          <span className="text-[#e94222]">✦</span>
          <span>Bảo hiểm trách nhiệm pháp lý 10 tỷ đồng</span>
          <span className="text-[#e94222]">✦</span>
          <span>Lưu mẫu thực phẩm 24 giờ độc lập</span>
          <span className="text-[#e94222]">✦</span>
          <span>Giữ nhiệt trên 65°C đến bàn ăn</span>
          <span className="text-[#e94222]">✦</span>
          {/* Duplicate for infinite loop */}
          <span>~ Vệ sinh an toàn thực phẩm HACCP</span>
          <span className="text-[#e94222]">✦</span>
          <span>Thực đơn xoay vòng 4 tuần không trùng lặp</span>
          <span className="text-[#e94222]">✦</span>
          <span>100% Nguyên liệu kiểm định VietGAP mỗi sáng</span>
          <span className="text-[#e94222]">✦</span>
          <span>Bảo hiểm trách nhiệm pháp lý 10 tỷ đồng</span>
          <span className="text-[#e94222]">✦</span>
          <span>Lưu mẫu thực phẩm 24 giờ độc lập</span>
          <span className="text-[#e94222]">✦</span>
          <span>Giữ nhiệt trên 65°C đến bàn ăn</span>
          <span className="text-[#e94222]">✦</span>
        </div>
      </div>

    </section>
  );
}
