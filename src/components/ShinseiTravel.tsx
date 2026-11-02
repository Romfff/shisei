"use client";

import { motion } from "framer-motion";
import { Plane, HeartPulse, Trophy, Compass, ArrowRight, ShieldCheck, Check } from "lucide-react";

export function ShinseiTravel() {
  const travelServices = [
    {
      id: "medical",
      number: "01.",
      title: "Du Lịch Y Tế (Medical Tourism)",
      tag: "Nhật Bản cao cấp",
      image: "/images/travel-medical.jpg",
      icon: HeartPulse,
      desc: "Kết nối các bệnh viện và viện nghiên cứu y khoa hàng đầu tại Tokyo, Osaka. Dịch vụ tầm soát sức khỏe tổng quát, tế bào gốc, điều trị chuyên sâu và phục hồi chức năng với phiên dịch viên y tế chuyên nghiệp.",
      perks: [
        "Khám tầm soát sớm ung thư & bệnh lối sống",
        "Đội ngũ bác sĩ đầu ngành Nhật Bản",
        "Hỗ trợ visa y tế và xe đưa đón VIP riêng",
      ],
    },
    {
      id: "golf",
      number: "02.",
      title: "Du Lịch Golf (Golf Tour Japan)",
      tag: "Trải nghiệm sân đỉnh cao",
      image: "/images/travel-golf.jpg",
      icon: Trophy,
      desc: "Trải nghiệm những sân golf huyền thoại dưới chân núi Phú Sĩ và các vùng ven biển danh tiếng. Kết hợp dịch vụ nghỉ dưỡng suối khoáng nóng Onsen và thưởng thức ẩm thực Kaiseki thượng hạng.",
      perks: [
        "Đặt chỗ ưu tiên tại các sân golf tư nhân danh giá",
        "Caddy chuyên nghiệp & xe Limousine đưa đón",
        "Tổ chức giải đấu giao lưu doanh nhân Việt – Nhật",
      ],
    },
    {
      id: "experience",
      number: "03.",
      title: "Du Lịch Trải Nghiệm (Experiential Tour)",
      tag: "Văn hóa & Ẩm thực",
      image: "/images/travel-experience.jpg",
      icon: Compass,
      desc: "Hành trình cá nhân hóa khám phá tinh hoa văn hóa Nhật Bản: Tham quan làng cổ Kyoto, trải nghiệm trà đạo, tắm Onsen truyền thống, ngắm hoa anh đào và thưởng ngoạn mùa lá đỏ theo lộ trình riêng biệt.",
      perks: [
        "Lịch trình thiết kế riêng cho gia đình & đoàn VIP",
        "Trải nghiệm nông nghiệp hữu cơ & văn hóa ẩm thực",
        "Hướng dẫn viên am hiểu sâu sắc văn hóa bản địa",
      ],
    },
  ];

  return (
    <section id="travel" className="py-24 bg-[#75182d] text-white border-b border-black/15 relative overflow-hidden">
      
      {/* Decorative Kanji in Background */}
      <div className="absolute top-10 right-10 pointer-events-none opacity-5 select-none font-serif text-[180px] font-black leading-none text-white">
        旅
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-10 border-b border-white/15">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#f1e2c8] mb-3 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8]"></span>
              <span>Dịch vụ lữ hành quốc tế · Shinsei Travel</span>
            </div>
            <h2 className="font-title text-4xl sm:text-5xl font-light text-white tracking-tight leading-[1.05]">
              Hành trình tinh hoa Nhật Bản: Y tế · Golf · Trải nghiệm
            </h2>
            <p className="text-base text-stone-200 mt-4 leading-relaxed font-normal">
              Đồng hành cùng khách hàng doanh nghiệp và gia đình trong những chuyến đi chất lượng, chu đáo đến từng chi tiết nhỏ nhất.
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f1e2c8] font-bold block mb-1">
              Liên hệ chuyên trách Travel
            </span>
            <span className="text-base font-bold text-white font-mono">
              VN: 0981.365.391 · JP: 080.2392.2268
            </span>
          </div>
        </div>

        {/* 3 Travel Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {travelServices.map((tour) => {
            const Icon = tour.icon;
            return (
              <div
                key={tour.id}
                className="bg-white/5 border border-white/15 hover:border-[#f1e2c8] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Photo with Overlay */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-black/30">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-[#75182d] text-[#f1e2c8] px-3 py-1 text-xs font-mono font-bold tracking-wider border border-white/20">
                      {tour.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-2 text-[#f1e2c8]">
                      <Icon className="w-5 h-5 text-[#f1e2c8]" />
                      <span className="font-mono text-xs font-bold tracking-wider">
                        {tour.number} Dịch vụ
                      </span>
                    </div>

                    <h3 className="font-title text-xl sm:text-2xl font-normal text-white mb-3">
                      {tour.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-normal mb-6">
                      {tour.desc}
                    </p>

                    {/* Perks */}
                    <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-stone-200">
                      {tour.perks.map((p, pIdx) => (
                        <div key={pIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#f1e2c8] shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="p-6 sm:p-8 pt-0">
                  <a
                    href="#contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-[#f1e2c8] hover:text-[#75182d] text-white text-xs font-bold uppercase tracking-wider transition-colors border border-white/20"
                  >
                    <span>Tư vấn lịch trình tour</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
