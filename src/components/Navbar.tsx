"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ArrowUpRight, Menu, X, Globe, ChevronDown, MapPin, Sparkles, Utensils, Coffee, Compass, Calculator, Users, Activity, Flag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [travelDropdown, setTravelDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Trang chủ", href: "/" },
    { label: "Về chúng tôi", href: "/ve-chung-toi" },
    { label: "Bếp ăn · Thực đơn", href: "/bep-an-thuc-don" },
    { label: "Dự toán chi phí B2B", href: "/du-toan-chi-phi" },
    { label: "Đồ uống & Café", href: "/do-uong" },
  ];

  const travelSubLinks = [
    { label: "Tổng quan Du lịch Shinsei", href: "/du-lich", desc: "Hành trình tinh hoa Nhật Bản", icon: Compass },
    { label: "Du lịch Y tế chuyên sâu", href: "/du-lich/y-te", desc: "Khám chuyên sâu, tế bào gốc và 6 bệnh viện top đầu", icon: Activity },
    { label: "Du lịch Golf tiêu chuẩn PGA", href: "/du-lich/golf", desc: "Sân golf chân núi Phú Sĩ và nghỉ dưỡng Onsen", icon: Flag },
    { label: "Du lịch Trải nghiệm văn hóa", href: "/du-lich/trai-nghiem", desc: "Trà đạo, cố đô Kyoto, Kaiseki và ẩm thực", icon: Sparkles },
  ];

  const isTravelActive = pathname.startsWith("/du-lich");

  return (
    <>
      {/* Top Bar: Hotlines & Official Address */}
      <div className="bg-[#75182d] text-[#f1e2c8] text-[11px] sm:text-[11.5px] tracking-[0.06em] uppercase py-2 px-4 border-b border-white/10 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2 truncate pr-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8] animate-ping shrink-0"></span>
            <span className="font-medium truncate">
              Công ty Cổ phần Thương Mại Shinsei · A19 Geleximco A, Tây Mỗ, Hà Nội
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-5 font-mono text-[11px] text-[#f1e2c8]/85 shrink-0">
            <a href="tel:0981365391" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <span>Hotline VN:</span>
              <strong className="text-white">0981.365.391</strong>
            </a>
            <span>·</span>
            <a href="tel:08023922268" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Globe className="w-3 h-3 text-[#f1e2c8]" />
              <span>Hotline JP:</span>
              <strong className="text-white">080.2392.2268</strong>
            </a>
            <span>·</span>
            <span className="text-white font-serif">An tâm trong từng bữa ăn</span>
          </div>
        </div>
      </div>

      {/* Main Navbar: Strict single-line layout with whitespace-nowrap */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 border-b border-black/10 ${
          isScrolled ? "bg-[#fbf7ef]/98 backdrop-blur-md py-2.5 shadow-sm" : "bg-[#fbf7ef] py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-6">
            
            {/* Left: Shinsei Brand Logo */}
            <Link href="/" className="inline-flex items-center gap-2 sm:gap-2.5 group shrink-0">
              <img
                src="/images/shinsei-mark-red.png"
                alt="SHINSEI Emblem"
                className="h-7 sm:h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-title text-2xl sm:text-2xl lg:text-[28px] font-light tracking-[0.14em] text-[#75182d] uppercase transition-colors group-hover:text-[#222222] leading-none whitespace-nowrap">
                  SHINSEI
                </span>
                <span className="text-[8px] sm:text-[8.5px] tracking-[0.2em] text-[#222222]/80 font-semibold uppercase mt-1 whitespace-nowrap">
                  Food & Coffee · Travel
                </span>
              </div>
            </Link>

            {/* Center: Desktop Navigation Links (Strict single line, no wrapping) */}
            <nav className="hidden xl:flex items-center gap-4 2xl:gap-7 text-[11.5px] 2xl:text-xs uppercase tracking-[0.06em] 2xl:tracking-[0.08em] font-semibold text-[#222222] shrink-0">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative py-1.5 whitespace-nowrap transition-colors hover:text-[#75182d] ${
                      isActive ? "text-[#75182d] font-bold" : "text-[#222222]"
                    }`}
                  >
                    <span className="whitespace-nowrap">{link.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#75182d]"
                      />
                    )}
                  </Link>
                );
              })}

              {/* Travel Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setTravelDropdown(true)}
                onMouseLeave={() => setTravelDropdown(false)}
              >
                <Link
                  href="/du-lich"
                  className={`inline-flex items-center gap-1.5 py-1.5 whitespace-nowrap transition-colors hover:text-[#75182d] ${
                    isTravelActive ? "text-[#75182d] font-bold" : "text-[#222222]"
                  }`}
                >
                  <span className="whitespace-nowrap">Du lịch Nhật Bản</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${travelDropdown ? "rotate-180 text-[#75182d]" : ""}`} />
                  {isTravelActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#75182d]"
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {travelDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-2 w-80 bg-white border border-[#75182d]/20 shadow-xl p-3 z-50 rounded-sm"
                    >
                      <div className="text-[10px] font-mono uppercase tracking-widest text-[#75182d] font-bold px-3 py-1.5 border-b border-black/10 mb-1.5">
                        Dịch vụ Shinsei Travel
                      </div>
                      <div className="space-y-1">
                        {travelSubLinks.map((sub) => {
                          const SubIcon = sub.icon;
                          const isSubActive = pathname === sub.href;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`flex items-start gap-3 p-2.5 rounded-sm hover:bg-[#fbf7ef] transition-colors group ${
                                isSubActive ? "bg-[#fbf7ef] border-l-2 border-[#75182d]" : ""
                              }`}
                            >
                              <div className="w-7 h-7 rounded bg-[#75182d]/10 text-[#75182d] group-hover:bg-[#75182d] group-hover:text-white flex items-center justify-center shrink-0 mt-0.5 transition-colors">
                                <SubIcon className="w-3.5 h-3.5" />
                              </div>
                              <div>
                                <div className="text-xs font-semibold text-[#222222] group-hover:text-[#75182d] transition-colors leading-tight whitespace-nowrap">
                                  {sub.label}
                                </div>
                                <div className="text-[10.5px] text-[#222222]/60 mt-0.5 normal-case font-normal leading-snug">
                                  {sub.desc}
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </nav>

            {/* Right: Phone Hotline + Contact Button + Mobile Menu Drawer Trigger */}
            <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
              <a
                href="tel:0981365391"
                className="hidden lg:flex items-center gap-1.5 text-xs font-semibold tracking-wider text-[#222222] hover:text-[#75182d] transition-colors whitespace-nowrap bg-white/80 px-3 py-1.5 border border-black/10 rounded-sm shrink-0 shadow-2xs"
              >
                <Phone className="w-3.5 h-3.5 text-[#75182d]" />
                <span className="font-mono">0981.365.391</span>
              </a>

              <a
                href="#contact"
                className="shushi-btn shushi-btn-primary whitespace-nowrap !py-2 !px-3 sm:!py-2.5 sm:!px-4.5 text-xs shadow-sm shrink-0"
              >
                <span className="flex items-center gap-1.5">
                  <span className="hidden sm:inline">Liên hệ ngay</span>
                  <span className="sm:hidden">Liên hệ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>

              {/* Mobile / Tablet Menu Button */}
              <button
                onClick={() => setDrawerOpen(true)}
                className="xl:hidden group flex items-center gap-2 px-3 py-1.5 rounded-full border border-black/10 hover:border-[#75182d] text-[#222222] hover:text-[#75182d] bg-white/70 transition-all cursor-pointer shadow-2xs shrink-0"
                aria-label="Mở menu"
              >
                <div className="space-y-1 w-4">
                  <span className="block h-[1.5px] w-4 bg-current transition-all group-hover:w-3"></span>
                  <span className="block h-[1.5px] w-3 bg-current transition-all group-hover:w-4"></span>
                  <span className="block h-[1.5px] w-3.5 bg-current transition-all group-hover:w-3"></span>
                </div>
                <span className="text-xs uppercase tracking-[0.12em] font-semibold">
                  Menu
                </span>
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Slide-out Fullscreen/Drawer Menu (No parentheses in labels) */}
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
              className="relative w-full max-w-lg bg-[#fbf7ef] text-[#222222] h-full shadow-2xl p-6 sm:p-10 flex flex-col justify-between overflow-y-auto z-10 border-l border-black/15"
            >
              <div>
                {/* Header of Drawer */}
                <div className="flex items-center justify-between pb-5 border-b border-black/10">
                  <div className="flex items-center gap-2.5">
                    <img
                      src="/images/shinsei-mark-red.png"
                      alt="Shinsei Emblem"
                      className="h-6 w-auto"
                    />
                    <span className="font-mono text-xs uppercase tracking-widest text-[#75182d] font-bold">
                      CÔNG TY CP THƯƠNG MẠI SHINSEI
                    </span>
                  </div>
                  <button
                    onClick={() => setDrawerOpen(false)}
                    className="flex items-center gap-1.5 p-2 text-[#222222] hover:text-[#75182d] transition-colors cursor-pointer"
                  >
                    <span className="text-xs uppercase tracking-widest font-semibold">Đóng</span>
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Slogan Statement */}
                <div className="py-4 border-b border-black/10">
                  <h3 className="font-title text-xl sm:text-2xl font-light text-[#75182d] leading-snug">
                    An tâm trong từng bữa ăn, tận tâm trong từng trải nghiệm.
                  </h3>
                  <p className="text-xs text-[#222222]/75 mt-1.5 leading-relaxed">
                    Hệ sinh thái Bếp ăn chuẩn 5S Nhật Bản và Tour Du lịch chuyên sâu Y tế, Golf, Trải nghiệm.
                  </p>
                </div>

                {/* Multi-page Nav Links */}
                <div className="py-5 space-y-4">
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#75182d] font-bold">
                    Trang và Dịch vụ chính
                  </div>

                  <nav className="space-y-1">
                    {[
                      { label: "Trang chủ", href: "/", num: "01", icon: Sparkles },
                      { label: "Về chúng tôi", href: "/ve-chung-toi", num: "02", icon: Users },
                      { label: "Bếp ăn · Thực đơn", href: "/bep-an-thuc-don", num: "03", icon: Utensils },
                      { label: "Dự toán chi phí B2B", href: "/du-toan-chi-phi", num: "04", icon: Calculator },
                      { label: "Đồ uống & Café", href: "/do-uong", num: "05", icon: Coffee },
                      { label: "Du lịch", href: "/du-lich", num: "06", icon: Compass, isTravel: true },
                      { label: "Liên hệ", href: "#contact", num: "07", icon: Phone },
                    ].map((link) => {
                      const Icon = link.icon;
                      const isActive = pathname === link.href || (link.isTravel && isTravelActive);
                      return (
                        <div key={link.href} className="space-y-1">
                          <Link
                            href={link.href}
                            onClick={() => setDrawerOpen(false)}
                            className={`group flex items-center justify-between py-2.5 px-3 rounded hover:bg-[#75182d]/10 transition-colors ${
                              isActive ? "bg-[#75182d] text-white font-semibold" : "text-[#222222]"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-[#75182d]"}`} />
                              <span className="font-title text-base sm:text-lg font-normal">
                                {link.label}
                              </span>
                            </div>
                            <span className={`font-mono text-xs ${isActive ? "text-white/80" : "text-[#222222]/40"}`}>
                              {link.num}
                            </span>
                          </Link>

                          {/* Nested Sub-tours for Du lịch */}
                          {link.isTravel && (
                            <div className="ml-5 pl-3 border-l-2 border-[#75182d]/30 space-y-1 py-1">
                              {travelSubLinks.slice(1).map((sub) => {
                                const SubIcon = sub.icon;
                                const isSubActive = pathname === sub.href;
                                return (
                                  <Link
                                    key={sub.href}
                                    href={sub.href}
                                    onClick={() => setDrawerOpen(false)}
                                    className={`flex items-start gap-2.5 py-1.5 px-2 rounded hover:bg-[#75182d]/10 transition-colors ${
                                      isSubActive ? "bg-[#75182d]/15 text-[#75182d] font-bold" : "text-[#222222]"
                                    }`}
                                  >
                                    <SubIcon className="w-3.5 h-3.5 text-[#75182d] shrink-0 mt-0.5" />
                                    <div>
                                      <div className="text-xs font-medium leading-tight">
                                        {sub.label}
                                      </div>
                                      <div className="text-[10.5px] text-[#222222]/60 mt-0.5 font-normal">
                                        {sub.desc}
                                      </div>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Bottom Drawer Contacts */}
              <div className="pt-5 border-t border-black/10 space-y-2.5 text-xs text-[#222222]/80">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#75182d] shrink-0 mt-0.5" />
                  <span>A19 Geleximco A, Tây Mỗ, Nam Từ Liêm, Hà Nội</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#75182d] shrink-0" />
                  <span className="font-bold text-[#222222] font-mono">
                    VN: 0981.365.391 · JP: 080.2392.2268
                  </span>
                </div>
                <div className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setDrawerOpen(false)}
                    className="shushi-btn shushi-btn-primary w-full text-center"
                  >
                    <span>Liên hệ và Nhận báo giá</span>
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
