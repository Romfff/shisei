"use client";

import Link from "next/link";
import { ArrowRight, Utensils, Coffee, Users, Calculator, Compass, Sparkles, Activity, Flag } from "lucide-react";

export function ServiceEcosystem() {
  const services = [
    {
      num: "01",
      title: "Bếp Ăn & Thực Đơn 5S",
      japanese: "給食 & メニュー",
      desc: "Suất ăn công nghiệp 30k – 50k, cơm khay bento văn phòng, tiệc bàn 6-8-10 người và cơm hộp takeaway an toàn tuyệt đối.",
      img: "/images/shinsei-hero-bento-kitchen.jpg",
      href: "/bep-an-thuc-don",
      cta: "Xem chi tiết Bếp ăn & Thực đơn",
      icon: Utensils,
      badge: "100% Thực phẩm sạch",
    },
    {
      num: "02",
      title: "Đồ Uống & Kiosk Café",
      japanese: "カフェ & ドリンク",
      desc: "Menu cà phê pha máy Ý, matcha Kyoto, trà hoa quả tươi và mô hình quầy Kiosk Café tự vận hành tại văn phòng doanh nghiệp.",
      img: "/images/shinsei-hero-cups.jpg",
      href: "/do-uong",
      cta: "Khám phá Menu Đồ uống",
      icon: Coffee,
      badge: "Cốc giữ nhiệt Shinsei",
    },
    {
      num: "03",
      title: "Về Chúng Tôi · Hồ Sơ Năng Lực",
      japanese: "会社概要 & 5S基準",
      desc: "Thông điệp Chủ tịch Đỗ Thị Trang, tiêu chuẩn quản lý 5S Nhật Bản, quy chuẩn đồng phục và đội ngũ nhân sự chuyên nghiệp.",
      img: "/images/shinsei-about-us-card.jpg",
      href: "/ve-chung-toi",
      cta: "Xem Hồ sơ năng lực",
      icon: Users,
      badge: "Thương hiệu uy tín",
    },
    {
      num: "04",
      title: "Dự Toán Chi Phí B2B",
      japanese: "費用シミュレーション",
      desc: "Công cụ tính toán ngân sách suất ăn theo quy mô từ 50 đến 2.000+ người, phân bổ chi phí minh bạch chuẩn mực.",
      img: "/images/shinsei-b2b-budget.jpg",
      href: "/du-toan-chi-phi",
      cta: "Mở công cụ dự toán ngay",
      icon: Calculator,
      badge: "Minh bạch 100%",
    },
    {
      num: "05",
      title: "Shinsei Travel · Du Lịch Nhật Bản",
      japanese: "日本医療・ゴルフ・文化ツアー",
      desc: "Tour chuyên sâu y tế liên kết 6 bệnh viện hàng đầu, Tour Golf PGA chân núi Phú Sĩ và trải nghiệm văn hóa Onsen - Kaiseki.",
      img: "/images/Hospital/fujita-univ-hospital.png",
      href: "/du-lich",
      cta: "Khám phá Shinsei Travel",
      icon: Compass,
      badge: "Y tế & Golf PGA",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-bold text-[#75182d] bg-[#f1e2c8]/60 px-3.5 py-1.5 rounded-full mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#75182d]"></span>
              <span>Hệ Sinh Thái Phục Vụ Toàn Diện</span>
            </div>
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222] tracking-tight leading-[1.08]">
              Các Lĩnh Vực Hoạt Động Của Shinsei
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#222222]/75 max-w-md font-normal leading-relaxed">
            Kết hợp mô hình ẩm thực doanh nghiệp chuẩn 5S và các hành trình lữ hành chuyên sâu y tế, thể thao, văn hóa tại Nhật Bản.
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isWide = idx === 3 || idx === 4;
            return (
              <div
                key={idx}
                className={`bg-[#fbf7ef] border border-black/10 hover:border-[#75182d] transition-all shadow-sm flex flex-col justify-between overflow-hidden group ${
                  idx === 4 ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-[#75182d] text-[#f1e2c8] text-[10px] font-mono uppercase px-2.5 py-1 font-bold">
                      {item.num} · {item.badge}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-mono text-[#75182d] font-semibold">
                        {item.japanese}
                      </span>
                      <Icon className="w-4 h-4 text-[#75182d]/60 group-hover:text-[#75182d] transition-colors" />
                    </div>
                    <h3 className="font-title text-2xl font-light text-[#222222] mb-3 group-hover:text-[#75182d] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#222222]/75 leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-0">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-bold text-[#75182d] hover:underline group/btn"
                  >
                    <span>{item.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
