"use client";

import { useState, useEffect } from "react";
import { Phone, ArrowUpRight, Menu, X, MapPin, Globe } from "lucide-react";
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
      {/* Top Bar: Hotline & Address */}
      <div className="bg-[#75182d] text-[#f1e2c8] text-[11px] sm:text-[11.5px] tracking-[0.1em] uppercase py-2 px-4 border-b border-white/10 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate pr-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8] animate-ping shrink-0"></span>
            <span className="font-medium truncate">
              Công ty Cổ phần Thương Mại Shinsei · A19 Geleximco A, Tây Mỗ, Hà Nội
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-5 font-mono text-[11px] text-[#f1e2c8]/85 shrink-0">
            <span className="flex items-center gap-1.5">
              <span>Hotline VN:</span>
              <strong className="text-white">0981.365.391</strong>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-[#f1e2c8]" />
              <span>Hotline JP:</span>
              <strong className="text-white">080.2392.2268</strong>
            </span>
            <span>·</span>
            <span className="text-white font-serif">An tâm trong từng bữa ăn</span>
          </div>
        </div>
      </div>

      {/* Main Navbar: Strict 3-Column Grid Layout (Guarantees zero text collision) */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-black/10 ${
          isScrolled ? "bg-[#fbf7ef]/95 backdrop-blur-md py-2.5 shadow-sm" : "bg-[#fbf7ef] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 items-center gap-2 sm:gap-4">
            
            {/* Column 1 (Left): Menu Drawer Button & Left Nav Links */}
            <div className="col-span-3 sm:col-span-4 flex items-center justify-start gap-4 lg:gap-6">
              <button
                onClick={() => setDrawerOpen(true)}
                className="group flex items-center gap-2 p-1 text-[#222222] hover:text-[#75182d] transition-colors cursor-pointer shrink-0"
                aria-label="Open navigation menu"
              >
                <div className="space-y-1.5 w-5">
                  <span className="block h-[1.5px] w-5 bg-current transition-all group-hover:w-3.5"></span>
                  <span className="block h-[1.5px] w-3.5 bg-current transition-all group-hover:w-5"></span>
                  <span className="block h-[1.5px] w-4 bg-current transition-all group-hover:w-4"></span>
                </div>
                <span className="text-xs uppercase tracking-[0.16em] font-semibold hidden sm:inline-block">
                  Menu
                </span>
              </button>

              <div className="h-5 w-[1px] bg-black/15 hidden 2xl:block"></div>

              {/* Quick nav links for ultra-wide screens */}
              <nav className="hidden 2xl:flex items-center gap-5 text-xs uppercase tracking-[0.08em] font-semibold text-[#222222]">
                <a href="#about" className="whitespace-nowrap hover:text-[#75182d] transition-colors hover:underline underline-offset-8 decoration-[#75182d]">
                  Về chúng tôi
                </a>
                <a href="#standards-5s" className="whitespace-nowrap hover:text-[#75182d] transition-colors hover:underline underline-offset-8 decoration-[#75182d]">
                  Tiêu chuẩn 5S
                </a>
              </nav>
            </div>

            {/* Column 2 (Center): Shinsei Brand Logo */}
            <div className="col-span-6 sm:col-span-4 flex flex-col items-center justify-center text-center">
              <a href="#" className="inline-flex flex-col items-center group">
                <span className="font-title text-2xl sm:text-3xl font-light tracking-[0.12em] text-[#75182d] uppercase transition-colors group-hover:text-[#222222] leading-none">
                  SHINSEI
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] tracking-[0.24em] text-[#222222]/80 font-semibold uppercase mt-1">
                  Food & Coffee · Travel
                </span>
              </a>
            </div>

            {/* Column 3 (Right): Right Nav Links, Hotline & CTA Button */}
            <div className="col-span-3 sm:col-span-4 flex items-center justify-end gap-3 lg:gap-5">
              <nav className="hidden 2xl:flex items-center gap-5 text-xs uppercase tracking-[0.08em] font-semibold text-[#222222]">
                <a href="#food-coffee" className="whitespace-nowrap hover:text-[#75182d] transition-colors hover:underline underline-offset-8 decoration-[#75182d]">
                  Food & Coffee
                </a>
                <a href="#travel" className="whitespace-nowrap hover:text-[#75182d] transition-colors hover:underline underline-offset-8 decoration-[#75182d]">
                  Travel
                </a>
              </nav>

              <a
                href="tel:0981365391"
                className="hidden lg:flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#222222] hover:text-[#75182d] transition-colors whitespace-nowrap bg-white/70 px-2.5 py-1.5 border border-black/10 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#75182d]" />
                <span className="font-mono">0981.365.391</span>
              </a>

              <a
                href="#contact"
                className="shushi-btn shushi-btn-primary whitespace-nowrap !py-2 !px-3 sm:!py-2.5 sm:!px-4 text-xs shadow-sm shrink-0"
              >
                <span className="flex items-center gap-1.5">
                  <span className="hidden sm:inline">Liên hệ ngay</span>
                  <span className="sm:hidden">Liên hệ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Fullscreen/Drawer Menu */}
      <AnimatePresence>
        {drawerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-[#222222]/80 backdrop-blur-sm flex justify-end"
          >
            <div className="absolute inset-0" onClick={() => setDrawerOpen(false)} />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="relative w-full max-w-lg bg-[#fbf7ef] text-[#222222] h-full shadow-2xl p-8 sm:p-12 flex flex-col justify-between overflow-y-auto z-10 border-l border-black/15"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between pb-6 border-b border-black/10">
                  <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold">
                    Công ty Cổ phần Thương Mại Shinsei
                  </span>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center gap-2 p-2 text-[#222222] hover:text-[#75182d] transition-colors cursor-pointer"
                  >
                    <span className="text-xs uppercase tracking-widest font-semibold">Đóng</span>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Slogan Statement */}
                <div className="py-6 border-b border-black/10">
                  <h3 className="font-title text-2xl sm:text-3xl font-light text-[#75182d] leading-snug">
                    An tâm trong từng bữa ăn, tận tâm trong từng trải nghiệm.
                  </h3>
                  <p className="text-xs text-[#222222]/75 mt-2 leading-relaxed">
                    Hệ sinh thái dịch vụ ẩm thực tập thể chuẩn Nhật Bản và tour du lịch chuyên sâu y tế, golf, trải nghiệm.
                  </p>
                </div>

                {/* Nav Links */}
                <nav className="py-6 space-y-3">
                  {[
                    { label: "Trang chủ Shinsei", href: "#" },
                    { label: "Về chúng tôi (Thông điệp CEO & Sứ mệnh)", href: "#about" },
                    { label: "Tiêu chuẩn 5S & Bếp 1 chiều", href: "#standards-5s" },
                    { label: "Food & Coffee (Suất ăn công nghiệp, Cơm văn phòng, Tiệc bàn)", href: "#food-coffee" },
                    { label: "Dự toán chi phí B2B", href: "#calculator" },
                    { label: "Shinsei Travel (Du lịch Y tế, Golf Núi Phú Sĩ, Trải nghiệm)", href: "#travel" },
                    { label: "Liên hệ & Đặt lịch nếm thử", href: "#contact" },
                  ].map((link, idx) => (
                    <div key={idx} className="overflow-hidden">
                      <a
                        href={link.href}
                        onClick={() => setDrawerOpen(false)}
                        className="group flex items-baseline justify-between py-2 text-base sm:text-lg font-title font-light hover:text-[#75182d] transition-colors"
                      >
                        <span className="group-hover:translate-x-2 transition-transform duration-300">
                          {link.label}
                        </span>
                        <span className="font-mono text-xs text-[#222222]/40 group-hover:text-[#75182d]">
                          0{idx + 1}
                        </span>
                      </a>
                    </div>
                  ))}
                </nav>
              </div>

              {/* Bottom Drawer Contacts */}
              <div className="pt-6 border-t border-black/10 space-y-2.5 text-xs text-[#222222]/80">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                  <span>Lô 6, A19 Thiên Khôi, Geleximco A, Tây Mỗ, Hà Nội</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#75182d] shrink-0" />
                  <span className="font-bold text-[#222222]">
                    VN: 0981.365.391 · JP: 080.2392.2268
                  </span>
                </div>
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setDrawerOpen(false)}
                    className="shushi-btn shushi-btn-primary w-full text-center"
                  >
                    <span>Liên hệ & Nhận báo giá</span>
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
