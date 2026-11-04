"use client";

import { motion } from "framer-motion";
import { Plane, HeartPulse, Trophy, Compass, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ShinseiTravel() {
  const { isJa } = useLanguage();

  const travelServices = isJa
    ? [
        {
          id: "medical",
          number: "01.",
          title: "高度医療ツーリズム",
          tag: "東京・大阪 先端医療",
          image: "/images/japan-medical-travel.jpg",
          icon: HeartPulse,
          desc: "東京大学病院をはじめとする日本の先端医療機関・研究所と直結。高度総合健診（人間ドック）、iPS幹細胞再生医療、がん精密スクリーニングを、医療通訳サポートとともにご案内します。",
          perks: [
            "がん早期発見・生活習慣病の先端ドック",
            "東大病院など国内最高峰の専門医陣",
            "医療滞在ビザ取得支援と専用車送迎",
          ],
        },
        {
          id: "golf",
          number: "02.",
          title: "PGA基準 ゴルフツアー",
          tag: "富士山・東京・大阪 名門ゴルフ場",
          image: "/images/Golf/taiheiyo-club-gotemba.jpg",
          icon: Trophy,
          desc: "太平洋クラブ御殿場、相模原ゴルフクラブ、ワールドカントリーGCなど、富士山麓・東京・大阪の格式ある名門コースを手配。天然温泉旅館と本格会席料理を組み合わせた極上のゴルフ旅をお届けします。",
          perks: [
            "会員制名門クラブの優先ティータイム手配",
            "専任キャディ帯同＆専用ハイヤー移動",
            "日越エグゼクティブ親善コンペの企画運営",
          ],
        },
        {
          id: "experience",
          number: "03.",
          title: "日本伝統文化・美食ツアー",
          tag: "京都 · 天然温泉 · 会席料理",
          image: "/images/japan-experience-travel.jpg",
          icon: Compass,
          desc: "日本の美意識と食の極みを五感で堪能するオーダーメイド旅行。千年の都・京都の古寺名刹巡り、本格茶道体験、名湯老舗旅館の露天風呂、四季折々の桜や紅葉の絶景を巡ります。",
          perks: [
            "VIP・企業視察・ご家族向けの完全個別手配",
            "厳選オーガニック農業体験と本場の郷土会席",
            "日本文化・歴史に精通した公認ガイド同行",
          ],
        },
      ]
    : [
        {
          id: "medical",
          number: "01.",
          title: "Du Lịch Y Tế Chuyên Sâu",
          tag: "TẦM SOÁT & Y TẾ KỸ THUẬT CAO",
          image: "/images/japan-medical-travel.jpg",
          icon: HeartPulse,
          desc: "Kết nối trực tiếp hệ thống bệnh viện và viện nghiên cứu y khoa hàng đầu tại Tokyo & Osaka. Cung cấp gói tầm soát sức khỏe tổng quát kỹ thuật cao Ningen Dock, liệu pháp tế bào gốc và điều trị chuyên sâu cùng đội ngũ phiên dịch y tế chứng chỉ quốc tế.",
          perks: [
            "Khám tầm soát sớm ung thư & bệnh lối sống công nghệ Nhật",
            "Đội ngũ giáo sư, bác sĩ đầu ngành tại bệnh viện Tokyo",
            "Thủ tục visa y tế và dịch vụ xe đưa đón VIP tận sân bay",
          ],
        },
        {
          id: "golf",
          number: "02.",
          title: "Du Lịch Golf Tiêu Chuẩn PGA",
          tag: "SÂN GOLF PHÚ SĨ, TOKYO & OSAKA",
          image: "/images/Golf/taiheiyo-club-gotemba.jpg",
          icon: Trophy,
          desc: "Trải nghiệm những sân golf đạt chuẩn PGA quốc tế tại Phú Sĩ (Taiheiyo), Tokyo (Sagamihara) và Osaka (World Country). Kết hợp kỳ nghỉ dưỡng suối nước nóng Onsen truyền thống và thưởng thức ẩm thực Kaiseki thượng hạng sau trận đánh.",
          perks: [
            "Đặt chỗ ưu tiên tại các sân golf tư nhân danh giá",
            "Caddy chuyên nghiệp & xe Limousine đưa đón riêng biệt",
            "Tổ chức giải đấu giao lưu kết nối doanh nhân Việt – Nhật",
          ],
        },
        {
          id: "experience",
          number: "03.",
          title: "Du Lịch Trải Nghiệm Văn Hóa & Ẩm Thực",
          tag: "KYOTO, ONSEN & ẨM THỰC KAISEKI",
          image: "/images/japan-experience-travel.jpg",
          icon: Compass,
          desc: "Hành trình cá nhân hóa khám phá tinh hoa văn hóa và ẩm thực Nhật Bản: Dạo bước qua các ngôi chùa cổ ngàn năm tại Kyoto, trải nghiệm trà đạo, tắm khoáng nóng Ryokan truyền thống và thưởng ngoạn mùa hoa anh đào hoặc mùa lá đỏ Momiji.",
          perks: [
            "Lịch trình thiết kế riêng cho gia đình & đoàn công tác VIP",
            "Trải nghiệm nông nghiệp hữu cơ sạch & ẩm thực truyền thống",
            "Hướng dẫn viên chuyên nghiệp am hiểu sâu sắc văn hóa bản địa",
          ],
        },
      ];

  return (
    <section id="travel" className="py-24 bg-[#75182d] text-white border-b border-black/15 relative overflow-hidden">
      
      {/* Decorative Kanji only in Japanese mode */}
      {isJa && (
        <div className="absolute top-10 right-10 pointer-events-none opacity-5 select-none font-serif text-[180px] font-black leading-none text-white">
          旅
        </div>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16 pb-10 border-b border-white/15">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] font-bold text-[#f1e2c8] mb-3 bg-white/10 px-3.5 py-1.5 rounded-full border border-white/15">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f1e2c8]"></span>
              <span>{isJa ? "国際旅行事業 · Shinsei Travel" : "Dịch vụ lữ hành quốc tế · Shinsei Travel"}</span>
            </div>
            <h2 className="font-title text-4xl sm:text-5xl font-light text-white tracking-tight leading-[1.05]">
              {isJa ? "日本の真髄を巡る旅：先端医療 · 名門ゴルフ · 伝統文化" : "Hành trình tinh hoa Nhật Bản: Y tế · Golf · Trải nghiệm"}
            </h2>
            <p className="text-base text-stone-200 mt-4 leading-relaxed font-normal">
              {isJa
                ? "法人のお客様やご家族のために、細部まで行き届いた高品質なオリジナル旅行をご提案します。"
                : "Đồng hành cùng khách hàng doanh nghiệp và gia đình trong những chuyến đi chất lượng, chu đáo đến từng chi tiết nhỏ nhất."}
            </p>
          </div>

          <div className="text-right shrink-0">
            <span className="font-mono text-xs uppercase tracking-widest text-[#f1e2c8] font-bold block mb-1">
              {isJa ? "旅行部門 直通窓口" : "Liên hệ chuyên trách Travel"}
            </span>
            <span className="text-base font-bold text-white font-mono">
              {isJa ? "ベトナム: 0981.365.391 · 日本: 080.2392.2268" : "VN: 0981.365.391 · JP: 080.2392.2268"}
            </span>
          </div>
        </div>

        {/* 3 Travel Pillars Grid with Real Japan Photos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {travelServices.map((tour) => {
            const Icon = tour.icon;
            return (
              <div
                key={tour.id}
                className="bg-white/5 border border-white/15 hover:border-[#f1e2c8] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Real Japan Photo */}
                  <div className="aspect-[16/10] overflow-hidden relative bg-black/30">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>
                    
                    <div className="absolute top-4 left-4 bg-[#75182d] text-[#f1e2c8] px-3 py-1 text-xs font-mono font-bold tracking-wider border border-white/20">
                      {tour.tag}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-2 mb-2 text-[#f1e2c8]">
                      <Icon className="w-5 h-5 text-[#f1e2c8]" />
                      <span className="font-mono text-xs font-bold tracking-wider">
                        {tour.number} {isJa ? "サービス" : "Dịch vụ"}
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
                    <span>{isJa ? "ツアー日程・お見積もりのご相談" : "Tư vấn lịch trình tour"}</span>
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
