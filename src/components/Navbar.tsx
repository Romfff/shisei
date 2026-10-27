"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowUpRight, Menu, X, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top subtle bar: Announcement */}
      <div className="bg-[#0d1717] text-[#f5ece4] text-[12px] tracking-[0.15em] uppercase py-2 px-4 border-b border-white/10 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e94222] animate-ping"></span>
            <span className="font-medium text-[11px] sm:text-[12px]">
              Bếp ăn công nghiệp tiêu chuẩn 5S · KCN Bình Dương, Đồng Nai & TP.HCM
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6 font-mono text-[11px] text-[#f5ece4]/70">
            <span>HACCP CODEX 2020</span>
            <span>·</span>
            <span>ISO 22000:2018</span>
            <span>·</span>
            <span className="text-[#e94222]">食でつながる 健やかな未来へ</span>
          </div>
        </div>
      </div>

      {/* Main Shushi-style Navbar with Strict 3-Column Grid (Zero Overlap Guaranteed) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-black/10 ${
          isScrolled ? "bg-[#f5ece4]/95 backdrop-blur-md py-3 shadow-sm" : "bg-[#f5ece4] py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 items-center">
            
            {/* Left Column (5 cols): Dịch hẳn sang trái, không thể chạm vào logo */}
            <div className="col-span-4 sm:col-span-5 flex items-center gap-3 xl:gap-5 justify-start">
              <button
                onClick={() => setDrawerOpen(true)}
                className="group flex items-center gap-2 p-1 text-[#0d1717] hover:text-[#e94222] transition-colors cursor-pointer shrink-0"
                aria-label="Open drawer menu"
              >
                <div className="space-y-1.5 w-5">
                  <span className="block h-[1.5px] w-5 bg-current transition-all group-hover:w-3.5"></span>
                  <span className="block h-[1.5px] w-3.5 bg-current transition-all group-hover:w-5"></span>
                  <span className="block h-[1.5px] w-4 bg-current transition-all group-hover:w-4"></span>
                </div>
                <span className="hidden sm:inline-block text-xs uppercase tracking-[0.15em] font-semibold">
                  Menu
                </span>
              </button>

              <div className="hidden xl:block h-3.5 w-[1px] bg-black/15 shrink-0"></div>

              <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-[11px] xl:text-[12px] uppercase tracking-[0.05em] font-semibold text-[#3a3a3a]">
                <a
                  href="#about"
                  className="whitespace-nowrap hover:text-[#e94222] transition-colors py-1"
                >
                  Về Shisei
                </a>
                <a
                  href="#standards"
                  className="whitespace-nowrap hover:text-[#e94222] transition-colors py-1"
                >
                  Tiêu chuẩn 5S
                </a>
                <a
                  href="#menus"
                  className="whitespace-nowrap hover:text-[#e94222] transition-colors py-1"
                >
                  Thực đơn
                </a>
                <a
                  href="#calculator"
                  className="whitespace-nowrap hover:text-[#e94222] transition-colors py-1"
                >
                  Dự toán
                </a>
              </nav>
            </div>

            {/* Center Column (2 hoặc 4 cols): Căn chính giữa hoàn hảo, không bị đè chữ */}
            <div className="col-span-4 sm:col-span-2 text-center flex justify-center">
              <a href="#" className="inline-flex flex-col items-center group">
                <span className="font-title text-xl sm:text-2xl xl:text-3xl font-light tracking-[0.05em] text-[#0d1717] uppercase transition-colors group-hover:text-[#e94222] whitespace-nowrap">
                  Shisei Food
                </span>
                <span className="text-[9px] sm:text-[10px] tracking-[0.25em] text-[#e94222] font-semibold uppercase mt-0.5 whitespace-nowrap">
                  姿勢 · 健やかな未来へ
                </span>
              </a>
            </div>

            {/* Right Column (5 cols): Hotline & Button */}
            <div className="col-span-4 sm:col-span-5 flex items-center justify-end gap-3 sm:gap-5">
              <a
                href="tel:0908889999"
                className="hidden xl:flex items-center gap-2 text-xs font-semibold tracking-wider text-[#3a3a3a] hover:text-[#e94222] transition-colors whitespace-nowrap"
              >
                <Phone className="w-3.5 h-3.5 text-[#e94222]" />
                <span>090 888 9999</span>
              </a>

              <a
                href="#trial-tasting"
                className="shushi-btn shushi-btn-primary whitespace-nowrap !py-2.5 !px-3.5 sm:!py-3 sm:!px-6"
              >
                <span className="flex items-center gap-1.5 text-xs">
                  <span>Nếm thử suất ăn</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Shushi FZ Slide-out Fullscreen/Drawer Menu */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#0d1717]/80 backdrop-blur-sm flex justify-end"
          >
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setDrawerOpen(false)} />

            {/* Drawer Content */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-full max-w-lg bg-[#f5ece4] text-[#0d1717] h-full shadow-2xl p-8 sm:p-12 flex flex-col justify-between overflow-y-auto z-10 border-l border-black/15"
            >
              <div>
                {/* Close Button */}
                <div className="flex items-center justify-between pb-8 border-b border-black/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#e94222]">
                    Shisei Food Menu
                  </span>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center gap-2 p-2 text-[#0d1717] hover:text-[#e94222] transition-colors cursor-pointer"
                  >
                    <span className="text-xs uppercase tracking-widest font-semibold">Đóng</span>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Reservation / Slogan Statement */}
                <div className="py-8 border-b border-black/10">
                  <h3 className="font-title text-2xl sm:text-3xl font-light text-[#0d1717] leading-snug">
                    Đặt lịch khảo sát & nếm thử suất ăn miễn phí tại nhà xưởng của bạn.
                  </h3>
                  <p className="text-xs text-[#3a3a3a]/75 mt-3 leading-relaxed">
                    Đội ngũ dinh dưỡng Shisei Food mang 5-10 phần ăn mẫu đến tận nơi để ban lãnh đạo và công đoàn trực tiếp thẩm định.
                  </p>
                </div>

                {/* Big Nav Links */}
                <nav className="py-8 space-y-4">
                  {[
                    { label: "Trang chủ & Triết lý", href: "#" },
                    { label: "Về Shisei & Tiêu chuẩn 5S", href: "#about" },
                    { label: "Cơ cấu Thực đơn 4 tuần", href: "#menus" },
                    { label: "Quy trình bếp một chiều", href: "#standards" },
                    { label: "Dự toán chi phí B2B", href: "#calculator" },
                    { label: "Đối tác & Đánh giá", href: "#clients" },
                    { label: "Đăng ký nếm thử thực tế", href: "#trial-tasting" },
                  ].map((link, idx) => (
                    <div key={idx} className="overflow-hidden">
                      <a
                        href={link.href}
                        onClick={() => setDrawerOpen(false)}
                        className="group flex items-baseline justify-between py-1 text-lg sm:text-xl font-title font-light hover:text-[#e94222] transition-colors"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.label}
                        </span>
                        <span className="font-mono text-xs text-[#0d1717]/40 group-hover:text-[#e94222]">
                          0{idx + 1}
                        </span>
                      </a>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer Contacts */}
              <div className="pt-6 border-t border-black/10 space-y-3 text-xs text-[#3a3a3a]/80">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#e94222] shrink-0" />
                  <span>KCN VSIP 1, Bình Dương & KCN Biên Hòa 2, Đồng Nai</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#e94222] shrink-0" />
                  <span className="font-bold text-[#0d1717]">Hotline B2B: 090 888 9999</span>
                </div>
                <div className="pt-2">
                  <a
                    href="#trial-tasting"
                    onClick={() => setDrawerOpen(false)}
                    className="shushi-btn shushi-btn-primary w-full text-center"
                  >
                    <span>Đăng ký nếm thử ngay</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
