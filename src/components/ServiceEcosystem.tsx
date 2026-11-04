"use client";

import Link from "next/link";
import { ArrowRight, Utensils, Coffee, Users, Calculator, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ServiceEcosystem() {
  const { isJa } = useLanguage();

  const services = isJa
    ? [
        {
          num: "01",
          title: "会社概要 & 5S基準",
          desc: "会長 ド・ティ・チャンからのメッセージ、日本式5S管理基準、ユニフォーム規程、プロフェッショナルな運営体制。",
          img: "/images/shinsei-about-us-card.jpg",
          href: "/ve-chung-toi",
          cta: "会社情報を見る",
          icon: Users,
          badge: "高い信頼性",
        },
        {
          num: "02",
          title: "給食 & 5Sメニュー",
          desc: "工場・オフィス向け給食（3万〜5万VND）、弁当トレー、企業円卓宴会、衛生管理を徹底したテイクアウト弁当。",
          img: "/images/shinsei-hero-bento-kitchen.jpg",
          href: "/bep-an-thuc-don",
          cta: "給食・メニュー詳細を見る",
          icon: Utensils,
          badge: "厳選食材100%",
        },
        {
          num: "03",
          title: "B2B費用シミュレーション",
          desc: "50名から2,000名以上まで対応可能。規模別・予算別の費用内訳を瞬時に試算するシミュレーター。",
          img: "/images/shinsei-b2b-budget.jpg",
          href: "/du-toan-chi-phi",
          cta: "費用シミュレーションを開始",
          icon: Calculator,
          badge: "明朗会計",
        },
        {
          num: "04",
          title: "カフェ & ドリンク",
          desc: "イタリア製本格マシン抽出コーヒー、京都産宇治抹茶、フレッシュフルーツティーなど、オフィス向けドリンクサービス。",
          img: "/images/shinsei-hero-cups.jpg",
          href: "/do-uong",
          cta: "カフェメニューを見る",
          icon: Coffee,
          badge: "SHINSEI 保温タンブラー",
        },
        {
          num: "05",
          title: "SHINSEI トラベル · 訪日専門旅行",
          desc: "国内名門6病院と提携した高度健診・人間ドック、富士山麓PGAトーナメントコースでのゴルフ、京都名刹・温泉旅館を巡る旅。",
          img: "/images/Hospital/fujita-univ-hospital.png",
          href: "/du-lich",
          cta: "旅行事業を見る",
          icon: Compass,
          badge: "先端医療 & 名門ゴルフ",
        },
      ]
    : [
        {
          num: "01",
          title: "Về Chúng Tôi",
          desc: "Thông điệp Chủ tịch Đỗ Thị Trang, tiêu chuẩn quản lý 5S Nhật Bản, quy chuẩn đồng phục và đội ngũ nhân sự chuyên nghiệp.",
          img: "/images/shinsei-about-us-card.jpg",
          href: "/ve-chung-toi",
          cta: "Tìm hiểu về Shinsei",
          icon: Users,
          badge: "Thương hiệu uy tín",
        },
        {
          num: "02",
          title: "Bếp Ăn & Thực Đơn 5S",
          desc: "Suất ăn công nghiệp 30k – 50k, cơm khay bento văn phòng, tiệc bàn 6-8-10 người và cơm hộp mang đi an toàn tuyệt đối.",
          img: "/images/shinsei-hero-bento-kitchen.jpg",
          href: "/bep-an-thuc-don",
          cta: "Xem chi tiết Bếp ăn & Thực đơn",
          icon: Utensils,
          badge: "100% Thực phẩm sạch",
        },
        {
          num: "03",
          title: "Dự Toán Chi Phí B2B",
          desc: "Công cụ tính toán ngân sách suất ăn theo quy mô từ 50 đến 2.000+ người, phân bổ chi phí minh bạch chuẩn mực.",
          img: "/images/shinsei-b2b-budget.jpg",
          href: "/du-toan-chi-phi",
          cta: "Mở công cụ dự toán ngay",
          icon: Calculator,
          badge: "Minh bạch 100%",
        },
        {
          num: "04",
          title: "Đồ Uống & Café",
          desc: "Menu cà phê pha máy Ý, matcha Kyoto, trà hoa quả tươi và dịch vụ phục vụ cà phê, đồ uống trọn gói cho doanh nghiệp.",
          img: "/images/shinsei-hero-cups.jpg",
          href: "/do-uong",
          cta: "Khám phá Menu Đồ uống & Café",
          icon: Coffee,
          badge: "Cốc giữ nhiệt Shinsei",
        },
        {
          num: "05",
          title: "Shinsei Travel · Du Lịch Nhật Bản",
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
              <span>{isJa ? "包括的事業エコシステム" : "Hệ Sinh Thái Phục Vụ Toàn Diện"}</span>
            </div>
            <h2 className="font-title text-3xl sm:text-4xl lg:text-5xl font-light text-[#222222] tracking-tight leading-[1.08]">
              {isJa ? "SHINSEIの主要事業領域" : "Các Lĩnh Vực Hoạt Động Của Shinsei"}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#222222]/75 max-w-md font-normal leading-relaxed">
            {isJa
              ? "日本基準5Sの社員食堂・給食事業と、訪日先端医療・名門ゴルフ・伝統文化の専門旅行を両輪で展開しております。"
              : "Kết hợp mô hình ẩm thực doanh nghiệp chuẩn 5S và các hành trình lữ hành chuyên sâu y tế, thể thao, văn hóa tại Nhật Bản."}
          </p>
        </div>

        {/* 5-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-mono text-[#75182d] font-bold">
                        {item.num}.
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
