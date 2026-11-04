"use client";

import { Phone, MapPin, Globe, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/lib/translations";

export function Footer() {
  const { language, isJa } = useLanguage();
  const dict = translations[language];

  const partnerLogos = [
    { name: "Vietnam Airlines", img: "/images/Partners/partner-vietnam-airlines.png" },
    { name: "Medical Excellence Japan (MEJ)", img: "/images/Partners/partner-mej.png" },
    { name: isJa ? "東京大学医学部附属病院" : "Bệnh viện Đại học Tokyo", img: "/images/Partners/partner-tokyo-univ-hospital.png" },
    { name: isJa ? "藤田医科大学病院" : "Bệnh viện Đại học Fujita", img: "/images/Partners/partner-fujita-health-univ.jpg" },
    { name: isJa ? "聖路加国際病院" : "Bệnh viện Quốc tế St. Luke's", img: "/images/Partners/partner-st-lukes.jpg" },
    { name: isJa ? "湘南鎌倉総合病院" : "Bệnh viện Đa khoa Shonan Kamakura", img: "/images/Partners/partner-shonan-kamakura.png" },
    { name: isJa ? "京都大学 iPS細胞研究所 (CiRA)" : "Viện tế bào gốc iPS (CiRA) Kyoto", img: "/images/Partners/partner-cira-kyoto.png" },
    { name: "Accordia Golf", img: "/images/Partners/partner-accordia-golf.jpg" },
    { name: "PGM (Pacific Golf Management)", img: "/images/Partners/partner-pgm-golf.jpg" },
    { name: "Hotel JAL City", img: "/images/Partners/partner-jal-city.png" },
    { name: "Nikko Hotels International", img: "/images/Partners/partner-nikko-hotels.png" },
    { name: "NEMU Resort", img: "/images/Partners/partner-nemu-resort.png" },
    { name: "HOTEL THE MITSUI KYOTO", img: "/images/Partners/partner-hotel-the-mitsui-kyoto.png" },
    { name: "Mitsui Garden Hotels", img: "/images/Partners/partner-mitsui-garden-hotels.png" },
    { name: "Halekulani Okinawa", img: "/images/Partners/partner-halekulani.png" },
    { name: "Tokyo Dome Hotel", img: "/images/Partners/partner-tokyo-dome-hotel.png" },
  ];

  return (
    <footer className="bg-[#1c1917] text-white pt-20 pb-12 border-t border-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header: Brand Statement & CTA */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between pb-12 border-b border-white/10 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/images/shinsei-mark-red.png"
                alt="SHINSEI Emblem"
                className="h-7 w-auto object-contain brightness-125"
              />
              <span className="font-title text-3xl font-light tracking-[0.14em] text-[#f1e2c8] uppercase">
                SHINSEI
              </span>
            </div>
            <p className="text-sm text-stone-300 font-serif italic max-w-md">
              {dict.topBarSlogan}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a href="tel:0981365391" className="shushi-btn !bg-white/10 !text-white hover:!bg-white/20 border border-white/20 text-xs">
              <Phone className="w-3.5 h-3.5 mr-2 text-[#f1e2c8]" />
              <span className="font-mono">0981.365.391</span>
            </a>
            <a href="#contact" className="shushi-btn shushi-btn-primary text-xs">
              <span>{isJa ? "お問い合わせ・試食のお申込み" : "Liên hệ & Đăng ký nếm thử"}</span>
            </a>
          </div>
        </div>

        {/* Strategic Partners & Brand Network in Japan */}
        <div className="py-12 border-b border-white/10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-[#f1e2c8] font-bold mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8]"></span>
                <span>{dict.footerPartnersTag}</span>
              </div>
              <h3 className="font-title text-2xl sm:text-3xl font-light text-white">
                {dict.footerPartnersTitle}
              </h3>
            </div>
            <p className="text-xs text-stone-300 max-w-lg font-normal leading-relaxed">
              {dict.footerPartnersDesc}
            </p>
          </div>

          {/* Grid of 16 Partner Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4 items-center">
            {partnerLogos.map((p, idx) => (
              <div
                key={idx}
                className="bg-white p-2.5 rounded h-16 flex items-center justify-center shadow-xs hover:scale-105 transition-all group"
                title={p.name}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="max-h-11 max-w-full object-contain filter group-hover:brightness-105"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 4 Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 py-12 border-b border-white/10 text-xs sm:text-sm">
          
          {/* Col 1: Về Shinsei (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-title text-base font-normal text-white uppercase tracking-wider">
              {dict.footerCompanyTitle}
            </h4>
            <p className="text-xs text-stone-300 leading-relaxed font-normal max-w-sm">
              {isJa
                ? "集団給食、社員食堂、カフェカウンター、訪日専門ツアーを、日本式5S品質管理基準に基づき一元的に提供する総合サービス企業です。"
                : "Đơn vị tiên phong vận hành bếp ăn tập thể, căng tin tổng hợp, quầy café và dịch vụ lữ hành chuyên sâu theo tiêu chuẩn chất lượng và quản trị 5S Nhật Bản."}
            </p>
            <div className="text-[11px] font-mono text-stone-400 space-y-1 pt-2">
              <div>{isJa ? "対象施設：企業オフィス、工業団地、学校、官公庁、病院" : "Đối tượng phục vụ: Doanh nghiệp, KCN, trường học, cơ quan, bệnh viện"}</div>
              <div>{isJa ? "供給能力：50食〜10,000食以上 / 日" : "Năng lực cung ứng: 50 đến trên 10.000 suất ăn / ngày"}</div>
            </div>
          </div>

          {/* Col 2: Hệ thống trang chuyên biệt (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-title text-base font-normal text-white uppercase tracking-wider">
              {isJa ? "主要サービス・各ページ" : "Dịch Vụ & Trang Chuyên Đề"}
            </h4>
            <div className="flex flex-col space-y-2 text-xs text-stone-300">
              <Link href="/" className="hover:text-[#f1e2c8] transition-colors">
                ✦ {dict.navHome}
              </Link>
              <Link href="/ve-chung-toi" className="hover:text-[#f1e2c8] transition-colors">
                ✦ {dict.navAbout}
              </Link>
              <Link href="/bep-an-thuc-don" className="hover:text-[#f1e2c8] transition-colors">
                ✦ {dict.navMenu}
              </Link>
              <Link href="/du-toan-chi-phi" className="hover:text-[#f1e2c8] transition-colors">
                ✦ {dict.navEstimate}
              </Link>
              <Link href="/do-uong" className="hover:text-[#f1e2c8] transition-colors">
                ✦ {dict.navDrinks}
              </Link>
              <Link href="/du-lich" className="hover:text-[#f1e2c8] transition-colors font-semibold text-white">
                ✦ {dict.navTravel}
              </Link>
              <div className="pl-3 space-y-1.5 border-l border-white/15 text-[11px] text-stone-400">
                <Link href="/du-lich/y-te" className="hover:text-white block">
                  • {dict.travelMedical}
                </Link>
                <Link href="/du-lich/golf" className="hover:text-white block">
                  • {dict.travelGolf}
                </Link>
                <Link href="/du-lich/trai-nghiem" className="hover:text-white block">
                  • {dict.travelCulture}
                </Link>
              </div>
              <a href="#contact" className="hover:text-[#f1e2c8] transition-colors">
                ✦ {isJa ? "お問い合わせ・ご相談" : "Liên hệ & Hợp tác"}
              </a>
            </div>
          </div>

          {/* Col 3: Trụ sở & Đại diện (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-title text-base font-normal text-white uppercase tracking-wider">
              {isJa ? "所在地・連絡拠点" : "Trụ Sở & Văn Phòng"}
            </h4>
            <div className="space-y-3 text-xs text-stone-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#f1e2c8] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{isJa ? "ベトナム・ハノイ本社：" : "Trụ sở Hà Nội:"}</div>
                  <div className="text-stone-300">{dict.topBarAddress}</div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Globe className="w-4 h-4 text-[#f1e2c8] shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">{isJa ? "日本連絡窓口：" : "Văn phòng đại diện Nhật Bản:"}</div>
                  <div className="text-stone-300">{isJa ? "日本直通: 080.2392.2268 · 訪日医療＆ゴルフ連携" : "Hotline: 080.2392.2268 · Kết nối dịch vụ y tế và golf"}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Hotline & Email (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-title text-base font-normal text-white uppercase tracking-wider">
              {isJa ? "直通連絡窓口" : "Liên Hệ Trực Tiếp"}
            </h4>
            <div className="space-y-2 text-xs text-stone-300">
              <div>
                <span className="text-stone-400 block font-mono text-[11px]">{dict.hotlineVn}</span>
                <a href="tel:0981365391" className="font-mono text-base font-semibold text-[#f1e2c8] hover:underline">
                  0981.365.391
                </a>
              </div>

              <div>
                <span className="text-stone-400 block font-mono text-[11px]">{isJa ? "代表メール:" : "Email tiếp nhận:"}</span>
                <a
                  href="mailto:info.shinseivn@gmail.com"
                  className="font-mono text-xs font-semibold text-[#f1e2c8] hover:underline block mt-0.5"
                >
                  info.shinseivn@gmail.com
                </a>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-1.5 p-2 bg-white/5 border border-white/10 text-[#f1e2c8] text-[10.5px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#f1e2c8] shrink-0" />
                  <span>{isJa ? "日本式5S管理基準" : "Chuẩn 5S Nhật Bản"}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 font-mono gap-4">
          <div>
            {dict.footerCopyright}
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/" className="hover:text-white transition-colors">
              {dict.navHome}
            </Link>
            <Link href="/ve-chung-toi" className="hover:text-white transition-colors">
              {dict.navAbout}
            </Link>
            <Link href="/bep-an-thuc-don" className="hover:text-white transition-colors">
              {dict.navMenu}
            </Link>
            <Link href="/du-toan-chi-phi" className="hover:text-white transition-colors">
              {dict.navEstimate}
            </Link>
            <Link href="/do-uong" className="hover:text-white transition-colors">
              {dict.navDrinks}
            </Link>
            <Link href="/du-lich" className="hover:text-white transition-colors">
              {dict.navTravel}
            </Link>
            <a href="#contact" className="hover:text-white transition-colors">
              {dict.contactBtn}
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
